"use client";

import { useLanguage } from "@/lib/context";
import { Language } from "@/lib/translations";
import { motion } from "framer-motion";

const languages: { code: Language; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 rounded-full border border-surface0 bg-surface0/50 p-1">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`relative rounded-full px-3 py-1 text-xs font-medium transition-colors ${language === lang.code ? "text-foreground" : "text-subtext0 hover:text-foreground"
                        }`}
                >
                    {language === lang.code && (
                        <motion.div
                            layoutId="language-indicator"
                            className="absolute inset-0 rounded-full bg-surface1/50"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{lang.label}</span>
                </button>
            ))}
        </div>
    );
}
