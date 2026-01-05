import type { Metadata } from "next";
import Link from "next/link";
import {
    LegalLayout,
    LegalSection,
    LegalSubSection,
    LegalDivider,
    InfoCard
} from "@/components/legal";

export const metadata: Metadata = {
    title: "Politique cookies",
    description: "Politique d'utilisation des cookies et traceurs sur le site IH Solutions.",
};

const tocItems = [
    { id: "definition", label: "Qu'est-ce qu'un cookie ?" },
    { id: "cookies-utilises", label: "Cookies utilisés" },
    { id: "analytics", label: "Mesure d'audience" },
    { id: "gestion", label: "Gérer vos préférences" },
    { id: "contact", label: "Contact" },
];

export default function CookiesPage() {
    return (
        <LegalLayout
            title="Politique cookies"
            subtitle="Transparence sur les cookies et traceurs utilisés sur notre site."
            badges={["Transparence", "Vie privée"]}
            lastUpdated="5 janvier 2026"
            tocItems={tocItems}
            contactEmail="contact@ihsolutions.fr"
        >
            <LegalSection id="definition" title="Qu'est-ce qu'un cookie ?">
                <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
                    tablette, smartphone) lors de la visite d'un site web. Il permet au site de
                    mémoriser des informations sur votre visite, comme votre langue préférée ou
                    d'autres paramètres.
                </p>
                <p className="mt-4">
                    Les cookies peuvent être « de session » (supprimés à la fermeture du
                    navigateur) ou « persistants » (conservés pendant une durée déterminée).
                </p>
            </LegalSection>

            <LegalSection id="cookies-utilises" title="Cookies utilisés sur ce site">
                <div className="not-prose">
                    <InfoCard variant="security" title="Bonne nouvelle !">
                        Ce site n'utilise <strong>aucun cookie</strong> pour son fonctionnement
                        ni pour la mesure d'audience.
                    </InfoCard>
                </div>

                <LegalSubSection title="Cookies strictement nécessaires">
                    <p>
                        Ces cookies sont indispensables au fonctionnement du site et ne peuvent
                        pas être désactivés.
                    </p>
                    <p className="mt-2">
                        <strong>Actuellement :</strong> Nous n'utilisons aucun cookie strictement
                        nécessaire sur ce site vitrine. Le site fonctionne sans déposer de cookies
                        sur votre navigateur.
                    </p>
                </LegalSubSection>

                <LegalDivider />

                <LegalSubSection title="Cookies de préférences">
                    <p>
                        Ces cookies permettent de mémoriser vos choix (langue, région, etc.).
                    </p>
                    <p className="mt-2">
                        <strong>Actuellement :</strong> Non utilisés sur ce site.
                    </p>
                </LegalSubSection>

                <LegalDivider />

                <LegalSubSection title="Cookies publicitaires">
                    <p>
                        Ces cookies sont utilisés pour vous proposer des publicités personnalisées.
                    </p>
                    <p className="mt-2">
                        <strong>Actuellement :</strong> Nous n'utilisons aucun cookie publicitaire
                        ni aucun réseau publicitaire sur ce site.
                    </p>
                </LegalSubSection>
            </LegalSection>

            <LegalSection id="analytics" title="Mesure d'audience">
                <p>
                    Pour comprendre comment les visiteurs utilisent notre site, nous utilisons
                    <strong> Plausible Analytics</strong>, une solution de mesure d'audience
                    respectueuse de la vie privée.
                </p>

                <div className="mt-6 not-prose">
                    <InfoCard variant="info" title="Pourquoi Plausible ?">
                        Plausible est conforme au RGPD par conception. Il ne nécessite pas de
                        bandeau cookie car il ne dépose aucun cookie et ne collecte aucune
                        donnée personnelle identifiable.
                    </InfoCard>
                </div>

                <LegalSubSection title="Ce que Plausible ne fait pas">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Aucun cookie déposé</li>
                        <li>Aucune donnée personnelle collectée</li>
                        <li>Aucun suivi entre les sites ou les sessions</li>
                        <li>Aucune adresse IP stockée (hashée et supprimée)</li>
                        <li>Aucune empreinte digitale du navigateur</li>
                    </ul>
                </LegalSubSection>

                <LegalDivider />

                <LegalSubSection title="Ce que nous mesurons">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Nombre de visiteurs (anonymisé)</li>
                        <li>Pages les plus consultées</li>
                        <li>Sources de trafic (sans données personnelles)</li>
                        <li>Pays d'origine (approximatif, non stocké)</li>
                    </ul>
                </LegalSubSection>

                <div className="mt-6">
                    <p className="text-sm text-muted-foreground">
                        Pour en savoir plus sur Plausible :{" "}
                        <a
                            href="https://plausible.io/privacy-focused-web-analytics"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            Privacy-focused web analytics
                        </a>
                    </p>
                </div>
            </LegalSection>

            <LegalSection id="gestion" title="Gérer vos préférences">
                <p>
                    Étant donné que nous n'utilisons pas de cookies, aucune action n'est
                    requise de votre part pour gérer les cookies sur notre site.
                </p>
                <p className="mt-4">
                    Si vous souhaitez gérer les cookies de manière générale dans votre
                    navigateur, voici les liens vers les pages d'aide des principaux
                    navigateurs :
                </p>

                <ul className="mt-4 space-y-2 not-prose">
                    <li className="p-3 bg-muted/50 rounded-lg">
                        <a
                            href="https://support.google.com/chrome/answer/95647"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                        >
                            Google Chrome →
                        </a>
                    </li>
                    <li className="p-3 bg-muted/50 rounded-lg">
                        <a
                            href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                        >
                            Mozilla Firefox →
                        </a>
                    </li>
                    <li className="p-3 bg-muted/50 rounded-lg">
                        <a
                            href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                        >
                            Safari →
                        </a>
                    </li>
                    <li className="p-3 bg-muted/50 rounded-lg">
                        <a
                            href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                        >
                            Microsoft Edge →
                        </a>
                    </li>
                </ul>
            </LegalSection>

            <LegalSection id="contact" title="Contact">
                <p>
                    Pour toute question concernant notre politique cookies ou nos pratiques
                    en matière de vie privée, contactez-nous à{" "}
                    <a
                        href="mailto:contact@ihsolutions.fr"
                        className="text-primary hover:underline"
                    >
                        contact@ihsolutions.fr
                    </a>.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 not-prose">
                    <Link
                        href="/mentions-legales"
                        className="text-sm text-primary hover:underline"
                    >
                        Mentions légales →
                    </Link>
                    <Link
                        href="/politique-de-confidentialite"
                        className="text-sm text-primary hover:underline"
                    >
                        Politique de confidentialité →
                    </Link>
                </div>
            </LegalSection>
        </LegalLayout>
    );
}
