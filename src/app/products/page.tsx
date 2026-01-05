import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export const metadata: Metadata = {
    title: "Nos Produits",
    description: "Découvrez les solutions SaaS d'IH Solutions : ChantiPay pour le BTP, Mon Rempart pour la cybersécurité, SimplRH pour la gestion RH.",
    openGraph: {
        title: "Nos Produits | IH Solutions",
        description: "Découvrez les solutions SaaS d'IH Solutions : ChantiPay, Mon Rempart, SimplRH.",
    },
};

export default function ProductsPage() {
    return (
        <>
            {/* Header Section */}
            <section className="relative overflow-hidden bg-hero-gradient">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Section className="relative pt-20 pb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                                Nos produits
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            IH Solutions édite trois solutions SaaS innovantes, chacune conçue pour répondre
                            à des besoins métiers spécifiques. Découvrez chaque produit en détail.
                        </p>
                    </div>
                </Section>
            </section>

            {/* Products Grid */}
            <Section className="bg-muted/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-glow">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Une question sur nos produits ?
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Notre équipe est disponible pour vous présenter nos solutions et répondre à vos questions.
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
