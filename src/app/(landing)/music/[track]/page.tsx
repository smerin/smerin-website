import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTrackBySlug, getAllTrackSlugs } from '@/lib/tracks';
import PlatformLogo from '@/components/PlatformLogo';
import ActionButton from '@/components/ActionButton';
import SocialIcons from '@/components/SocialIcons';
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
    description: track.description || `Listen to ${track.title} by ${track.artist}`,
    openGraph: {
      type: 'music.song',
      images: track.coverArt ? [track.coverArt] : [],
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
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.coverArt}>
          <Image
            src={track.coverArt}
            alt={`${track.title} cover art`}
            width={400}
            height={400}
            priority
          />
        </div>

        <div className={styles.links}>
          {track.links.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className={styles.linkRow}
            >
              <span className={styles.logoWrapper}>
                <PlatformLogo platform={link.icon} height={36} />
              </span>
              <ActionButton action={link.action} className={styles.actionButton} />
            </a>
          ))}
        </div>

        <SocialIcons className={styles.socials} />
      </div>
    </div>
  );
}
