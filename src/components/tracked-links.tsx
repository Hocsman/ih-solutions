"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { trackEvent } from "@/components/analytics";

interface TrackedLinkProps {
    href: string;
    productId: string;
    children: React.ReactNode;
    className?: string;
}

export function TrackedProductLink({ href, productId, children, className }: TrackedLinkProps) {
    const handleClick = () => {
        trackEvent("outbound_product_click", { product: productId });
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
}

interface TrackedDemoLinkProps {
    children: React.ReactNode;
    className?: string;
}

export function TrackedDemoLink({ children, className }: TrackedDemoLinkProps) {
    const handleClick = () => {
        trackEvent("demo_click");
    };

    return (
        <Link href="/contact" onClick={handleClick} className={className}>
            {children}
        </Link>
    );
}
