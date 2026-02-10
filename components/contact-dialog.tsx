"use client";

import { useState } from "react";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";


export function ContactDialog() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(null);

        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    from: formData.email,
                    message: formData.message,
                }),
            });

            if (!response.ok) throw new Error("Failed to send message.");

            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSuccess(false), 5000);
        } catch (err: unknown) {
            const message =
                err instanceof Error ? err.message : "Something went wrong.";
            setError(message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="rounded-lg p-2">
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-primary"
                    >
                        Name
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="rounded-md border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted-foreground transition-colors duration-150 focus:border-accent-brand focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-primary"
                    >
                        Email
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="rounded-md border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted-foreground transition-colors duration-150 focus:border-accent-brand focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-primary"
                    >
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the role or project..."
                        rows={5}
                        required
                        className="resize-y rounded-md border border-border bg-background px-4 py-2.5 text-sm text-primary placeholder:text-muted-foreground transition-colors duration-150 focus:border-accent-brand focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-brand px-6 py-3 text-sm font-medium text-accent-brand-foreground transition-colors duration-150 hover:bg-accent-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                    {loading ? (
                        <>
                            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <FiSend className="h-4 w-4" />
                            Send Message
                        </>
                    )}
                </button>

                {/* Success feedback */}
                {success && (
                    <div className="flex items-center gap-2 rounded-md border border-success/30 bg-success/5 px-4 py-3">
                        <FiCheck className="h-4 w-4 shrink-0 text-success" />
                        <p className="text-sm text-success">
                            Message sent. I&apos;ll get back to you soon.
                        </p>
                    </div>
                )}

                {/* Error feedback */}
                {error && (
                    <div className="flex items-center gap-2 rounded-md border border-error/30 bg-error/5 px-4 py-3">
                        <FiAlertCircle className="h-4 w-4 shrink-0 text-error" />
                        <p className="text-sm text-error">{error}</p>
                    </div>
                )}
            </form>
        </div>
    );
}