export function TerminalWindow() {
    return (
        <div className="overflow-hidden rounded-lg border border-border bg-surface">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-border-strong" />
                <span className="h-3 w-3 rounded-full bg-border-strong" />
                <span className="h-3 w-3 rounded-full bg-border-strong" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                    aegion-cli
                </span>
            </div>

            {/* Code content */}
            <div className="overflow-x-auto p-5 lg:p-6">
                <pre className="font-mono text-sm leading-relaxed">
                    <code>
                        <span className="text-muted-foreground">{"$ "}</span>
                        <span className="text-primary">aegion query</span>
                        <span className="text-muted-foreground">{" --context "}</span>
                        <span className="text-accent-brand">
                            {'"user_docs"'}
                        </span>
                        {"\n\n"}
                        <span className="text-muted-foreground">{"// Response\n"}</span>
                        <span className="text-primary">{"{"}</span>
                        {"\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"query"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-muted-foreground">
                            {'"How to optimize vector search?"'}
                        </span>
                        {",\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"latency_ms"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-success">{"145"}</span>
                        {",\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"model"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-muted-foreground">
                            {'"gpt-4-turbo"'}
                        </span>
                        {",\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"cache_hit"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-success">{"true"}</span>
                        {",\n"}
                        {"  "}
                        <span className="text-accent-brand">{'"sources"'}</span>
                        <span className="text-primary">{": "}</span>
                        <span className="text-muted-foreground">{"["}</span>
                        {"\n"}
                        {"    "}
                        <span className="text-muted-foreground">
                            {'"docs/vector-indexing.md"'}
                        </span>
                        {",\n"}
                        {"    "}
                        <span className="text-muted-foreground">
                            {'"docs/hnsw-tuning.md"'}
                        </span>
                        {"\n"}
                        {"  "}
                        <span className="text-muted-foreground">{"]"}</span>
                        {"\n"}
                        <span className="text-primary">{"}"}</span>
                    </code>
                </pre>
            </div>
        </div>
    );
}
