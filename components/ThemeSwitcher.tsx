"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Palette } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => {
                if (theme === "light") setTheme("dark");
                else if (theme === "dark") setTheme("efrei");
                else setTheme("light");
            }}
            className="rounded-full bg-surface0/50 p-2 text-surface1 transition-colors hover:bg-surface0 hover:text-foreground"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Moon className="h-5 w-5" />
            ) : theme === "efrei" ? (
                <Palette className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </button>
    );
}
