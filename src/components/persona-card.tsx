import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PersonaCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function PersonaCard({ icon: Icon, title, description, className }: PersonaCardProps) {
    return (
        <div className={cn(
            "flex flex-col items-center text-center p-6 rounded-xl",
            "bg-card/60 backdrop-blur-sm border border-border/40",
            "transition-all duration-300 hover:border-primary/30",
            className
        )}>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    );
}

interface PersonaRowProps {
    personas: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    className?: string;
}

export function PersonaRow({ personas, className }: PersonaRowProps) {
    return (
        <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6",
            className
        )}>
            {personas.map((persona, index) => (
                <PersonaCard key={index} {...persona} />
            ))}
        </div>
    );
}
