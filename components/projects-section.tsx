const projects = [
    {
        name: "Auto PO Processor",
        description:
            "Intelligent document processing platform extracting structured data from complex PDFs with OCR and NLP.",
        highlights: [
            "Achieved 95% extraction accuracy across multi-format document types using Tesseract OCR and custom text parsing algorithms",
            "Built secure processing pipelines with PII data encryption and automated quality assurance workflows",
            "Implemented comprehensive testing suite with PyTest ensuring data integrity and validation across edge cases",
        ],
        stack: "Python, FastAPI, Next.js, TypeScript, Tesseract OCR, ShadCN UI, PyTest",
        link: "https://auto-po.app",
        metric: { label: "Accuracy", value: "95%", change: "Multi-format PDFs" },
    },
    {
        name: "Tucson Crime Pattern Analysis Dashboard",
        description:
            "End-to-end analytics platform processing real-time crime data with predictive modeling and geospatial visualization.",
        highlights: [
            "Built automated ETL pipeline with 99.9% uptime fetching and processing crime data from Police Department REST APIs",
            "Developed interactive geospatial dashboard using R Shiny and Leaflet.js for real-time crime hotspot visualization with multi-dimensional filtering",
            "Applied time-series forecasting (ARIMA) and spatial clustering models enabling data-driven resource allocation for law enforcement",
        ],
        stack: "R (Shiny, Quarto), PostgreSQL, Leaflet.js, REST APIs, ARIMA, Spatial Analysis",
        link: "https://info-526-f24.github.io/project-01-VIZards/",
        metric: { label: "Uptime", value: "99.9%", change: "Real-time ETL" },
    },
    {
        name: "Anomaly Detection in Time-Series Patterns",
        description:
            "Production anomaly detection pipeline processing 1M+ data points daily from financial and sensor sources.",
        highlights: [
            "Developed automated data pipeline with quality checks processing 1M+ daily data points from financial and sensor streams",
            "Achieved 92% precision in anomaly detection using ensemble of ARIMA, EMA, and Prophet models with minimal false positives",
            "Built interactive visualization dashboards reducing incident response time by 35% through actionable insights",
        ],
        stack: "Python, Pandas, NumPy, Scikit-learn, Prophet, ARIMA, PostgreSQL, Matplotlib, Seaborn",
        link: "#",
        metric: { label: "Detection Precision", value: "92%", change: "-35% response time" },
    },
    {
        name: "VSI Lab Portal",
        description:
            "Centralized research management ecosystem for the Vision Systems and Intelligence Lab, streamlining academic profiles and publication tracking.",
        highlights: [
            "Architected a research repository using Next.js 14 and Vercel, achieving sub-second page loads for large publication datasets",
            "Engineered a responsive, accessible UI/UX framework using Tailwind CSS and Framer Motion for seamless navigation across scholarly content",
            "Implemented a dynamic data-fetching layer to synchronize lab member profiles, research projects, and peer-reviewed publications",
        ],
        stack: "Next.js, TypeScript, React, Tailwind CSS, Framer Motion, Vercel",
        link: "https://vsi-lab.vercel.app",
        metric: {
            label: "Global Reach",
            value: "High Impact",
            change: "from Zero Presence"
        },
    }
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 lg:py-28">
            <div className="mx-auto max-w-container px-6 md:px-12 lg:px-20">
                <p className="text-sm font-normal uppercase tracking-widest text-accent-brand">
                    Production Systems
                </p>
                <h2 className="mt-4 mb-12 text-3xl font-semibold tracking-tight text-primary">
                    Other Shipped Work
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.name}
                            className="rounded-lg border border-border bg-surface p-8"
                        >
                            <h4 className="text-xl font-medium text-primary">
                                {project.name}
                            </h4>
                            <p className="mt-2 text-base text-muted-foreground">
                                {project.description}
                            </p>

                            {/* Mini metric callout */}
                            <div className="mt-4 rounded-lg border border-border bg-surface-muted p-4">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                        {project.metric.label}
                                    </span>
                                    <span className="text-2xl font-semibold text-primary">
                                        {project.metric.value}
                                    </span>
                                    <span className="text-sm text-success">
                                        {project.metric.change}
                                    </span>
                                </div>
                            </div>

                            {/* Highlights */}
                            <ul className="mt-4 flex flex-col gap-2">
                                {project.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="text-sm leading-relaxed text-secondary-foreground"
                                    >
                                        <span className="mr-2 text-border-strong">&bull;</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Stack */}
                            <p className="mt-4 text-sm text-muted-foreground">
                                {project.stack}
                            </p>

                            {/* Link */}
                            <a
                                href={project.link}
                                className="mt-4 inline-block text-sm text-accent-brand transition-colors duration-150 hover:underline"
                            >
                                {"View Details \u2192"}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
