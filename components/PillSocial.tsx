import Link from 'next/link';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

type PillSocialProps = {
  social: string;
};

export default function PillSocial({ social }: PillSocialProps) {
  const socialIcons = {
    Facebook: <FaFacebookF />,
    Twitter: <FaXTwitter />,
    Instagram: <FaInstagram />,
    Linkedin: <FaLinkedinIn />,
    Github: <FaGithub />,
  };

  const socialLink = {
    Facebook: 'https://www.facebook.com/studiodamiro/',
    Twitter: 'https://twitter.com/studiodamiro',
    Instagram: 'https://www.instagram.com/studiodamiro',
    Linkedin: 'https://www.linkedin.com/company/studiodamiro',
    Github: 'https://github.com/studiodamiro',
  };

  return (
    <Link
      href={socialLink[social as keyof typeof socialIcons]}
      target='_blank'
      className={cn(
        buttonVariants({ variant: 'secondary' }),
        'no-underline flex flex-row items-center gap-2.5 tracking-wider  hover:bg-background/50'
      )}
    >
      <span>{socialIcons[social as keyof typeof socialIcons]}</span>
      {social}
    </Link>
  );
}
