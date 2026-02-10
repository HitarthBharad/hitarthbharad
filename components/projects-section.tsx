const projects = [
    {
        name: "ML Model Serving Infrastructure",
        description:
            "High-throughput model serving pipeline for real-time inference at scale.",
        highlights: [
            "Reduced inference latency from 800ms to 120ms via model quantization and async batch processing",
            "Serving 50K+ predictions per second with auto-scaling on Kubernetes",
            "Implemented A/B testing framework for safe model rollouts with automatic rollback",
        ],
        stack: "Python, TorchServe, Kubernetes, Prometheus, gRPC",
        link: "#",
        metric: { label: "Inference Latency", value: "120ms", change: "-85%" },
    },
    {
        name: "Real-time Data Pipeline",
        description:
            "Event-driven data pipeline processing 10M+ events daily for ML feature engineering.",
        highlights: [
            "Built streaming ETL with exactly-once semantics handling 10M events/day",
            "Reduced feature freshness from hours to sub-minute with windowed aggregations",
            "Implemented schema evolution and backward compatibility across 40+ event types",
        ],
        stack: "Apache Kafka, Apache Flink, PostgreSQL, dbt, Airflow",
        link: "#",
        metric: { label: "Events/Day", value: "10M+", change: "99.99% delivery" },
    },
    {
        name: "Microservices Platform",
        description:
            "Service mesh architecture supporting 15+ services with observability-first design.",
        highlights: [
            "Scaled microservices to handle 50K RPS with 99.9% uptime SLA",
            "Built distributed tracing and custom alerting reducing MTTR by 60%",
            "Implemented circuit breakers and graceful degradation across service boundaries",
        ],
        stack: "Go, gRPC, Envoy, Kubernetes, Datadog",
        link: "#",
        metric: { label: "Uptime", value: "99.9%", change: "50K RPS" },
    },
    {
        name: "MLOps Platform",
        description:
            "End-to-end ML lifecycle management from training to production monitoring.",
        highlights: [
            "Automated model training pipelines reducing experiment-to-production from weeks to days",
            "Built model registry with versioning, lineage tracking, and automated validation",
            "Implemented drift detection and automated retraining triggers",
        ],
        stack: "Python, MLflow, Kubeflow, DVC, Great Expectations",
        link: "#",
        metric: { label: "Deploy Time", value: "2 days", change: "-80%" },
    },
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
