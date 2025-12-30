const fs = require('fs');
const path = require('path');

const ROOT_DIR = '.';
const IGNORE_DIRS = ['dist', 'node_modules', '.git', '.gemini', 'zh', 'en', 'es', 'pt', 'id', 'hi', 'ar'];

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
                </div>
`;

function main() {
    const files = findHtmlFiles(ROOT_DIR);
    let count = 0;

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf-8');

        // Regex to match the Navigation Block
        // We look for the div with specific classes
        // Note: We include the commented <!-- Language Switcher --> if it exists as an optional group, 
        // but we mainly target the div.

        let regex = /(<!-- Language Switcher -->\s*)?<div class="flex items-center space-x-2 border-l pl-6 border-gray-300">[\s\S]*?<\/div>/;

        if (regex.test(content)) {
            // Check if it's already updated
            if (content.includes('<select')) {
                console.log(`Skipping (Already Updated): ${file}`);
            } else {
                const newContent = content.replace(regex, NEW_NAV_HTML.trim());
                fs.writeFileSync(file, newContent);
                console.log(`Updated Nav: ${file}`);
                count++;
            }
        } else {
            // Fallback for files that might have different formatting (e.g. key-code or others)
            // But they usually share the class. 
            if (content.includes('id="lang-en"')) {
                console.warn(`Warning: Found lang-en but regex failed in ${file}`);
            } else if (content.includes('<select')) {
                console.log(`Skipping (Already Updated): ${file}`);
            } else {
                console.warn(`Warning: Could not find Nav block in ${file}`);
            }
        }
    });

    console.log(`\nSuccessfully updated ${count} files.`);
}

main();
