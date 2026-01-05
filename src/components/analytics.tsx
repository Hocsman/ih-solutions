"use client";

import Script from "next/script";

export function PlausibleAnalytics() {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    const scriptUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL || "https://plausible.io/js/script.js";

    if (!domain) {
        return null;
    }

    return (
        <Script
            defer
            data-domain={domain}
            src={scriptUrl}
            strategy="afterInteractive"
        />
    );
}

// Helper to track custom events
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
    if (typeof window !== "undefined" && (window as unknown as { plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void }).plausible) {
        (window as unknown as { plausible: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void }).plausible(eventName, { props });
    }
}
