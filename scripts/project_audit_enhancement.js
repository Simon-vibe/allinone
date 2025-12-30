const fs = require('fs');
const path = require('path');

const ROOT_DIR = '.';
const IGNORE_DIRS = ['dist', 'node_modules', '.git', '.gemini'];

// 1. Navigation Replacement HTML
const NEW_NAV_HTML = `
                <!-- Language Switcher Dropdown -->
                <div class="relative inline-block text-left border-l pl-6 border-gray-300">
                    <select onchange="changeLanguage(this.value)" class="bg-transparent text-sm font-medium text-gray-600 hover:text-blue-600 focus:outline-none cursor-pointer">
                        <option value="en">🇺🇸 EN</option>
                        <option value="zh">🇨🇳 中文</option>
                        <option value="es">🇪🇸 ES</option>
                        <option value="pt">🇧🇷 PT</option>
                        <option value="id">🇮🇩 ID</option>
                        <option value="hi">🇮🇳 HI</option>
                        <option value="ar">🇸🇦 AR</option>
                    </select>
                </div>`;

// 2. SEO Content Map (Generated for Long-tail Keywords)
const seoContentMap = {
    'tools/pdf-to-excel': {
        title: "How to Convert PDF Bank Statements to Excel for Free",
        keyword: "convert pdf to excel bank statement free online",
        content: `<p class="mb-4">Extracting table data from PDF bank statements or invoices can be tedious. Our <strong>Free PDF to Excel Converter</strong> uses advanced parsing to detect tables and export them directly to .xlsx format, entirely in your browser.</p>
        <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">Why convert locally?</h3>
        <p class="mb-4">Financial documents contain sensitive data. By converting locally (Client-side), you ensure no data is ever sent to a remote server, guaranteeing 100% privacy.</p>`,
        faq: [
            { q: "Does this work with scanned PDFs?", a: "Currently, this tool works best with native text PDFs. For scanned images, try our OCR tool." },
            { q: "Is there a file size limit?", a: "No, since it processes locally, there are no arbitrary limits on file size." }
        ]
    },
    'tools/image-compressor': {
        title: "Compress Images Online Without Losing Quality",
        keyword: "compress image online free unlimited",
        content: `<p class="mb-4">Optimize your website performance by reducing image file sizes. Our tool supports JPG, PNG, and WebP compression with adjustable quality settings.</p>`,
        faq: [
            { q: "Can I compress multiple images?", a: "Yes, you can drop multiple files or select them in batch." }
        ]
    },
    'tools/json-formatter': {
        title: "Best Free Online JSON Validator and Beautifier",
        keyword: "json formatter validator beautify online",
        content: `<p class="mb-4">Debugging API responses or configuration files is easier with a clean view. Paste your minified JSON to instantly beautify it with proper indentation.</p>`,
        faq: []
    },
    'tools/background-remover': {
        title: "Remove Background from Image Free Online (AI)",
        keyword: "remove background ai free unlimited",
        content: `<p class="mb-4">Create transparent PNGs for e-commerce or profile pictures instantly. Our AI detects the subject and removes the background with high precision.</p>`,
        faq: [
            { q: "Is it really free?", a: "Yes, standard resolution downloads are free and unlimited." }
        ]
    },
    'tools/markdown-editor': {
        title: "Online Markdown Editor with Real-time Preview",
        keyword: "markdown editor online preview html export",
        content: `<p class="mb-4">Write documentation, READMEs, or blog posts with our split-screen Markdown editor. Export directly to HTML or .md files.</p>`,
        faq: []
    },
    'tools/password-generator': {
        title: "Secure Random Password Generator",
        keyword: "secure random password generator strong",
        content: `<p class="mb-4">Generate crypto-strong passwords directly in your browser. Customized length and character sets ensure compliance with any security policy.</p>`,
        faq: []
    },
    'tools/qr-generator': {
        title: "Free Custom QR Code Generator",
        keyword: "qr code generator logo free online",
        content: `<p class="mb-4">Create QR codes for URLs, WiFi, or text. Customize colors and add your logo for branding.</p>`,
        faq: []
    },
    'tools/uuid-generator': {
        title: "Bulk UUID/GUID Generator",
        keyword: "uuid generator v4 bulk online",
        content: `<p class="mb-4">Generate Version 4 UUIDs (Universally Unique Identifiers) instantly. Useful for database keys and testing.</p>`,
        faq: []
    },
    'tools/base64-converter': {
        title: "Base64 Encode and Decode Online",
        keyword: "base64 encode decode image text",
        content: `<p class="mb-4">Convert images or text to Base64 strings for embedding in HTML/CSS, or decode Base64 back to original files.</p>`,
        faq: []
    },
    'tools/diff-checker': {
        title: "Online Text Diff Checker",
        keyword: "compare text differences online file diff",
        content: `<p class="mb-4">Compare two text files or code snippetsside-by-side to highlight differences, additions, and deletions.</p>`,
        faq: []
    },
    // Add default fallback for others
};

function generateSeoHtml(key, data) {
    if (!data) return '';

    // Construct FAQ HTML
    let faqHtml = '';
    if (data.faq && data.faq.length > 0) {
        faqHtml = `<div class="mt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div class="space-y-4" itemscope itemtype="https://schema.org/FAQPage">
                ${data.faq.map(f => `
                <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <summary class="font-bold text-gray-800" itemprop="name">${f.q}</summary>
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                        <p class="mt-2 text-gray-600" itemprop="text">${f.a}</p>
                    </div>
                </details>`).join('')}
            </div>
        </div>`;
    }

    return `
        <!-- SEO Content (Injected) -->
        <div class="mt-16 border-t border-gray-100 pt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">${data.title}</h2>
            <p class="text-sm text-gray-400 mb-4 uppercase tracking-wider">Related Keywords: ${data.keyword}</p>
            <div class="prose max-w-none text-gray-600">
                ${data.content}
            </div>
            ${faqHtml}
        </div>`;
}

function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
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

function main() {
    const files = findHtmlFiles(ROOT_DIR);
    let navCount = 0;
    let seoCount = 0;

    files.forEach(file => {
        // Skip root index/about/privacy/terms for SEO (handled differently or don't need tool SEO)
        // But do update Nav
        const isTool = file.includes('tools/');

        let content = fs.readFileSync(file, 'utf-8');
        let modified = false;

        // --- 1. Fix Navigation (Robust) ---
        // Look for the "EN" button ID or the button structure if Dropdown is not present
        if (!content.includes('<select onchange="changeLanguage')) {
            // Regex to find the button container (border-l pl-6 ...)
            const buttonNavRegex = /<div class="[^"]*border-l pl-6[^"]*">[\s\S]*?<\/div>/;

            if (buttonNavRegex.test(content)) {
                content = content.replace(buttonNavRegex, NEW_NAV_HTML.trim());
                modified = true;
                navCount++;
                console.log(`[NAV FIX] Updated ${file}`);
            } else {
                console.warn(`[NAV SKIP] Could not match Nav container in ${file}`);
            }
        }

        // --- 2. Inject SEO Content (Tools Only) ---
        if (isTool) {
            // Determine tool key from path (e.g., tools/pdf-to-excel)
            const dirName = path.basename(path.dirname(file));
            const toolKey = `tools/${dirName}`;

            // Check if we have data for this tool
            const seoData = seoContentMap[toolKey];

            if (seoData && !content.includes('<!-- SEO Content (Injected) -->') && !content.includes('<!-- SEO Content -->')) {
                // Try to inject before </main>
                if (content.includes('</main>')) {
                    const html = generateSeoHtml(toolKey, seoData);
                    content = content.replace('</main>', `\n${html}\n</main>`);
                    modified = true;
                    seoCount++;
                    console.log(`[SEO INJECT] Updated ${file}`);
                }
            } else if (!seoData && !content.includes('SEO Content')) {
                // Generative Fallback for tools not in explicit map?
                // For now, log it.
                // console.log(`[SEO MISSING] No specific data for ${toolKey}`);
            }
        }

        if (modified) {
            fs.writeFileSync(file, content);
        }
    });

    console.log(`\nStart Summary:`);
    console.log(`- Nav Updates: ${navCount}`);
    console.log(`- SEO Injections: ${seoCount}`);
}

main();
