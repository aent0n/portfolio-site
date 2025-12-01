"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/lib/context";

interface Post {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        description: string;
        tags?: string[];
    };
}

export default function LatestUpdates({ posts }: { posts: Post[] }) {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-surface0/30">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Latest Updates</h2>
                    <Link href="/writeups" className="hidden sm:inline-flex items-center text-sm font-medium text-blue hover:text-blue/80">
                        View all <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/writeups/${post.slug}`}
                                className="group block h-full rounded-2xl border border-surface0 bg-base p-6 transition-all hover:border-blue/50 hover:shadow-lg hover:shadow-blue/5"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue capitalize">
                                        Writeup
                                    </span>
                                    <div className="flex items-center text-xs text-subtext0">
                                        <Clock className="mr-1 h-3 w-3" />
                                        {post.frontmatter.date}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-foreground group-hover:text-blue transition-colors">
                                    {post.frontmatter.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
