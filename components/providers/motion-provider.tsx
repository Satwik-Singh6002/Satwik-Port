"use client";

import { MotionConfig } from "framer-motion";
import { useEffect } from "react";

export default function MotionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // Suppress framer-motion warnings in console
        const originalWarn = console.warn;
        console.warn = (...args: unknown[]) => {
            const message = args[0];
            if (
                typeof message === "string" &&
                (message.includes("Reduced Motion") ||
                    message.includes("non-static position"))
            ) {
                return; // Suppress these specific warnings
            }
            originalWarn.apply(console, args);
        };

        return () => {
            console.warn = originalWarn;
        };
    }, []);

    return (
        <MotionConfig reducedMotion="never">
            {children}
        </MotionConfig>
    );
}
