import {
    FiCloud,
    FiCode,
    FiCpu,
    FiDatabase,
    FiGitBranch,
    FiPlay,
    FiUser,
} from "react-icons/fi";

const layers = [
    {
        id: "request",
        icon: FiUser,
        title: "User Request",
        subtitle: '"Analyze customer reviews and email report"',
        bg: "bg-surface-muted",
    },
    {
        id: "registry",
        icon: FiDatabase,
        title: "Tool Registry & Indexer",
        subtitle: null,
        bg: "bg-surface",
        children: [
            { label: "API Tools", detail: "(CRM API)", icon: FiCloud },
            { label: "Python Code", detail: "(Scoring)", icon: FiCode },
            { label: "LLM Agents", detail: "(Writer)", icon: FiCpu },
            { label: "Vectors", detail: "(Semantic Search)", icon: FiDatabase },
        ],
    },
    {
        id: "planner",
        icon: FiCpu,
        title: "Workflow Planning Engine (LLM)",
        subtitle: null,
        bg: "bg-surface-muted",
        bullets: [
            "Parse user intent",
            "Identify tools via vector similarity",
            "Generate workflow chain with data deps",
            "Validate tool compatibility",
        ],
    },
    {
        id: "dag",
        icon: FiGitBranch,
        title: "Workflow DAG Builder",
        subtitle: null,
        bg: "bg-surface",
        pipeline: [
            { label: "CRM API", output: "data" },
            { label: "Python Scorer", output: "analyzed" },
            { label: "LLM Report", output: "report" },
            { label: "Email API", output: "sent" },
        ],
    },
    {
        id: "executor",
        icon: FiPlay,
        title: "Execution Service",
        subtitle: null,
        bg: "bg-surface-muted",
        bullets: [
            "Run tools in sequence",
            "Handle data passing between tools",
            "Error handling & retries",
            "Monitor execution state",
        ],
    },
];

export function ArchitectureDiagram() {
    return (
        <div
            className="overflow-hidden rounded-lg border border-border bg-surface"
            role="img"
            aria-label="Aegion system architecture: User Request flows through Tool Registry, Workflow Planning Engine, DAG Builder, and Execution Service"
        >
            <div className="flex flex-col">
                {layers.map((layer, idx) => (
                    <div key={layer.id}>
                        <div className={`${layer.bg} px-6 py-5 lg:px-8 lg:py-6`}>
                            {/* Layer header */}
                            <div className="flex items-center gap-3">
                                <layer.icon className="h-4 w-4 shrink-0 text-accent-brand" />
                                <h4 className="text-sm font-medium text-primary">
                                    {layer.title}
                                </h4>
                            </div>

                            {/* Subtitle */}
                            {layer.subtitle && (
                                <p className="mt-1.5 pl-7 font-mono text-xs text-muted-foreground">
                                    {layer.subtitle}
                                </p>
                            )}

                            {/* Tool type cards */}
                            {layer.children && (
                                <div className="mt-4 grid grid-cols-2 gap-3 pl-7 lg:grid-cols-4">
                                    {layer.children.map((child) => (
                                        <div
                                            key={child.label}
                                            className="rounded-md border border-border bg-background px-3 py-2.5"
                                        >
                                            <div className="flex items-center gap-2">
                                                <child.icon className="h-3.5 w-3.5 text-accent-brand" />
                                                <span className="font-mono text-xs font-medium text-primary">
                                                    {child.label}
                                                </span>
                                            </div>
                                            <span className="mt-0.5 block pl-[22px] font-mono text-[10px] text-muted-foreground">
                                                {child.detail}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Bullet points */}
                            {layer.bullets && (
                                <ul className="mt-3 flex flex-col gap-1 pl-7">
                                    {layer.bullets.map((b) => (
                                        <li
                                            key={b}
                                            className="font-mono text-xs text-muted-foreground"
                                        >
                                            <span className="mr-1.5 text-border-strong">
                                                &bull;
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Pipeline visualization */}
                            {layer.pipeline && (
                                <div className="mt-4 flex flex-wrap items-center gap-2 pl-7">
                                    {layer.pipeline.map((step, i) => (
                                        <div key={step.label} className="flex items-center gap-2">
                                            <div className="rounded-md border border-border bg-background px-3 py-2">
                                                <span className="block font-mono text-xs font-medium text-primary">
                                                    {step.label}
                                                </span>
                                                <span className="block font-mono text-[10px] text-muted-foreground">
                                                    {"["}
                                                    {step.output}
                                                    {"]"}
                                                </span>
                                            </div>
                                            {i < layer.pipeline.length - 1 && (
                                                <span className="text-sm text-accent-brand">
                                                    {"\u2192"}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Connector arrow between layers */}
                        {idx < layers.length - 1 && (
                            <div className="flex justify-center py-1.5">
                                <div className="flex flex-col items-center">
                                    <div className="h-3 w-px bg-accent-brand" />
                                    <div className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-accent-brand" />
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Result footer */}
                <div className="flex items-center justify-center border-t border-border bg-surface-muted px-6 py-4">
                    <span className="font-mono text-xs font-medium text-success">
                        {"Result delivered to user"}
                    </span>
                </div>
            </div>
        </div>
    );
}
