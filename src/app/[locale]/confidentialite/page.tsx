import type { Metadata } from "next";
import Link from "next/link";
import GlassBlock from "@/components/GlassBlock";

type Locale = "fr" | "en" | "de";

const titles: Record<Locale, string> = {
  fr: "Politique de confidentialité",
  en: "Privacy policy",
  de: "Datenschutzerklärung",
};

const content: Record<Locale, { h: string; p: string }[]> = {
  fr: [
    {
      h: "Responsable du traitement",
      p: "Thibault Cauche est responsable des traitements décrits ci-dessous. Contact : thibault.cauche@gmail.com.",
    },
    {
      h: "Formulaire de contact",
      p: "Le formulaire de contact utilise le service tiers Formspree pour recevoir les messages envoyés depuis ce site. Les données saisies (nom, e-mail, message) sont transmises directement à Formspree puis à ma boîte e-mail, dans le seul but de vous répondre. Elles ne sont ni vendues ni utilisées à des fins commerciales. Voir la politique de confidentialité de Formspree : formspree.io/legal/privacy-policy.",
    },
    {
      h: "Mesure d'audience",
      p: "Ce site utilise Plausible Analytics pour mesurer la fréquentation. Plausible ne dépose aucun cookie et ne collecte aucune donnée personnelle identifiable (pas d'adresse IP stockée, pas de fingerprinting) : les statistiques sont entièrement anonymes et agrégées. Voir : plausible.io/data-policy.",
    },
    {
      h: "Cookies",
      p: "Ce site ne dépose pas de cookie de suivi publicitaire ou analytique. Le seul cookie utilisé, « NEXT_LOCALE », est strictement nécessaire au fonctionnement du site : il retient la langue choisie (français, anglais, allemand) d'une visite à l'autre. Étant strictement fonctionnel, il ne nécessite pas de consentement préalable au titre de la réglementation applicable (RGPD / directive ePrivacy).",
    },
    {
      h: "Vos droits",
      p: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, écrivez à thibault.cauche@gmail.com.",
    },
  ],
  en: [
    {
      h: "Data controller",
      p: "Thibault Cauche is the controller for the processing described below. Contact: thibault.cauche@gmail.com.",
    },
    {
      h: "Contact form",
      p: "The contact form uses the third-party service Formspree to receive messages sent from this site. The data you enter (name, email, message) is sent directly to Formspree and then to my mailbox, solely to reply to you. It is never sold or used for commercial purposes. See Formspree's privacy policy: formspree.io/legal/privacy-policy.",
    },
    {
      h: "Analytics",
      p: "This site uses Plausible Analytics to measure traffic. Plausible sets no cookies and collects no personally identifiable data (no stored IP address, no fingerprinting): statistics are fully anonymous and aggregated. See: plausible.io/data-policy.",
    },
    {
      h: "Cookies",
      p: "This site does not set any advertising or analytics tracking cookie. The only cookie in use, \"NEXT_LOCALE\", is strictly necessary for the site to work: it remembers your chosen language (French, English, German) between visits. Being strictly functional, it does not require prior consent under applicable regulation (GDPR / ePrivacy directive).",
    },
    {
      h: "Your rights",
      p: "Under the GDPR, you have the right to access, rectify and erase your personal data. To exercise it, write to thibault.cauche@gmail.com.",
    },
  ],
  de: [
    {
      h: "Verantwortlicher",
      p: "Thibault Cauche ist für die nachfolgend beschriebene Datenverarbeitung verantwortlich. Kontakt: thibault.cauche@gmail.com.",
    },
    {
      h: "Kontaktformular",
      p: "Das Kontaktformular nutzt den Drittanbieter Formspree, um über diese Website gesendete Nachrichten zu empfangen. Die eingegebenen Daten (Name, E-Mail, Nachricht) werden direkt an Formspree und anschließend an mein E-Mail-Postfach übermittelt, ausschließlich um Ihnen zu antworten. Sie werden weder verkauft noch kommerziell genutzt. Siehe Formspree-Datenschutzerklärung: formspree.io/legal/privacy-policy.",
    },
    {
      h: "Analyse",
      p: "Diese Website nutzt Plausible Analytics zur Besuchsmessung. Plausible setzt keine Cookies und erhebt keine personenbezogenen Daten (keine gespeicherte IP-Adresse, kein Fingerprinting): Die Statistiken sind vollständig anonym und aggregiert. Siehe: plausible.io/data-policy.",
    },
    {
      h: "Cookies",
      p: "Diese Website setzt keine Werbe- oder Analyse-Tracking-Cookies. Das einzige verwendete Cookie, „NEXT_LOCALE”, ist für den Betrieb der Website unbedingt erforderlich: Es speichert die gewählte Sprache (Französisch, Englisch, Deutsch) zwischen Besuchen. Da es rein funktional ist, erfordert es nach geltendem Recht (DSGVO / ePrivacy-Richtlinie) keine vorherige Einwilligung.",
    },
    {
      h: "Ihre Rechte",
      p: "Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung und Löschung Ihrer personenbezogenen Daten. Zur Ausübung schreiben Sie an thibault.cauche@gmail.com.",
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
  return { title: `${titles[l]} — Thibault Cauche`, robots: { index: false, follow: true } };
}

export default async function PrivacyPolicyPage({
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
