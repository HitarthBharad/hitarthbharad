import { ArchitectureDiagram } from "./architecture-diagram";

const metrics = [
    { label: "Response Time", value: "145ms", unit: "p95 latency" },
    { label: "Queries", value: "10K+", unit: "per day" },
    { label: "Context Window", value: "128K", unit: "tokens" },
    { label: "Cost Reduction", value: "60%", unit: "vs baseline" },
];

const techStack = [
    {
        tech: "Vector Database",
        rationale:
            "Pinecone \u2014 Production-grade managed vector search with sub-100ms p95",
    },
    {
        tech: "LLM Integration",
        rationale:
            "LangChain + Custom Orchestration \u2014 Unified interface across providers",
    },
    {
        tech: "Caching Layer",
        rationale:
            "Redis \u2014 Distributed semantic cache with TTL management",
    },
    {
        tech: "Infrastructure",
        rationale:
            "AWS ECS Fargate \u2014 Auto-scaling microservices architecture",
    },
    {
        tech: "Monitoring",
        rationale:
            "Datadog + Custom metrics \u2014 Real-time latency and cost tracking",
    },
];

export function AegionSection() {
    return (
        <section id="work" className="bg-surface py-20 lg:py-32">
            <div className="mx-auto max-w-container px-6 md:px-12 lg:px-20">
                {/* Section header */}
                <p className="text-sm font-normal uppercase tracking-widest text-accent-brand">
                    Featured Work
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary lg:text-4xl">
                    Aegion
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    LLM Orchestration Platform &mdash; Production-Grade Vector Search
                    &amp; Context Management
                </p>

                {/* Metrics grid */}
                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8 lg:grid-cols-4 lg:gap-8">
                    {metrics.map((m) => (
                        <div key={m.label}>
                            <p className="text-sm uppercase tracking-wider text-muted-foreground">
                                {m.label}
                            </p>
                            <p className="mt-2 text-3xl font-semibold text-primary">
                                {m.value}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">{m.unit}</p>
                        </div>
                    ))}
                </div>

                {/* Overview */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-primary">Overview</h3>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-secondary-foreground">
                        Aegion is a production-grade LLM orchestration platform designed for
                        enterprise-scale AI applications. It handles intelligent context
                        management across 128K token windows, optimizes vector search
                        operations for sub-150ms p95 latency, and implements multi-tier
                        caching strategies that reduce operational costs by 60%. The platform
                        serves 10,000+ daily queries across multiple production applications
                        with 99.9% uptime.
                    </p>
                </div>

                {/* Architecture */}
                <div className="mt-12">
                    <h3 className="mb-6 text-2xl font-semibold text-primary">
                        System Architecture
                    </h3>
                    <ArchitectureDiagram />
                </div>

                {/* Technical deep dive */}
                <div className="mt-12">
                    <h3 className="mb-8 text-2xl font-semibold text-primary">
                        Technical Deep Dive
                    </h3>

                    {/* Sub 1: Context Management */}
                    <div className="mb-10">
                        <h4 className="mb-3 text-xl font-medium text-primary">
                            Context Management at Scale
                        </h4>
                        <p className="max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Challenge:</strong>{" "}
                            Managing large context windows while maintaining sub-200ms
                            response times.{" "}
                            <strong className="font-medium text-primary">Solution:</strong>{" "}
                            Implemented hierarchical context pruning with semantic relevance
                            scoring.{" "}
                            <strong className="font-medium text-primary">Results:</strong> 60%
                            reduction in token usage without accuracy loss.
                        </p>
                        <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-surface-muted p-4">
                            <pre className="font-mono text-sm leading-relaxed text-primary">
                                <code>{`def prune_context(docs, query, max_tokens=4096):
    scored = [
        (doc, semantic_score(doc, query))
        for doc in docs
    ]
    scored.sort(key=lambda x: x[1], reverse=True)
    
    context, tokens_used = [], 0
    for doc, score in scored:
        doc_tokens = count_tokens(doc)
        if tokens_used + doc_tokens > max_tokens:
            break
        context.append(doc)
        tokens_used += doc_tokens
    return context`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Sub 2: Vector Search */}
                    <div className="mb-10">
                        <h4 className="mb-3 text-xl font-medium text-primary">
                            Vector Search Optimization
                        </h4>
                        <p className="max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Challenge:</strong>{" "}
                            Vector similarity search becoming the bottleneck at 5K+ QPS.{" "}
                            <strong className="font-medium text-primary">Solution:</strong>{" "}
                            Hybrid search combining dense vectors with sparse keyword
                            matching, implemented async batch processing.{" "}
                            <strong className="font-medium text-primary">Results:</strong> 3x
                            throughput improvement, maintained 95th percentile latency under
                            150ms.
                        </p>

                        {/* Metrics comparison table */}
                        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border bg-surface-muted">
                                        <th className="px-4 py-3 text-left font-medium text-primary">
                                            Metric
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium text-primary">
                                            Before
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium text-primary">
                                            After
                                        </th>
                                        <th className="px-4 py-3 text-left font-medium text-primary">
                                            Change
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-surface">
                                    <tr className="border-b border-border">
                                        <td className="px-4 py-3 font-mono text-muted-foreground">
                                            p95 Latency
                                        </td>
                                        <td className="px-4 py-3 text-primary">420ms</td>
                                        <td className="px-4 py-3 text-primary">145ms</td>
                                        <td className="px-4 py-3 text-success">-65%</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="px-4 py-3 font-mono text-muted-foreground">
                                            Throughput
                                        </td>
                                        <td className="px-4 py-3 text-primary">1.7K QPS</td>
                                        <td className="px-4 py-3 text-primary">5.2K QPS</td>
                                        <td className="px-4 py-3 text-success">+3x</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-mono text-muted-foreground">
                                            Recall@10
                                        </td>
                                        <td className="px-4 py-3 text-primary">0.89</td>
                                        <td className="px-4 py-3 text-primary">0.94</td>
                                        <td className="px-4 py-3 text-success">+5.6%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sub 3: Cost & Latency */}
                    <div>
                        <h4 className="mb-3 text-xl font-medium text-primary">
                            Cost &amp; Latency Tradeoffs
                        </h4>
                        <p className="max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            Built intelligent routing between GPT-4, Claude, and local models
                            based on query complexity classification. Implemented multi-tier
                            caching (semantic, exact match, and prefix caching) with adaptive
                            TTL management. Achieved 60% cost reduction while improving
                            average latency by 40%.
                        </p>
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="mt-12">
                    <h3 className="mb-6 text-2xl font-semibold text-primary">
                        Technology Stack
                    </h3>
                    <div className="overflow-x-auto rounded-lg border border-border">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-border bg-surface-muted">
                                    <th className="px-4 py-3 text-left font-medium text-primary">
                                        Technology
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium text-primary">
                                        Rationale
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-surface">
                                {techStack.map((item, i) => (
                                    <tr
                                        key={item.tech}
                                        className={
                                            i < techStack.length - 1
                                                ? "border-b border-border"
                                                : ""
                                        }
                                    >
                                        <td className="whitespace-nowrap px-4 py-3 font-medium text-primary">
                                            {item.tech}
                                        </td>
                                        <td className="px-4 py-3 text-muted-foreground">
                                            {item.rationale}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Links */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-accent-brand px-6 py-3 text-base font-medium text-accent-brand-foreground transition-colors duration-150 hover:bg-accent-brand-hover"
                    >
                        Live Demo
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-accent-brand bg-transparent px-6 py-3 text-base font-medium text-accent-brand transition-colors duration-150 hover:bg-accent-brand/10"
                    >
                        Documentation
                    </a>
                    <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent-brand"
                    >
                        {"GitHub \u2192"}
                    </a>
                </div>
            </div>
        </section>
    );
}
