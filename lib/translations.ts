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
                    title: "Fabrication numérique & CNC",
                    desc: "Modélisation 3D (FDM), calibration d'imprimantes et pilotage de traceurs vectoriels (AxiDraw).",
                },
            },
            achievements: {
                steg: { title: "Stéganographie image", desc: "LSB & Métadonnées (tEXt chunks) pour PNGs" },
                forensics: { title: "Forensics", desc: "Analyse mémoire avec Volatility 3 en CTF" },
                pentest: { title: "Pentesting", desc: "Training sur RootMe, HTB, THM & Metasploit" },
                elk: { title: "ELK Stack", desc: "Mise en place & Monitoring (Voir CV)" },
                linux: { title: "Linux Hardening", desc: "Navigation avancée & Hardening (SSH, UFW, Fail2Ban)" },
                docker: { title: "Docker", desc: "Déploiement d'outils à la volée" },
                cloud: { title: "Ressources Cloud", desc: "Gestion de ressources (Contexte académique)" },
                python: { title: "Scripting Python", desc: "Scripts d'automatisation & logique algorithmique" },
                web: { title: "Dev Web", desc: "HTML/CSS/JS & PHP (Architecture de services)" },
                ai_dev: { title: "Dev augmenté par IA", desc: "Prototypage rapide & génération de logique via LLMs" },
                problem_solving: { title: "Résolution de problèmes", desc: "Approche analytique des challenges CTF" },
                adaptability: { title: "Adaptabilité", desc: "Apprentissage rapide de nouveaux outils (ex: React via IA)" },
                fpv_build: { title: "Construction de drone", desc: "Assemblage complet, soudure & programmation électronique" },
                "3d_design": { title: "Conception 3D", desc: "Design sur Fusion360 & calibration d'imprimantes" },
                tauri: { title: "Applications bureau (Tauri/Rust)", desc: "Développement d'outils couplant Rust et interfaces React (ex: AxiDraw Slicer)" },
                plotting_build: { title: "Optimisation de tracés", desc: "Algorithmes de vectorisation et résolution TSP (Traveling Salesperson Problem)" }
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
                axidraw: {
                    title: "AxiDraw Slicer",
                    desc: "Logiciel de découpe vectorielle, d'optimisation de trajectoire et de contrôle en temps réel pour traceurs AxiDraw. Développé avec Tauri (Rust) et React.",
                },
                triage: {
                    title: "triAAge-collector",
                    desc: "Script de triage forensique Windows léger couplé à un tableau de bord HTML interactif portable pour l'analyse rapide d'artefacts.",
                },
                steg: {
                    title: "Moteur de stéganographie",
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
                    title: "Site portfolio",
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
            view_all_achievements: "Voir tout le palmarès",
            categories: {
                all: "Tout",
                web: "Web",
                forensics: "Forensics",
                reverse: "Reverse",
                pwn: "Pwn",
                blockchain: "Blockchain",
                crypto: "Crypto",
                osint: "OSINT",
            },
            achievements: {
                tracelabs_lehack_2026: {
                    event: "Trace Labs Search Party",
                    rank: "2ème en équipe",
                    category: "CTF OSINT en équipe",
                    date: "Juillet 2026",
                },
                lehack_2026: {
                    event: "LeHACK CTF 2026",
                    rank: "10ème en équipe",
                    category: "CTF en équipe",
                    date: "Juillet 2026",
                },
                mindbreak_2026: {
                    event: "Mindbreak CTF 2026",
                    rank: "4ème en équipe (1er individuel)",
                    category: "CTF en équipe",
                    date: "Juin 2026",
                },
                davinci_2026: {
                    event: "DaVinci CTF 2026",
                    rank: "4ème / 18",
                    category: "CTF en équipe",
                    date: "Mai 2026",
                },
                enedis_2025: {
                    event: "CTF ENEDIS Inter écoles",
                    rank: "2ème ex æquo / 33",
                    category: "CTF en équipe",
                    date: "Novembre 2025",
                },
                cybernight_2025: {
                    event: "EFREI - CyberNight 2025",
                    rank: "58ème / 263",
                    category: "CTF en équipe",
                    date: "Novembre 2025",
                },
                ramen_2025: {
                    event: "Wiz x Ramen Runaway",
                    rank: "Terminé",
                    category: "Mini CTF Solo",
                    date: "Novembre 2025",
                },
                htb_2025: {
                    event: "HackTheBox - Eldoria's Tales",
                    rank: "Top 9.74% (792/8130)",
                    category: "CTF en équipe",
                    date: "Mars 2025",
                },
                cybernight_2024: {
                    event: "EFREI - CyberNight 2024",
                    rank: "11ème / 115",
                    category: "CTF en équipe - Cat. 'For Fun'",
                    date: "Novembre 2024",
                },
            },
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
                    title: "Digital Fabrication & CNC",
                    desc: "3D modeling (FDM), printer calibration, and controlling vector plotters (AxiDraw).",
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
                "3d_design": { title: "3D Design", desc: "Fusion360 design & printer calibration" },
                tauri: { title: "Desktop Apps (Tauri/Rust)", desc: "Building utilities combining Rust backends and React frontends (e.g. AxiDraw Slicer)" },
                plotting_build: { title: "Toolpath Optimization", desc: "Vectorization algorithms and TSP (Traveling Salesperson Problem) solvers" }
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
                axidraw: {
                    title: "AxiDraw Slicer",
                    desc: "A vector slicing, toolpath optimization, and real-time controller interface for AxiDraw plotting machines. Built with Tauri (Rust) and React.",
                },
                triage: {
                    title: "triAAge-collector",
                    desc: "A lightweight Windows forensic triage script coupled with a portable HTML dashboard for quick artifact analysis.",
                },
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
            view_all_achievements: "View all achievements",
            categories: {
                all: "All",
                web: "Web",
                forensics: "Forensics",
                reverse: "Reverse",
                pwn: "Pwn",
                blockchain: "Blockchain",
                crypto: "Crypto",
                osint: "OSINT",
            },
            achievements: {
                tracelabs_lehack_2026: {
                    event: "Trace Labs Search Party",
                    rank: "2nd place (Team)",
                    category: "Team OSINT CTF",
                    date: "July 2026",
                },
                lehack_2026: {
                    event: "LeHACK CTF 2026",
                    rank: "10th place (Team)",
                    category: "Team CTF",
                    date: "July 2026",
                },
                mindbreak_2026: {
                    event: "Mindbreak CTF 2026",
                    rank: "4th (Team) / 1st (Indiv.)",
                    category: "Team CTF",
                    date: "June 2026",
                },
                davinci_2026: {
                    event: "DaVinci CTF 2026",
                    rank: "4th / 18",
                    category: "Team CTF",
                    date: "May 2026",
                },
                enedis_2025: {
                    event: "CTF ENEDIS Inter écoles",
                    rank: "2nd ex æquo / 33",
                    category: "Team CTF",
                    date: "November 2025",
                },
                cybernight_2025: {
                    event: "EFREI - CyberNight 2025",
                    rank: "58th / 263",
                    category: "Team CTF",
                    date: "November 2025",
                },
                ramen_2025: {
                    event: "Wiz x Ramen Runaway",
                    rank: "Completed",
                    category: "Solo Mini CTF",
                    date: "November 2025",
                },
                htb_2025: {
                    event: "HackTheBox - Eldoria's Tales",
                    rank: "Top 9.74% (792/8130)",
                    category: "Team CTF",
                    date: "March 2025",
                },
                cybernight_2024: {
                    event: "EFREI - CyberNight 2024",
                    rank: "11th / 115",
                    category: "Team CTF - Cat. 'For Fun'",
                    date: "November 2024",
                },
            },
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
                    title: "Digitale Fabrikation & CNC",
                    desc: "3D-Modellierung (FDM), Drucker-Kalibrierung und Steuerung von Vektorplottern (AxiDraw).",
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
                "3d_design": { title: "3D-Design", desc: "Design in Fusion360 & Druckerkalibrierung" },
                tauri: { title: "Desktop-Apps (Tauri/Rust)", desc: "Entwicklung von Utilities durch Verbindung von Rust und React (z.B. AxiDraw Slicer)" },
                plotting_build: { title: "Pfadoptimierung", desc: "Vektorisierungsalgorithmen und TSP-Löser (Traveling Salesperson Problem)" }
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
                axidraw: {
                    title: "AxiDraw Slicer",
                    desc: "Vektorslicing, Pfadoptimierung und Echtzeit-Steuerungsoberfläche für AxiDraw-Zeichenmaschinen. Entwickelt mit Tauri (Rust) und React.",
                },
                triage: {
                    title: "triAAge-collector",
                    desc: "Ein leichtgewichtiges Windows-Forensik-Triage-Skript gekoppelt mit einem portablen HTML-Dashboard zur schnellen Artefaktanalyse.",
                },
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
            view_all_achievements: "Alle Erfolge anzeigen",
            categories: {
                all: "Alle",
                web: "Web",
                forensics: "Forensik",
                reverse: "Reverse",
                pwn: "Pwn",
                blockchain: "Blockchain",
                crypto: "Krypto",
                osint: "OSINT",
            },
            achievements: {
                tracelabs_lehack_2026: {
                    event: "Trace Labs Search Party",
                    rank: "2. Platz (Team)",
                    category: "Team-OSINT-CTF",
                    date: "Juli 2026",
                },
                lehack_2026: {
                    event: "LeHACK CTF 2026",
                    rank: "10. Platz (Team)",
                    category: "Team-CTF",
                    date: "Juli 2026",
                },
                mindbreak_2026: {
                    event: "Mindbreak CTF 2026",
                    rank: "4. (Team) / 1. (Einzel)",
                    category: "Team-CTF",
                    date: "Juni 2026",
                },
                davinci_2026: {
                    event: "DaVinci CTF 2026",
                    rank: "4. / 18",
                    category: "Team-CTF",
                    date: "Mai 2026",
                },
                enedis_2025: {
                    event: "CTF ENEDIS Inter écoles",
                    rank: "2. ex æquo / 33",
                    category: "Team-CTF",
                    date: "November 2025",
                },
                cybernight_2025: {
                    event: "EFREI - CyberNight 2025",
                    rank: "58. / 263",
                    category: "Team-CTF",
                    date: "November 2025",
                },
                ramen_2025: {
                    event: "Wiz x Ramen Runaway",
                    rank: "Abgeschlossen",
                    category: "Solo-Mini-CTF",
                    date: "November 2025",
                },
                htb_2025: {
                    event: "HackTheBox - Eldoria's Tales",
                    rank: "Top 9.74% (792/8130)",
                    category: "Team-CTF",
                    date: "März 2025",
                },
                cybernight_2024: {
                    event: "EFREI - CyberNight 2024",
                    rank: "11. / 115",
                    category: "Team-CTF - Kat. 'For Fun'",
                    date: "November 2024",
                },
            },
        },
    },
};
