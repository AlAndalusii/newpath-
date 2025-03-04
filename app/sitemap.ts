// app/sitemap.ts

import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestflightalerts.com';
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Current active articles
    {
      url: `${baseUrl}/articles/chicago-mexico-city-flights`,
      lastModified: new Date('2025-03-02'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/southwest-near-miss`,
      lastModified: new Date('2025-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/cruise-age-restrictions`,
      lastModified: new Date('2025-02-24'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/europe-247-round-trip`,
      lastModified: new Date('2025-02-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/caribbean-direct-flights`,
      lastModified: new Date('2025-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Older or placeholder articles
    {
      url: `${baseUrl}/articles/ultimate-guide-mistake-fares`,
      lastModified: new Date('2025-02-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/mastering-travel-rewards`,
      lastModified: new Date('2025-02-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/articles/cruise-age-restrictions-2025`,
      lastModified: new Date('2025-02-25'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}