"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/context";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-foreground">{t("contact.title")}</h1>
                <p className="mb-12 max-w-2xl text-lg text-surface1">
                    {t("contact.subtitle")}
                </p>

                <div className="flex flex-col items-center gap-8">
                    <Link
                        href="mailto:contact@aadam.mozmail.com"
                        className="inline-flex items-center gap-3 rounded-full bg-blue px-8 py-4 text-lg font-semibold text-base transition-colors hover:bg-blue/80"
                    >
                        <Mail className="h-6 w-6" />
                        contact@aadam.mozmail.com
                    </Link>

                    <p className="text-surface1">
                        {t("contact.location")} | +33 7 62 69 55 44
                    </p>

                    <div className="flex gap-8">
                        <Link href="https://github.com/aent0n" target="_blank" className="text-surface1 hover:text-foreground transition-colors">
                            <Github className="h-8 w-8" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/anton-adam/" target="_blank" className="text-surface1 hover:text-foreground transition-colors">
                            <Linkedin className="h-8 w-8" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
