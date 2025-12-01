"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"; // Removed Palette import
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-subtext0 transition-colors hover:bg-surface0 hover:text-foreground" // Updated className
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
    );
}
