import { FaInstagram, FaYoutube, FaFacebookF, FaGlobe, FaEnvelope } from 'react-icons/fa';

interface SocialIconsProps {
  className?: string;
}

const socials = [
  { icon: FaGlobe, url: '/', label: 'Website', external: false },
  { icon: FaInstagram, url: 'https://www.instagram.com/smerin/', label: 'Instagram', external: true },
  { icon: FaYoutube, url: 'https://www.youtube.com/smerin', label: 'YouTube', external: true },
  { icon: FaFacebookF, url: 'https://www.facebook.com/smerin', label: 'Facebook', external: true },
  { icon: FaEnvelope, url: 'mailto:george@smerin.com', label: 'Email', external: false },
];

export default function SocialIcons({ className }: SocialIconsProps) {
  return (
    <div className={className}>
      {socials.map(({ icon: Icon, url, label, external }) => (
        <a
          key={label}
          href={url}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          aria-label={label}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
