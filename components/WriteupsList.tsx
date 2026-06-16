"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = ["all", "web", "forensics", "reverse", "pwn", "blockchain", "crypto", "osint"];

    const filteredPosts = posts.filter((post) => {
        if (activeCategory === "all") return true;
        return post.frontmatter.tags?.some(
            (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
        );
    });

    return (
        <main className="container mx-auto min-h-screen px-4 py-24">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{t("writeups.title")}</h1>
                <p className="text-subtext0">{t("writeups.subtitle")}</p>
            </div>

            {/* Category Filter Buttons */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                            activeCategory === category
                                ? "text-base-theme"
                                : "bg-surface0/50 text-surface1 hover:bg-surface0 hover:text-foreground"
                        }`}
                    >
                        {activeCategory === category && (
                            <motion.span
                                layoutId="activeCategoryWriteup"
                                className="absolute inset-0 rounded-full bg-blue shadow-md shadow-blue/20"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">
                            {t(`writeups.categories.${category}`)}
                        </span>
                    </button>
                ))}
            </div>

            <motion.div layout className="mx-auto max-w-3xl space-y-8">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.map((post) => (
                        <motion.div
                            key={post.slug}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href={`/writeups/${post.slug}`}
                                className="block rounded-2xl border border-surface0 bg-surface0/50 p-8 transition-colors hover:bg-surface0 hover:border-mauve/30"
                            >
                                <div className="mb-2 flex flex-wrap items-center gap-4 text-sm text-subtext0">
                                    <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                                    {post.frontmatter.tags && (
                                        <div className="flex flex-wrap gap-2">
                                            {post.frontmatter.tags.map((tag) => (
                                                <span key={tag} className="rounded-full bg-blue/10 px-2 py-0.5 text-xs font-medium text-blue whitespace-nowrap">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <h2 className="mb-2 text-2xl font-bold text-foreground">{post.frontmatter.title}</h2>
                                <p className="text-subtext0">{post.frontmatter.description}</p>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

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
