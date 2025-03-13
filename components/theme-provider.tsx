"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { Toaster } from "@/components/ui/sonner"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <main>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props}>
                {children}
            </NextThemesProvider>
            <Toaster />
        </main>
    )
}

