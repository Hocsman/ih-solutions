import type { Metadata } from "next";
import Link from "next/link";
import { Target, Lightbulb, Handshake, Search, Wrench, Rocket, ArrowRight, Sparkles, Shield, Users } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "À propos",
    description: "Découvrez IH Solutions : notre mission, nos valeurs et notre approche pour accompagner les entreprises françaises dans leur transformation digitale.",
    openGraph: {
        title: "À propos | IH Solutions",
        description: "Découvrez IH Solutions : notre mission, nos valeurs et notre approche.",
    },
};

const values = [
    {
        icon: Target,
        title: "Excellence",
        description: "Nous visons l'excellence dans chaque ligne de code et chaque interaction client.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Nous développons des solutions à la pointe de la technologie pour anticiper vos besoins.",
    },
    {
        icon: Handshake,
        title: "Proximité",
        description: "Nous construisons des relations durables basées sur la confiance et l'écoute.",
    },
];

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Analyse",
        description: "Étude de vos besoins et processus métiers.",
    },
    {
        icon: Wrench,
        number: "02",
        title: "Conception",
        description: "Solutions sur-mesure adaptées à votre contexte.",
    },
    {
        icon: Rocket,
        number: "03",
        title: "Déploiement",
        description: "Accompagnement dans la mise en place.",
    },
];

const differentiators = [
    {
        icon: Sparkles,
        title: "Expertise française",
        description: "Équipe basée en France, solutions conformes aux réglementations locales.",
    },
    {
        icon: Shield,
        title: "Sécurité native",
        description: "Protection des données intégrée dès la conception de nos produits.",
    },
    {
        icon: Users,
        title: "Relation privilégiée",
        description: "Un interlocuteur dédié pour chaque client, disponible et réactif.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-hero-gradient">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Section className="relative pt-20 pb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                                À propos d'IH Solutions
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Éditeur français de solutions SaaS, IH Solutions accompagne les entreprises
                            dans leur transformation digitale depuis la France.
                        </p>
                    </div>
                </Section>
            </section>

            {/* Mission Section */}
            <Section>
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                        <h2 className="text-2xl font-bold">Notre mission</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Chez IH Solutions, notre mission est de développer des logiciels métiers qui simplifient
                            le quotidien des entreprises françaises. Nous croyons que la technologie doit être un
                            levier de croissance accessible à tous, et non une source de complexité.
                        </p>
                        <p>
                            Nos solutions SaaS sont conçues pour être intuitives, sécurisées et performantes.
                            Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs
                            enjeux et leur proposer des outils qui font vraiment la différence.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Values Section */}
            <Section className="bg-muted/30">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Nos valeurs</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Les principes qui guident notre travail au quotidien.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {values.map((value) => (
                        <Card key={value.title} className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                            <CardContent className="pt-8 pb-6">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 text-primary">
                                    <value.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Timeline / Approach Section */}
            <Section className="bg-glow">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Notre méthode</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Une approche structurée pour garantir le succès de vos projets.
                    </p>
                </div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden md:block relative">
                    <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
                    <div className="grid grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative flex flex-col items-center text-center">
                                <div className="relative z-10 mb-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary text-xs font-bold text-primary">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="md:hidden space-y-6">
                    {steps.map((step, index) => (
                        <div key={step.number} className="relative flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <step.icon className="h-5 w-5" />
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-border mt-2" />
                                )}
                            </div>
                            <div className="pb-6">
                                <span className="text-xs font-bold text-primary">Étape {step.number}</span>
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Differentiators Section */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Ce qui nous différencie</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Pourquoi les entreprises nous font confiance.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {differentiators.map((item) => (
                        <div
                            key={item.title}
                            className="group p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-gradient-to-b from-muted/30 to-background">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Envie d'en savoir plus ?
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Découvrez nos produits ou contactez-nous pour discuter de vos besoins.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="font-semibold">
                            <Link href="/products">
                                Voir nos produits
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="font-semibold">
                            <Link href="/contact">Nous contacter</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
