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

function findToolAssets(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findToolAssets(filePath, fileList);
        } else {
            // Include everything that is NOT .html, because .html is handled by findHtmlFiles
            if (path.extname(file) !== '.html') {
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
// 修正资源路径：depth=0 表示根目录，depth=1 表示一级子目录 (如 /en/)
function adjustRelativePaths(content, depth = 1) {
    if (depth === 0) return content; // 根目录不需要修正相对路径 (assuming template is written for root)

    return content.replace(/(href|src|action)=["']([^"']+)["']/g, (match, attr, url) => {
        if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('data:')) {
            return match;
        }
        if (url.startsWith('/')) return match;

        const cleanUrl = url.split('#')[0].split('?')[0];

        // 如果是 HTML 页面跳转，保持原样
        if (cleanUrl.endsWith('.html') || cleanUrl.endsWith('/')) {
            return match;
        }

        const normalizedUrl = url.replace(/^\.\//, '');
        const isGlobalDir = normalizedUrl.startsWith('css/') || normalizedUrl.startsWith('js/') || normalizedUrl.startsWith('assets/');
        const isUpward = url.startsWith('../');

        if (isGlobalDir) {
            return `${attr}="../${normalizedUrl}"`;
        }

        if (isUpward) {
            return `${attr}="../${url}"`;
        }

        return match;
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

    // Generate Root Index (English Content + Smart Redirect)
    const languages = ['en', 'zh', 'es', 'pt', 'id', 'hi', 'ar', 'ja'];
    const rootTemplate = fs.readFileSync(path.join(SRC_DIR, 'index.html'), 'utf-8');
    const rootLang = 'en';
    const tRoot = translations[rootLang];

    let rootContent = rootTemplate;
    // Basic replacements for Root
    rootContent = rootContent.replace(/<html lang="[^"]*">/, `<html lang="en">`);

    // Translation Replacements for Root
    rootContent = rootContent.replace(/(<meta[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, key) => {
        const text = tRoot[key];
        if (text && match.includes('content=')) return match.replace(/content="[^"]*"/, `content="${text}"`);
        return match;
    });
    rootContent = rootContent.replace(/(<img[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, key) => {
        const text = tRoot[key];
        if (text && match.includes('alt=')) return match.replace(/alt="[^"]*"/, `alt="${text}"`);
        return match;
    });
    rootContent = rootContent.replace(/(<(input|textarea)[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, tagName, key) => {
        const text = tRoot[key];
        if (text && match.includes('placeholder=')) return match.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
        return match;
    });

    // Content Text Replacement Loop (Simplified version of the main loop)
    let cursor = 0;
    while (true) {
        const matchIndex = rootContent.indexOf('data-i18n="', cursor);
        if (matchIndex === -1) break;
        const tagStart = rootContent.lastIndexOf('<', matchIndex);
        if (tagStart === -1 || tagStart < cursor) { cursor = matchIndex + 1; continue; }
        const tagNameMatch = rootContent.substring(tagStart).match(/^<([a-zA-Z0-9]+)/);
        if (!tagNameMatch) { cursor = matchIndex + 1; continue; }
        const tagName = tagNameMatch[1].toLowerCase();
        const quoteStart = matchIndex + 11;
        const quoteEnd = rootContent.indexOf('"', quoteStart);
        if (quoteEnd === -1) { cursor = matchIndex + 1; continue; }
        const key = rootContent.substring(quoteStart, quoteEnd);
        const tagEnd = rootContent.indexOf('>', quoteEnd);
        if (tagEnd === -1) { cursor = quoteEnd + 1; continue; }

        if (['img', 'meta', 'input'].includes(tagName)) { cursor = tagEnd + 1; continue; }

        let depth = 1;
        let scanPos = tagEnd + 1;
        let closingTagIndex = -1;
        while (depth > 0 && scanPos < rootContent.length) {
            const nextOpen = rootContent.indexOf('<' + tagName, scanPos);
            const nextClose = rootContent.indexOf('</' + tagName + '>', scanPos);
            if (nextClose === -1) break;
            if (nextOpen !== -1 && nextOpen < nextClose) { depth++; scanPos = nextOpen + 1; }
            else { depth--; if (depth === 0) closingTagIndex = nextClose; scanPos = nextClose + 1; }
        }

        if (closingTagIndex !== -1 && tRoot[key]) {
            rootContent = rootContent.substring(0, tagEnd + 1) + tRoot[key] + rootContent.substring(closingTagIndex);
            cursor = tagEnd + 1 + tRoot[key].length;
        } else {
            cursor = tagEnd + 1;
        }
    }

    // Adjust Paths (Depth 0)
    rootContent = adjustRelativePaths(rootContent, 0);

    // Inject Smart Redirect Script
    const smartRedirect = `
    <script>
      try {
          var supported = ['en', 'zh', 'es', 'pt', 'id', 'hi', 'ar'];
          var storedLang = localStorage.getItem('app_lang');
          var userLang = navigator.language || navigator.userLanguage;
          var targetLang = null;
          if (storedLang) {
              if (supported.includes(storedLang)) targetLang = storedLang;
          } else {
              var shortLang = userLang.substring(0, 2);
              if (supported.includes(shortLang)) targetLang = shortLang;
          }
          if (targetLang) window.location.href = '/' + targetLang + '/';
      } catch (e) {}
    </script>`;
    rootContent = rootContent.replace('</head>', `${smartRedirect}\n</head>`);

    // Inject Hreflangs
    let rootHreflang = languages.map(l =>
        `<link rel="alternate" hreflang="${l}" href="https://allinone.page/${l}/" />`
    ).join('\n    ');
    rootHreflang += `\n    <link rel="alternate" hreflang="x-default" href="https://allinone.page/" />`;
    rootContent = rootContent.replace(/<link rel="alternate" hreflang="en"[\s\S]*?x-default"[\s\S]*?\/>/, rootHreflang);

    // Inject JSON-LD
    rootContent = injectJsonLd(rootContent, 'en', 'https://allinone.page/');

    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), rootContent);
    console.log('Root index.html generated.');

    const htmlFiles = findHtmlFiles(SRC_DIR);
    // languages moved to top
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

        languages.forEach(lang => {
            const url = `https://allinone.page/${lang}/${pathSuffix}`;
            // Add self

            // Build Hreflang string for this URL
            let hreflangLinks = languages.map(l =>
                `    <xhtml:link rel="alternate" hreflang="${l}" href="https://allinone.page/${l}/${pathSuffix}"/>`
            ).join('\n');

            // Add x-default (en)
            hreflangLinks += `\n    <xhtml:link rel="alternate" hreflang="x-default" href="https://allinone.page/en/${pathSuffix}"/>`;

            sitemapUrls.push(`
  <url>
    <loc>${url}</loc>
${hreflangLinks}
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
            content = content.replace(/(<meta[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, key) => {
                const text = t[key];
                if (text && match.includes('content=')) {
                    return match.replace(/content="[^"]*"/, `content="${text}"`);
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

            // 2.3 替换具有 placeholder 的标签 (Inputs & Textareas)
            content = content.replace(/(<(input|textarea)[^>]+data-i18n="([^"]+)"[^>]*)/g, (match, tag, tagName, key) => {
                const text = t[key];
                if (text && match.includes('placeholder=')) {
                    return match.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
                }
                return match;
            });

            // 2.4 Content Translation - Robust Loop (Replaces Regex)
            let cursor = 0;
            const maxIterations = 2000;
            let itr = 0;

            while (itr++ < maxIterations) {
                // Find next data-i18n
                const matchIndex = content.indexOf('data-i18n="', cursor);
                if (matchIndex === -1) break;

                // Find start of this tag (looking backwards for '<')
                const tagStart = content.lastIndexOf('<', matchIndex);
                if (tagStart === -1 || tagStart < cursor) {
                    cursor = matchIndex + 1;
                    continue;
                }

                // Verify we are not inside another tag or string by checking for '>' between tagStart and matchIndex (simplified)
                const intermediateContent = content.substring(tagStart, matchIndex);
                if (intermediateContent.includes('>')) {
                    cursor = matchIndex + 1;
                    continue;
                }

                // Get Tag Name
                const tagNameMatch = content.substring(tagStart).match(/^<([a-zA-Z0-9]+)/);
                if (!tagNameMatch) { cursor = matchIndex + 1; continue; }
                const tagName = tagNameMatch[1].toLowerCase();

                // Get Translation Key
                const quoteStart = matchIndex + 11; // len('data-i18n="')
                const quoteEnd = content.indexOf('"', quoteStart);
                if (quoteEnd === -1) { cursor = matchIndex + 1; continue; }
                const key = content.substring(quoteStart, quoteEnd);

                // Find Tag End '>'
                const tagEnd = content.indexOf('>', quoteEnd);
                if (tagEnd === -1) { cursor = quoteEnd + 1; continue; }

                // Check Void Tags (and textarea to avoid overwriting value with placeholder translation)
                const isVoid = ['img', 'meta', 'input', 'link', 'hr', 'br', 'textarea'].includes(tagName);
                if (isVoid) {
                    cursor = tagEnd + 1;
                    continue;
                }

                // Find Matching Closing Tag
                let depth = 1;
                let scanPos = tagEnd + 1;
                let closingTagIndex = -1;

                while (depth > 0 && scanPos < content.length) {
                    const nextOpen = content.indexOf('<' + tagName, scanPos);
                    const nextClose = content.indexOf('</' + tagName + '>', scanPos);

                    if (nextClose === -1) break; // Error: No closing tag

                    if (nextOpen !== -1 && nextOpen < nextClose) {
                        depth++;
                        scanPos = nextOpen + 1;
                    } else {
                        depth--;
                        if (depth === 0) {
                            closingTagIndex = nextClose;
                        }
                        scanPos = nextClose + 1;
                    }
                }

                if (closingTagIndex !== -1 && t[key]) {
                    const before = content.substring(0, tagEnd + 1);
                    const after = content.substring(closingTagIndex);
                    // Replace INNER content
                    content = before + t[key] + after;
                    // Move cursor past the NEW content end to avoid re-processing nested items or the same item
                    cursor = tagEnd + 1 + t[key].length;
                } else {
                    cursor = tagEnd + 1;
                }
            }

            // 3. 路径修正
            content = adjustRelativePaths(content, 1);

            // 4. Canonical & Hreflang
            const currentCanonical = `https://allinone.page/${lang}/${pathSuffix}`;
            content = content.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${currentCanonical}">`);

            const hreflangBlock = languages.map(l =>
                `<link rel="alternate" hreflang="${l}" href="https://allinone.page/${l}/${pathSuffix}" />`
            ).join('\n    ') + `\n    <link rel="alternate" hreflang="x-default" href="https://allinone.page/en/${pathSuffix}" />`;

            content = content.replace(/<link rel="alternate" hreflang="en"[\s\S]*?x-default"[\s\S]*?\/>/, hreflangBlock.trim());

            // 5. 注入 JSON-LD
            content = injectJsonLd(content, lang, currentCanonical);

            // 6. Set Active Language in Dropdown
            content = content.replace(new RegExp(`<option value="${lang}">`, 'g'), `<option value="${lang}" selected>`);

            // 7. RTL Support for Arabic
            if (lang === 'ar') {
                content = content.replace(/<html lang="[^"]*">/, `<html lang="ar" dir="rtl">`);
            }

            // 7. 写入文件
            const outSubDir = path.join(lang, path.dirname(relativePath));
            const outPath = path.join(DIST_DIR, outSubDir, path.basename(relativePath));
            const outDir = path.dirname(outPath);
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
            fs.writeFileSync(outPath, content);
        }
    }

    // New Step: Copy non-HTML assets from tools/
    console.log('Copying tool assets...');
    const toolAssets = findToolAssets(path.join(SRC_DIR, 'tools'));
    for (const asset of toolAssets) {
        const relativePath = path.relative(SRC_DIR, asset);
        // Copy to both en/ and zh/ structure
        for (const lang of languages) {
            const outSubDir = path.join(lang, path.dirname(relativePath));
            const outPath = path.join(DIST_DIR, outSubDir, path.basename(relativePath));
            const outDir = path.dirname(outPath);
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
            fs.copyFileSync(asset, outPath);
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
