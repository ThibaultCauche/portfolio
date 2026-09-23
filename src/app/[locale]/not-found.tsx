"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import GlassBlock from "@/components/GlassBlock";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <GlassBlock variant="base" className="max-w-md p-8 text-center text-white">
        <p className="text-6xl font-extrabold tracking-tight text-white/30">404</p>
        <h1 className="mt-4 text-2xl font-bold">{t("title")}</h1>
        <p className="mt-2 text-sm text-white/70">{t("description")}</p>
        <Link
          href={`/${locale}`}
          className="btn-cv btn-cv--sweep mt-6 inline-flex items-center justify-center"
        >
          {t("cta")}
        </Link>
      </GlassBlock>
    </main>
  );
}
