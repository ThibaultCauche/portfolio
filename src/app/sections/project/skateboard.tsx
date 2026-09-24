"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Section from "@/components/section";
import GlassBlock from "@/components/GlassBlock";
import { useTranslations } from "next-intl";
import { useInView } from "@/lib/use-in-view";

// three.js + the glb model/textures (~1.3MB) are only fetched once this section nears the viewport
const Skateboard3D = dynamic(() => import("@/components/three/Skateboard3D"), { ssr: false });

export default function SkateboardSection() {
  const t = useTranslations("Projects.Skate");
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isTinyMobile, setIsTinyMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 650);
      setIsTinyMobile(width < 450);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const { ref: mountRef, inView: nearViewport } = useInView<HTMLDivElement>("400px");
  const [shouldMount, setShouldMount] = useState(false);
  useEffect(() => {
    if (nearViewport) setShouldMount(true);
  }, [nearViewport]);

  return (
    <Section id="skateboard" className="pt-12 md:pt-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:gap-12 md:[grid-template-columns:65%_30%] items-stretch">
          {/* Gauche : texte */}
          <GlassBlock className="p-3 md:p-8 flex flex-col h-full">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
              {t("title")}
            </h2>

            <p className="mt-4 text-foreground/80 leading-relaxed">{t("p1")}</p>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t("p2")}</p>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t("p3")}</p>
            <p className="mt-4 text-foreground/80 leading-relaxed">{t("p4")}</p>

            <Link href="https://flic.kr/s/aHBqjCy3tV" target="_blank" className="mt-auto self-center pt-3">
              <button className="btn-cv btn-cv--sweep">
                <span>{t("cta")}</span>
              </button>
            </Link>
          </GlassBlock>

                    {/* Droite : visuel 3D */}
          <GlassBlock className="flex items-center justify-center overflow-hidden">
            <div
              ref={mountRef}
              className={`relative w-full transition-all duration-500 ${isMobile ? "h-[280px]" : "h-[600px] lg:h-[680px]"}`}
            >
              {shouldMount && <Skateboard3D />}
            </div>
          </GlassBlock>
        </div>
      </div>
    </Section>
  );
}
