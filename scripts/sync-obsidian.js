const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Configuration
const TARGET_DIR = path.join(__dirname, '../content/ctf');
const PUBLIC_IMG_DIR = path.join(__dirname, '../public/images/writeups');

// Get source directory from arguments
const sourceDir = process.argv[2];

if (!sourceDir) {
    console.error('❌ Please provide the source directory path.');
    console.error('Usage: node scripts/sync-obsidian.js <path-to-obsidian-folder>');
    process.exit(1);
}

// Ensure target directories exist
if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_IMG_DIR)) fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });

// Helper: Slugify string
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start
        .replace(/-+$/, '');      // Trim - from end
}

// Tag Homogenization Map
const TAG_MAP = {
    // Web
    'web': 'Web',
    'sqli': 'Web',
    'sql-injection': 'Web',
    'lfi': 'Web',
    'rfi': 'Web',
    'xss': 'Web',
    'csrf': 'Web',
    'ssti': 'Web',
    'ssrf': 'Web',
    'directory-traversal': 'Web',
    'websocket': 'Web',
    'cookie-session': 'Web',
    'arbitrary-file-write': 'Web',
    'puppeteer': 'Web',
    'protocol-injection': 'Web',
    'socket-poisoning': 'Web',
    'nodejs': 'Web',
    'php': 'Web',
    'html': 'Web',

    // Forensics
    'forensics': 'Forensics',
    'log-analysis': 'Forensics',
    'memory-analysis': 'Forensics',
    'volatility': 'Forensics',
    'pcap': 'Forensics',
    'wireshark': 'Forensics',
    'dfir': 'Forensics',
    'event-logs': 'Forensics',

    // Reverse
    'reverse': 'Reverse',
    'maldoc': 'Reverse',
    'vba': 'Reverse',
    'oletools': 'Reverse',
    'ghidra': 'Reverse',
    'ida': 'Reverse',
    'assembly': 'Reverse',
    'binary': 'Reverse',
    'decompile': 'Reverse',
    'unpacking': 'Reverse',

    // Pwn
    'pwn': 'Pwn',
    'exploit': 'Pwn',
    'buffer-overflow': 'Pwn',
    'race-condition': 'Pwn',
    'toctou': 'Pwn',
    'rce': 'Pwn',
    'integer-truncation': 'Pwn',
    'heap': 'Pwn',
    'stack-smashing': 'Pwn',

    // Blockchain
    'blockchain': 'Blockchain',
    'sui-move': 'Blockchain',
    'move': 'Blockchain',
    'smart-contract': 'Blockchain',
    'solidity': 'Blockchain',
    'ethereum': 'Blockchain',

    // Crypto
    'crypto': 'Crypto',
    'cipher': 'Crypto',
    'aes': 'Crypto',
    'rsa': 'Crypto',
    'xor': 'Crypto',
    'hash': 'Crypto',
    'cryptography': 'Crypto',

    // OSINT
    'osint': 'OSINT',
    'geolocate': 'OSINT',
    'sherlock': 'OSINT',
    'recon': 'OSINT',
};

const EXCLUDED_TAGS = new Set(['ctf', 'writeup']);

function homogenizeTags(rawTags, content) {
    const finalTags = new Set();
    const contentLower = content.toLowerCase();

    // 1. Process raw tags
    if (Array.isArray(rawTags)) {
        rawTags.forEach(t => {
            const cleanTag = t.trim().toLowerCase();
            if (EXCLUDED_TAGS.has(cleanTag)) return;

            if (TAG_MAP[cleanTag]) {
                finalTags.add(TAG_MAP[cleanTag]);
            } else {
                const standardCategories = ['Web', 'Forensics', 'Reverse', 'Pwn', 'Blockchain', 'Crypto', 'OSINT'];
                const matchedCategory = standardCategories.find(cat => cat.toLowerCase() === cleanTag);
                if (matchedCategory) {
                    finalTags.add(matchedCategory);
                }
            }
        });
    }

    // 2. Intelligent suggestions based on content keywords
    const rules = [
        { keywords: ['volatility', 'wireshark', 'pcap', 'wireshark', 'event logs', 'memory analysis', 'log analysis'], category: 'Forensics' },
        { keywords: ['ghidra', 'ida pro', 'decompiler', 'assembly', 'maldoc', 'vba', 'oletools', 'reverse engineering'], category: 'Reverse' },
        { keywords: ['buffer overflow', 'stack smashing', 'ret2libc', 'heap overflow', 'shellcode', 'rop chain', 'toctou', 'race condition'], category: 'Pwn' },
        { keywords: ['sqli', 'sql injection', 'xss', 'csrf', 'lfi', 'rfi', 'directory traversal', 'local file inclusion', 'websocket', 'ssti', 'ssrf', 'cookie session'], category: 'Web' },
        { keywords: ['blockchain', 'smart contract', 'solidity', 'sui move', 'ethereum', 'web3'], category: 'Blockchain' },
        { keywords: ['cipher', 'rsa decryption', 'aes-128', 'aes-256', 'xor cipher', 'cryptography', 'private key', 'public key'], category: 'Crypto' },
        { keywords: ['osint', 'geolocation', 'open source intelligence', 'sherlock tool'], category: 'OSINT' }
    ];

    rules.forEach(rule => {
        const hasKeyword = rule.keywords.some(keyword => contentLower.includes(keyword));
        if (hasKeyword) {
            finalTags.add(rule.category);
        }
    });

    if (finalTags.size === 0) {
        finalTags.add('Web');
    }

    return Array.from(finalTags);
}

// Helper: Find file recursively in directory
function findFile(dir, filename) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            const found = findFile(fullPath, filename);
            if (found) return found;
        } else if (file === filename) {
            return fullPath;
        }
    }
    return null;
}

// Helper: Process a single MD file
function processFile(filePath) {
    const filename = path.basename(filePath, '.md');

    // 1. Extract Metadata from Filename
    // Example: "Write-Up - VaultAccess (Medium)" -> Title: "VaultAccess", Difficulty: "Medium"
    let title = filename;
    let difficulty = null;

    // Remove "Write-Up - " prefix
    title = title.replace(/^Write-Up\s*-\s*/i, '');

    // Extract difficulty in parentheses
    const diffMatch = title.match(/\((.*?)\)$/);
    if (diffMatch) {
        difficulty = diffMatch[1];
        title = title.replace(/\s*\(.*?\)$/, ''); // Remove difficulty from title
    }

    const slug = slugify(title);
    const fileStat = fs.statSync(filePath);
    const creationDate = fileStat.birthtime.toISOString().split('T')[0];

    // 2. Extract Tags from Folder Structure
    // Path: .../CTFBlog/EventName/Category/Note.md
    const relativePath = path.relative(sourceDir, filePath);
    const folders = relativePath.split(path.sep).slice(0, -1); // Exclude filename

    // Filter out common root folders if needed, or just use all as tags
    let tags = folders.filter(f => f !== 'CTFBlog');
    if (difficulty) tags.push(difficulty);

    // 3. Read Content & Frontmatter
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(fileContent);
    let content = parsed.content;
    let data = parsed.data;

    // Remove secondary TOML frontmatter (+++ ... +++) if present
    content = content.replace(/^\+\+\+[\s\S]*?\+\+\+\s*/, '');

    // Helper: Strip Markdown
    function stripMarkdown(text) {
        if (!text) return "";
        return text
            .replace(/^#+\s+/, '') // Remove headers
            .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold
            .replace(/(\*|_)(.*?)\1/g, '$2') // Remove italic
            .replace(/`([^`]+)`/g, '$1') // Remove inline code
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
            .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Remove images
            .replace(/>\s*/g, '') // Remove blockquotes
            .trim();
    }

    // 4. Generate/Merge Frontmatter
    let description = data.description;
    if (!description) {
        const lines = content.split('\n');
        for (const line of lines) {
            const stripped = stripMarkdown(line);
            if (stripped.length > 5) { // Threshold to avoid empty/short lines
                description = stripped;
                break;
            }
        }
    }

    const newFrontmatter = {
        title: data.title || title,
        date: data.date || creationDate,
        description: description || "No description.",
        tags: homogenizeTags([...(data.tags || []), ...tags], content)
    };

    // 5. Process Content Syntax

    // A. Handle Obsidian Callouts (e.g., > [!INFO] Title)
    content = content.replace(/^>\s*\[!(.*?)\]\s*(.*)$/gm, (match, type, title) => {
        const icon = type.toUpperCase() === 'DANGER' || type.toUpperCase() === 'WARNING' ? '⚠️' : 'ℹ️';
        return `> **${icon} ${type.toUpperCase()}${title ? ': ' + title : ''}**\n>`;
    });

    // B. Handle WikiLinks [[Link]] -> [Link](Link)
    content = content.replace(/\[\[(.*?)\]\]/g, (match, p1) => {
        // Ignore images (handled below)
        if (match.startsWith('![[')) return match;
        const [link, text] = p1.split('|');
        return `[${text || link}](${link})`;
    });

    // C. Process Images ![[image.png|100]] -> <img ... />
    content = content.replace(/!\[\[(.*?)\]\]/g, (match, p1) => {
        const parts = p1.split('|');
        const rawImageName = parts[0];
        const width = parts[1] ? parts[1].replace(/[^0-9]/g, '') : null; // Extract numeric width

        const imagePath = findFile(sourceDir, rawImageName); // Search in ENTIRE vault

        if (imagePath) {
            // Create specific folder for this writeup's images
            const writeupImgDir = path.join(PUBLIC_IMG_DIR, slug);
            if (!fs.existsSync(writeupImgDir)) fs.mkdirSync(writeupImgDir, { recursive: true });

            const targetImgPath = path.join(writeupImgDir, rawImageName);

            // Copy image
            fs.copyFileSync(imagePath, targetImgPath);
            console.log(`   🖼️  Copied image: ${rawImageName}`);

            const publicPath = `/images/writeups/${slug}/${rawImageName}`;

            // Return HTML img tag if width is specified, else Markdown image
            if (width) {
                return `<img src="${publicPath}" alt="${rawImageName}" width="${width}" />`;
            } else {
                return `![${rawImageName}](${publicPath})`;
            }
        } else {
            console.warn(`   ⚠️  Image not found: ${rawImageName}`);
            return match; // Keep original if not found
        }
    });

    // 6. Write to Target
    const finalContent = matter.stringify(content, newFrontmatter);
    const targetPath = path.join(TARGET_DIR, `${slug}.mdx`);
    fs.writeFileSync(targetPath, finalContent);
    console.log(`✅ Synced: ${slug}.mdx`);

    return `${slug}.mdx`; // Return filename for tracking
}

// Main: Walk directory recursively
function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (file !== '.git' && file !== '.obsidian') walkDir(fullPath, fileList);
        } else if (file.endsWith('.md')) {
            const processedFile = processFile(fullPath);
            if (processedFile) fileList.push(processedFile);
        }
    });
    return fileList;
}

console.log(`🚀 Syncing Obsidian Vault from: ${sourceDir}`);
const processedFiles = walkDir(sourceDir);

// 7. Cleanup: Delete files in target that were not processed
const existingFiles = fs.readdirSync(TARGET_DIR);
existingFiles.forEach(file => {
    if (file.endsWith('.mdx') && !processedFiles.includes(file)) {
        fs.unlinkSync(path.join(TARGET_DIR, file));
        console.log(`🗑️  Deleted orphan: ${file}`);
    }
});

console.log('✨ Sync Complete!');
