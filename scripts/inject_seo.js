const fs = require('fs');
const path = require('path');

const seoContentMap = {
    'tools/prompt-builder/index.html': `
        <!-- SEO Content -->
        <div class="mt-16 border-t border-gray-100 pt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">How to Write Better AI Prompts</h2>
            <div class="prose max-w-none text-gray-600">
                <p class="mb-4">Writing effective prompts is key to getting the best results from LLMs like Claude 3.5 Sonnet and ChatGPT. This tool helps you structure your prompts using industry-best practices.</p>
                
                <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">Structured Prompting (xml)</h3>
                <p class="mb-4">Anthropic recommends using XML tags to clearly separate different parts of your prompt. This helps the model distinguish between instructions, context, and input data.</p>
                
                <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">Role & Context</h3>
                <p class="mb-4">Always assign a persona (e.g., "You are an expert Python developer") and provide sufficient background context. This grounds the model's response.</p>
            </div>

            <div class="mt-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div class="space-y-4">
                    <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">What is the difference between Claude XML and ChatGPT Markdown?</summary>
                        <p class="mt-2 text-gray-600">Claude produces better results with explicit XML tags (like &lt;context&gt;), while ChatGPT typically prefers standard Markdown headers (# Context).</p>
                    </details>
                    <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">Is this prompt builder free?</summary>
                        <p class="mt-2 text-gray-600">Yes, this tool is 100% free and runs entirely in your browser. No data is saved to our servers.</p>
                    </details>
                </div>
            </div>
        </div>`,

    'tools/ai-cost-estimator/index.html': `
        <!-- SEO Content -->
        <div class="mt-16 border-t border-gray-100 pt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Understanding LLM API Pricing</h2>
            <div class="prose max-w-none text-gray-600">
                <p class="mb-4">API costs can accumulate quickly. This calculator helps you estimate expenses before you build, comparing major providers like OpenAI, Anthropic, and DeepSeek.</p>
                
                <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">Input vs Output Tokens</h3>
                <p class="mb-4">Most providers charge differently for Input (what you send) and Output (what the AI writes). Output tokens are typically 3x-10x more expensive.</p>
                
                <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">Currency Conversion</h3>
                <p class="mb-4">We automatically convert prices to CNY (RMB) for developers in China, using a real-time approximate rate of 7.25.</p>
            </div>

            <div class="mt-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div class="space-y-4">
                    <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">Are these prices up to date?</summary>
                        <p class="mt-2 text-gray-600">We update our pricing data weekly. The last update was December 2024.</p>
                    </details>
                    <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">Which model is the cheapest?</summary>
                        <p class="mt-2 text-gray-600">Currently, DeepSeek-V3 and GPT-4o-mini offer the most competitive rates for high-performance tasks.</p>
                    </details>
                </div>
            </div>
        </div>`,

    'tools/image-prompt-gen/index.html': `
        <!-- SEO Content -->
        <div class="mt-16 border-t border-gray-100 pt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Mastering Midjourney Prompts</h2>
            <div class="prose max-w-none text-gray-600">
                <p class="mb-4">Creating stunning AI art requires knowing the right parameters. This tool visualizes them for you.</p>
                
                <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">Key Parameters</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>--ar (Aspect Ratio):</strong> Controls the shape (16:9 for screens, 1:1 for social).</li>
                    <li><strong>--s (Stylize):</strong> Higher values (up to 1000) make the image more artistic but less faithful to the prompt.</li>
                    <li><strong>--c (Chaos):</strong> Adds randomness and variation to the results.</li>
                </ul>
            </div>
             <div class="mt-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
                <div class="space-y-4">
                    <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">Does this work with Flux AI?</summary>
                        <p class="mt-2 text-gray-600">Yes, the style descriptors (Cyberpunk, Watercolor) work great with Flux, though the parameter syntax (--ar) is specific to Midjourney.</p>
                    </details>
                </div>
            </div>
        </div>`,

    'tools/model-arena/index.html': `
         <!-- SEO Content -->
        <div class="mt-16 border-t border-gray-100 pt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Choosing the Right LLM for Your Task</h2>
            <div class="prose max-w-none text-gray-600">
                <p class="mb-4">With so many models available, it's hard to choose. Here is a quick guide:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Coding:</strong> Claude 3.5 Sonnet and DeepSeek-V3 are currently top-tier.</li>
                    <li><strong>Reasoning:</strong> OpenAI o1 and DeepSeek-R1 excel at math and logic.</li>
                    <li><strong>Context:</strong> Gemini 1.5 Pro has a massive 2 Million token window for analyzing books or codebases.</li>
                </ul>
            </div>
        </div>`,

    'tools/local-llm/index.html': `
        <!-- SEO Content -->
        <div class="mt-16 border-t border-gray-100 pt-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Running LLMs Locally with WebGPU</h2>
            <div class="prose max-w-none text-gray-600">
                <p class="mb-4">This tool uses WebAssembly and WebGPU to run AI models directly on your graphics card relative to your browser. No data leaves your device.</p>
                
                <h3 class="text-lg font-bold text-gray-800 mt-6 mb-3">System Requirements</h3>
                <p class="mb-4">You need a modern browser (Chrome/Edge 113+) and a GPU with at least 4GB VRAM for decent performance.</p>
            </div>
            <div class="mt-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
                <div class="space-y-4">
                    <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">Is this really private?</summary>
                        <p class="mt-2 text-gray-600">Yes. The model weights are downloaded to your browser cache, and all computation happens on your local hardware.</p>
                    </details>
                     <details class="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer">
                        <summary class="font-bold text-gray-800">Why is the first load slow?</summary>
                        <p class="mt-2 text-gray-600">The browser needs to download the model weights (approx 1GB-4GB). Subsequent visits will be instant.</p>
                    </details>
                </div>
            </div>
        </div>
    `
};

function main() {
    for (const [filePath, content] of Object.entries(seoContentMap)) {
        const fullPath = path.join(__dirname, '..', filePath);

        if (fs.existsSync(fullPath)) {
            let fileContent = fs.readFileSync(fullPath, 'utf-8');

            // Avoid Double Injection
            if (fileContent.includes('<!-- SEO Content -->')) {
                console.log(`Skipping SEO injection for ${filePath} (Already present)`);
                continue;
            }

            // Insert before </main>
            if (fileContent.includes('</main>')) {
                const newContent = fileContent.replace('</main>', `\n${content}\n</main>`);
                fs.writeFileSync(fullPath, newContent);
                console.log(`Injected SEO content into ${filePath}`);
            } else {
                console.warn(`Could not find </main> in ${filePath}`);
            }
        } else {
            console.warn(`File not found: ${filePath}`);
        }
    }
}

main();
