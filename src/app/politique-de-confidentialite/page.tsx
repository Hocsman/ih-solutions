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
    title: "Politique de confidentialité",
    description: "Politique de confidentialité et protection des données personnelles d'IH Solutions.",
};

const tocItems = [
    { id: "introduction", label: "Introduction" },
    { id: "responsable", label: "Responsable du traitement" },
    { id: "donnees", label: "Données collectées" },
    { id: "finalites", label: "Finalités et bases légales" },
    { id: "duree", label: "Durée de conservation" },
    { id: "destinataires", label: "Destinataires" },
    { id: "transferts", label: "Transferts hors UE" },
    { id: "droits", label: "Vos droits" },
    { id: "securite", label: "Sécurité" },
    { id: "modifications", label: "Modifications" },
];

export default function PolitiqueConfidentialitePage() {
    return (
        <LegalLayout
            title="Politique de confidentialité"
            subtitle="Comment nous collectons, utilisons et protégeons vos données personnelles."
            badges={["RGPD", "Protection des données", "Transparence"]}
            lastUpdated="5 janvier 2026"
            tocItems={tocItems}
            contactEmail="contact@ihsolutions.fr"
        >
            <LegalSection id="introduction" title="Introduction">
                <p>
                    IH Solutions (« nous », « notre ») s'engage à protéger la vie privée des
                    utilisateurs de son site web <strong>ih-solutions.fr</strong> (le « Site »).
                </p>
                <p className="mt-4">
                    Cette politique de confidentialité explique comment nous collectons, utilisons
                    et protégeons vos données personnelles, conformément au Règlement Général sur
                    la Protection des Données (RGPD) et à la Loi Informatique et Libertés.
                </p>
            </LegalSection>

            <LegalSection id="responsable" title="Responsable du traitement">
                <p>Le responsable du traitement des données personnelles est :</p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg not-prose">
                    <p className="font-semibold">IH Solutions</p>
                    <p className="text-sm text-muted-foreground mt-2">
                        66 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                    </p>
                    <p className="text-sm mt-2">
                        Email :{" "}
                        <a href="mailto:contact@ihsolutions.fr" className="text-primary hover:underline">
                            contact@ihsolutions.fr
                        </a>
                    </p>
                </div>
            </LegalSection>

            <LegalSection id="donnees" title="Données collectées">
                <p>Nous collectons les données suivantes :</p>

                <LegalSubSection title="Formulaire de contact">
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Nom</li>
                        <li>Adresse email</li>
                        <li>Contenu du message</li>
                    </ul>
                </LegalSubSection>

                <LegalDivider />

                <LegalSubSection title="Données techniques">
                    <p>
                        Lors de votre navigation, nous pouvons collecter automatiquement :
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Pages visitées (anonymisées)</li>
                        <li>Durée de visite (anonymisée)</li>
                        <li>Type de navigateur et appareil (sans identification personnelle)</li>
                    </ul>
                    <div className="mt-4">
                        <InfoCard variant="security">
                            Nous utilisons Plausible Analytics, une solution respectueuse de la vie
                            privée qui ne dépose aucun cookie et ne collecte aucune donnée
                            personnelle identifiable.
                        </InfoCard>
                    </div>
                </LegalSubSection>
            </LegalSection>

            <LegalSection id="finalites" title="Finalités et bases légales">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm mt-4 not-prose">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold">Finalité</th>
                                <th className="text-left py-3 px-4 font-semibold">Base légale</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr>
                                <td className="py-3 px-4">Répondre aux demandes de contact</td>
                                <td className="py-3 px-4 text-muted-foreground">Intérêt légitime</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Améliorer le site et l'expérience utilisateur</td>
                                <td className="py-3 px-4 text-muted-foreground">Intérêt légitime</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Prévenir les abus (anti-spam)</td>
                                <td className="py-3 px-4 text-muted-foreground">Intérêt légitime</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </LegalSection>

            <LegalSection id="duree" title="Durée de conservation">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm mt-4 not-prose">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="text-left py-3 px-4 font-semibold">Type de données</th>
                                <th className="text-left py-3 px-4 font-semibold">Durée</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr>
                                <td className="py-3 px-4">Demandes de contact</td>
                                <td className="py-3 px-4 text-muted-foreground">12 mois après le dernier échange</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4">Données de navigation</td>
                                <td className="py-3 px-4 text-muted-foreground">Anonymisées immédiatement</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </LegalSection>

            <LegalSection id="destinataires" title="Destinataires des données">
                <p>Vos données sont uniquement accessibles par l'équipe IH Solutions.</p>
                <p className="mt-4">Nous utilisons les sous-traitants suivants :</p>
                <ul className="mt-4 space-y-3 not-prose">
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div>
                            <p className="font-semibold">Resend</p>
                            <p className="text-sm text-muted-foreground">Envoi d'emails (données chiffrées en transit)</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div>
                            <p className="font-semibold">Vercel</p>
                            <p className="text-sm text-muted-foreground">Hébergement du site</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div>
                            <p className="font-semibold">Plausible Analytics</p>
                            <p className="text-sm text-muted-foreground">Analytics sans cookies (données anonymes)</p>
                        </div>
                    </li>
                </ul>
            </LegalSection>

            <LegalSection id="transferts" title="Transferts hors UE">
                <p>
                    Certains de nos sous-traitants (Vercel, Resend) sont situés aux États-Unis.
                </p>
                <p className="mt-4">
                    Les transferts sont encadrés par les clauses contractuelles types de la
                    Commission européenne, garantissant un niveau de protection adéquat
                    conformément au RGPD.
                </p>
            </LegalSection>

            <LegalSection id="droits" title="Vos droits">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="mt-4 space-y-2 not-prose">
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-sm shrink-0 w-32">Droit d'accès</span>
                        <span className="text-sm text-muted-foreground">Obtenir une copie de vos données</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-sm shrink-0 w-32">Droit de rectification</span>
                        <span className="text-sm text-muted-foreground">Corriger des données inexactes</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-sm shrink-0 w-32">Droit à l'effacement</span>
                        <span className="text-sm text-muted-foreground">Demander la suppression de vos données</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-sm shrink-0 w-32">Droit à la limitation</span>
                        <span className="text-sm text-muted-foreground">Restreindre l'utilisation de vos données</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-sm shrink-0 w-32">Droit à la portabilité</span>
                        <span className="text-sm text-muted-foreground">Recevoir vos données dans un format structuré</span>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold text-sm shrink-0 w-32">Droit d'opposition</span>
                        <span className="text-sm text-muted-foreground">Vous opposer au traitement de vos données</span>
                    </li>
                </ul>

                <LegalDivider />

                <LegalSubSection title="Exercer vos droits">
                    <p>
                        Pour exercer ces droits, contactez-nous à{" "}
                        <a href="mailto:contact@ihsolutions.fr" className="text-primary hover:underline">
                            contact@ihsolutions.fr
                        </a>.
                    </p>
                    <p className="mt-2">
                        Nous répondrons dans un délai d'un mois suivant votre demande.
                    </p>
                </LegalSubSection>

                <LegalDivider />

                <LegalSubSection title="Réclamation">
                    <p>
                        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire
                        une réclamation auprès de la CNIL (
                        <a
                            href="https://www.cnil.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            www.cnil.fr
                        </a>
                        ).
                    </p>
                </LegalSubSection>
            </LegalSection>

            <LegalSection id="securite" title="Sécurité">
                <p>
                    Nous mettons en œuvre des mesures de sécurité appropriées pour protéger
                    vos données :
                </p>
                <ul className="mt-4 space-y-2 not-prose text-sm">
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Chiffrement des données en transit (HTTPS/TLS)
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Accès restreint aux données personnelles
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Hébergement sur infrastructure sécurisée
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                        Validation et assainissement des entrées utilisateur
                    </li>
                </ul>
                <div className="mt-4">
                    <InfoCard variant="info">
                        Aucune méthode de transmission ou de stockage électronique n'est
                        totalement sûre. Nous nous efforçons d'utiliser des moyens
                        commercialement acceptables pour protéger vos données.
                    </InfoCard>
                </div>
            </LegalSection>

            <LegalSection id="modifications" title="Modifications">
                <p>
                    Nous pouvons mettre à jour cette politique de confidentialité à tout moment.
                    La date de dernière mise à jour est indiquée en haut de cette page.
                </p>
                <p className="mt-4">
                    Nous vous encourageons à consulter régulièrement cette page pour rester
                    informé de nos pratiques.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 not-prose">
                    <Link
                        href="/mentions-legales"
                        className="text-sm text-primary hover:underline"
                    >
                        Mentions légales →
                    </Link>
                    <Link
                        href="/cookies"
                        className="text-sm text-primary hover:underline"
                    >
                        Politique cookies →
                    </Link>
                </div>
            </LegalSection>
        </LegalLayout>
    );
}
