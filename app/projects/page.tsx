"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/lib/context";

import { projectsData } from "@/lib/data";

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = ["all", "web", "sec", "tools"];

    const filteredProjects = projectsData.filter(
        (project) => activeCategory === "all" || project.category === activeCategory
    );

    return (
        <main className="container mx-auto min-h-screen px-4 py-24">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{t("projects.title")}</h1>
                <p className="text-surface1">{t("projects.subtitle")}</p>
            </div>

            <div className="mb-12 flex justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${activeCategory === category
                            ? "bg-blue text-base"
                            : "bg-surface0/50 text-surface1 hover:bg-surface0 hover:text-foreground"
                            }`}
                    >
                        {t(`projects.categories.${category}`)}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={{
                            ...project,
                            title: t(`projects.items.${project.id}.title`),
                            description: t(`projects.items.${project.id}.desc`),
                            category: project.category
                        }}
                        index={index}
                    />
                ))}
            </div>
        </main>
    );
}
