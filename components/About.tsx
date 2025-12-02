"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Cpu, Aperture, Layers, BrainCircuit, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/lib/context";
import { useState } from "react";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function About() {
    const { t } = useLanguage();

    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const skills = [
        {
            id: "cyber",
            name: t("about.skills.cyber.title"),
            description: t("about.skills.cyber.desc"),
            icon: Shield,
            tags: ["Steganography", "Forensics", "Pentesting", "CTF"],
            category: "sec",
            achievements: [
                { title: t("about.achievements.steg.title"), desc: t("about.achievements.steg.desc") },
                { title: t("about.achievements.forensics.title"), desc: t("about.achievements.forensics.desc") },
                { title: t("about.achievements.pentest.title"), desc: t("about.achievements.pentest.desc") },
                { title: t("about.achievements.elk.title"), desc: t("about.achievements.elk.desc") }
            ]
        },
        {
            id: "sys",
            name: t("about.skills.sys.title"),
            description: t("about.skills.sys.desc"),
            icon: Cpu,
            tags: ["Linux", "Docker", "AWS", "Bash"],
            category: "tools",
            achievements: [
                { title: t("about.achievements.linux.title"), desc: t("about.achievements.linux.desc") },
                { title: t("about.achievements.docker.title"), desc: t("about.achievements.docker.desc") },
                { title: t("about.achievements.cloud.title"), desc: t("about.achievements.cloud.desc") }
            ]
        },
        {
            id: "dev",
            name: t("about.skills.dev.title"),
            description: t("about.skills.dev.desc"),
            icon: Code2,
            tags: ["Python", "React", "Next.js", "TypeScript"],
            category: "web",
            achievements: [
                { title: t("about.achievements.python.title"), desc: t("about.achievements.python.desc") },
                { title: t("about.achievements.web.title"), desc: t("about.achievements.web.desc") },
                { title: t("about.achievements.ai_dev.title"), desc: t("about.achievements.ai_dev.desc") }
            ]
        },
        {
            id: "soft",
            name: t("about.skills.soft.title"),
            description: t("about.skills.soft.desc"),
            icon: BrainCircuit,
            tags: ["Communication", "Teamwork", "Problem Solving"],
            category: "all",
            achievements: [
                { title: t("about.achievements.problem_solving.title"), desc: t("about.achievements.problem_solving.desc") },
                { title: t("about.achievements.adaptability.title"), desc: t("about.achievements.adaptability.desc") }
            ]
        },
    ];

    const passions = [
        {
            name: t("about.passions.fpv.title"),
            description: t("about.passions.fpv.desc"),
            icon: Aperture,
            achievements: [
                { title: t("about.achievements.fpv_build.title"), desc: t("about.achievements.fpv_build.desc") }
            ]
        },
        {
            name: t("about.passions.print.title"),
            description: t("about.passions.print.desc"),
            icon: Layers,
            achievements: [
                { title: t("about.achievements.3d_design.title"), desc: t("about.achievements.3d_design.desc") }
            ]
        },
    ];

    const handleSkillClick = (skillId: string) => {
        setSelectedSkill(skillId);
        setIsModalOpen(true);
    };

    const selectedSkillData = skills.find(s => s.id === selectedSkill);
    const relatedProjects = selectedSkillData
        ? projectsData.filter(p =>
            p.category === selectedSkillData.category ||
            p.tags.some(tag => selectedSkillData.tags.includes(tag))
        )
        : [];

    return (
        <section className="py-24 relative">
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
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => handleSkillClick(skill.id)}
                            className="group cursor-pointer rounded-2xl border border-surface0 bg-surface0/50 p-6 transition-all hover:bg-surface0 hover:border-blue/50 hover:shadow-lg hover:shadow-blue/5 hover:-translate-y-1"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10 text-blue group-hover:bg-blue group-hover:text-base transition-colors">
                                <skill.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-foreground">{skill.name}</h3>
                            <p className="text-subtext0 text-sm">{skill.description}</p>
                            <div className="mt-4 flex items-center text-xs text-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                View Details <ArrowRight className="ml-1 h-3 w-3" />
                            </div>
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

            {/* Skill Detail Modal */}
            {isModalOpen && selectedSkillData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-base/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl border border-surface0 bg-mantle p-8 shadow-2xl"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-subtext0 hover:text-foreground"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="mb-8 flex items-center gap-4">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                                <selectedSkillData.icon className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground">{selectedSkillData.name}</h3>
                                <p className="text-subtext0">{selectedSkillData.description}</p>
                            </div>
                        </div>

                        {/* Concrete Achievements Section */}
                        <div className="mb-8">
                            <h4 className="mb-4 text-lg font-semibold text-foreground">Key Concepts & Achievements</h4>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {selectedSkillData.achievements.map((achievement, idx) => (
                                    <div key={idx} className="rounded-xl border border-surface0 bg-surface0/30 p-4">
                                        <h5 className="font-medium text-blue mb-1">{achievement.title}</h5>
                                        <p className="text-sm text-subtext0">{achievement.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h4 className="mb-6 text-lg font-semibold text-foreground">Related Projects & Work</h4>

                        {relatedProjects.length > 0 ? (
                            <div className="grid gap-6 sm:grid-cols-2">
                                {relatedProjects.map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={{
                                            ...project,
                                            title: t(`projects.items.${project.id}.title`),
                                            description: t(`projects.items.${project.id}.desc`),
                                        }}
                                        index={index}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 rounded-2xl border border-surface0 border-dashed">
                                <p className="text-subtext0">More projects coming soon in this category.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </section>
    );
}
