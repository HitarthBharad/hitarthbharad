import { FiLayers, FiMessageSquare, FiZap } from "react-icons/fi";

const steps = [
    {
        number: "01",
        icon: FiLayers,
        title: "Register Tools",
        bullets: [
            "Add existing APIs, Python functions, or configure LLM agents",
            "Provide tool name, description, input/output schema, auth",
            "Aegion indexes each tool for semantic search",
        ],
    },
    {
        number: "02",
        icon: FiMessageSquare,
        title: "Natural Language Request",
        bullets: [
            'Describe workflow in plain English: "Fetch reviews \u2192 Analyze \u2192 Report \u2192 Email"',
            "No manual pipeline configuration required",
            "AI identifies required tools automatically",
        ],
    },
    {
        number: "03",
        icon: FiZap,
        title: "Automated Execution",
        bullets: [
            "Aegion builds the workflow chain automatically",
            "Executes tools in sequence with proper data passing",
            "View results and full execution trace",
        ],
    },
];

export function WorkflowSteps() {
    return (
        <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
                <div
                    key={step.number}
                    className="rounded-lg border border-border bg-surface p-6"
                >
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-accent-brand">
                            {step.number}
                        </span>
                        <step.icon className="h-4 w-4 text-accent-brand" />
                    </div>
                    <h4 className="mt-4 text-base font-medium text-primary">
                        {step.title}
                    </h4>
                    <ul className="mt-3 flex flex-col gap-2">
                        {step.bullets.map((b) => (
                            <li
                                key={b}
                                className="text-sm leading-relaxed text-secondary-foreground"
                            >
                                <span className="mr-2 text-border-strong">&bull;</span>
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
