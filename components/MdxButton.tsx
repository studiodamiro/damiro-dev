'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { isDarkColor } from '@/lib/isDarkColor';

type MdxButtonProps = {
  href: string;
  children: ReactNode;
};

export default function MdxButton({ href, children }: MdxButtonProps) {
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
      className='py-1 pl-3 pr-2.5 text-[0.85rem] font-semibold rounded-sm tracking-widest no-underline transition-colors duration-150 ease-out'
    >
      {children}
    </Link>
  );
}
