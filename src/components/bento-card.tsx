import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    highlights?: string[];
    stat?: { value: string; label: string };
    className?: string;
}

export function BentoCard({
    icon: Icon,
    title,
    description,
    highlights,
    stat,
    className,
}: BentoCardProps) {
    return (
        <div className={cn("bento-card group", className)}>
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent text-primary transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                    <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold tracking-tight mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
            </div>

            {highlights && highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                    {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                            {highlight}
                        </li>
                    ))}
                </ul>
            )}

            {stat && (
                <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
            )}
        </div>
    );
}
