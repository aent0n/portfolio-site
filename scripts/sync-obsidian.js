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
        tags: [...new Set([...(data.tags || []), ...tags])] // Merge and unique
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
