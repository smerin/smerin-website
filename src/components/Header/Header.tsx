import Link from 'next/link';
import Image from 'next/image';
import MainMenu from '@/components/MainMenu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <Link href="/">
              <Image
                src="/images/gs-logo.png"
                alt="George Smerin logo"
                width={170}
                height={170}
                priority
              />
            </Link>
          </div>
          <MainMenu />
        </div>
      </div>
    </header>
  );
}
