"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ClientLayout = () => {
    const route = usePathname();

    useEffect(() => {
        if (!route) return;

        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const locale = navigator.language;
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        fetch("/api/visitor", {
            method: "POST",
            headers: { "Content-Type": "application/json" , "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`},
            body: JSON.stringify({
                route,
                timezone,
                locale,
                screenWidth,
                screenHeight,
                colorScheme
            })
        })

    }, [route]);

    return null;
}

export default ClientLayout;