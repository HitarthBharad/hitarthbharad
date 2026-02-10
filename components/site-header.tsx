"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { VscMenu, VscClose } from "react-icons/vsc";
import { GoSun, GoMoon } from "react-icons/go";

const navLinks = [
    { label: "Featured Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Resume", href: "#" },
    { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4 md:px-12 lg:px-20">
                <a
                    href="#"
                    className="text-[15px] font-semibold tracking-tighter text-primary"
                >
                    Hitarth Bharad
                </a>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-[15px] text-muted-foreground transition-colors duration-150 hover:text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="ml-2 rounded-md p-2 text-muted-foreground transition-colors duration-150 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                        aria-label="Toggle dark mode"
                    >
                        {resolvedTheme === "dark" ? (
                            <GoSun className="h-[18px] w-[18px]" />
                        ) : (
                            <GoMoon className="h-[18px] w-[18px]" />
                        )}
                    </button>
                </nav>

                {/* Mobile controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        type="button"
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="rounded-md p-2 text-muted-foreground transition-colors duration-150 hover:text-primary"
                        aria-label="Toggle dark mode"
                    >
                        {resolvedTheme === "dark" ? (
                            <GoSun className="h-[18px] w-[18px]" />
                        ) : (
                            <GoMoon className="h-[18px] w-[18px]" />
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="rounded-md p-2 text-muted-foreground transition-colors duration-150 hover:text-primary"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileOpen ? (
                            <VscClose className="h-5 w-5" />
                        ) : (
                            <VscMenu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <nav
                    className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden"
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-[15px] text-muted-foreground transition-colors duration-150 hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
