export interface Product {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  href: string;
  audience: string;
  badges: string[];
}

export const products: Product[] = [
  {
    id: "chantipay",
    name: "ChantiPay",
    tagline: "La solution de paiement pour les chantiers",
    shortDesc: "Simplifiez la gestion des paiements sur vos chantiers de construction avec une plateforme sécurisée et intuitive.",
    href: "https://chantipay.com",
    audience: "BTP & Construction",
    badges: ["Paiements", "BTP", "Facturation"],
  },
  {
    id: "mon-rempart",
    name: "Mon Rempart",
    tagline: "Votre bouclier numérique",
    shortDesc: "Protégez votre entreprise contre les cybermenaces avec une solution de sécurité complète et accessible.",
    href: "https://www.mon-rempart.fr/",
    audience: "TPE & PME",
    badges: ["Cybersécurité", "Protection", "SaaS"],
  },
  {
    id: "simplrh",
    name: "SimplRH",
    tagline: "Les RH simplifiées",
    shortDesc: "Gérez vos ressources humaines efficacement avec une plateforme tout-en-un moderne et intuitive.",
    href: "https://www.simplrh.com/",
    audience: "Entreprises",
    badges: ["RH", "SIRH", "Gestion"],
  },
];
