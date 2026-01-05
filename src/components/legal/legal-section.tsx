import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";

interface LegalSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
    showBackToTop?: boolean;
}

export function LegalSection({
    id,
    title,
    children,
    className,
    showBackToTop = true
}: LegalSectionProps) {
    return (
        <Card
            id={id}
            className={cn(
                "bg-card/80 backdrop-blur-sm border-border/50 scroll-mt-24",
                "hover:border-border/80 transition-colors duration-300",
                className
            )}
        >
            <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold tracking-tight flex items-center justify-between">
                    <span>{title}</span>
                    {showBackToTop && (
                        <a
                            href="#top"
                            className="text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 rounded-lg hover:bg-muted/50"
                            aria-label="Retour en haut"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </a>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="prose prose-neutral dark:prose-invert prose-sm max-w-none">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}

interface LegalSubSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function LegalSubSection({ title, children, className }: LegalSubSectionProps) {
    return (
        <div className={cn("mt-6 first:mt-0", className)}>
            <h3 className="font-semibold text-base mb-3">{title}</h3>
            <div className="text-muted-foreground leading-relaxed">{children}</div>
        </div>
    );
}

export function LegalDivider() {
    return <Separator className="my-6" />;
}
