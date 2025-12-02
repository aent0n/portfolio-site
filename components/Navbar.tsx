"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/context";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    const navItems = [
        { name: t("nav.home"), path: "/" },
        { name: t("nav.projects"), path: "/projects" },
        { name: t("nav.writeups"), path: "/writeups" },
        { name: t("nav.contact"), path: "/contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-surface0/50 bg-mantle/70 backdrop-blur-xl supports-[backdrop-filter]:bg-mantle/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
                    Anton ADAM<span className="text-blue">.</span>
                </Link>

                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "relative text-sm font-medium transition-colors hover:text-foreground",
                                    pathname === item.path ? "text-foreground" : "text-subtext0"
                                )}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-blue"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center gap-2">
                        <LanguageSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-subtext0 hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="sr-only">Open menu</span>
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-16 left-0 w-full border-b border-surface0 bg-mantle/95 backdrop-blur-md p-4 shadow-lg"
                >
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-foreground",
                                    pathname === item.path ? "text-foreground" : "text-subtext0"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 pt-4 border-t border-surface0">
                            <LanguageSwitcher />
                            <ThemeSwitcher />
                        </div>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
