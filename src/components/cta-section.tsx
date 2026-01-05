import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

interface CTASectionProps {
    title: string;
    description: string;
    primaryCTA: {
        text: string;
        href: string;
        external?: boolean;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    className?: string;
}

export function CTASection({
    title,
    description,
    primaryCTA,
    secondaryCTA,
    className
}: CTASectionProps) {
    return (
        <Section className={cn("bg-gradient-to-b from-muted/30 to-background", className)}>
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                    {description}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="font-semibold">
                        {primaryCTA.external ? (
                            <a
                                href={primaryCTA.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                            >
                                {primaryCTA.text}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        ) : (
                            <Link href={primaryCTA.href} className="inline-flex items-center gap-2">
                                {primaryCTA.text}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        )}
                    </Button>
                    {secondaryCTA && (
                        <Button asChild variant="outline" size="lg" className="font-semibold">
                            <Link href={secondaryCTA.href}>
                                {secondaryCTA.text}
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </Section>
    );
}
