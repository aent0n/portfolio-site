"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/context";
import CTFPodiums from "./CTFPodiums";

interface Post {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        tags?: string[];
    };
}

export default function WriteupsList({ posts }: { posts: Post[] }) {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto min-h-screen px-4 py-24">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{t("writeups.title")}</h1>
                <p className="text-subtext0">{t("writeups.subtitle")}</p>
            </div>

            <div className="mx-auto max-w-3xl space-y-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/writeups/${post.slug}`}
                        className="block rounded-2xl border border-surface0 bg-surface0/50 p-8 transition-colors hover:bg-surface0 hover:border-mauve/30"
                    >
                        <div className="mb-2 flex items-center gap-4 text-sm text-subtext0">
                            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                            {post.frontmatter.tags && (
                                <div className="flex gap-2">
                                    {post.frontmatter.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-blue/10 px-2 py-0.5 text-xs font-medium text-blue">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-foreground">{post.frontmatter.title}</h2>
                        <p className="text-subtext0">{post.frontmatter.description}</p>
                    </Link>
                ))}
            </div>

            <div className="mt-24">
                <CTFPodiums />

                <div className="mt-12 flex justify-center">
                    <div
                        style={{
                            width: '325px',
                            height: '82px',
                            borderRadius: '10px', // Slightly adjusted for the crop
                            overflow: 'hidden',
                            position: 'relative',
                            background: 'var(--color-base)'
                        }}
                    >
                        <iframe
                            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2027109"
                            style={{
                                border: 'none',
                                width: '327px',
                                height: '84px',
                                backgroundColor: 'transparent',
                                position: 'absolute',
                                top: '-1px',
                                left: '-1px'
                            }}
                            title="TryHackMe Badge"
                            scrolling="no"
                            // @ts-expect-error: React requires lowercase allowtransparency, but TS doesn't recognize it
                            allowtransparency="true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}
