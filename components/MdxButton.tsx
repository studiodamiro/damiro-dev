import Link from 'next/link';
import { ReactNode } from 'react';

type MdxButtonProps = {
  href: string;
  children: ReactNode;
};

export default function MdxButton({ href, children }: MdxButtonProps) {
  const color = '#fa8072';

  return (
    <Link
      href={href}
      style={{ backgroundColor: color }}
      className='py-0.5 pl-2 pr-1.5 rounded-sm tracking-widest no-underline bg-opacity-50 hover:bg-opacity-100'
    >
      {children}
    </Link>
  );
}
