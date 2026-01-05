import Link from "next/link";
import { ArrowRight, Shield, Zap, HeadphonesIcon, Clock, CheckCircle, Lock, Users } from "lucide-react";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product-card";
import { TrustItem } from "@/components/trust-item";
import { BentoCard } from "@/components/bento-card";
import { Button } from "@/components/ui/button";
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
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-hero-gradient">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="relative">
                    <Section className="pt-20 pb-16 md:pt-28 md:pb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left: Text Content */}
                            <div className="flex flex-col">
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block">Solutions SaaS</span>
                                    <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                                        pour entreprises ambitieuses
                                    </span>
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                                    IH Solutions développe des logiciels métiers innovants pour accompagner
                                    la croissance et la transformation digitale de votre entreprise.
                                </p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Button asChild size="lg" className="font-semibold">
                                        <Link href="/products">
                                            Découvrir nos produits
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="lg" className="font-semibold">
                                        <Link href="/contact">Demander une démo</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Product Highlights */}
                            <div className="relative lg:pl-8">
                                <div className="flex flex-col gap-4">
                                    {products.map((product, index) => (
                                        <Link
                                            key={product.id}
                                            href={product.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40 transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                                                {product.name.charAt(0)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-sm">{product.name}</p>
                                                <p className="text-xs text-muted-foreground truncate">{product.tagline}</p>
                                            </div>
                                            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary motion-reduce:group-hover:translate-x-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>

                {/* Trust Row */}
                <Section className="pt-0 pb-16 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {trustItems.map((item) => (
                            <TrustItem key={item.title} {...item} />
                        ))}
                    </div>
                </Section>
            </section>

            {/* Products Section */}
            <Section id="produits" className="bg-muted/30">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos produits</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trois solutions SaaS conçues pour répondre aux besoins spécifiques des entreprises.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Section>

            {/* Bento Grid Section */}
            <Section className="bg-glow">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pourquoi IH Solutions ?</h2>
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
                    <Button asChild size="lg" variant="outline" className="font-semibold">
                        <Link href="/products">
                            Découvrir nos produits
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-gradient-to-b from-muted/30 to-background">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Prêt à transformer votre entreprise ?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Contactez-nous pour discuter de vos besoins et découvrir comment nos solutions
                        peuvent vous aider à atteindre vos objectifs.
                    </p>
                    <Button asChild size="lg" className="mt-8 font-semibold">
                        <Link href="/contact">
                            Nous contacter
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </Section>
        </>
    );
}
