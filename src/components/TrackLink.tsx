'use client';

import { trackEvent } from 'fathom-client';

interface TrackLinkProps {
  href: string;
  platform: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackLink({ href, platform, className, children }: TrackLinkProps) {
  const handleClick = () => {
    trackEvent(`${platform} Click`);
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
