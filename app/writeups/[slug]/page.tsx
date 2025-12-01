import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostHeader from "@/components/PostHeader";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, "").replace(/\.md$/, ""),
    }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
        <main className="container mx-auto min-h-screen px-4 py-24">
            <PostHeader
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                tags={post.frontmatter.tags}
            />

            <article className="prose dark:prose-invert mx-auto max-w-3xl">
                <MDXRemote
                    source={post.content}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [
                                rehypeSlug,
                                [rehypeHighlight, { detect: true }],
                            ],
                        },
                    }}
                />
            </article>
        </main>
    );
}
