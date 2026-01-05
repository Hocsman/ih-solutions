import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TrustItemProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function TrustItem({ icon: Icon, title, description, className }: TrustItemProps) {
    return (
        <div className={cn(
            "flex flex-col items-center text-center p-6 rounded-2xl",
            "bg-card/50 backdrop-blur-sm border border-border/30",
            "transition-all duration-300 hover:bg-card/80 hover:border-primary/20",
            className
        )}>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-base font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}
