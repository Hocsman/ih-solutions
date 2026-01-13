"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Home, Package, Users, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Container } from "./container";

const navigation = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Produits", href: "/products", icon: Package },
    { name: "À propos", href: "/about", icon: Users },
];

export function SiteHeader() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-24 items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center font-bold text-xl tracking-tight text-foreground transition-all duration-300 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
                    >
                        <Image
                            src="/logo.png"
                            alt="IH Solutions"
                            width={300}
                            height={80}
                            className="h-20 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                    pathname === item.href
                                        ? "text-primary bg-primary/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                                )}
                                aria-current={pathname === item.href ? "page" : undefined}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                                )}
                            </Link>
                        ))}
                        <Button asChild size="sm" className="ml-4">
                            <Link href="/contact">Nous contacter</Link>
                        </Button>
                    </nav>

                    {/* Mobile Navigation */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" aria-label="Ouvrir le menu" className="relative">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl">
                            <SheetTitle className="text-left mb-8">
                                <Image
                                    src="/logo.png"
                                    alt="IH Solutions"
                                    width={150}
                                    height={42}
                                    className="h-11 w-auto"
                                />
                            </SheetTitle>
                            <nav className="flex flex-col gap-2" aria-label="Navigation mobile">
                                {navigation.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                                pathname === item.href
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                                            )}
                                            aria-current={pathname === item.href ? "page" : undefined}
                                        >
                                            <Icon className="h-5 w-5" />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                                <div className="mt-6 pt-6 border-t border-border">
                                    <Button asChild className="w-full" size="lg">
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            Nous contacter
                                        </Link>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
