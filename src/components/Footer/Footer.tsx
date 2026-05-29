import {
  EmailButton,
  InstagramButton,
  YoutubeButton,
  FacebookButton
} from '@/components/Buttons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.buttons}>
          <h3>Elsewhere on the web...</h3>
          <YoutubeButton />
          <FacebookButton />
          <InstagramButton />
          <EmailButton />
        </div>
        <div className={styles.credits}>
          This website built with love in{' '}
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            React
          </a>{' '}
          &amp;{' '}
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            Next.js
          </a>
        </div>
      </div>
    </footer>
  );
}
