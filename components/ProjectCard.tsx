"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    category: string;
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-surface0 bg-surface0/50 p-6 transition-colors hover:bg-surface0"
        >
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-blue transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-3">
                        {project.github ? (
                            <Link href={project.github} target="_blank" className="text-subtext0 hover:text-foreground">
                                <Github className="h-5 w-5" />
                            </Link>
                        ) : !project.demo && (
                            <div className="group/tooltip relative">
                                <Lock className="h-5 w-5 text-subtext0 cursor-not-allowed" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-surface0 px-2 py-1 text-xs text-subtext0 opacity-0 transition-opacity group-hover/tooltip:opacity-100">
                                    Source Private/Legacy
                                </span>
                            </div>
                        )}
                        {project.demo && (
                            <Link href={project.demo} target="_blank" className="text-subtext0 hover:text-foreground">
                                <ExternalLink className="h-5 w-5" />
                            </Link>
                        )}
                    </div>
                </div>
                <p className="mb-6 text-subtext0">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-blue/10 px-3 py-1 text-xs font-medium text-blue"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
