"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Medal, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/context";
import { translations } from "@/lib/translations";

const podiumsConfig = [
    {
        id: "tracelabs_lehack_2026",
        icon: Trophy, // Podium
        color: "text-blue",
    },
    {
        id: "lehack_2026",
        icon: Medal, // Ranked
        color: "text-blue",
    },
    {
        id: "mindbreak_2026",
        icon: Trophy, // 1st individual!
        color: "text-blue",
    },
    {
        id: "davinci_2026",
        icon: Medal, // Ranked
        color: "text-blue",
    },
    {
        id: "enedis_2025",
        icon: Trophy, // Podium
        color: "text-blue",
    },
    {
        id: "cybernight_2025",
        icon: Medal, // Ranked
        color: "text-blue",
    },
    {
        id: "ramen_2025",
        icon: CheckCircle, // Completion
        color: "text-blue",
    },
    {
        id: "htb_2025",
        icon: Medal, // Ranked
        color: "text-blue",
    },
    {
        id: "cybernight_2024",
        icon: Medal, // Ranked
        color: "text-blue",
    },
] as const;

interface CTFPodiumsProps {
    limit?: number;
}

export default function CTFPodiums({ limit }: CTFPodiumsProps) {
    const { t, language } = useLanguage();
    const achievements = (translations[language]?.writeups as any)?.achievements || {};

    const displayedPodiums = limit ? podiumsConfig.slice(0, limit) : podiumsConfig;

    return (
        <section id="achievements" className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t("writeups.achievements_title")}</h2>
                    <p className="text-subtext0">{t("writeups.achievements_subtitle")}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {displayedPodiums.map((podium, index) => {
                        const data = achievements[podium.id] || {};
                        if (!data.event) return null;

                        return (
                            <motion.div
                                key={podium.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-surface0 bg-surface0/30 p-8 text-center transition-colors hover:bg-surface0/50 hover:border-mauve/20"
                            >
                                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface0 ${podium.color}`}>
                                    <podium.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-1 text-2xl font-bold text-foreground">{data.event}</h3>
                                <p className="mb-4 text-sm text-subtext0">{data.date}</p>
                                <div className="mb-2 text-xl font-semibold text-blue">{data.rank}</div>
                                <p className="text-sm text-subtext0 uppercase tracking-wider">{data.category}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {limit && (
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/writeups#achievements"
                            className="inline-flex items-center gap-2 rounded-lg border border-surface0 bg-surface0/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface0"
                        >
                            {t("writeups.view_all_achievements")} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
