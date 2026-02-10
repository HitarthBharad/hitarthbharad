import { ArchitectureDiagram } from "./architecture-diagram";
import { WorkflowSteps } from "./workflow-steps";

const metrics = [
    { label: "Tools Registered", value: "100+", unit: "across users" },
    { label: "Workflow Success Rate", value: "94%", unit: "auto-generated chains" },
    { label: "Avg Workflow Time", value: "3min", unit: "vs 45min manual" },
    { label: "Tool Chain Accuracy", value: "96%", unit: "correct tool selection" },
];

const techStack = [
    {
        tech: "Vector Database",
        rationale:
            "Pinecone \u2014 Semantic tool search with <100ms query time across 10K+ tool embeddings",
    },
    {
        tech: "Workflow Planning",
        rationale:
            "GPT-4 + Claude \u2014 Multi-model approach for higher accuracy in tool selection and DAG generation",
    },
    {
        tech: "Execution Engine",
        rationale:
            "Custom orchestrator on AWS ECS \u2014 Async task queue with state management and retry logic",
    },
    {
        tech: "Tool Sandbox",
        rationale:
            "Docker + gVisor \u2014 Secure isolated execution for user Python code with resource limits",
    },
    {
        tech: "Tool Registry",
        rationale:
            "PostgreSQL + Redis \u2014 Fast tool lookup with caching",
    }
];

const impactMetrics = [
    { label: "Time Savings", value: "45 min \u2192 3 min", detail: "average for multi-step workflows" },
    { label: "Adoption", value: "100+", detail: "tools registered across users" },
    { label: "Reliability", value: "94%", detail: "workflow success rate on first generation" },
    { label: "Flexibility", value: "3 types", detail: "API, Python, LLM agents" },
    { label: "Developer Experience", value: "Low-code", detail: "workflow automation for business users" },
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
                <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
                    AI-Powered Workflow Orchestration &mdash; Let LLMs Build and Execute
                    Complex Business Workflows
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

                {/* ====================== A) Overview ====================== */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-primary">Overview</h3>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-secondary-foreground">
                        Aegion transforms natural language requests into executable workflows
                        by intelligently orchestrating user-registered tools. Users register
                        their own APIs, Python functions, and LLM agents as tools in their
                        library. When they ask a question like &ldquo;Fetch customer reviews
                        from our CRM, analyze sentiment, and email a report,&rdquo;
                        Aegion&rsquo;s AI automatically identifies the required tools, chains
                        them in the correct sequence, and executes the complete
                        workflow&mdash;no manual pipeline building required.
                    </p>

                    {/* Example use-case callout */}
                    <div className="mt-6 rounded-lg border border-border bg-surface-muted p-5 lg:p-6">
                        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                            Example Workflow
                        </p>
                        <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                            <code>
                                <span className="text-accent-brand">User Input:</span>
                                {"\n"}
                                <span className="text-secondary-foreground">
                                    {
                                        '"Fetch all customer reviews from CRM in past 7 days,'
                                    }
                                </span>
                                {"\n"}
                                <span className="text-secondary-foreground">
                                    {
                                        ' compute confidence scores, email me a detailed report"'
                                    }
                                </span>
                                {"\n\n"}
                                <span className="text-accent-brand">Aegion Process:</span>
                                {"\n"}
                                <span className="text-muted-foreground">{"1. "}</span>
                                <span className="text-primary">
                                    {
                                        "Identifies tools: CRM API \u2192 Python Scoring \u2192 LLM Report Writer \u2192 Email API"
                                    }
                                </span>
                                {"\n"}
                                <span className="text-muted-foreground">{"2. "}</span>
                                <span className="text-primary">
                                    {"Builds workflow chain with proper data flow"}
                                </span>
                                {"\n"}
                                <span className="text-muted-foreground">{"3. "}</span>
                                <span className="text-primary">
                                    {"Executes pipeline and delivers results"}
                                </span>
                                {"\n\n"}
                                <span className="text-accent-brand">Result:</span>
                                <span className="text-success">
                                    {" 45-minute manual task \u2192 1-minute automated workflow"}
                                </span>
                            </code>
                        </pre>
                    </div>
                </div>

                {/* ====================== B) Architecture ====================== */}
                <div className="mt-16">
                    <h3 className="mb-6 text-2xl font-semibold text-primary">
                        System Architecture
                    </h3>
                    <ArchitectureDiagram />
                </div>

                {/* ====================== E) How It Works ====================== */}
                <div className="mt-16">
                    <h3 className="mb-6 text-2xl font-semibold text-primary">
                        How It Works
                    </h3>
                    <WorkflowSteps />
                </div>

                {/* ====================== C) Technical Deep Dive ====================== */}
                <div className="mt-16">
                    <h3 className="mb-8 text-2xl font-semibold text-primary">
                        Technical Deep Dive
                    </h3>

                    {/* Sub 1: Intelligent Tool Discovery */}
                    <div className="mb-12">
                        <h4 className="mb-3 text-xl font-medium text-primary">
                            Intelligent Tool Discovery &amp; Selection
                        </h4>
                        <p className="max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Challenge:</strong>{" "}
                            Given a natural language request, how do you automatically identify
                            which tools (from potentially hundreds in a user&rsquo;s library) are
                            needed and in what order?
                        </p>
                        <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Solution:</strong>{" "}
                            Vector embeddings of all registered tools (using tool descriptions,
                            parameters, outputs). Semantic search to find relevant tools based on
                            user intent. LLM-powered reasoning to understand tool dependencies and
                            data flow requirements. Confidence scoring for tool selection (reject
                            if confidence {"<"} 85%).
                        </p>

                        {/* Results mini-grid */}
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">92%</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    tool selection accuracy
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">2.3s</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    discovery in 100+ tool libraries
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">5-8</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    multi-step tool sequencing
                                </p>
                            </div>
                        </div>

                        {/* Code snippet */}
                        <div className="mt-4 overflow-x-auto rounded-lg border border-border bg-surface-muted p-4">
                            <pre className="font-mono text-sm leading-relaxed text-primary">
                                <code>{`# Tool matching with semantic search
query_embedding = embed_user_intent(user_request)
candidate_tools = vector_db.similarity_search(
    query_embedding, 
    top_k=10,
    threshold=0.75
)

# LLM validates and orders tools
workflow_chain = llm.plan_workflow(
    user_request=user_request,
    available_tools=candidate_tools,
    validate_dependencies=True
)`}</code>
                            </pre>
                        </div>
                    </div>

                    {/* Sub 2: Workflow DAG Generation */}
                    <div className="mb-12">
                        <h4 className="mb-3 text-xl font-medium text-primary">
                            Workflow DAG Generation &amp; Validation
                        </h4>
                        <p className="max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Challenge:</strong>{" "}
                            Automatically building a valid execution graph where tools pass data
                            correctly between steps, handling different output/input formats.
                        </p>
                        <p className="mt-3 max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Solution:</strong>{" "}
                            Parse tool schemas (input params, output types) from registrations.
                            LLM generates directed acyclic graph (DAG) with data mappings. Static
                            validation checks for type compatibility. Automatic data transformation
                            injection where needed (JSON {"→"} CSV, etc.).
                        </p>

                        {/* Results mini-grid */}
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">94%</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    workflows execute without errors
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">Branching</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    conditional tool execution
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">4.2</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    avg tools per workflow chain
                                </p>
                            </div>
                        </div>

                        {/* DAG visualization */}
                        <div className="mt-4 rounded-lg border border-border bg-surface-muted p-5">
                            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                Example DAG
                            </p>
                            <div className="flex flex-col gap-2">
                                {[
                                    {
                                        tool: "Fetch CRM Data",
                                        type: "API",
                                        output: "JSON array",
                                    },
                                    {
                                        tool: "Score Reviews",
                                        type: "Python",
                                        output: "DataFrame",
                                    },
                                    {
                                        tool: "Generate Report",
                                        type: "LLM Agent",
                                        output: "Markdown",
                                    },
                                    { tool: "Send Email", type: "API", output: "success" },
                                ].map((step, i) => (
                                    <div key={step.tool}>
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-[10px] text-accent-brand">
                                                {i + 1}
                                            </span>
                                            <span className="font-mono text-sm text-primary">
                                                {step.tool}
                                            </span>
                                            <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                                                {step.type}
                                            </span>
                                            <span className="font-mono text-xs text-muted-foreground">
                                                {"returns: "}
                                                {step.output}
                                            </span>
                                        </div>
                                        {i < 3 && (
                                            <div className="ml-3 flex h-4 items-center">
                                                <div className="h-full w-px bg-accent-brand" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sub 3: Tool Type Flexibility */}
                    <div>
                        <h4 className="mb-3 text-xl font-medium text-primary">
                            Tool Type Flexibility &amp; Execution
                        </h4>
                        <p className="max-w-3xl text-base leading-relaxed text-secondary-foreground">
                            <strong className="font-medium text-primary">Challenge:</strong>{" "}
                            Supporting three fundamentally different tool types (APIs, Python code,
                            LLM agents) in a unified execution framework.
                        </p>

                        {/* Tool types */}
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-lg border border-border bg-surface-muted p-4">
                                <p className="font-mono text-sm font-medium text-primary">
                                    API Tools
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    REST/GraphQL wrapper with authentication, rate limiting, retry
                                    logic
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted p-4">
                                <p className="font-mono text-sm font-medium text-primary">
                                    Python Tools
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Sandboxed execution environment with dependency management and
                                    timeout controls
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted p-4">
                                <p className="font-mono text-sm font-medium text-primary">
                                    LLM Agents
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Completion agents with role/context injection, streaming support,
                                    cost tracking
                                </p>
                            </div>
                        </div>

                        {/* Execution service features */}
                        <div className="mt-4 rounded-lg border border-border bg-surface-muted p-5">
                            <p className="mb-2 text-sm font-medium text-primary">
                                Execution Service Features
                            </p>
                            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                                {[
                                    "Async/parallel execution where dependencies allow",
                                    "State management for long-running workflows",
                                    "Real-time execution monitoring and logging",
                                    "Automatic error recovery with fallback tools",
                                ].map((feat) => (
                                    <li
                                        key={feat}
                                        className="text-sm text-secondary-foreground"
                                    >
                                        <span className="mr-1.5 text-border-strong">&bull;</span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Results mini-grid */}
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">
                                    {"<"}5ms
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    overhead per tool execution
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">99.2%</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    workflow completion rate
                                </p>
                            </div>
                            <div className="rounded-lg border border-border bg-surface-muted px-4 py-3">
                                <p className="text-2xl font-semibold text-primary">Graceful</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    degradation on tool failures
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ====================== D) Tech Stack ====================== */}
                <div className="mt-16">
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

                {/* ====================== F) Business Impact ====================== */}
                <div className="mt-16">
                    <h3 className="mb-6 text-2xl font-semibold text-primary">
                        Business Impact
                    </h3>
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
                        {impactMetrics.map((m) => (
                            <div
                                key={m.label}
                                className="rounded-lg border border-border bg-surface-muted px-4 py-4"
                            >
                                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    {m.label}
                                </p>
                                <p className="mt-2 text-2xl font-semibold text-primary">
                                    {m.value}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    {m.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ====================== G) Links & CTAs ====================== */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="https://aegion.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md bg-accent-brand px-6 py-3 text-base font-medium text-accent-brand-foreground transition-colors duration-150 hover:bg-accent-brand-hover"
                    >
                        Try Aegion
                    </a>
                </div>
            </div>
        </section>
    );
}
