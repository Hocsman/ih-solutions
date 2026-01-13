"use client";

import { cn } from "@/lib/utils";

interface OrbitalSphereProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function OrbitalSphere({ className, size = "md" }: OrbitalSphereProps) {
    const sizeClasses = {
        sm: "w-48 h-48",
        md: "w-72 h-72 md:w-80 md:h-80",
        lg: "w-96 h-96",
    };

    return (
        <div
            className={cn(
                "relative flex items-center justify-center",
                sizeClasses[size],
                className
            )}
            aria-hidden="true"
        >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl animate-pulse-glow" />

            {/* Orbit 1 - Largest, slowest */}
            <div className="absolute inset-0 animate-orbit-slow">
                <div
                    className="absolute inset-0 rounded-full border border-primary/20"
                    style={{ transform: "rotateX(75deg)" }}
                >
                    {/* Orbit Point */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-2 h-2 rounded-full bg-primary glow-violet-sm" />
                    </div>
                </div>
            </div>

            {/* Orbit 2 - Medium */}
            <div className="absolute inset-[15%] animate-orbit">
                <div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    style={{ transform: "rotateX(70deg) rotateY(20deg)" }}
                >
                    {/* Orbit Point */}
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/80 glow-violet-sm" />
                    </div>
                </div>
            </div>

            {/* Orbit 3 - Innermost, fastest, reverse */}
            <div className="absolute inset-[30%] animate-orbit-reverse">
                <div
                    className="absolute inset-0 rounded-full border border-primary/40"
                    style={{ transform: "rotateX(65deg) rotateY(-15deg)" }}
                >
                    {/* Orbit Point */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <div className="w-3 h-3 rounded-full bg-primary glow-violet" />
                    </div>
                </div>
            </div>

            {/* Central Sphere */}
            <div className="relative z-10 w-1/3 h-1/3 rounded-full overflow-hidden">
                {/* Sphere gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-primary/20 rounded-full" />

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full" />

                {/* Inner glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/80 via-primary/50 to-primary/30 glow-violet" />

                {/* Core */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60">
                    {/* Highlight */}
                    <div className="absolute top-1 left-1 w-1/3 h-1/3 rounded-full bg-white/30 blur-sm" />
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute w-1.5 h-1.5 rounded-full bg-primary/60 animate-float" style={{ top: "10%", left: "20%" }} />
            <div className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float" style={{ top: "70%", right: "15%", animationDelay: "1s" }} />
            <div className="absolute w-2 h-2 rounded-full bg-primary/50 animate-float" style={{ bottom: "20%", left: "10%", animationDelay: "2s" }} />
        </div>
    );
}
