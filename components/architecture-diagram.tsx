export function ArchitectureDiagram() {
    return (
        <div className="overflow-x-auto rounded-lg border border-border bg-surface p-6 lg:p-10">
            <svg
                viewBox="0 0 800 320"
                className="mx-auto w-full min-w-[600px]"
                aria-label="Aegion system architecture diagram"
                role="img"
            >
                {/* Definitions for arrowheads */}
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="8"
                        markerHeight="6"
                        refX="8"
                        refY="3"
                        orient="auto"
                    >
                        <path
                            d="M 0 0 L 8 3 L 0 6 Z"
                            className="fill-accent-brand"
                        />
                    </marker>
                    <marker
                        id="arrowhead-down"
                        markerWidth="8"
                        markerHeight="6"
                        refX="3"
                        refY="6"
                        orient="90"
                    >
                        <path
                            d="M 0 0 L 6 0 L 3 8 Z"
                            className="fill-accent-brand"
                        />
                    </marker>
                </defs>

                {/* Row 1: User Query → Context Manager → Vector DB */}
                <DiagramBox x={20} y={40} label="User Query" />
                <Arrow x1={155} y1={65} x2={235} y2={65} />
                <DiagramBox x={240} y={40} label="Context Manager" width={140} />
                <Arrow x1={385} y1={65} x2={465} y2={65} />
                <DiagramBox x={470} y={40} label="Vector DB" />

                {/* Vertical arrow: Context Manager → LLM Router */}
                <line
                    x1={310}
                    y1={90}
                    x2={310}
                    y2={150}
                    className="stroke-accent-brand"
                    strokeWidth={2}
                    markerEnd="url(#arrowhead-down)"
                />

                {/* Row 2: LLM Router → Models */}
                <DiagramBox x={240} y={155} label="LLM Router" width={140} />
                <Arrow x1={385} y1={180} x2={465} y2={180} />

                {/* Model group */}
                <rect
                    x={470}
                    y={140}
                    width={300}
                    height={80}
                    rx={6}
                    className="fill-none stroke-border"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                />
                <text
                    x={485}
                    y={160}
                    className="fill-muted-foreground font-mono text-[10px]"
                >
                    Model Pool
                </text>
                <SmallBox x={485} y={170} label="GPT-4" />
                <SmallBox x={575} y={170} label="Claude" />
                <SmallBox x={665} y={170} label="Local" />

                {/* Vertical arrow: LLM Router → Response Cache */}
                <line
                    x1={310}
                    y1={205}
                    x2={310}
                    y2={255}
                    className="stroke-accent-brand"
                    strokeWidth={2}
                    markerEnd="url(#arrowhead-down)"
                />

                {/* Row 3: Response Cache → Output */}
                <DiagramBox x={240} y={260} label="Response Cache" width={140} />
                <Arrow x1={385} y1={285} x2={465} y2={285} />
                <DiagramBox x={470} y={260} label="Output" />

                {/* Legend */}
                <rect
                    x={20}
                    y={270}
                    width={12}
                    height={12}
                    rx={2}
                    className="fill-surface stroke-border"
                    strokeWidth={1}
                />
                <text
                    x={38}
                    y={281}
                    className="fill-muted-foreground font-mono text-[10px]"
                >
                    Component
                </text>
                <line
                    x1={110}
                    y1={276}
                    x2={140}
                    y2={276}
                    className="stroke-accent-brand"
                    strokeWidth={2}
                />
                <text
                    x={146}
                    y={281}
                    className="fill-muted-foreground font-mono text-[10px]"
                >
                    Data Flow
                </text>
            </svg>
        </div>
    );
}

function DiagramBox({
    x,
    y,
    label,
    width = 130,
}: {
    x: number;
    y: number;
    label: string;
    width?: number;
}) {
    return (
        <>
            <rect
                x={x}
                y={y}
                width={width}
                height={50}
                rx={6}
                className="fill-surface-muted stroke-border"
                strokeWidth={1}
            />
            <text
                x={x + width / 2}
                y={y + 29}
                textAnchor="middle"
                className="fill-primary font-mono text-[12px]"
            >
                {label}
            </text>
        </>
    );
}

function SmallBox({ x, y, label }: { x: number; y: number; label: string }) {
    return (
        <>
            <rect
                x={x}
                y={y}
                width={75}
                height={32}
                rx={4}
                className="fill-surface-muted stroke-border"
                strokeWidth={1}
            />
            <text
                x={x + 37.5}
                y={y + 20}
                textAnchor="middle"
                className="fill-primary font-mono text-[11px]"
            >
                {label}
            </text>
        </>
    );
}

function Arrow({
    x1,
    y1,
    x2,
    y2,
}: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}) {
    return (
        <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            className="stroke-accent-brand"
            strokeWidth={2}
            markerEnd="url(#arrowhead)"
        />
    );
}
