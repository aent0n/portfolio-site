"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Cpu, Aperture, Layers, BrainCircuit } from "lucide-react";
import { useLanguage } from "@/lib/context";

export default function About() {
    const { t } = useLanguage();

    const skills = [
        {
            name: t("about.skills.cyber.title"),
            description: t("about.skills.cyber.desc"),
            icon: Shield,
        },
        {
            name: t("about.skills.sys.title"),
            description: t("about.skills.sys.desc"),
            icon: Cpu,
        },
        {
            name: t("about.skills.dev.title"),
            description: t("about.skills.dev.desc"),
            icon: Code2,
        },
        {
            name: t("about.skills.soft.title"),
            description: t("about.skills.soft.desc"),
            icon: BrainCircuit,
        },
    ];

    const passions = [
        {
            name: t("about.passions.fpv.title"),
            description: t("about.passions.fpv.desc"),
            icon: Aperture,
        },
        {
            name: t("about.passions.print.title"),
            description: t("about.passions.print.desc"),
            icon: Layers,
        },
    ];

    return (
        <section className="py-24">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">{t("about.title")}</h2>
                <p className="text-subtext0">{t("about.subtitle")}</p>
            </div>

            {/* Competencies */}
            <div className="mb-16">
                <h3 className="mb-8 text-2xl font-semibold text-center text-blue">{t("about.skills_title")}</h3>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-2xl border border-surface0 bg-surface0/50 p-6 transition-colors hover:bg-surface0 hover:border-blue/30"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10 text-blue">
                                <skill.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-foreground">{skill.name}</h3>
                            <p className="text-subtext0">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Passions */}
            <div>
                <h3 className="mb-8 text-2xl font-semibold text-center text-mauve">{t("about.passions_title")}</h3>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
                    {passions.map((passion, index) => (
                        <motion.div
                            key={passion.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-2xl border border-surface0 bg-surface0/50 p-6 transition-colors hover:bg-surface0 hover:border-mauve/30"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mauve/10 text-mauve">
                                <passion.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-foreground">{passion.name}</h3>
                            <p className="text-subtext0">{passion.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
