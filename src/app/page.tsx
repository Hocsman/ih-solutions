import Link from "next/link";
import { ArrowRight, Shield, Zap, HeadphonesIcon, Clock, CheckCircle, Lock, Users, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product-card";
import { BentoCard } from "@/components/bento-card";
import { Button } from "@/components/ui/button";
import { GlowButton } from "@/components/glow-button";
import { OrbitalSphere } from "@/components/orbital-sphere";
import { products } from "@/lib/products";

const trustItems = [
    {
        icon: Shield,
        title: "Sécurité",
        description: "Protection des données conforme RGPD",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Solutions optimisées et réactives",
    },
    {
        icon: HeadphonesIcon,
        title: "Support",
        description: "Accompagnement dédié en français",
    },
];

const bentoItems = [
    {
        icon: Clock,
        title: "Livraison rapide",
        description: "Déploiement accéléré pour un time-to-value optimal.",
        highlights: ["Mise en production en quelques jours", "Onboarding simplifié"],
    },
    {
        icon: CheckCircle,
        title: "Qualité & fiabilité",
        description: "Des solutions testées et stables.",
        highlights: ["Tests automatisés", "Mises à jour régulières"],
    },
    {
        icon: Lock,
        title: "Sécurité & conformité",
        description: "Respect des bonnes pratiques et du RGPD.",
        highlights: ["Données hébergées en France", "Chiffrement de bout en bout"],
    },
    {
        icon: Users,
        title: "Support & accompagnement",
        description: "Une équipe dédiée à votre réussite.",
        highlights: ["Support réactif", "Formation incluse"],
    },
];

export default function HomePage() {
    return (
        <>
            {/* Hero Section - DataBahn Inspired */}
            <section className="relative overflow-hidden bg-hero-enhanced min-h-[90vh] flex flex-col">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-grid-enhanced opacity-30" />
                <div className="absolute inset-0 bg-dots-pattern opacity-20" />

                {/* Top Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

                <div className="relative flex-1 flex items-center">
                    <Section className="py-16 md:py-24 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            {/* Left: Text Content */}
                            <div className="flex flex-col order-2 lg:order-1">
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium w-fit mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Éditeur de solutions SaaS</span>
                                </div>

                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                                    <span className="block text-foreground">Solutions SaaS</span>
                                    <span className="block mt-2 text-gradient-violet">
                                        pour entreprises ambitieuses
                                    </span>
                                </h1>

                                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                                    IH Solutions développe des logiciels métiers innovants pour accompagner
                                    la croissance et la transformation digitale de votre entreprise.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <GlowButton asChild size="lg">
                                        <Link href="/products">
                                            Découvrir nos produits
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </GlowButton>
                                    <GlowButton asChild variant="outline" size="lg">
                                        <Link href="/contact">Demander une démo</Link>
                                    </GlowButton>
                                </div>

                                {/* Quick Stats */}
                                <div className="mt-12 flex flex-wrap gap-8">
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-primary">3</span>
                                        <span className="text-sm text-muted-foreground">Produits SaaS</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-primary">100%</span>
                                        <span className="text-sm text-muted-foreground">Made in France</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-bold text-primary">24/7</span>
                                        <span className="text-sm text-muted-foreground">Disponibilité</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Orbital Sphere */}
                            <div className="relative flex items-center justify-center order-1 lg:order-2">
                                <OrbitalSphere size="lg" className="scale-90 md:scale-100" />
                            </div>
                        </div>
                    </Section>
                </div>

                {/* Trust Row */}
                <Section className="pb-16 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {trustItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="group flex items-center gap-4 p-5 rounded-2xl card-databahn"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Section>
            </section>


            {/* Products Section */}
            <Section id="produits" className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

                <div className="relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            <span className="text-gradient-violet">Nos produits</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Trois solutions SaaS conçues pour répondre aux besoins spécifiques des entreprises.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Bento Grid Section */}
            <Section className="relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-hero-enhanced" />
                <div className="absolute inset-0 bg-grid-enhanced opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

                <div className="relative">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            <span className="text-gradient-violet">Pourquoi IH Solutions ?</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Un partenaire de confiance pour vos projets numériques.
                        </p>
                    </div>
                    <div className="bento-grid">
                        {bentoItems.map((item) => (
                            <BentoCard key={item.title} {...item} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <GlowButton asChild size="lg" variant="outline">
                            <Link href="/products">
                                Découvrir nos produits
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </GlowButton>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />

                <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Prêt à commencer ?</span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        <span className="text-gradient-violet">Transformez votre entreprise</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                        Contactez-nous pour discuter de vos besoins et découvrir comment nos solutions
                        peuvent vous aider à atteindre vos objectifs.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <GlowButton asChild size="lg">
                            <Link href="/contact">
                                Nous contacter
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </GlowButton>
                        <GlowButton asChild variant="outline" size="lg">
                            <Link href="/products">Voir nos produits</Link>
                        </GlowButton>
                    </div>
                </div>
            </Section>
        </>
    );
}

