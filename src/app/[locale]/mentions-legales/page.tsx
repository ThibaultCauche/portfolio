import type { Metadata } from "next";
import Link from "next/link";
import GlassBlock from "@/components/GlassBlock";

type Locale = "fr" | "en" | "de";

const titles: Record<Locale, string> = {
  fr: "Mentions légales",
  en: "Legal notice",
  de: "Impressum",
};

const content: Record<Locale, { h: string; p: string }[]> = {
  fr: [
    {
      h: "Éditeur du site",
      p: "Ce site est édité à titre personnel et non professionnel par Thibault Cauche. Conformément à l'article 6-III de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, les coordonnées complètes de l'éditeur sont tenues à disposition de toute autorité qui en ferait la demande et ne sont pas publiées ici. Pour toute question, contactez : thibault.cauche@gmail.com.",
    },
    {
      h: "Hébergement",
      p: "Le site est hébergé par Vercel Inc. Les informations légales complètes de l'hébergeur sont disponibles sur vercel.com/legal.",
    },
    {
      h: "Propriété intellectuelle",
      p: "L'ensemble des contenus présents sur ce site (textes, code, visuels, captures d'écran, photographies) est la propriété de Thibault Cauche, sauf mention contraire, et ne peut être reproduit, distribué ou réutilisé sans autorisation préalable.",
    },
    {
      h: "Utilisation du site",
      p: "Le site est fourni « en l'état », à titre de portfolio, sans garantie d'aucune sorte quant à sa disponibilité continue ou à l'absence d'erreurs. Les liens vers des sites tiers (GitHub, LinkedIn, Discord…) sont fournis à titre informatif ; leur contenu n'engage pas la responsabilité de l'éditeur.",
    },
    {
      h: "Contact",
      p: "Pour toute question relative à ce site : thibault.cauche@gmail.com.",
    },
  ],
  en: [
    {
      h: "Site publisher",
      p: "This site is published on a personal, non-commercial basis by Thibault Cauche. Full publisher contact details are kept available to any competent authority upon request and are not published here. For any question, contact: thibault.cauche@gmail.com.",
    },
    {
      h: "Hosting",
      p: "The site is hosted by Vercel Inc. Full legal information about the host is available at vercel.com/legal.",
    },
    {
      h: "Intellectual property",
      p: "All content on this site (text, code, visuals, screenshots, photographs) is the property of Thibault Cauche, unless stated otherwise, and may not be reproduced, distributed or reused without prior permission.",
    },
    {
      h: "Use of the site",
      p: "The site is provided \"as is\", as a portfolio, with no guarantee of continuous availability or absence of errors. Links to third-party sites (GitHub, LinkedIn, Discord…) are provided for information only; their content is not the publisher's responsibility.",
    },
    {
      h: "Contact",
      p: "For any question about this site: thibault.cauche@gmail.com.",
    },
  ],
  de: [
    {
      h: "Betreiber der Website",
      p: "Diese Website wird von Thibault Cauche privat und nicht gewerblich betrieben. Die vollständigen Kontaktdaten des Betreibers werden auf Anfrage jeder zuständigen Behörde zur Verfügung gestellt und sind hier nicht veröffentlicht. Bei Fragen: thibault.cauche@gmail.com.",
    },
    {
      h: "Hosting",
      p: "Die Website wird von Vercel Inc. gehostet. Vollständige rechtliche Informationen zum Hoster finden Sie unter vercel.com/legal.",
    },
    {
      h: "Geistiges Eigentum",
      p: "Alle Inhalte dieser Website (Texte, Code, Grafiken, Screenshots, Fotografien) sind Eigentum von Thibault Cauche, sofern nicht anders angegeben, und dürfen ohne vorherige Genehmigung nicht vervielfältigt, verbreitet oder weiterverwendet werden.",
    },
    {
      h: "Nutzung der Website",
      p: "Die Website wird als Portfolio „wie besehen” bereitgestellt, ohne Garantie für ständige Verfügbarkeit oder Fehlerfreiheit. Links zu Websites Dritter (GitHub, LinkedIn, Discord…) dienen nur zur Information; für deren Inhalt übernimmt der Betreiber keine Verantwortung.",
    },
    {
      h: "Kontakt",
      p: "Bei Fragen zu dieser Website: thibault.cauche@gmail.com.",
    },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = (["fr", "en", "de"].includes(locale) ? locale : "fr") as Locale;
  return { title: `${titles[l]}, Thibault Cauche`, robots: { index: false, follow: true } };
}

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (["fr", "en", "de"].includes(locale) ? locale : "fr") as Locale;

  return (
    <main className="mx-auto max-w-3xl px-4 py-28 md:py-32 text-white">
      <Link href={`/${l}`} className="text-sm text-white/60 hover:text-white hover:underline">
        ← {l === "fr" ? "Retour au site" : l === "de" ? "Zurück zur Startseite" : "Back to site"}
      </Link>
      <h1 className="mt-4 text-3xl md:text-4xl font-bold">{titles[l]}</h1>
      <GlassBlock variant="base" className="mt-8 p-6 md:p-8 space-y-6">
        {content[l].map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-semibold text-white">{s.h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{s.p}</p>
          </section>
        ))}
      </GlassBlock>
    </main>
  );
}
