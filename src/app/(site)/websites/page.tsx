import type { Metadata } from 'next';
import PageBanner from '@/components/PageBanner';
import WebsitesContent from '@/components/WebsitesContent';

export const metadata: Metadata = {
  title: 'React JS / JavaScript front-end developer in Bristol',
  description:
    'Front-end developer specialising in React JS, JavaScript, Gatsby, GraphQL and Node JS. Strong UX / UI skills. Call 07887 868522 or email mail@smerin.com',
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    images: ['/images/preview/websites-preview.jpg'],
  },
};

export default function WebsitesPage() {
  return (
    <>
      <PageBanner
        title="Websites"
        subtitle="I love building beautiful and user-friendly websites and apps"
        bannerImage="/images/websites-banner.jpg"
      />
      <WebsitesContent />
    </>
  );
}
