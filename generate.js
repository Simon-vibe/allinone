const fs = require('fs');
const path = require('path');
const { translations } = require('./js/i18n.js');

const DIST_DIR = './dist';
const SRC_DIR = '.';
const IGNORE_DIRS = ['dist', 'node_modules', '.git', '.vscode', '.gemini', 'zh']; // Ignore the manual 'zh' folder

// Helper to recursively finding HTML files
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

// Helper to copy directory recursively
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

// Helper to adjust relative paths for /zh/ subdirectory
function adjustRelativePaths(content) {
    // Regex to match href, src, or content that starts with . or .. or word characters (relative)
    // We only want to adjust paths that relate to local files
    // Matches: src="./js/foo.js", href="../css/style.css", href="style.css"
    // Ignores: href="https://...", href="/...", href="#...", href="mailto:..."

    return content.replace(/(href|src|action)=["']([^"']+)["']/g, (match, attr, url) => {
        if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('data:')) {
            return match;
        }

        // If it starts with / (root relative), we don't change it (assuming site root is same)
        // ideally we shouldn't use root relative in this project based on analysis, but if so, leave it.
        if (url.startsWith('/')) return match;

        // Add one level up
        return `${attr}="../${url}"`;
    });
}

// Main Build Function
async function build() {
    console.log('Starting build...');

    // 1. Clean and Create Dist
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(DIST_DIR);

    // 2. Copy Static Assets (css, js, assets, CNAME, etc)
    const assetsToCopy = ['css', 'js', 'assets', 'CNAME', 'robots.txt', 'sitemap.xml'];
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

    // 3. Process HTML Files
    const htmlFiles = findHtmlFiles(SRC_DIR);

    const languages = ['en', 'zh'];

    for (const file of htmlFiles) {
        const template = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(SRC_DIR, file); // e.g., index.html or tools/pdf/index.html

        console.log(`Processing ${relativePath}...`);

        for (const lang of languages) {
            const isZh = lang === 'zh';
            const t = translations[lang];

            let content = template;

            // A. Replace HTML Lang
            content = content.replace(/<html lang="[^"]*">/, `<html lang="${isZh ? 'zh-CN' : 'en'}">`);

            // B. Replace Text Content (data-i18n)
            // Match data-i18n="key">Default Text<
            content = content.replace(/data-i18n="([^"]+)">([^<]*)<|data-i18n="([^"]+)"\s*>([^<]*)<|data-i18n='([^']+)'\s*>([^<]*)</g, (match, key1, val1, key2, val2, key3, val3) => {
                const key = key1 || key2 || key3;
                const val = t[key] || val1 || val2 || val3 || ''; // Fallback to existing text if key missing
                // Keep the tag open/close logic? 
                // Using regex for HTML is fragile, let's use a simpler replace for the attribute, then innerText?
                // Actually, the previous regex approach assumes we replace the whole inner content.
                // Better approach: Replace only the text content if the structure is simple.
                // BUT, replacing the whole string `data-i18n="key">...<` is robust enough for simple tags.
                // We must preserve the opening tag attributes if any? No, the regex matches `data-i18n="key">Content<`.
                // It misses the opening tag name. 
                // Let's use a specialized replacer for DOM modification string-based?
                return match;
            });

            // Improved Replacement Strategy:
            // 1. Replace attributes (placeholder, title, etc)
            //    We strictly look for patterns like: placeholder="..." data-i18n="key"
            //    This is hard with regex.

            // Simpler Strategy: 
            // 1. Replace all simple key lookups first? No, context matters.

            // Let's iterate all keys in translation and try to find references? No, too slow.

            // Let's use Cheerio? No external deps requested if possible ("simple script").
            // Let's stick to Regex but be careful.

            // Replace innerHTML: <tag ... data-i18n="key">OLD</tag> -> <tag ...>NEW</tag>
            // We strip data-i18n after replacement to clean up.
            content = content.replace(/(<[^>]+)data-i18n="([^"]+)"([^>]*>)([^<]*)(<\/[^>]+>)/g, (match, start, key, end, oldText, closeTag) => {
                const text = t[key];
                // Check if it's an input with placeholder? 
                // This regex assumes an opening tag, data-i18n, other attrs, closing bracket, content, closing tag.
                // It won't match self-closing tags (inputs).
                if (text) return `${start}${end}${text}${closeTag}`;
                return match;
            });

            // Handle Placeholders: <input data-i18n="key" placeholder="...">
            // We just replace the attribute value.
            content = content.replace(/(<input[^>]+)data-i18n="([^"]+)"([^>]*)/g, (match, start, key, end) => {
                const text = t[key];
                if (text) {
                    // Replace placeholder="..." with placeholder="text"
                    const newStart = start.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
                    const newEnd = end.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
                    // If placeholder wasn't in start/end, we might have missed it, but usually standard format.
                    // Let's just rebuild the tag? Too complex.
                    // Simple replacement:
                    if (start.includes('placeholder=')) return start.replace(/placeholder="[^"]*"/, `placeholder="${text}"`) + ` data-processed="true"` + end;
                    if (end.includes('placeholder=')) return start + end.replace(/placeholder="[^"]*"/, `placeholder="${text}"`);
                }
                return match;
            });

            // C. SEO & Links
            // Correct HrefLang loop
            // English pages should point to / and /zh/
            // Chinese pages should point to / and /zh/
            // The template already has:
            // <link rel="alternate" hreflang="en" href="https://allinone.page/" />
            // <link rel="alternate" hreflang="zh" href="https://allinone.page/zh/" />
            // For tool pages, we need to append the path.

            // Detect if this is a tool page (not root index)
            const isTool = relativePath.includes('/');
            const pathSuffix = isTool ? relativePath.replace('index.html', '') : ''; // e.g. tools/pdf-to-excel/

            // Update Canonical
            const baseUrl = `https://allinone.page/${isZh ? 'zh/' : ''}${pathSuffix}`;
            content = content.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${baseUrl}">`);

            // Update Hreflang
            const enUrl = `https://allinone.page/${pathSuffix}`;
            const zhUrl = `https://allinone.page/zh/${pathSuffix}`;

            content = content.replace(/href="https:\/\/allinone\.page\/"/g, `href="${enUrl}"`); // Update x-default too if needed
            // Actually, we should be precise.

            const hreflangBlock = `
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="zh" href="${zhUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enUrl}" />`;

            // Replace existing hreflang block (heuristic: find the first hreflang line and adjacent ones)
            // Easier: Replace the whole block if we can mark it in HTML.
            // Or just replace individual lines.
            content = content.replace(/<link rel="alternate" hreflang="en" href="[^"]+" \/>/, `<link rel="alternate" hreflang="en" href="${enUrl}" />`);
            content = content.replace(/<link rel="alternate" hreflang="zh" href="[^"]+" \/>/, `<link rel="alternate" hreflang="zh" href="${zhUrl}" />`);
            content = content.replace(/<link rel="alternate" hreflang="x-default" href="[^"]+" \/>/, `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`);

            // D. Path Adjustments for /zh/
            if (isZh) {
                // Adjust relative paths because we are moving into specific /zh/ directory (1 level deeper than EN counterpart)
                // EN: dist/index.html
                // ZH: dist/zh/index.html (one level deeper? No, dist/zh/ is parallel to dist/tools/?)
                // Wait.
                // EN: dist/index.html
                // ZH: dist/zh/index.html (Depth: +1)

                // EN: dist/tools/pdf/index.html (Depth: 2 from root)
                // ZH: dist/zh/tools/pdf/index.html (Depth: 3 from root)

                // So yes, ZH is always 1 level deeper relative to the *asset root* than the EN version.
                // So we prepend "../" to every relative link.
                content = adjustRelativePaths(content);

                // Special case: Language Switcher Links
                // EN Page: Link to ZH version.
                // ZH Page: Link to EN version.
                // We need to fix the specific ID links or hrefs for the switcher if they exist.
                // In my code I hardcoded them in previous steps, but in template they might be static or dynamic.
                // The template usually has:
                // <button onclick="changeLanguage('en')"> or <a href="...">

                // We should replace javascript switchers with direct links for SEO and No-JS support.
                // Find <button ... id="lang-en"> ... </button> -> <a href="${enUrl}" ... > ... </a>
                // This might be tricky with regex. 
                // Let's assume the user accepts the JS switcher for now, but we want direct links if possible.
                // In Phase 1 I added direct links: <a href="./index.html"> and <a href="../zh/index.html">.

                // Let's just trust the recursive path adjustment handles standard links.
                // But for the language switcher specifically, we might want to ensure it points to the correct sibling.
                // on ZH page: Link to EN should be `../../${pathSuffix}` (go up 1 for 'zh', then normal path?)
                // No, EN is at `ROOT/${pathSuffix}`. ZH is at `ROOT/zh/${pathSuffix}`.
                // So from ZH to EN: `../../${pathSuffix}` (if depth is 2 like tools).
                // From ZH index to EN index: `../index.html`.

                // This is calculated by `adjustRelativePaths` automatically IF the link in template was correct relative link.
                // Template (EN) links to `zh/index.html` (for home).
                // If we copy that to ZH: `../zh/index.html` -> points to self? No.

                // Correct logic:
                // EN Template needs to have logic to point to "current page but other lang".
                // Since this is hard to generalize with Regex, we'll suggest manual fixes or rely on the `href` replacements we did above if they were absolute.

                // Replace absolute links to ensure they stay absolute?
                // `adjustRelativePaths` ignores absolute.
            }

            // Write File
            const outSubDir = isZh ? path.join('zh', path.dirname(relativePath)) : path.dirname(relativePath);
            const outPath = path.join(DIST_DIR, outSubDir, path.basename(relativePath));

            const outDir = path.dirname(outPath);
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

            fs.writeFileSync(outPath, content);
        }
    }

    console.log('Build complete.');
}

build();
