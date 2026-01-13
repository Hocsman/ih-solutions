import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

// Icon mapping for products
const productIcons: Record<string, React.ReactNode> = {
    "chantipay": (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9Z" />
            <path d="M12 12h.01M8 12h.01M16 12h.01" />
            <path d="M2 9h20" />
        </svg>
    ),
    "mon-rempart": (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    ),
    "simplrh": (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
    ),
};

interface ProductCardProps {
    product: Product;
    className?: string;
    linkToLanding?: boolean;
}

export function ProductCard({ product, className, linkToLanding = true }: ProductCardProps) {
    const icon = productIcons[product.id] || productIcons["simplrh"];
    const internalHref = `/products/${product.id}`;

    return (
        <Card className={cn(
            "group relative flex flex-col h-full overflow-hidden rounded-2xl",
            "card-databahn",
            "transition-all duration-400 ease-out",
            "hover:-translate-y-2",
            "motion-reduce:hover:translate-y-0",
            className
        )}>
            {/* Enhanced glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                <div className="absolute -inset-1 bg-primary/5 blur-xl" />
            </div>

            <CardHeader className="pb-3 relative">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100">
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold tracking-tight">{product.name}</h3>
                            <Badge variant="secondary" className="mt-1 text-xs font-medium">
                                {product.audience}
                            </Badge>
                        </div>
                    </div>
                </div>
                <p className="mt-3 text-sm font-medium text-primary/80">
                    {product.tagline}
                </p>
            </CardHeader>

            <CardContent className="flex-1 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                    {product.badges.map((badge) => (
                        <Badge
                            key={badge}
                            variant="outline"
                            className="text-xs bg-background/50 border-border/50"
                        >
                            {badge}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="pt-4 flex flex-col gap-2">
                {linkToLanding ? (
                    <>
                        <Button asChild className="w-full group/btn">
                            <Link
                                href={internalHref}
                                className="inline-flex items-center justify-center gap-2"
                            >
                                En savoir plus
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:group-hover/btn:translate-x-0" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm" className="w-full text-muted-foreground">
                            <a
                                href={product.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2"
                            >
                                Accéder au site
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        </Button>
                    </>
                ) : (
                    <Button asChild className="w-full group/btn relative overflow-hidden">
                        <a
                            href={product.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2"
                        >
                            <span>Voir le produit</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 motion-reduce:group-hover/btn:translate-x-0" />
                            <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
