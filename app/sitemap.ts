import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vaniagarwal.dev',
      lastModified: new Date(),
    },
  ];
}
