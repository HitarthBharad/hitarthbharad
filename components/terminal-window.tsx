export function TerminalWindow() {
    return (
        <div className="overflow-hidden rounded-lg border border-border bg-surface">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-border-strong" />
                <span className="h-3 w-3 rounded-full bg-border-strong" />
                <span className="h-3 w-3 rounded-full bg-border-strong" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                    aegion-cli
                </span>
            </div>

            {/* Code content */}
            {/* <div className="overflow-x-auto p-5 lg:p-6">
                <pre className="font-mono text-sm leading-relaxed"> */}
            <div className="p-5 lg:p-6">
                <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
                    <code>
                        <span className="text-muted-foreground">{"$ "}</span>
                        <span className="text-primary">aegion run</span>
                        <span className="text-muted-foreground">{" \\\n"}</span>
                        {"  "}
                        <span className="text-accent-brand">
                            {
                                '"Fetch reviews from CRM, score sentiment, email report"'
                            }
                        </span>
                        {"\n\n"}
                        <span className="text-muted-foreground">
                            {"[discover] "}
                        </span>
                        <span className="text-primary">
                            {"Found 4 tools in registry"}
                        </span>
                        {"\n"}
                        <span className="text-muted-foreground">
                            {"[plan]     "}
                        </span>
                        <span className="text-primary">
                            {"Building workflow DAG..."}
                        </span>
                        {"\n\n"}
                        <span className="text-muted-foreground">
                            {"// Workflow chain\n"}
                        </span>
                        <span className="text-primary">{"{"}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"steps"'}</span>
                        <span className="text-primary">{": ["}</span>
                        {"\n"}
                        {"    "}
                        <span className="text-muted-foreground">
                            {'"CRM API"'}
                        </span>
                        <span className="text-primary">{" \u2192 "}</span>
                        <span className="text-muted-foreground">
                            {'"Sentiment Scorer"'}
                        </span>
                        <span className="text-primary">{" \u2192 "}</span>
                        <span className="text-muted-foreground">
                            {'"Report Writer"'}
                        </span>
                        <span className="text-primary">{" \u2192 "}</span>
                        <span className="text-muted-foreground">
                            {'"Email API"'}
                        </span>
                        {"\n"}
                        {"  "}
                        <span className="text-primary">{"],"}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"status"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-success">{'"complete"'}</span>
                        {",\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"time"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-success">{'"1.2min"'}</span>
                        {",\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"confidence"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-success">{"0.94"}</span>
                        {"\n"}
                        <span className="text-primary">{"}"}</span>
                    </code>
                </pre>
            </div>
        </div>
    );
}
