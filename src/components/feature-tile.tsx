import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureTileProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function FeatureTile({ icon: Icon, title, description, className }: FeatureTileProps) {
    return (
        <div className={cn(
            "group p-5 rounded-xl",
            "bg-card/60 backdrop-blur-sm border border-border/40",
            "transition-all duration-300",
            "hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
            className
        )}>
            <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                    <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1">{title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

interface FeatureTilesGridProps {
    features: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    className?: string;
}

export function FeatureTilesGrid({ features, className }: FeatureTilesGridProps) {
    return (
        <div className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
            className
        )}>
            {features.map((feature, index) => (
                <FeatureTile key={index} {...feature} />
            ))}
        </div>
    );
}
