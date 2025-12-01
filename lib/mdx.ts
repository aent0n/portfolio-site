import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/ctf");

export interface Post {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        tags?: string[];
        [key: string]: any;
    };
    content: string;
}

export function getPostSlugs() {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }
    return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, "").replace(/\.md$/, "");
    const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);

    // Fallback to .md if .mdx doesn't exist
    const fileContents = fs.existsSync(fullPath)
        ? fs.readFileSync(fullPath, "utf8")
        : fs.readFileSync(path.join(contentDirectory, `${realSlug}.md`), "utf8");

    const { data, content } = matter(fileContents);

    // Ensure date is a string
    if (data.date && data.date instanceof Date) {
        data.date = data.date.toISOString().split('T')[0];
    }

    return {
        slug: realSlug,
        frontmatter: data as Post["frontmatter"],
        content,
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
    return posts;
}
