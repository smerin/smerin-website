import Image from 'next/image';
import { LinkButton } from '@/components/Buttons';
import { getLatestTrack } from '@/lib/tracks';
import styles from './LatestRelease.module.css';

export default function LatestRelease() {
  const track = getLatestTrack();

  if (!track) {
    return null;
  }

  const formattedDate = new Date(track.releaseDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.latestRelease}>
      <div className="container">
        <h2>Latest Release</h2>
        <div className={styles.content}>
          <div className={styles.coverArt}>
            <Image
              src={track.coverArt}
              alt={`${track.title} cover art`}
              width={400}
              height={400}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.date}>{formattedDate}</p>
            <h3 className={styles.title}>{track.title}</h3>
            {track.description && (
              <p className={styles.description}>{track.description}</p>
            )}
            <LinkButton url={`/listen/${track.slug}`} className={styles.button}>Listen Now</LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
