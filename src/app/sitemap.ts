import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllTracks } from '@/lib/tracks';

const BASE_URL = 'https://smerin.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/music`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/websites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog post routes
  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Music track routes (only published tracks)
  const tracks = getAllTracks().filter((track) => track.published);
  const trackRoutes: MetadataRoute.Sitemap = tracks.map((track) => ({
    url: `${BASE_URL}/music/${track.slug}`,
    lastModified: new Date(track.releaseDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...trackRoutes, ...blogRoutes];
}
