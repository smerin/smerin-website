import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import LatestRelease from '@/components/LatestRelease';
import PostGrid from '@/components/PostGrid';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'George Smerin | Musician and producer from Bristol, UK',
  description:
    'Welcome to the website of George Smerin, musician and producer from Bristol (UK).',
  openGraph: {
    images: ['/images/preview/home-preview.jpg'],
  },
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <>
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
