const publications = [
  {
    title:
      "Hierarchical Vector Indexing for Sub-Linear Retrieval in Large-Scale Knowledge Bases",
    authors: "H. Bharad, S. Chen, R. Patel",
    venue: "NeurIPS",
    year: "2024",
    status: "Published" as const,
    contribution:
      "Novel approach to hierarchical vector indexing reducing search latency by 45% on large-scale datasets while maintaining recall above 0.95.",
    paperLink: "#",
    codeLink: "#",
  },
  {
    title:
      "Adaptive Context Window Management for Production LLM Systems",
    authors: "H. Bharad, M. Kumar",
    venue: "ICML (Workshop on Efficient ML)",
    year: "2025",
    status: "Under Review" as const,
    contribution:
      "Dynamic context pruning strategy that reduces token consumption by 60% in production LLM pipelines without measurable accuracy degradation.",
    paperLink: "#",
    codeLink: null,
  },
];

export function PublicationsSection() {
  return (
    <section id="research" className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-20">
        <p className="text-sm font-normal uppercase tracking-widest text-accent-brand">
          Research
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-primary">
          Publications
        </h2>
        <p className="mt-2 mb-12 text-lg text-muted-foreground">
          Research informing production work
        </p>

        <div className="flex flex-col gap-8">
          {publications.map((pub) => (
            <article key={pub.title}>
              <a
                href={pub.paperLink}
                className="text-xl font-medium text-accent-brand transition-colors duration-150 hover:underline"
              >
                {pub.title}
              </a>

              <p className="mt-2 text-sm text-muted-foreground">
                {pub.authors} &bull; {pub.venue} &bull; {pub.year}
              </p>

              <div className="mt-3">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs ${pub.status === "Published"
                      ? "border-success/40 text-success"
                      : "border-accent-brand/40 text-accent-brand"
                    }`}
                >
                  {pub.status}
                </span>
              </div>

              <p className="mt-3 text-base leading-relaxed text-secondary-foreground">
                {pub.contribution}
              </p>

              <div className="mt-3 flex items-center gap-4">
                <a
                  href={pub.paperLink}
                  className="text-sm text-accent-brand transition-colors duration-150 hover:underline"
                >
                  {"Read Paper \u2192"}
                </a>
                {pub.codeLink && (
                  <a
                    href={pub.codeLink}
                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent-brand"
                  >
                    {"Code \u2192"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
