'use client';

import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import { menuItems } from '@/lib/menuItems';

export default function MobileMenu() {
  return (
    <Menu width={300} right>
      {menuItems.map((item, index) => (
        <Link key={index} href={item.path} className="bm-item">
          {item.title}
        </Link>
      ))}
    </Menu>
  );
}
