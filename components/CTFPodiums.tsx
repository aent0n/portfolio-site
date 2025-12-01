"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/context";

const podiums = [
    {
        event: "CTF ENEDIS Inter écoles",
        rank: "2nd ex æquo / 33",
        category: "Team CTF",
        date: "Novembre 2025",
        icon: Trophy, // Podium
        color: "text-blue",
    },
    {
        event: "CyberNight 2025",
        rank: "58th / 263",
        category: "Team CTF",
        date: "Novembre 2025",
        icon: Medal, // Ranked
        color: "text-blue",
    },
    {
        event: "Wiz x Ramen Runaway",
        rank: "Completed",
        category: "Solo Mini CTF",
        date: "Novembre 2025",
        icon: CheckCircle, // Completion
        color: "text-blue",
    },
    {
        event: "Eldoria",
        rank: "Top 9.74% (792/8130)",
        category: "Team CTF",
        date: "Mars 2025",
        icon: Medal, // Ranked
        color: "text-blue",
    },
    {
        event: "CyberNight 2024",
        rank: "11th / 115",
        category: "Category 'For Fun'",
        date: "Novembre 2024",
        icon: Medal, // Ranked
        color: "text-blue",
    },
];

export default function CTFPodiums() {
    const { t } = useLanguage();

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{t("writeups.achievements_title")}</h2>
                    <p className="text-subtext0">{t("writeups.achievements_subtitle")}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {podiums.map((podium, index) => (
                        <motion.div
                            key={podium.event}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-surface0 bg-surface0/30 p-8 text-center transition-colors hover:bg-surface0/50 hover:border-mauve/20"
                        >
                            <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-surface0 ${podium.color}`}>
                                <podium.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-1 text-2xl font-bold text-foreground">{podium.event}</h3>
                            <p className="mb-4 text-sm text-subtext0">{podium.date}</p>
                            <div className="mb-2 text-xl font-semibold text-blue">{podium.rank}</div>
                            <p className="text-sm text-subtext0 uppercase tracking-wider">{podium.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
