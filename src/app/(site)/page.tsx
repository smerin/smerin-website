import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import LatestRelease from '@/components/LatestRelease';
import PostGrid from '@/components/PostGrid';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Smerin | Musician and producer from Bristol, UK',
  description:
    'Welcome to the website of Smerin, musician and producer from Bristol (UK).',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: ['/images/preview/home-preview.jpg'],
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Smerin',
  url: 'https://smerin.com',
  image: 'https://smerin.com/images/preview/home-preview.jpg',
  jobTitle: 'Musician and Producer',
  description:
    'Musician and producer from Bristol, UK. Guitarist, kora player, and world music enthusiast.',
  sameAs: [
    'https://facebook.com/smerin',
    'https://youtube.com/smerin',
    'https://instagram.com/smerin',
    'https://smerin.bandcamp.com',
  ],
  knowsAbout: ['Guitar', 'Kora', 'Ronroco', 'World Music', 'Music Production'],
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PageBanner
        title="George Smerin"
        subtitle="Musician and producer from Bristol, UK"
        bannerImage="/images/guitar-banner.jpg"
      />
      <LatestRelease />
      <PostGrid posts={posts} title="Latest from the blog" />
    </>
  );
}
