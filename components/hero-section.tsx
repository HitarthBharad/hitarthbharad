import { TerminalWindow } from "./terminal-window";

const techPills = [
    "LLM Orchestration",
    "Vector Search",
    "Production ML",
    "Microservices",
    "MLOps",
];

export function HeroSection() {
    return (
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
            <div className="mx-auto max-w-container px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
                    {/* Left column — 60% */}
                    <div className="lg:w-[60%]">
                        <h1 className="text-4xl font-semibold tracking-tighter text-primary lg:text-5xl">
                            <span className="text-balance">Hitarth Bharad</span>
                        </h1>

                        <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
                            Production ML Engineer &mdash; LLM Systems &amp; Vector Search at
                            Scale
                        </p>

                        {/* Status badge */}
                        <div className="mt-6">
                            <span className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
                                Latest: Releasing early version of Aegion
                            </span>
                        </div>

                        {/* Tech pills */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {techPills.map((pill) => (
                                <span
                                    key={pill}
                                    className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground"
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>

                        {/* CTA row */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#work"
                                className="inline-flex items-center justify-center rounded-md bg-accent-brand px-6 py-3 text-base font-medium text-accent-brand-foreground transition-colors duration-150 hover:bg-accent-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                                View Aegion Case Study
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-accent-brand bg-transparent px-6 py-3 text-base font-medium text-accent-brand transition-colors duration-150 hover:bg-accent-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                                Download Resume
                            </a>
                            <div className="flex items-center gap-4">
                                <a
                                    href="#research"
                                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent-brand"
                                >
                                    Publications
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent-brand"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right column — 40% */}
                    <div className="lg:w-[40%]">
                        <TerminalWindow />
                    </div>
                </div>
            </div>
        </section>
    );
}
