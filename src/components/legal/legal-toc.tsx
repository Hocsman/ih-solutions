"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, List } from "lucide-react";

export interface TocItem {
    id: string;
    label: string;
}

interface LegalTocProps {
    items: TocItem[];
    contactEmail?: string;
    dpoEmail?: string;
    className?: string;
}

export function LegalToc({ items, contactEmail = "contact@ihsolutions.fr", dpoEmail, className }: LegalTocProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile: Accordion */}
            <div className={cn("lg:hidden", className)}>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-4 text-left"
                        aria-expanded={isOpen}
                        aria-controls="toc-mobile"
                    >
                        <span className="flex items-center gap-2 font-semibold">
                            <List className="h-4 w-4" />
                            Sommaire
                        </span>
                        <ChevronDown
                            className={cn(
                                "h-4 w-4 text-muted-foreground transition-transform duration-200",
                                isOpen && "rotate-180"
                            )}
                        />
                    </button>
                    {isOpen && (
                        <CardContent id="toc-mobile" className="pt-0 pb-4">
                            <nav aria-label="Sommaire">
                                <ul className="space-y-1">
                                    {items.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </CardContent>
                    )}
                </Card>
            </div>

            {/* Desktop: Sticky */}
            <div className={cn("hidden lg:block", className)}>
                <div className="sticky top-24 space-y-4">
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base font-semibold flex items-center gap-2">
                                <List className="h-4 w-4" />
                                Sommaire
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <nav aria-label="Sommaire">
                                <ul className="space-y-1">
                                    {items.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className="block py-1.5 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </CardContent>
                    </Card>

                    {/* Contact Card */}
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base font-semibold">Contact & DPO</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-3">
                            <div>
                                <p className="text-xs text-muted-foreground mb-1">Contact général</p>
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className="text-sm text-primary hover:underline flex items-center gap-1.5"
                                >
                                    <Mail className="h-3.5 w-3.5" />
                                    {contactEmail}
                                </a>
                            </div>
                            {dpoEmail && (
                                <div>
                                    <p className="text-xs text-muted-foreground mb-1">Délégué à la Protection des Données</p>
                                    <a
                                        href={`mailto:${dpoEmail}`}
                                        className="text-sm text-primary hover:underline flex items-center gap-1.5"
                                    >
                                        <Mail className="h-3.5 w-3.5" />
                                        {dpoEmail}
                                    </a>
                                </div>
                            )}
                            <Button asChild variant="outline" size="sm" className="w-full mt-2">
                                <a href="/contact">Nous contacter</a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
