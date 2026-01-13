import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    size?: "default" | "lg" | "sm";
    variant?: "default" | "outline";
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
    ({ className, asChild = false, size = "default", variant = "default", children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const sizeClasses = {
            sm: "h-9 px-4 text-sm",
            default: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
        };

        const baseClasses = cn(
            "group relative inline-flex items-center justify-center gap-2",
            "font-semibold rounded-xl",
            "transition-all duration-300 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:pointer-events-none disabled:opacity-50",
            sizeClasses[size]
        );

        if (variant === "outline") {
            return (
                <Comp
                    ref={ref}
                    className={cn(
                        baseClasses,
                        "border border-primary/50 bg-transparent text-primary",
                        "hover:bg-primary/10 hover:border-primary",
                        "hover:shadow-lg hover:shadow-primary/20",
                        className
                    )}
                    {...props}
                >
                    {children}
                </Comp>
            );
        }

        return (
            <Comp
                ref={ref}
                className={cn(
                    baseClasses,
                    "bg-gradient-to-r from-primary via-primary/90 to-primary",
                    "text-primary-foreground",
                    "hover:shadow-lg hover:shadow-primary/25",
                    "hover:-translate-y-0.5",
                    "motion-reduce:hover:translate-y-0",
                    className
                )}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);

GlowButton.displayName = "GlowButton";

