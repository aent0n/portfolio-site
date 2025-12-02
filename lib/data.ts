export interface Project {
    id: string;
    tags: string[];
    category: "web" | "sec" | "tools";
    github?: string;
    demo?: string;
}

export const projectsData: Project[] = [
    {
        id: "steg",
        tags: ["Python", "Steganography", "Forensics"],
        github: "https://github.com/aent0n/StegEngineV2",
        category: "sec",
    },
    {
        id: "queens",
        tags: ["Python", "AI", "OCR", "CSP"],
        category: "web",
    },
    {
        id: "ecg",
        tags: ["C++", "Arduino", "Signal Processing"],
        category: "tools",
    },
];
