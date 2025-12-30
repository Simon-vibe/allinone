const fs = require('fs');
const path = require('path');
const { translations } = require('../js/i18n.js');

const keys = new Set([
    ...Object.keys(translations.en),
    ...Object.keys(translations.zh)
]);

const rootDir = path.join(__dirname, '../');

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
                walk(filePath, fileList);
            }
        } else {
            if (file.endsWith('.html')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const htmlFiles = walk(rootDir);
let issuesFound = 0;

console.log('--- HTML Language Audit ---');

htmlFiles.forEach(file => {
    const relativePath = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf-8');

    // Check for hardcoded English in generic tags (heuristic)
    // Looking for tags that do NOT have data-i18n but have text
    // This is hard to regex perfectly, but we can look for "alert(" strings in inline scripts

    // 1. Check JS alerts/confirms/prompts without i18n
    const jsAlertRegex = /alert\(['"`](?!.*window\.i18n).*['"`]\)/g;
    let match;
    while ((match = jsAlertRegex.exec(content)) !== null) {
        console.log(`[JS Alert] ${relativePath}: Line ${getLineNumber(content, match.index)} - Hardcoded alert found`);
        issuesFound++;
    }

    // 2. Check for some known hardcoded patterns
    if (content.includes('Related Keywords:') && !content.includes('data-i18n="pdf.seo.keywords_label"')) {
        console.log(`[SEO] ${relativePath}: Possible hardcoded 'Related Keywords'`);
        issuesFound++;
    }
});

console.log(`\nAudit complete. Found ${issuesFound} potential issues.`);

function getLineNumber(content, index) {
    return content.substring(0, index).split('\n').length;
}
