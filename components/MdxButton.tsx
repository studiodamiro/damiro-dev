'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';

type MdxButtonProps = {
  href: string;
  children: ReactNode;
};

export default function MdxButton({ href, children }: MdxButtonProps) {
  const priColor = '#fa8072cc';
  const secColor = '#fa8072';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? secColor : priColor }}
      className='py-0.5 pl-3 pr-2.5 rounded-sm tracking-widest no-underline bg-opacity-50 hover:bg-opacity-100 transition-colors duration-300 ease-out'
    >
      {children}
    </Link>
  );
}
