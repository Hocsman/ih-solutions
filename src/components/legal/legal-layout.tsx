import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { LegalToc, TocItem } from "./legal-toc";
import { InfoCard } from "./info-card";

interface LegalLayoutProps {
    title: string;
    subtitle?: string;
    badges?: string[];
    lastUpdated: string;
    tocItems: TocItem[];
    children: React.ReactNode;
    contactEmail?: string;
    dpoEmail?: string;
}

export function LegalLayout({
    title,
    subtitle,
    badges = [],
    lastUpdated,
    tocItems,
    children,
    contactEmail,
    dpoEmail,
}: LegalLayoutProps) {
    return (
        <>
            {/* Hero Section */}
            <section id="top" className="relative overflow-hidden bg-hero-gradient scroll-mt-16">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Section className="relative pt-16 pb-12 md:pt-20 md:pb-16">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                                {title}
                            </span>
                        </h1>
                        {subtitle && (
                            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                        {badges.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {badges.map((badge) => (
                                    <Badge key={badge} variant="secondary" className="text-xs">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </Section>
            </section>

            {/* Content Section */}
            <Section className="bg-glow py-12">
                {/* Mobile TOC */}
                <div className="mb-6 lg:hidden">
                    <LegalToc items={tocItems} contactEmail={contactEmail} dpoEmail={dpoEmail} />
                </div>

                {/* Last Updated Info */}
                <div className="mb-8 max-w-3xl lg:max-w-none lg:pr-80">
                    <InfoCard variant="update">
                        Dernière mise à jour : <strong>{lastUpdated}</strong>
                    </InfoCard>
                </div>

                {/* Grid: Content + Sticky TOC */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
                    {/* Main Content */}
                    <div className="space-y-6 min-w-0">
                        {children}
                    </div>

                    {/* Desktop TOC */}
                    <LegalToc
                        items={tocItems}
                        contactEmail={contactEmail}
                        dpoEmail={dpoEmail}
                        className="hidden lg:block"
                    />
                </div>

                {/* Disclaimer */}
                <div className="mt-12 max-w-3xl lg:max-w-none lg:pr-80">
                    <InfoCard variant="warning" title="Note importante">
                        Les informations présentées sur cette page sont fournies à titre indicatif.
                        Pour toute question spécifique, veuillez nous contacter directement.
                    </InfoCard>
                </div>
            </Section>
        </>
    );
}
