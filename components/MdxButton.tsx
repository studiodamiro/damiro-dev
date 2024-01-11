'use client';

import { ReactNode, useState } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { isDarkColor } from '@/lib/isDarkColor';
import { usePath } from '@/providers/PathProvider';
import adjustHexColor from '@/lib/adjustHexColor';

type MdxButtonProps = {
  href: string;
  children: ReactNode;
};

export default function MdxButton({ href, children }: MdxButtonProps) {
  const { color, lightColor, darkColor } = useColor();
  const [isHovered, setIsHovered] = useState(false);
  const { setPath } = usePath();

  return (
    <span
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => setPath(href)}
      style={{
        color: isDarkColor(color) ? '#f4f4f5' : '#18181b',
        backgroundColor: isHovered
          ? isDarkColor(color)
            ? adjustHexColor(color, 'light', 60)
            : adjustHexColor(color, 'light', 20)
          : isDarkColor(color)
          ? darkColor
          : lightColor,
      }}
      className='py-1 pl-3 pr-2.5 text-[0.85rem] font-semibold rounded-sm tracking-widest no-underline transition-colors duration-150 ease-out cursor-pointer'
    >
      {children}
    </span>
  );
}
