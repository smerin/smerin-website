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
          <p className={styles.copyright}>© {new Date().getFullYear()} George Smerin</p>
        </div>
      </div>
    </footer>
  );
}
