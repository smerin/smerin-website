import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Guitarist, kora player and world music enthusiast',
  description:
    'Tutorial videos and articles on guitar, kora and world music. Join me on a journey in discovering music from around the world!',
  openGraph: {
    images: ['/images/preview/music-preview.jpg'],
  },
};

export default function MusicPage() {
  return (
    <>
      <PageBanner
        title="Music"
        subtitle="Join me on a journey in discovering music from around the world!"
        bannerImage="/images/music-banner.jpg"
      />
      <div className="container">
        <div className="content">
          <h1>Guitarist &amp; kora player</h1>
          <p>
            I&apos;m on a life-long mission to learn to play the guitar and (more
            recently) the Kora, a type of harp from West Africa. You can see
            videos of my playing and get the latest updates on{' '}
            <a href="http://www.facebook.com/smerin" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            ,{' '}
            <a href="http://www.youtube.com/smerin" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>{' '}
            and{' '}
            <a href="http://www.instagram.com/smerin" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            .
          </p>
          <h2>My story...</h2>
          <p>
            After picking up the Spanish guitar aged 13, I quickly became
            fascinated by choro music from Brazil. My love of music from all
            around the world had begun! In 2001, I founded{' '}
            <a href="http://www.smerins.com" target="_blank" rel="noopener noreferrer">
              Smerin&apos;s Anti-Social Club
            </a>{' '}
            with the same group of friends that still play in the band to this
            day. The Buena Vista covers are long gone now, replaced with an
            eclectic blend of influences and an energy that have seen the band
            become regulars on the UK&apos;s festival circuit.
          </p>

          <p>
            In recent years, I&apos;ve taken up playing the kora and fallen in love
            with the music of the Mandinka people of West Africa. In 2018 I
            travelled to Senegal and The Gambia, and encountered some
            incredible musicians who I have written about in the blog,
            including{' '}
            <Link href="/mafu-conteh-gambian-kora-player">Mafu Conteh</Link>,{' '}
            <Link href="/watcha-jola-akonting-kamale-ngoni">Watcha</Link> and{' '}
            <Link href="/alia-balafon-abene-festival">Alia balafon</Link>.
          </p>

          <blockquote>
            <p>
              &quot;It must be a great feeling to know that you&apos;ve made your own
              name a synonym for good-time fun, but that&apos;s just what George
              Smerin has achieved with his eponymous Anti-Social Club.&quot; Tony
              Benjamin, Venue Magazine 2014
            </p>
          </blockquote>
          <p>Thanks Tony, it certainly is!</p>
        </div>
      </div>
    </>
  );
}
