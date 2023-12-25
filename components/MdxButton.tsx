'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useColor } from '@/providers/ColorProvider';

type MdxButtonProps = {
  href: string;
  children: ReactNode;
};

export default function MdxButton({ href, children }: MdxButtonProps) {
  const { color, secColor } = useColor();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? secColor : color }}
      className='py-0.5 pl-3 pr-2.5 text-[0.85rem] font-medium rounded-sm tracking-widest no-underline bg-opacity-90 hover:bg-opacity-100 transition-colors duration-150 ease-out'
    >
      {children}
    </Link>
  );
}
