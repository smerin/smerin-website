import Link from 'next/link';
import {
  FaArrowRight,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook
} from 'react-icons/fa';
import styles from './Buttons.module.css';

interface ButtonProps {
  alt?: boolean;
}

interface LinkButtonProps extends ButtonProps {
  url: string;
  children: React.ReactNode;
}

export function LinkButton({ alt, url, children }: LinkButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <Link className={className} href={url} target="_blank">
      <span className={styles.icon}>
        <FaArrowRight />
      </span>
      {children}
    </Link>
  );
}

export function EmailButton({ alt }: ButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <a className={className} href="mailto:mail@smerin.com" target="_blank" rel="noopener noreferrer">
      <span className={styles.icon}>
        <FaEnvelope />
      </span>
      Email
    </a>
  );
}

export function LinkedinButton({ alt }: ButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <a
      className={className}
      href="https://uk.linkedin.com/in/smerin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>
        <FaLinkedin />
      </span>
      LinkedIn
    </a>
  );
}

export function TwitterButton({ alt }: ButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <a
      className={className}
      href="https://twitter.com/smerindigital"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>
        <FaTwitter />
      </span>
      Twitter
    </a>
  );
}

export function InstagramButton({ alt }: ButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <a
      className={className}
      href="https://www.instagram.com/smerin/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>
        <FaInstagram />
      </span>
      Instagram
    </a>
  );
}

export function YoutubeButton({ alt }: ButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <a
      className={className}
      href="https://www.youtube.com/smerin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>
        <FaYoutube />
      </span>
      YouTube
    </a>
  );
}

export function FacebookButton({ alt }: ButtonProps) {
  const className = alt ? `${styles.button} ${styles.alt}` : styles.button;
  return (
    <a
      className={className}
      href="https://www.facebook.com/smerin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon}>
        <FaFacebook />
      </span>
      Facebook
    </a>
  );
}
