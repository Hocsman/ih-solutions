import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-muted/30">
            <Container>
                <div className="py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} IH Solutions. Tous droits réservés.
                        </p>
                        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Liens légaux">
                            <Link
                                href="/mentions-legales"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                            >
                                Mentions légales
                            </Link>
                            <Link
                                href="/politique-de-confidentialite"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                            >
                                Confidentialité
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                            >
                                Cookies
                            </Link>
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
