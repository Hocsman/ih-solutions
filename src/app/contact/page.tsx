"use client";

import { useState, useTransition } from "react";
import { Mail, Send, CheckCircle, MapPin, Loader2 } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/lib/actions/contact";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
    general?: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formDataObj = new FormData(form);

        startTransition(async () => {
            const result = await submitContactForm({
                name: formDataObj.get("name") as string,
                email: formDataObj.get("email") as string,
                message: formDataObj.get("message") as string,
                honeypot: formDataObj.get("website") as string, // honeypot field
            });

            if (result.success) {
                setIsSubmitted(true);
                // Track event
                if (typeof window !== "undefined" && (window as unknown as { plausible?: (event: string) => void }).plausible) {
                    (window as unknown as { plausible: (event: string) => void }).plausible("contact_submit");
                }
            } else {
                setErrors(result.errors || {});
            }
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    if (isSubmitted) {
        return (
            <section className="relative overflow-hidden bg-hero-gradient min-h-[70vh] flex items-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Section className="relative">
                    <Card className="max-w-md mx-auto text-center bg-card/80 backdrop-blur-sm border-border/50">
                        <CardContent className="pt-8 pb-6">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-green-500" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Message envoyé !</h2>
                            <p className="text-muted-foreground mb-6">
                                Merci pour votre message. Notre équipe vous répondra dans les meilleurs délais.
                            </p>
                            <Button onClick={() => setIsSubmitted(false)} variant="outline" className="font-semibold">
                                Envoyer un autre message
                            </Button>
                        </CardContent>
                    </Card>
                </Section>
            </section>
        );
    }

    return (
        <>
            {/* Header Section */}
            <section className="relative overflow-hidden bg-hero-gradient">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <Section className="relative pt-20 pb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                                Contactez-nous
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Une question sur nos produits ? Un projet à nous soumettre ?
                            Notre équipe est à votre écoute.
                        </p>
                    </div>
                </Section>
            </section>

            {/* Contact Form Section - Split Layout */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                            <h2 className="text-2xl font-bold">Parlons de votre projet</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Remplissez le formulaire ci-contre ou contactez-nous directement.
                            Nous vous répondrons dans les 24 heures ouvrées.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Email</p>
                                    <a
                                        href="mailto:contact@ih-solutions.fr"
                                        className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                                    >
                                        contact@ih-solutions.fr
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/40">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Adresse</p>
                                    <p className="text-sm text-muted-foreground">France</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl shadow-primary/5">
                        <CardHeader>
                            <CardTitle>Envoyez-nous un message</CardTitle>
                            <CardDescription>
                                Remplissez le formulaire et nous vous répondrons rapidement.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {/* Honeypot - invisible to users */}
                                <div className="absolute -top-[9999px] -left-[9999px]" aria-hidden="true">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        type="text"
                                        id="website"
                                        name="website"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                {errors.general && (
                                    <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                                        {errors.general}
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nom <span className="text-destructive">*</span>
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Votre nom"
                                        value={formData.name}
                                        onChange={handleChange}
                                        disabled={isPending}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className={cn(
                                            "transition-all duration-200",
                                            errors.name ? "border-destructive focus-visible:ring-destructive" : ""
                                        )}
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                                            <span className="h-1 w-1 rounded-full bg-destructive" />
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email <span className="text-destructive">*</span>
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="votre@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isPending}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        className={cn(
                                            "transition-all duration-200",
                                            errors.email ? "border-destructive focus-visible:ring-destructive" : ""
                                        )}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                                            <span className="h-1 w-1 rounded-full bg-destructive" />
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message <span className="text-destructive">*</span>
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Décrivez votre projet ou posez votre question..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={isPending}
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                        className={cn(
                                            "transition-all duration-200 resize-none",
                                            errors.message ? "border-destructive focus-visible:ring-destructive" : ""
                                        )}
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="text-sm text-destructive flex items-center gap-1" role="alert">
                                            <span className="h-1 w-1 rounded-full bg-destructive" />
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* RGPD Notice */}
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Les informations recueillies font l'objet d'un traitement informatique destiné à répondre à votre demande.
                                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                                    Pour plus d'informations, consultez notre{" "}
                                    <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                                        politique de confidentialité
                                    </a>.
                                </p>

                                <Button type="submit" className="w-full font-semibold" size="lg" disabled={isPending}>
                                    {isPending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            Envoyer le message
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </>
    );
}
