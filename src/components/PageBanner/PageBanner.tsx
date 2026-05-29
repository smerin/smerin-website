import Image from 'next/image';
import styles from './PageBanner.module.css';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bannerImage?: string;
}

export default function PageBanner({ title, subtitle, bannerImage }: PageBannerProps) {
  return (
    <div className={styles.banner}>
      {bannerImage && (
        <Image
          src={bannerImage}
          alt={title}
          width={1920}
          height={800}
          className={styles.bannerImage}
          priority
        />
      )}
      <div className={styles.bannerContent}>
        <div className="container">
          <h2 className={styles.bannerTitle}>{title}</h2>
          {subtitle && <p className={styles.bannerSubtitle}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
