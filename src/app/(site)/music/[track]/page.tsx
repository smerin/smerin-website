import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeadphones } from 'react-icons/fa';

import { getTrackBySlug, getAllTrackSlugs } from '@/lib/tracks';

import styles from './page.module.css';

interface TrackPageProps {
  params: Promise<{ track: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllTrackSlugs();
  return slugs.map((track) => ({ track }));
}

export async function generateMetadata({ params }: TrackPageProps): Promise<Metadata> {
  const { track: slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    return {
      title: 'Track Not Found',
    };
  }

  return {
    title: `${track.title} - ${track.artist}`,
    description: track.teaser || `Listen to ${track.title} by ${track.artist}`,
    alternates: {
      canonical: `/music/${slug}`,
    },
    openGraph: {
      type: 'music.song',
      url: `/music/${slug}`,
      images: track.ogImage
        ? [
            {
              url: track.ogImage,
              width: 800,
              height: 800,
              alt: `${track.title} cover art`,
            },
          ]
        : [],
    },
  };
}

export default async function TrackPage({ params }: TrackPageProps) {
  const { track: slug } = await params;
  const track = getTrackBySlug(slug);

  if (!track) {
    notFound();
  }

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.coverArt}>
          <Image
            src={track.coverArt}
            alt={`${track.title} cover art`}
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <h1>{track.title}</h1>
          {track.description && <p className={styles.description}>{track.description}</p>}
          <Link href={`/listen/${slug}`} className="button">
            <span className="icon">
              <FaHeadphones />
            </span>
            Listen now
          </Link>
        </div>
      </div>
    </>
  );
}
