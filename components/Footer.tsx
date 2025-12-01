import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-surface0 bg-mantle py-8">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-sm text-subtext0">
                    © {new Date().getFullYear()} Anton ADAM. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/aent0n" target="_blank" className="text-subtext0 hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/anton-adam/" target="_blank" className="text-subtext0 hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}