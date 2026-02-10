import { TerminalWindow } from "./terminal-window";

const techPills = [
    "Software Engineer",
    "LLM Systems",
    "Vector Search",
    "Production ML",
];

export function HeroSection() {
    return (
        <section className="relative border-b border-blue-600/10 pt-32 pb-20 lg:pt-40 lg:pb-24">
            {/* Dot grid background */}
            <div
                className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle,#E5E5E5_1px,transparent_1px)] [background-size:48px_48px] dark:[background-image:radial-gradient(circle,#262626_1px,transparent_1px)]"
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-container px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
                    {/* Left column -- 60% */}
                    {/* <div className="lg:w-[60%]"> */}
                    <div className="lg:flex-[3]">
                        <h1 className="text-4xl font-semibold tracking-tighter lg:text-5xl">
                            <span className="bg-gradient-to-r from-gray-900 via-gray-900 to-blue-600 bg-clip-text text-balance text-transparent dark:from-gray-100 dark:via-gray-100 dark:to-blue-500">
                                Hitarth Bharad
                            </span>
                        </h1>

                        <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
                            Software Engineer &mdash; specializing in ML & AI Systems
                        </p>


                        {/* Status badge */}
                        <div className="mt-6">
                            <span className="inline-block rounded-full border border-blue-600/30 bg-blue-600/5 px-4 py-1.5 text-sm text-blue-600 shadow-sm dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-500">
                                Latest: Releasing early version of Aegion
                            </span>
                        </div>

                        {/* Tech pills with alternating style */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {techPills.map((pill, i) => (
                                <span
                                    key={pill}
                                    className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400"
                                >
                                    {pill}
                                </span>
                            ))}
                        </div>

                        {/* CTA row */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="#work"
                                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                            >
                                View Aegion Case Study
                            </a>
                            <a
                                href="/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md border border-blue-600 bg-transparent px-6 py-3 text-base font-medium text-blue-600 transition-colors duration-150 hover:bg-blue-600/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500/10"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* Right column -- 40% */}
                    <div className="lg:flex-[2] min-w-0">
                        <TerminalWindow />
                    </div>
                </div>
            </div>

            {/* Centered accent line at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="h-1 w-24 rounded-full bg-blue-600 dark:bg-blue-500" />
            </div>
        </section>
    );
}
