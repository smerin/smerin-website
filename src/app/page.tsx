import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import PostGrid from '@/components/PostGrid';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'George Smerin | Musician and web developer from Bristol, UK',
  description:
    'Welcome to the website of George Smerin, musician and web developer from Bristol (UK). Read all about my recent adventures in music and technology.',
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
        subtitle="Musician and web developer from Bristol, UK"
        bannerImage="/images/home-banner.jpg"
      />
      <PostGrid posts={posts} title="Latest from the blog" />
    </>
  );
}
