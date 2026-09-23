import { MetadataRoute } from 'next';

const base = 'https://www.thibaultcauche.com';
const locales = ['fr', 'en', 'de'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home = locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    priority: 1,
  }));
  const legal = ['mentions-legales', 'confidentialite'].flatMap((slug) =>
    locales.map((locale) => ({
      url: `${base}/${locale}/${slug}`,
      lastModified: now,
      priority: 0.3,
    }))
  );
  return [...home, ...legal];
}