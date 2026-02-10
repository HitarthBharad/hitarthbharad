import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin, FiMail } from "react-icons/fi";

const footerLinks = {
    Work: [
        { label: "Aegion", href: "#work" },
        { label: "Projects", href: "#projects" },
    ],
    Resources: [
        { label: "Resume", href: "#" },
        { label: "Publications", href: "#research" },
    ],
    Connect: [
        { label: "Email", href: "mailto:hitarth@example.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
    ],
};

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com",
        icon: VscGithubAlt,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: FiLinkedin,
    },
    {
        label: "Email",
        href: "mailto:hitarth@example.com",
        icon: FiMail,
    },
];

export function SiteFooter() {
    return (
        <footer id="contact" className="border-t border-border py-20 lg:py-24">
            <div className="mx-auto max-w-container px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    {/* Left column */}
                    <div className="lg:w-[60%]">
                        <h3 className="text-2xl font-semibold text-primary">
                            {"Let\u2019s Connect"}
                        </h3>
                        <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary-foreground">
                            Open to senior ML engineering roles, technical advisory, and
                            collaboration on production AI systems.
                        </p>
                        <a
                            href="mailto:hitarth@example.com"
                            className="mt-4 inline-block text-lg text-accent-brand transition-colors duration-150 hover:underline"
                        >
                            hitarth@example.com
                        </a>

                        <div className="mt-6 flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-accent-brand"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-[18px] w-[18px]" />
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="lg:w-[40%]">
                        <div className="grid grid-cols-3 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <p className="text-sm font-medium text-primary">
                                        {category}
                                    </p>
                                    <ul className="mt-3 flex flex-col gap-2">
                                        {links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        {"\u00A9 2024 Hitarth Bharad"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        {"Built with Next.js \u2022 Deployed on Vercel"}
                    </p>
                </div>
            </div>
        </footer>
    );
}
