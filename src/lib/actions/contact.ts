"use server";

import { Resend } from "resend";

// Rate limiting in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 requests per minute

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    honeypot?: string;
    turnstileToken?: string;
}

interface ContactFormResult {
    success: boolean;
    message: string;
    errors?: {
        name?: string;
        email?: string;
        message?: string;
        general?: string;
    };
}

// Validation helpers
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
    return input.trim().replace(/<[^>]*>/g, "");
}

// Rate limiting check
function checkRateLimit(identifier: string): boolean {
    const now = Date.now();
    const record = rateLimitStore.get(identifier);

    if (!record || now > record.resetTime) {
        rateLimitStore.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return false;
    }

    record.count++;
    return true;
}

// Verify Turnstile token (if configured)
async function verifyTurnstile(token: string): Promise<boolean> {
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) return true; // Skip if not configured

    try {
        const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const data = await response.json();
        return data.success === true;
    } catch {
        console.error("Turnstile verification failed");
        return true; // Fail open if service unavailable
    }
}

export async function submitContactForm(formData: ContactFormData): Promise<ContactFormResult> {
    const errors: ContactFormResult["errors"] = {};

    // 1. Honeypot check
    if (formData.honeypot) {
        // Bot detected, return fake success
        return { success: true, message: "Votre message a été envoyé avec succès." };
    }

    // 2. Rate limiting (using email as identifier)
    const rateLimitId = formData.email.toLowerCase();
    if (!checkRateLimit(rateLimitId)) {
        return {
            success: false,
            message: "Trop de tentatives. Veuillez réessayer dans quelques minutes.",
            errors: { general: "Rate limit exceeded" },
        };
    }

    // 3. Server-side validation
    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const message = sanitizeInput(formData.message);

    if (!name || name.length < 2) {
        errors.name = "Le nom doit contenir au moins 2 caractères";
    }

    if (!email || !validateEmail(email)) {
        errors.email = "Veuillez entrer un email valide";
    }

    if (!message || message.length < 10) {
        errors.message = "Le message doit contenir au moins 10 caractères";
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "Veuillez corriger les erreurs ci-dessous.",
            errors,
        };
    }

    // 4. Turnstile verification (if token provided and configured)
    if (formData.turnstileToken && process.env.TURNSTILE_SECRET_KEY) {
        const turnstileValid = await verifyTurnstile(formData.turnstileToken);
        if (!turnstileValid) {
            return {
                success: false,
                message: "Vérification anti-spam échouée. Veuillez réessayer.",
                errors: { general: "Turnstile verification failed" },
            };
        }
    }

    // 5. Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@ih-solutions.fr";

    if (!resendApiKey || !toEmail) {
        console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variables");
        return {
            success: false,
            message: "Une erreur est survenue. Veuillez réessayer plus tard.",
            errors: { general: "Configuration error" },
        };
    }

    try {
        const resend = new Resend(resendApiKey);

        await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: `[IH Solutions] Nouveau message de ${name}`,
            replyTo: email,
            text: `
Nouveau message depuis le formulaire de contact IH Solutions

Nom: ${name}
Email: ${email}

Message:
${message}

---
Envoyé depuis ih-solutions.fr
      `.trim(),
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { border-bottom: 2px solid #6366f1; padding-bottom: 16px; margin-bottom: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { margin-top: 4px; }
    .message { background: #f9fafb; padding: 16px; border-radius: 8px; margin-top: 24px; }
    .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; color: #111;">Nouveau message de contact</h2>
    </div>
    <div class="field">
      <div class="label">Nom</div>
      <div class="value">${name}</div>
    </div>
    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${email}">${email}</a></div>
    </div>
    <div class="message">
      <div class="label">Message</div>
      <div class="value" style="white-space: pre-wrap;">${message}</div>
    </div>
    <div class="footer">
      <p>Envoyé depuis le formulaire de contact ih-solutions.fr</p>
    </div>
  </div>
</body>
</html>
      `.trim(),
        });

        return {
            success: true,
            message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les meilleurs délais.",
        };
    } catch (error) {
        console.error("Failed to send email:", error);
        return {
            success: false,
            message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
            errors: { general: "Email sending failed" },
        };
    }
}
