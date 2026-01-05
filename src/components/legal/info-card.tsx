import { cn } from "@/lib/utils";
import { AlertCircle, Info, Calendar, Shield } from "lucide-react";

type InfoCardVariant = "info" | "warning" | "update" | "security";

const variantStyles: Record<InfoCardVariant, { icon: typeof Info; className: string }> = {
    info: {
        icon: Info,
        className: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-400",
    },
    warning: {
        icon: AlertCircle,
        className: "bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400",
    },
    update: {
        icon: Calendar,
        className: "bg-primary/10 border-primary/30 text-primary",
    },
    security: {
        icon: Shield,
        className: "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400",
    },
};

interface InfoCardProps {
    variant?: InfoCardVariant;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export function InfoCard({ variant = "info", title, children, className }: InfoCardProps) {
    const { icon: Icon, className: variantClassName } = variantStyles[variant];

    return (
        <div
            className={cn(
                "flex gap-3 p-4 rounded-xl border",
                variantClassName,
                className
            )}
            role="note"
        >
            <Icon className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1 min-w-0">
                {title && <p className="font-semibold text-sm mb-1">{title}</p>}
                <div className="text-sm leading-relaxed opacity-90">{children}</div>
            </div>
        </div>
    );
}
