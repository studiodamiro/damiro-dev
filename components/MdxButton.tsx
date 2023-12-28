'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useColor } from '@/providers/ColorProvider';
import { useTheme } from 'next-themes';
import { isDarkColor } from '@/lib/isDarkColor';

type MdxButtonProps = {
  href: string;
  children: ReactNode;
};

export default function MdxButton({ href, children }: MdxButtonProps) {
  const { theme } = useTheme();
  const { color, lightColor, darkColor } = useColor();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        color: isDarkColor(color) ? '#f4f4f5' : '#18181b',
        backgroundColor: isHovered ? (isDarkColor(color) ? darkColor : lightColor) : color,
      }}
      className='py-1 pl-3 pr-2.5 text-[0.85rem] font-semibold rounded-sm tracking-widest no-underline bg-opacity-90 hover:bg-opacity-100 transition-colors duration-150 ease-out'
    >
      {children}
    </Link>
  );
}
