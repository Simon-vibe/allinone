const fs = require('fs');
const path = require('path');
const { translations } = require('../js/i18n.js');

const distDir = path.join(__dirname, '../dist');
const zhDir = path.join(distDir, 'zh');

// Helper to look for potential English strings
// This is not perfect but tries to find English words in what should be Chinese
function hasEnglishText(text) {
    // Exclude common tech terms or empty strings
    if (!text || text.trim().length === 0) return false;

    // Heuristic: If it has more than 3 consecutive English words, flag it
    // But allow some tech terms. 
    // Ideally, we check against the English translation to see if it Matches exactly
    return false; // Implementing logic below
}

function walk(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath, fileList);
        } else {
            if (file.endsWith('.html')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const zhFiles = walk(zhDir);
const enKeys = translations.en;
const zhKeys = translations.zh;

let issuesFound = 0;
console.log('--- Checking dist/zh for specific hardcoded English issues ---');

// Specific check: Look for English translations that are NOT in the ZH file
// by checking if the content Matches the EN value exactly.
zhFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    const relativePath = path.relative(distDir, file);

    // 1. Check if any known English strings from i18n are present in the ZH file
    // This implies they were NOT replaced (if data-i18n hidden) or the replacement WAS English (wrong key)
    // Actually generate.js replaces the content. So if we see English content where it should be Chinese...

    // Let's look for specific problematic strings we fixed, to verify they are fixed
    const checks = [
        { text: "How to Convert PDF Bank Statements to Excel for Free", id: "pdf.seo.h2" },
        { text: "Related Keywords:", id: "pdf.seo.keywords_label" },
        { text: "Frequently Asked Questions", id: "pdf.seo.faq.title" },
        // Social Image Cropper
        { text: "Social Media Image Cropper - Resize for Insta, Twitter, YT", id: "crop.meta.title" },
        { text: "Crop images perfectly for Instagram", id: "tool.crop.desc" },
        { text: "Square: 1080 x 1080 px (1:1)", id: "crop.faq.insta1" }
    ];

    checks.forEach(check => {
        if (content.includes(check.text)) {
            // It might be okay if the ZH translation IS specific English (rare)
            // But usually this means it wasn't translated
            // Check if ZH translation exists
            const zhVal = zhKeys[check.id];
            if (zhVal && zhVal !== check.text) {
                console.log(`[FAIL] ${relativePath}: Found English text "${check.text}" which should be "${zhVal}"`);
                issuesFound++;
            }
        }
    });

    // 2. Check for missing data-i18n in common generic tags
    // e.g. <h2 ...>English Text</h2>
    // This requires regex. 
    // Let's just create a list of suspicious "English-looking" headers
    const headerRegex = /<h[1-6][^>]*>([a-zA-Z\s\?]+)<\/h[1-6]>/g;
    let match;
    while ((match = headerRegex.exec(content)) !== null) {
        // Filter out if it has Chinese chars
        if (!/[\u4e00-\u9fa5]/.test(match[1]) && match[1].split(' ').length > 2) {
            // Ignore some exceptions if needed
            if (!match[0].includes('data-i18n')) {
                console.log(`[SUSPICIOUS] ${relativePath}: Header "${match[1]}" seems to be English only (no Chinese)`);
                issuesFound++;
            }
        }
    }
});

console.log(`\nAudit complete. Found ${issuesFound} issues.`);
