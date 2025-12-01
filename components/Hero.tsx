"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { useLanguage } from "@/lib/context";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex items-center justify-center rounded-full bg-blue/10 px-4 py-1.5 text-sm font-medium text-blue ring-1 ring-inset ring-blue/20"
            >
                <Terminal className="mr-2 h-4 w-4" />
                {t("hero.role")}
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground"
            >
                {t("hero.title_prefix")} <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-mauve">
                    {t("hero.title_suffix")}
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10 max-w-2xl text-lg text-subtext0 sm:text-xl"
            >
                {t("hero.description")}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
            >
                <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-base transition-all hover:bg-blue/80 hover:shadow-lg hover:shadow-blue/20"
                >
                    {t("hero.view_projects")}
                </Link>
                <Link
                    href="/writeups"
                    className="inline-flex items-center justify-center rounded-lg border border-surface0 bg-surface0/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface0"
                >
                    {t("hero.read_writeups")} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </motion.div>
        </section>
    );
}
