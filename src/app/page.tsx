import Link from "next/link";
import Image from "next/image";
import { Mail, Rocket, Sparkles } from "lucide-react";
import { GlowButton } from "@/components/glow-button";
import { OrbitalSphere } from "@/components/orbital-sphere";

export default function HomePage() {
    return (
        <section className="relative overflow-hidden bg-hero-enhanced min-h-[calc(100vh-6rem)] flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-enhanced opacity-30" />
            <div className="absolute inset-0 bg-dots-pattern opacity-20" />

            {/* Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2" />

            <div className="relative z-10 container mx-auto px-4 py-16 text-center">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/logo.png"
                        alt="IH Solutions"
                        width={200}
                        height={56}
                        className="h-14 w-auto"
                        priority
                    />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
                    <Rocket className="w-4 h-4" />
                    <span>Bientôt disponible</span>
                </div>

                {/* Orbital Sphere */}
                <div className="flex justify-center my-8">
                    <OrbitalSphere size="md" />
                </div>

                {/* Main Title */}
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                    <span className="block text-foreground">Notre site fait</span>
                    <span className="block mt-2 text-gradient-violet">
                        peau neuve
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
                    Nous travaillons pour vous offrir une nouvelle expérience.
                    Revenez bientôt pour découvrir nos solutions SaaS innovantes.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <GlowButton asChild size="lg">
                        <Link href="mailto:contact@ih-solutions.fr">
                            <Mail className="mr-2 h-5 w-5" />
                            Nous contacter
                        </Link>
                    </GlowButton>
                </div>

                {/* Footer Note */}
                <div className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>IH Solutions - Éditeur de solutions SaaS</span>
                </div>
            </div>
        </section>
    );
}
