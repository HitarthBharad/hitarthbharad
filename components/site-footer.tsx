import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { ContactDialog } from "./contact-dialog";

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
        { label: "Contact", href: "#contact" },
        { label: "GitHub", href: "https://github.com/HitarthBharad" },
        { label: "LinkedIn", href: "https://linkedin.com/in/hitarthbharad" },
    ],
};

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/HitarthBharad",
        icon: VscGithubAlt,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/hitarthbharad",
        icon: FiLinkedin,
    },
    {
        label: "Email",
        href: "mailto:hitarth.bharad@gmail.com",
        icon: FiMail,
    },
];

export function SiteFooter() {
    return (
        <footer id="contact" className="border-t border-border bg-surface-muted py-16 lg:py-20">
            <div className="mx-auto max-w-container px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
                    {/* Left column -- brand */}
                    <div className="lg:w-[50%]">
                        <p className="font-mono text-lg font-medium text-primary">
                            Hitarth Bharad
                        </p>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                            Open to new discussions and collaborations.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Contact</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md bg-surface-muted">
                                    <DialogHeader>
                                        <DialogTitle>Contact</DialogTitle>
                                    </DialogHeader>
                                    <ContactDialog />
                                </DialogContent>
                            </Dialog>

                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors duration-150 hover:border-accent-brand hover:text-accent-brand"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-[16px] w-[16px]" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right column -- links */}
                    <div className="lg:w-[50%]">
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
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p className="text-sm text-muted-foreground">
                        {"\u00A9 2026 Hitarth Bharad"}
                    </p>
                </div>
            </div>
        </footer>
    );
}
