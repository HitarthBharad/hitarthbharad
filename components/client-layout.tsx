"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ClientLayout = () => {
    const route = usePathname();

    useEffect(() => {
        if (!route) return;

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const locale = navigator.language;
        const userAgent = navigator.userAgent;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        fetch("/api/visitor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                route,
                timezone,
                locale,
                userAgent,
                screenWidth,
                screenHeight,
                colorScheme
            })
        })

    }, [route]);

    return null;
}

export default ClientLayout;