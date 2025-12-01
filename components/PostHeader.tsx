"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/context";

interface PostHeaderProps {
    title: string;
    date: string;
    tags?: string[];
}

export default function PostHeader({ title, date, tags }: PostHeaderProps) {
    const { t } = useLanguage();

    return (
        <>
            <Link
                href="/writeups"
                className="mb-8 inline-flex items-center text-sm text-surface1 hover:text-foreground"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t("writeups.back")}
            </Link>

            <div className="mb-8 border-b border-surface0 pb-8">
                <h1 className="mb-4 text-4xl font-bold text-foreground">{title}</h1>
                <div className="flex items-center gap-4 text-sm text-surface1">
                    <time dateTime={date}>{date}</time>
                    {tags && (
                        <div className="flex gap-2">
                            {tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-blue/10 px-2 py-0.5 text-xs font-medium text-blue">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
