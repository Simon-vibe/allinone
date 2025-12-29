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

        // 关键修复：除了 .html 链接外，其他资源（css, js, images）都需要加 ../
        // 如果链接以 .html 结尾，或者直接是目录（以 / 结尾），则认为是内部跳转，保持相对路径不变（因为 /en/ 和 /zh/ 目录结构是对称的）
        if (url.endsWith('.html') || url.endsWith('/')) {
            return match;
        }

        // 其他情况（css, js, assets...）加 ../
        return `${attr}="../${url}"`;
    });
}

async function build() {
    console.log('Starting build...');

    // 1. 清理 Dist
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(DIST_DIR);

    // 2. 复制静态资源到 dist 根目录 (dist/css, dist/js)
    // 移除 sitemap.xml，因为我们要动态生成它
    const assetsToCopy = ['css', 'js', 'assets', 'CNAME', 'robots.txt'];
    assetsToCopy.forEach(asset => {
        const srcPath = path.join(SRC_DIR, asset);
        if (fs.existsSync(srcPath)) {
            console.log(`Copying ${asset}...`);
            const stat = fs.statSync(srcPath);
            if (stat.isDirectory()) {
                copyDir(srcPath, path.join(DIST_DIR, asset));
            } else {
                fs.copyFileSync(srcPath, path.join(DIST_DIR, asset));
            }
        }
    });

    // 3. 生成根目录跳转页 (dist/index.html)
    // 作用：访问域名根目录时，自动分流到 /en/ 或 /zh/
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


    // 4. 处理多语言页面 并 收集 Sitemap 数据
    const htmlFiles = findHtmlFiles(SRC_DIR);
    const languages = ['en', 'zh'];
    let sitemapUrls = [];
    const today = new Date().toISOString().split('T')[0];

    for (const file of htmlFiles) {
        const template = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(SRC_DIR, file);

        console.log(`Processing ${relativePath}...`);

        // 计算 URL 路径后缀
        let pathSuffix = relativePath.replace(/\\/g, '/');
        // 如果是 index.html，去掉文件名，变成目录形式 (e.g. tools/pdf/index.html -> tools/pdf/)
        // 如果是跟目录 index.html -> ""
        if (pathSuffix.endsWith('index.html')) {
            pathSuffix = pathSuffix.substring(0, pathSuffix.length - 'index.html'.length);
        }

        const enUrl = `https://allinone.page/en/${pathSuffix}`;
        const zhUrl = `https://allinone.page/zh/${pathSuffix}`;

        // 计算 Priority
        // 根目录 1.0，工具页 0.8
        const priority = pathSuffix === '' ? '1.0' : '0.8';

        // Add both EN and ZH entries
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

            // 4.1 替换 HTML lang 属性
            content = content.replace(/<html lang="[^"]*">/, `<html lang="${lang === 'zh' ? 'zh-CN' : 'en'}">`);

            // 4.2 静态替换 data-i18n 内容 (彻底的 SSG)
            content = content.replace(/(<[^>]+)data-i18n="([^"]+)"([^>]*>)([^<]*)(<\/[^>]+>)/g, (match, start, key, end, oldText, closeTag) => {
                const text = t[key];
                if (text) return `${start}${end}${text}${closeTag}`;
                return match;
            });
            content = content.replace(/(<input[^>]+)data-i18n="([^"]+)"([^>]*)/g, (match, start, key, end) => {
                const text = t[key];
                if (text) {
                    if (start.includes('placeholder=')) return start.replace(/placeholder="[^"]*"/, `placeholder="${text}"`) + end;
                    if (end.includes('placeholder=')) return start + end.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
                }
                return match;
            });

            // 4.3 修正路径
            content = adjustRelativePaths(content);

            // 4.4 修正 Canonical 和 Hreflang
            const currentCanonical = lang === 'en' ? enUrl : zhUrl;
            content = content.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${currentCanonical}">`);

            const hreflangBlock = `
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="zh" href="${zhUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enUrl}" />`;

            content = content.replace(/<link rel="alternate" hreflang="en"[\s\S]*?x-default"[\s\S]*?\/>/, hreflangBlock.trim());

            // 4.5 写入文件
            const outSubDir = path.join(lang, path.dirname(relativePath));
            const outPath = path.join(DIST_DIR, outSubDir, path.basename(relativePath));

            const outDir = path.dirname(outPath);
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

            fs.writeFileSync(outPath, content);
        }
    }

    // 5. 生成 Sitemap.xml
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.join('')}
</urlset>`;

    fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent);
    console.log('Sitemap generated.');

    console.log('Build complete.');
}

build();
