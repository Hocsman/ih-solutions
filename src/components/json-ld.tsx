import { productLandings } from "@/lib/product-landings";

interface JsonLdOrganizationProps {
    className?: string;
}

export function JsonLdOrganization({ className }: JsonLdOrganizationProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IH Solutions",
        "url": "https://ih-solutions.fr",
        "logo": "https://ih-solutions.fr/logo.png",
        "description": "Éditeur français de solutions SaaS innovantes pour les entreprises",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@ih-solutions.fr",
            "contactType": "customer service",
            "availableLanguage": "French"
        },
        "sameAs": []
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

interface JsonLdProductProps {
    productId: string;
}

export function JsonLdProduct({ productId }: JsonLdProductProps) {
    const landing = productLandings[productId];
    if (!landing) return null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": landing.name,
        "description": landing.heroDescription,
        "url": `https://ih-solutions.fr/products/${productId}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IH Solutions",
            "url": "https://ih-solutions.fr"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

interface JsonLdFaqProps {
    productId: string;
}

export function JsonLdFaq({ productId }: JsonLdFaqProps) {
    const landing = productLandings[productId];
    if (!landing || !landing.faq.length) return null;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": landing.faq.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
