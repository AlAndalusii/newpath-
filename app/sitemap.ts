// app/sitemap.ts

import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestflightalerts.com';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changefreq: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/cruise-age-restrictions`,
      lastModified: new Date('2025-02-24'),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/ultimate-guide-mistake-fares`,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/europe-247-round-trip`,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/mastering-travel-rewards`,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changefreq: 'yearly',
      priority: 0.3,
    },
  ];
}