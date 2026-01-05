import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, ArrowLeft } from "lucide-react";
import { Section } from "@/components/layout/section";
import { FeatureTilesGrid } from "@/components/feature-tile";
import { PersonaRow } from "@/components/persona-card";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { TrustItem } from "@/components/trust-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLdProduct, JsonLdFaq } from "@/components/json-ld";
import { productLandings } from "@/lib/product-landings";
import { products } from "@/lib/products";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(productLandings).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const landing = productLandings[slug];

    if (!landing) {
        return { title: "Produit non trouvé" };
    }

    return {
        title: landing.name,
        description: landing.heroDescription,
        openGraph: {
            title: `${landing.name} | IH Solutions`,
            description: landing.heroDescription,
            url: `https://ih-solutions.fr/products/${slug}`,
        },
        alternates: {
            canonical: `/products/${slug}`,
        },
    };
}

export default async function ProductLandingPage({ params }: PageProps) {
    const { slug } = await params;
    const landing = productLandings[slug];
    const product = products.find(p => p.id === slug);

    if (!landing || !product) {
        notFound();
    }

    return (
        <>
            {/* JSON-LD Structured Data */}
            <JsonLdProduct productId={slug} />
            <JsonLdFaq productId={slug} />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-hero-gradient">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Section className="relative pt-16 pb-20 md:pt-24 md:pb-28">
                    {/* Back link */}
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Tous les produits
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                                {landing.name}
                            </span>
                        </h1>
                        <p className="mt-4 text-xl font-medium text-primary">
                            {landing.tagline}
                        </p>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {landing.heroDescription}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="font-semibold">
                                <a
                                    href={landing.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2"
                                >
                                    Accéder à {landing.name}
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="font-semibold">
                                <Link href="/contact">Demander une démo</Link>
                            </Button>
                        </div>
                    </div>
                </Section>
            </section>

            {/* Benefits Section */}
            <Section className="bg-muted/30">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Les bénéfices clés</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Ce que {landing.name} apporte à votre entreprise.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {landing.benefits.map((benefit, index) => (
                        <Card key={index} className="text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                            <CardContent className="pt-8 pb-6">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-4 text-primary">
                                    <benefit.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Features Section */}
            <Section className="bg-glow">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Fonctionnalités</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Les outils essentiels pour votre quotidien.
                    </p>
                </div>
                <FeatureTilesGrid features={landing.features} />
            </Section>

            {/* Personas Section */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Pour qui ?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        {landing.name} s'adresse à ceux qui veulent simplifier leur quotidien.
                    </p>
                </div>
                <PersonaRow personas={landing.personas} />
            </Section>

            {/* Engagements Section */}
            <Section className="bg-muted/30">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Nos engagements</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Sécurité, conformité et accompagnement au cœur de notre approche.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {landing.engagements.map((engagement, index) => (
                        <TrustItem key={index} {...engagement} />
                    ))}
                </div>
            </Section>

            {/* FAQ Section */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Questions fréquentes</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Les réponses aux questions les plus courantes.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <FAQSection items={landing.faq} />
                </div>
            </Section>

            {/* CTA Final */}
            <CTASection
                title={`Prêt à découvrir ${landing.name} ?`}
                description="Accédez à la plateforme ou contactez-nous pour une démonstration personnalisée."
                primaryCTA={{
                    text: `Accéder à ${landing.name}`,
                    href: landing.href,
                    external: true,
                }}
                secondaryCTA={{
                    text: "Demander une démo",
                    href: "/contact",
                }}
            />
        </>
    );
}
