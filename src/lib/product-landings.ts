import { LucideIcon, CreditCard, FileCheck, Clock, Shield, BarChart3, Users, Building2, HardHat, Briefcase, Lock, Eye, Bell, Server, Headphones, FileText, UserCheck, Calendar, TrendingUp, Settings, Database, ShieldCheck, Zap, CheckCircle, Award, Heart } from "lucide-react";

export interface ProductLanding {
    id: string;
    name: string;
    tagline: string;
    heroDescription: string;
    href: string;
    benefits: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    features: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    personas: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    engagements: {
        icon: LucideIcon;
        title: string;
        description: string;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
}

export const productLandings: Record<string, ProductLanding> = {
    "chantipay": {
        id: "chantipay",
        name: "ChantiPay",
        tagline: "La solution de paiement pour les chantiers",
        heroDescription: "Sécurisez et simplifiez les flux financiers de vos chantiers. Paiements, acomptes, situations de travaux : tout en un seul outil.",
        href: "https://chantipay.com",
        benefits: [
            {
                icon: Clock,
                title: "Gain de temps",
                description: "Réduisez de 70% le temps consacré à la gestion administrative des paiements chantier."
            },
            {
                icon: Shield,
                title: "Paiements sécurisés",
                description: "Transactions cryptées et traçabilité complète de chaque mouvement financier."
            },
            {
                icon: BarChart3,
                title: "Visibilité en temps réel",
                description: "Tableau de bord centralisé pour suivre l'avancement financier de tous vos chantiers."
            }
        ],
        features: [
            { icon: CreditCard, title: "Gestion des acomptes", description: "Demandes et validations en quelques clics" },
            { icon: FileCheck, title: "Situations de travaux", description: "Génération et suivi automatisés" },
            { icon: Users, title: "Multi-intervenants", description: "Coordination simplifiée entre tous les acteurs" },
            { icon: Bell, title: "Alertes automatiques", description: "Notifications de paiement et relances" },
            { icon: FileText, title: "Export comptable", description: "Intégration avec vos outils existants" },
            { icon: Database, title: "Historique complet", description: "Archivage sécurisé de toutes les opérations" }
        ],
        personas: [
            { icon: Building2, title: "Entreprises du BTP", description: "Gérez efficacement les flux financiers de vos chantiers" },
            { icon: HardHat, title: "Maîtres d'œuvre", description: "Suivez les paiements de tous vos intervenants" },
            { icon: Briefcase, title: "Promoteurs immobiliers", description: "Centralisez la gestion financière de vos projets" }
        ],
        engagements: [
            { icon: Lock, title: "Données sécurisées", description: "Chiffrement AES-256 et hébergement en France" },
            { icon: ShieldCheck, title: "Conformité RGPD", description: "Respect des réglementations françaises et européennes" },
            { icon: Headphones, title: "Support réactif", description: "Équipe française disponible par email et téléphone" }
        ],
        faq: [
            { question: "Comment ChantiPay sécurise-t-il les transactions ?", answer: "Toutes les transactions sont chiffrées avec le protocole AES-256. Les données sont hébergées en France sur des serveurs certifiés." },
            { question: "ChantiPay s'intègre-t-il à ma comptabilité ?", answer: "Oui, nous proposons des exports compatibles avec les principaux logiciels comptables du marché (Sage, Cegid, etc.)." },
            { question: "Combien de temps pour déployer la solution ?", answer: "La mise en place prend généralement 2 à 5 jours ouvrés, incluant la formation de vos équipes." },
            { question: "Y a-t-il un nombre limite de chantiers ?", answer: "Non, vous pouvez gérer autant de chantiers que nécessaire selon votre formule d'abonnement." },
            { question: "Proposez-vous une période d'essai ?", answer: "Oui, nous offrons une démonstration personnalisée et un essai gratuit pour évaluer la solution." }
        ]
    },
    "mon-rempart": {
        id: "mon-rempart",
        name: "Mon Rempart",
        tagline: "Votre bouclier numérique",
        heroDescription: "Protégez votre entreprise contre les cybermenaces avec une solution de sécurité complète, accessible et adaptée aux TPE/PME.",
        href: "https://www.mon-rempart.fr/",
        benefits: [
            {
                icon: Shield,
                title: "Protection 24/7",
                description: "Surveillance continue de votre infrastructure pour détecter et bloquer les menaces."
            },
            {
                icon: Zap,
                title: "Déploiement rapide",
                description: "Solution opérationnelle en quelques heures, sans expertise technique requise."
            },
            {
                icon: Award,
                title: "Conformité simplifiée",
                description: "Respectez les exigences réglementaires sans complexité (RGPD, NIS2)."
            }
        ],
        features: [
            { icon: Eye, title: "Détection des menaces", description: "Analyse comportementale en temps réel" },
            { icon: Lock, title: "Protection des endpoints", description: "Sécurisation de tous vos postes de travail" },
            { icon: Bell, title: "Alertes intelligentes", description: "Notifications priorisées selon la criticité" },
            { icon: Server, title: "Sauvegarde sécurisée", description: "Backup automatique de vos données critiques" },
            { icon: FileText, title: "Rapports de sécurité", description: "Tableaux de bord et bilans mensuels" },
            { icon: Users, title: "Formation incluse", description: "Sensibilisation de vos collaborateurs" }
        ],
        personas: [
            { icon: Building2, title: "TPE / PME", description: "Protection professionnelle accessible à votre budget" },
            { icon: Briefcase, title: "Professions libérales", description: "Sécurisez vos données clients sensibles" },
            { icon: Users, title: "Associations", description: "Protégez les données de vos membres et donateurs" }
        ],
        engagements: [
            { icon: Server, title: "Hébergement français", description: "Données stockées exclusivement en France" },
            { icon: ShieldCheck, title: "Certifications", description: "Solutions conformes aux standards de sécurité" },
            { icon: Headphones, title: "Accompagnement", description: "Équipe d'experts disponible pour vous guider" }
        ],
        faq: [
            { question: "Mon Rempart est-il adapté à une petite structure ?", answer: "Absolument. La solution est conçue spécifiquement pour les TPE/PME, avec une tarification adaptée et un déploiement simplifié." },
            { question: "Faut-il des compétences techniques pour utiliser la solution ?", answer: "Non, l'interface est intuitive et notre équipe vous accompagne dans la prise en main." },
            { question: "Comment sont gérées les alertes de sécurité ?", answer: "Vous recevez des notifications priorisées par email ou SMS selon la criticité, avec des recommandations d'action." },
            { question: "Mes données sont-elles sauvegardées ?", answer: "Oui, nous proposons une solution de backup automatique vers des serveurs sécurisés en France." },
            { question: "Quel est le délai de mise en place ?", answer: "La solution est généralement opérationnelle en moins de 24h après la souscription." }
        ]
    },
    "simplrh": {
        id: "simplrh",
        name: "SimplRH",
        tagline: "Les RH simplifiées",
        heroDescription: "Centralisez la gestion de vos ressources humaines dans une plateforme intuitive. Congés, absences, dossiers : tout devient simple.",
        href: "https://www.simplrh.com/",
        benefits: [
            {
                icon: Clock,
                title: "Temps économisé",
                description: "Automatisez les tâches RH répétitives et libérez du temps pour l'essentiel."
            },
            {
                icon: Heart,
                title: "Expérience collaborateur",
                description: "Interface moderne pour simplifier les démarches de vos équipes."
            },
            {
                icon: CheckCircle,
                title: "Conformité assurée",
                description: "Respect automatique des obligations légales et conventions collectives."
            }
        ],
        features: [
            { icon: Calendar, title: "Gestion des congés", description: "Demandes et validations en ligne" },
            { icon: UserCheck, title: "Dossiers employés", description: "Centralisation des informations RH" },
            { icon: TrendingUp, title: "Suivi des temps", description: "Pointage et reporting automatisés" },
            { icon: FileText, title: "Documents RH", description: "Génération automatique d'attestations" },
            { icon: Bell, title: "Rappels automatiques", description: "Alertes pour les échéances importantes" },
            { icon: Settings, title: "Paramétrage flexible", description: "Adaptation à vos règles internes" }
        ],
        personas: [
            { icon: Building2, title: "PME en croissance", description: "Structurez vos processus RH avec un outil adapté" },
            { icon: Users, title: "Services RH", description: "Gagnez en efficacité sur les tâches quotidiennes" },
            { icon: Briefcase, title: "Dirigeants TPE", description: "Gérez vos RH simplement sans être expert" }
        ],
        engagements: [
            { icon: Lock, title: "Données protégées", description: "Chiffrement et accès sécurisés" },
            { icon: ShieldCheck, title: "Conformité RGPD", description: "Traitement des données personnelles conforme" },
            { icon: Headphones, title: "Support inclus", description: "Assistance par email et chat en français" }
        ],
        faq: [
            { question: "SimplRH s'adapte-t-il à ma convention collective ?", answer: "Oui, le paramétrage permet de configurer les règles spécifiques à votre convention (congés, RTT, etc.)." },
            { question: "Les collaborateurs peuvent-ils accéder à leurs informations ?", answer: "Oui, chaque collaborateur dispose d'un espace personnel pour consulter ses soldes, faire ses demandes et accéder à ses documents." },
            { question: "Comment migrer depuis mon système actuel ?", answer: "Notre équipe vous accompagne dans l'import de vos données existantes (Excel, autre SIRH)." },
            { question: "Y a-t-il une application mobile ?", answer: "Oui, l'interface est responsive et accessible sur mobile pour les demandes et validations en déplacement." },
            { question: "Quel est le coût de la solution ?", answer: "La tarification est basée sur le nombre de collaborateurs, avec un essai gratuit pour évaluer la solution." }
        ]
    }
};
