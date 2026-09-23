import dynamic from "next/dynamic";
import Section from "@/components/section";
import ScrollDots from "@/components/scroll-dots";
import Hero from "@/app/sections/hero";
import About from "@/app/sections/about";
import HeaderOverlay from "@/components/HeaderOverlay";
import CurvedLoop from "@/components/CurvedLoop";
import GradualBlurOverlay from "@/components/GradualBlurOverlay";
import Footer from "@/app/sections/footer";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const SITE_URL = "https://www.thibaultcauche.com";
const LOCALES = ["fr", "en", "de"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `${SITE_URL}/${l}`])),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${SITE_URL}/${locale}`,
    },
    twitter: { title: t("title"), description: t("description") },
  };
}

const Parcours = dynamic(() => import("@/app/sections/parcours"));
const Skills = dynamic(() => import("@/app/sections/skills"));
const Projects = dynamic(() => import("@/app/sections/project/project"));
const Contact = dynamic(() => import("@/app/sections/contact"));

export default function HomePage() {
  return (
    <>
      <HeaderOverlay />
      <Hero />

      <main className="scroll-container">
        <div className="relative">
          <ScrollDots />
          <Section id="about"><About /></Section>
          <Section id="parcours"><Parcours /></Section>
          <Section id="skills"><Skills /></Section>

          <div className="relative pt-5 md:pt-10 sm:py-0">
            <div className="pointer-events-none relative left-1/2 -translate-x-1/2 w-screen">
              <CurvedLoop
                marqueeText="Full-Stack ✦ React ✦ Flutter ✦ UI / UX ✦ Frontend ✦ Design ✦ Backend ✦"
                speed={40}
                curveAmount={0}
                direction="right"
                interactive={false}
                className="
                    mx-auto max-w-6xl text-white/80
                    text-[clamp(105px,7.2vw,56px)]
                    md:text-[clamp(22px,4.8vw,64px)]
                    tracking-[0.06em] md:tracking-[0.12em]
                  "
              />
            </div>
          </div>

          <Section id="projects"><Projects /></Section>
          <Section id="contact"><Contact /></Section>

          {/* <-- l'overlay colle au bas de CE wrapper */}
          <GradualBlurOverlay />
        </div>

        {/* footer en dehors du wrapper => pas de blur dessus */}
        <Footer />
      </main>
    </>
  );
}

