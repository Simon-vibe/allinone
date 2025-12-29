const fs = require('fs');
const path = require('path');
const { translations } = require('./js/i18n.js');

const DIST_DIR = './dist';
const SRC_DIR = '.';
const IGNORE_DIRS = ['dist', 'node_modules', '.git', '.vscode', '.gemini', 'zh', 'en'];

function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file) && !filePath.startsWith('dist')) {
                findHtmlFiles(filePath, fileList);
            }
        } else {
            if (path.extname(file) === '.html') {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        if (IGNORE_DIRS.includes(entry.name)) continue;
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// 修正资源路径：因为所有页面都下沉了一级（/en/ 或 /zh/），所以资源引用要加 ../
function adjustRelativePaths(content) {
    return content.replace(/(href|src|action)=["']([^"']+)["']/g, (match, attr, url) => {
        if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('data:')) {
            return match;
        }
        if (url.startsWith('/')) return match;
        // Strip query params and fragments for extension check
        const cleanUrl = url.split('#')[0].split('?')[0];

        // 关键修复：除了 .html 链接外，其他资源（css, js, images）都需要加 ../
        // 如果链接以 .html 结尾，或者直接是目录（以 / 结尾），则认为是内部跳转，保持相对路径不变（因为 /en/ 和 /zh/ 目录结构是对称的）
        if (cleanUrl.endsWith('.html') || cleanUrl.endsWith('/')) {
            return match;
        }
        return `${attr}="../${url}"`;
    });
}

// 新增：注入 JSON-LD 结构化数据
function injectJsonLd(content, lang, url) {
    const isToolPage = url.includes('/tools/');
    // 基础 WebSite 数据
    const schemaData = {
        "@context": "https://schema.org",
        "@type": isToolPage ? "WebApplication" : "WebSite",
        "name": lang === 'zh' ? "AllInOne 开发者工具箱" : "AllInOne Developer Tools",
        "url": url,
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    const scriptTag = `<script type="application/ld+json">${JSON.stringify(schemaData)}</script>`;
    return content.replace('</head>', `${scriptTag}\n</head>`);
}

async function build() {
    console.log('Starting SEO Optimized build...');

    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(DIST_DIR);

    const assetsToCopy = ['css', 'js', 'assets', 'CNAME', 'robots.txt'];
    assetsToCopy.forEach(asset => {
        const srcPath = path.join(SRC_DIR, asset);
        if (fs.existsSync(srcPath)) {
            const stat = fs.statSync(srcPath);
            if (stat.isDirectory()) {
                copyDir(srcPath, path.join(DIST_DIR, asset));
            } else {
                fs.copyFileSync(srcPath, path.join(DIST_DIR, asset));
            }
        }
    });

    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=/en/">
<script>
  var lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('zh')) { window.location.href = '/zh/'; }
  else { window.location.href = '/en/'; }
</script>
<title>Redirecting...</title>
</head>
<body></body>
</html>`;
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), redirectHtml);

    const htmlFiles = findHtmlFiles(SRC_DIR);
    const languages = ['en', 'zh'];
    let sitemapUrls = [];
    const today = new Date().toISOString().split('T')[0];

    for (const file of htmlFiles) {
        const template = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(SRC_DIR, file);
        console.log(`Processing ${relativePath}...`);

        let pathSuffix = relativePath.replace(/\\/g, '/');
        if (pathSuffix.endsWith('index.html')) {
            pathSuffix = pathSuffix.substring(0, pathSuffix.length - 'index.html'.length);
        }

        const enUrl = `https://allinone.page/en/${pathSuffix}`;
        const zhUrl = `https://allinone.page/zh/${pathSuffix}`;
        const priority = pathSuffix === '' ? '1.0' : '0.8';

        [enUrl, zhUrl].forEach(loc => {
            sitemapUrls.push(`
  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`);
        });

        for (const lang of languages) {
            const t = translations[lang];
            let content = template;

            // 1. HTML Lang
            content = content.replace(/<html lang="[^"]*">/, `<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">`);

            // 2. 增强版替换逻辑 (支持 Meta, Title, Alt, Placeholder, 和普通文本)

            // 2.1 替换具有 content 属性的标签 (Meta tags)
            // 匹配 <meta ... data-i18n="key" ... content="..."> 或 content="..." ... data-i18n="key"
            content = content.replace(/(<meta[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, key) => {
                const text = t[key];
                if (text) {
                    // 如果已经有 content 属性，替换它；否则不处理
                    if (match.includes('content=')) {
                        return match.replace(/content="[^"]*"/, `content="${text}"`);
                    }
                }
                return match;
            });

            // 2.2 替换具有 alt 属性的标签 (Images)
            content = content.replace(/(<img[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, key) => {
                const text = t[key];
                if (text && match.includes('alt=')) {
                    return match.replace(/alt="[^"]*"/, `alt="${text}"`);
                }
                return match;
            });

            // 2.3 替换具有 placeholder 的标签 (Inputs)
            content = content.replace(/(<input[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, key) => {
                const text = t[key];
                if (text && match.includes('placeholder=')) {
                    return match.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
                }
                return match;
            });

            // 2.4 替换普通标签文本 (Title, H1, P, Button...)
            // 匹配 <tag data-i18n="key">OldText</tag>
            // 注意：正则需要非贪婪匹配，且不能匹配到自闭合标签
            content = content.replace(/(<[^/>]+data-i18n="([^"]+)"[^>]*>)([^<]*)(<\/[^>]+>)/g, (match, start, key, oldText, closeTag) => {
                const text = t[key];
                if (text) return `${start}${text}${closeTag}`;
                return match;
            });

            // 3. 路径修正
            content = adjustRelativePaths(content);

            // 4. Canonical & Hreflang
            const currentCanonical = lang === 'en' ? enUrl : zhUrl;
            content = content.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${currentCanonical}">`);

            const hreflangBlock = `
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="zh" href="${zhUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enUrl}" />`;
            content = content.replace(/<link rel="alternate" hreflang="en"[\s\S]*?x-default"[\s\S]*?\/>/, hreflangBlock.trim());

            // 5. 注入 JSON-LD
            content = injectJsonLd(content, lang, currentCanonical);

            // 6. 写入文件
            const outSubDir = path.join(lang, path.dirname(relativePath));
            const outPath = path.join(DIST_DIR, outSubDir, path.basename(relativePath));
            const outDir = path.dirname(outPath);
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
            fs.writeFileSync(outPath, content);
        }
    }

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.join('')}
</urlset>`;

    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent);
    console.log('Sitemap generated.');
    console.log('Build complete.');
}

build();
