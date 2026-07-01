export interface Project {
    id: string;
    tags: string[];
    category: "web" | "sec" | "tools";
    github?: string;
    demo?: string;
}

export const projectsData: Project[] = [
    {
        id: "axidraw",
        tags: ["Tauri", "Rust", "React", "TypeScript"],
        github: "https://github.com/aent0n/axidraw-slicer",
        category: "tools",
    },
    {
        id: "triage",
        tags: ["PowerShell", "HTML/JS", "DFIR", "Forensics"],
        github: "https://github.com/aent0n/triAAge-collector",
        category: "sec",
    },
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
