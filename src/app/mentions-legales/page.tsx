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
    title: "Mentions légales",
    description: "Mentions légales du site IH Solutions - Éditeur de solutions SaaS.",
};

const tocItems = [
    { id: "editeur", label: "Éditeur du site" },
    { id: "hebergement", label: "Hébergement" },
    { id: "produits", label: "Produits édités" },
    { id: "propriete", label: "Propriété intellectuelle" },
    { id: "responsabilite", label: "Responsabilité" },
    { id: "liens", label: "Liens externes" },
    { id: "droit", label: "Droit applicable" },
];

export default function MentionsLegalesPage() {
    return (
        <LegalLayout
            title="Mentions légales"
            subtitle="Informations légales relatives à l'éditeur du site et aux conditions d'utilisation."
            badges={["Conformité", "Transparence"]}
            lastUpdated="5 janvier 2026"
            tocItems={tocItems}
            contactEmail="contact@ihsolutions.fr"
        >
            <LegalSection id="editeur" title="Éditeur du site">
                <p>
                    Le site <strong>ih-solutions.fr</strong> est édité par :
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg not-prose">
                    <p className="font-semibold">IH Solutions</p>
                    <p className="text-sm text-muted-foreground mt-2">
                        66 Avenue des Champs-Élysées<br />
                        75008 Paris, France
                    </p>
                </div>
                <LegalDivider />
                <LegalSubSection title="Directeur de la publication">
                    <p>IH Solutions</p>
                </LegalSubSection>
                <LegalDivider />
                <LegalSubSection title="Contact">
                    <p>
                        Email :{" "}
                        <a href="mailto:contact@ihsolutions.fr" className="text-primary hover:underline">
                            contact@ihsolutions.fr
                        </a>
                    </p>
                </LegalSubSection>
                <div className="mt-4">
                    <InfoCard variant="info">
                        Les informations complémentaires (SIRET, RCS, capital social) seront ajoutées
                        dès leur disponibilité officielle.
                    </InfoCard>
                </div>
            </LegalSection>

            <LegalSection id="hebergement" title="Hébergement">
                <p>Ce site est hébergé par :</p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg not-prose">
                    <p className="font-semibold">Vercel Inc.</p>
                    <p className="text-sm text-muted-foreground mt-2">
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789, États-Unis
                    </p>
                    <p className="text-sm mt-2">
                        <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            https://vercel.com
                        </a>
                    </p>
                </div>
            </LegalSection>

            <LegalSection id="produits" title="Produits édités">
                <p>
                    IH Solutions édite les solutions SaaS suivantes, accessibles via leurs sites dédiés :
                </p>
                <ul className="mt-4 space-y-3 not-prose">
                    <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold">ChantiPay</span>
                        <span className="text-muted-foreground text-sm">— Solution de paiement pour le BTP</span>
                        <a
                            href="https://chantipay.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-xs text-primary hover:underline"
                        >
                            Visiter
                        </a>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold">Mon Rempart</span>
                        <span className="text-muted-foreground text-sm">— Cybersécurité pour TPE/PME</span>
                        <a
                            href="https://www.mon-rempart.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-xs text-primary hover:underline"
                        >
                            Visiter
                        </a>
                    </li>
                    <li className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <span className="font-semibold">SimplRH</span>
                        <span className="text-muted-foreground text-sm">— Gestion des ressources humaines</span>
                        <a
                            href="https://www.simplrh.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-xs text-primary hover:underline"
                        >
                            Visiter
                        </a>
                    </li>
                </ul>
            </LegalSection>

            <LegalSection id="propriete" title="Propriété intellectuelle">
                <p>
                    L'ensemble des éléments constituant ce site (textes, graphismes, logiciels,
                    photographies, images, logos, marques, bases de données, etc.) est la propriété
                    exclusive d'IH Solutions ou de ses partenaires.
                </p>
                <LegalDivider />
                <p>
                    Toute représentation, reproduction, exploitation ou redistribution, totale ou
                    partielle, des contenus et services proposés par le site, par quelque procédé
                    que ce soit, sans l'autorisation préalable et écrite d'IH Solutions est
                    strictement interdite et constituerait une contrefaçon sanctionnée par les
                    articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
            </LegalSection>

            <LegalSection id="responsabilite" title="Responsabilité">
                <LegalSubSection title="Exactitude des informations">
                    <p>
                        Les informations contenues sur ce site sont aussi précises que possible.
                        Toutefois, IH Solutions ne peut garantir l'exactitude, la complétude et
                        l'actualité des informations diffusées.
                    </p>
                </LegalSubSection>
                <LegalDivider />
                <LegalSubSection title="Disponibilité du site">
                    <p>
                        IH Solutions décline toute responsabilité pour les difficultés rencontrées
                        lors de l'accès à son site ou pour toute défaillance de communication.
                    </p>
                </LegalSubSection>
                <LegalDivider />
                <LegalSubSection title="Modifications">
                    <p>
                        IH Solutions se réserve le droit de modifier, corriger ou supprimer le
                        contenu du site à tout moment et sans préavis.
                    </p>
                </LegalSubSection>
            </LegalSection>

            <LegalSection id="liens" title="Liens externes">
                <p>
                    Le site peut contenir des liens hypertextes vers d'autres sites, notamment
                    vers les sites dédiés de nos produits (ChantiPay, Mon Rempart, SimplRH).
                </p>
                <p className="mt-4">
                    IH Solutions n'exerce aucun contrôle sur les sites tiers et décline toute
                    responsabilité quant à leur contenu, politique de confidentialité ou
                    pratiques.
                </p>
            </LegalSection>

            <LegalSection id="droit" title="Droit applicable">
                <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de
                    litige, et après échec de toute tentative de recherche d'une solution amiable,
                    les tribunaux français seront seuls compétents.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 not-prose">
                    <Link
                        href="/politique-de-confidentialite"
                        className="text-sm text-primary hover:underline"
                    >
                        Politique de confidentialité →
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
