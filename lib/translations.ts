export type Language = "fr" | "en" | "de";

export type TranslationKey = string;

export const translations = {
    fr: {
        nav: {
            home: "Accueil",
            projects: "Projets",
            writeups: "Write-ups",
            contact: "Contact",
        },
        hero: {
            role: "Portfolio",
            status: "À l'écoute d'opportunités",
            title_prefix: "Anton ADAM",
            title_suffix: "Étudiant en Cybersécurité & IA",
            description: "M1 CS&AI à l'EFREI. Je souhaite orienter mon parcours vers l'investigation numérique (DFIR) et la sécurité offensive.",
            view_projects: "Voir les projets",
            read_writeups: "Lire les write-ups",
        },
        about: {
            title: "À propos",
            subtitle: "Compétences techniques & centres d'intérêt.",
            skills_title: "Compétences",
            passions_title: "Centres d'intérêt",
            skills: {
                cyber: {
                    title: "Cybersécurité",
                    desc: "Outils CTF (Wireshark, Nmap, BurpSuite), OSINT & Forensics.",
                },
                sys: {
                    title: "Systèmes & Cloud",
                    desc: "Admin Linux/Windows, Docker, Azure, VirtualBox, Git.",
                },
                dev: {
                    title: "Développement",
                    desc: "Python, C/C++, Java, PHP, SQL, Web, Bash.",
                },
                soft: {
                    title: "Savoir-être",
                    desc: "Travail d'équipe, Adaptabilité technique, Autonomie, Curiosité.",
                },
            },
            passions: {
                fpv: {
                    title: "Drone FPV",
                    desc: "Conception, montage et vol cinématographique.",
                },
                print: {
                    title: "Impression 3D",
                    desc: "Modélisation et impression FDM.",
                },
            },
            achievements: {
                steg: { title: "Stéganographie Image", desc: "LSB & Métadonnées (tEXt chunks) pour PNGs" },
                forensics: { title: "Forensics", desc: "Analyse mémoire avec Volatility 3 en CTF" },
                pentest: { title: "Pentesting", desc: "Training sur RootMe, HTB, THM & Metasploit" },
                elk: { title: "ELK Stack", desc: "Mise en place & Monitoring (Voir CV)" },
                linux: { title: "Linux Hardening", desc: "Navigation avancée & Hardening (SSH, UFW, Fail2Ban)" },
                docker: { title: "Docker", desc: "Déploiement d'outils à la volée" },
                cloud: { title: "Ressources Cloud", desc: "Gestion de ressources (Contexte académique)" },
                python: { title: "Scripting Python", desc: "Scripts d'automatisation & logique algorithmique" },
                web: { title: "Dev Web", desc: "HTML/CSS/JS & PHP (Architecture de services)" },
                ai_dev: { title: "Dev Augmenté par IA", desc: "Prototypage rapide & génération de logique via LLMs" },
                problem_solving: { title: "Résolution de Problèmes", desc: "Approche analytique des challenges CTF" },
                adaptability: { title: "Adaptabilité", desc: "Apprentissage rapide de nouveaux outils (ex: React via IA)" },
                fpv_build: { title: "Construction Drone", desc: "Assemblage complet, soudure & programmation électronique" },
                "3d_design": { title: "Conception 3D", desc: "Design sur Fusion360 & calibration d'imprimantes" }
            },
        },
        projects: {
            title: "Projets",
            subtitle: "Une sélection de mes travaux en développement et sécurité.",
            categories: {
                all: "Tout",
                web: "Dev Web",
                sec: "Sécurité",
                tools: "Outils",
            },
            items: {
                steg: {
                    title: "Moteur de Stéganographie",
                    desc: "Plateforme pour dissimuler et extraire des informations dans divers médias (Images, Audio, PDF) pour l'analyse forensique.",
                },
                queens: {
                    title: "Solveur IA - Queens",
                    desc: "Solveur intégrant la reconnaissance optique (OCR) et un algorithme de satisfaction de contraintes (CSP).",
                },
                ecg: {
                    title: "Conception ECG",
                    desc: "ECG fonctionnel via Arduino Nano et développement C++ pour le traitement du signal.",
                },
                portfolio: {
                    title: "Site Portfolio",
                    desc: "Portfolio professionnel construit avec Next.js, Tailwind CSS et Framer Motion.",
                },
            },
        },
        contact: {
            title: "Me contacter",
            subtitle: "Toujours ouvert pour discuter de nouveaux projets ou d'opportunités !",
            location: "France (Lyon, Paris) et Suisse (régions romandes)",
        },
        writeups: {
            title: "Write-ups CTF",
            subtitle: "Walkthroughs détaillés des challenges que j'ai résolus.",
            back: "Retour aux write-ups",
            achievements_title: "Palmarès CTF",
            achievements_subtitle: "Quelques-uns de mes résultats récents en compétition.",
        },
    },
    en: {
        nav: {
            home: "Home",
            projects: "Projects",
            writeups: "Write-ups",
            contact: "Contact",
        },
        hero: {
            role: "Portfolio",
            status: "Open to opportunities",
            title_prefix: "Anton ADAM",
            title_suffix: "Cybersecurity Student & SysAdmin",
            description: "Master's student in Cybersecurity & AI at EFREI. Aspiring to join a DFIR or Red Team.",
            view_projects: "View projects",
            read_writeups: "Read write-ups",
        },
        about: {
            title: "About me",
            subtitle: "Technical competencies & passions.",
            skills_title: "Competencies",
            passions_title: "Passions",
            skills: {
                cyber: {
                    title: "Cybersecurity",
                    desc: "CTF Tools (Wireshark, Nmap, BurpSuite), OSINT & Forensics.",
                },
                sys: {
                    title: "Systems & Cloud",
                    desc: "Linux/Windows Admin, Docker, AWS, VirtualBox, Git.",
                },
                dev: {
                    title: "Development",
                    desc: "Python, C/C++, Java, PHP, SQL, HTML5, CSS3, JS.",
                },
                soft: {
                    title: "Soft skills",
                    desc: "Teamwork, Technical Adaptability, Autonomy, Curiosity.",
                },
            },
            passions: {
                fpv: {
                    title: "FPV Drone",
                    desc: "Design, assembly, and cinematic flying.",
                },
                print: {
                    title: "3D Printing",
                    desc: "Modeling and FDM printing.",
                },
            },
            achievements: {
                steg: { title: "Image Steganography", desc: "LSB & Metadata (tEXt chunks) for PNGs" },
                forensics: { title: "Forensics", desc: "Memory analysis with Volatility 3 during CTFs" },
                pentest: { title: "Pentesting", desc: "Training on RootMe, HTB, THM & Metasploit" },
                elk: { title: "ELK Stack", desc: "Setup & Monitoring (See CV)" },
                linux: { title: "Linux Hardening", desc: "Advanced navigation & Hardening (SSH, UFW, Fail2Ban)" },
                docker: { title: "Docker", desc: "On-the-fly tool deployment" },
                cloud: { title: "Cloud Resources", desc: "Resource management (Academic context)" },
                python: { title: "Python Scripting", desc: "Automation scripts & algorithmic logic" },
                web: { title: "Web Dev", desc: "HTML/CSS/JS & PHP (Service architecture)" },
                ai_dev: { title: "AI-Augmented Dev", desc: "Rapid prototyping & logic generation via LLMs" },
                problem_solving: { title: "Problem Solving", desc: "Analytical approach to CTF challenges" },
                adaptability: { title: "Adaptability", desc: "Quick learning of new tools (e.g., React via AI)" },
                fpv_build: { title: "Drone Building", desc: "Full assembly, soldering & electronic programming" },
                "3d_design": { title: "3D Design", desc: "Fusion360 design & printer calibration" }
            },
        },
        projects: {
            title: "Projects",
            subtitle: "A selection of my work in web development and security.",
            categories: {
                all: "All",
                web: "Web Dev",
                sec: "Security",
                tools: "Tools",
            },
            items: {
                steg: {
                    title: "Steganography Engine",
                    desc: "Platform to hide and extract information in various media (Images, Audio, PDF) for forensic analysis.",
                },
                queens: {
                    title: "AI Solver - Queens",
                    desc: "Solver integrating optical character recognition (OCR) and a constraint satisfaction algorithm (CSP).",
                },
                ecg: {
                    title: "ECG Design",
                    desc: "Functional ECG via Arduino Nano and C++ development for signal processing.",
                },
                portfolio: {
                    title: "Portfolio Website",
                    desc: "Professional portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
                },
            },
        },
        contact: {
            title: "Get in touch",
            subtitle: "Always open to discussing new projects, creative ideas, or opportunities.",
            location: "France (Lyon, Paris) and Switzerland (Romandy regions)",
        },
        writeups: {
            title: "CTF Write-ups",
            subtitle: "Detailed walkthroughs of challenges I've solved.",
            back: "Back to write-ups",
            achievements_title: "CTF Achievements",
            achievements_subtitle: "Some of my recent competitive results.",
        },
    },
    de: {
        nav: {
            home: "Startseite",
            projects: "Projekte",
            writeups: "Write-ups",
            contact: "Kontakt",
        },
        hero: {
            role: "Portfolio",
            status: "Offen für Möglichkeiten",
            title_prefix: "Anton ADAM",
            title_suffix: "Student der Cybersicherheit & SysAdmin",
            description: "Masterstudent in Cybersicherheit & KI an der EFREI. Ich strebe an, einem DFIR- oder Red-Team beizutreten.",
            view_projects: "Projekte ansehen",
            read_writeups: "Write-ups lesen",
        },
        about: {
            title: "Über mich",
            subtitle: "Technische Kompetenzen & Leidenschaften.",
            skills_title: "Kompetenzen",
            passions_title: "Leidenschaften",
            skills: {
                cyber: {
                    title: "Cybersicherheit",
                    desc: "CTF-Tools (Wireshark, Nmap, BurpSuite), OSINT & Forensik.",
                },
                sys: {
                    title: "Systeme & Cloud",
                    desc: "Linux/Windows Admin, Docker, AWS, VirtualBox, Git.",
                },
                dev: {
                    title: "Entwicklung",
                    desc: "Python, C/C++, Java, PHP, SQL, HTML5, CSS3, JS.",
                },
                soft: {
                    title: "Soft Skills",
                    desc: "Teamarbeit, Technische Anpassungsfähigkeit, Autonomie, Neugier.",
                },
            },
            passions: {
                fpv: {
                    title: "FPV-Drohne",
                    desc: "Design, Montage und filmisches Fliegen.",
                },
                print: {
                    title: "3D-Druck",
                    desc: "Modellierung und FDM-Druck.",
                },
            },
            achievements: {
                steg: { title: "Bild-Steganographie", desc: "LSB & Metadaten (tEXt chunks) für PNGs" },
                forensics: { title: "Forensik", desc: "Speicheranalyse mit Volatility 3 bei CTFs" },
                pentest: { title: "Pentesting", desc: "Training auf RootMe, HTB, THM & Metasploit" },
                elk: { title: "ELK Stack", desc: "Einrichtung & Monitoring (Siehe CV)" },
                linux: { title: "Linux-Härtung", desc: "Fortgeschrittene Navigation & Härtung (SSH, UFW, Fail2Ban)" },
                docker: { title: "Docker", desc: "Bereitstellung von Tools im laufenden Betrieb" },
                cloud: { title: "Cloud-Ressourcen", desc: "Ressourcenmanagement (Akademischer Kontext)" },
                python: { title: "Python-Scripting", desc: "Automatisierungsskripte & algorithmische Logik" },
                web: { title: "Web-Entwicklung", desc: "HTML/CSS/JS & PHP (Service-Architektur)" },
                ai_dev: { title: "KI-gestützte Entwicklung", desc: "Schnelles Prototyping & Logikgenerierung durch LLMs" },
                problem_solving: { title: "Problemlösung", desc: "Analytischer Ansatz bei CTF-Challenges" },
                adaptability: { title: "Anpassungsfähigkeit", desc: "Schnelles Erlernen neuer Tools (z.B. React via KI)" },
                fpv_build: { title: "Drohnenbau", desc: "Komplette Montage, Löten & elektronische Programmierung" },
                "3d_design": { title: "3D-Design", desc: "Design in Fusion360 & Druckerkalibrierung" }
            },
        },
        projects: {
            title: "Projekte",
            subtitle: "Eine Auswahl meiner Arbeiten in Webentwicklung und Sicherheit.",
            categories: {
                all: "Alle",
                web: "Web Dev",
                sec: "Sicherheit",
                tools: "Werkzeuge",
            },
            items: {
                steg: {
                    title: "Steganographie-Engine",
                    desc: "Plattform zum Verstecken und Extrahieren von Informationen in verschiedenen Medien (Bilder, Audio, PDF) für forensische Analysen.",
                },
                queens: {
                    title: "KI-Löser - Queens",
                    desc: "Löser mit optischer Zeichenerkennung (OCR) und einem Constraint-Satisfaction-Algorithmus (CSP).",
                },
                ecg: {
                    title: "EKG-Design",
                    desc: "Funktionsfähiges EKG über Arduino Nano und C++-Entwicklung zur Signalverarbeitung.",
                },
                portfolio: {
                    title: "Portfolio-Website",
                    desc: "Professionelles Portfolio erstellt mit Next.js, Tailwind CSS und Framer Motion.",
                },
            },
        },
        contact: {
            title: "Kontaktieren Sie mich",
            subtitle: "Immer offen für Gespräche über neue Projekte oder Möglichkeiten.",
            location: "Frankreich (Lyon, Paris) und Schweiz (Romandie)",
        },
        writeups: {
            title: "CTF Write-ups",
            subtitle: "Detaillierte Lösungen zu Challenges, die ich gelöst habe.",
            back: "Zurück zu den write-ups",
            achievements_title: "CTF-Erfolge",
            achievements_subtitle: "Einige meiner jüngsten Wettbewerbsergebnisse.",
        },
    },
};
