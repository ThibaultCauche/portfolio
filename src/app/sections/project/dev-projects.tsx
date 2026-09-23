"use client";

import { Github, Music2, Dumbbell, Server, Globe, MessagesSquare } from "lucide-react";
import GlassBlock from "@/components/GlassBlock";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

// ChewlinBoard n'est pas ici : il a déjà sa propre section détaillée juste en dessous.
const PROJECTS = [
  { key: "vinland", icon: Music2, repo: "https://github.com/Tibobg/vinland", tags: ["Flutter", "Dart", "Navidrome"] },
  { key: "gymtimer", icon: Dumbbell, repo: "https://github.com/Tibobg/GymTimer", tags: ["Flutter", "Dart"] },
  { key: "nas", icon: Server, repo: null, tags: ["Docker", "Réseau", "Tunnels"] },
  { key: "portfolio", icon: Globe, repo: "https://github.com/Tibobg/portfolio", tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { key: "discordbot", icon: MessagesSquare, repo: "https://github.com/Tibobg/discord-bot", tags: ["Node.js", "JavaScript"] },
] as const;

export default function DevProjectsSection() {
  const t = useTranslations("Projects.Dev");

  return (
    <div className="py-6 md:py-10">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center text-white">
        {t("title")}
      </h3>
      <p className="mt-3 max-w-2xl mx-auto text-center text-sm md:text-base text-white/70">
        {t("intro")}
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {PROJECTS.map(({ key, icon: Icon, repo, tags }) => (
          <GlassBlock
            key={key}
            variant="base"
            className="p-5 flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-white/80" />
              </div>
              <h4 className="font-semibold text-white">{t(`items.${key}.name`)}</h4>
            </div>
            <p className="text-sm text-white/70 leading-relaxed flex-1">
              {t(`items.${key}.pitch`)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/[0.06] text-white/70 border-white/10">
                  {tag}
                </Badge>
              ))}
            </div>
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                aria-label={`GitHub — ${t(`items.${key}.name`)}`}
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </GlassBlock>
        ))}
      </div>
    </div>
  );
}
