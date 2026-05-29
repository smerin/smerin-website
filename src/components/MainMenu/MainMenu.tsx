'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/menuItems';
import styles from './MainMenu.module.css';

export default function MainMenu() {
  const pathname = usePathname();

  return (
    <nav role="navigation">
      <ul className={styles.mainMenu}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              aria-current={pathname === item.path ? 'page' : undefined}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
