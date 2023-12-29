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

  const socialColor = {
    Facebook: 'bg-[#4267B2]/20',
    Twitter: 'bg-[#AAB8C2]/20',
    Instagram: 'bg-[#FCAF45]/20',
    Linkedin: 'bg-[#0077b5]/20',
    Github: 'bg-[#333333]/20',
  };

  return (
    <>
      <Link
        href={socialLink[social as keyof typeof socialIcons]}
        target='_blank'
        className={cn(
          buttonVariants({ variant: 'secondary' }),
          'no-underline flex flex-row items-center gap-2.5 tracking-wider  hover:bg-background/50'
          // socialColor[social as keyof typeof socialIcons]
        )}
      >
        <span>{socialIcons[social as keyof typeof socialIcons]}</span>
        {social}
      </Link>
    </>
  );
}
