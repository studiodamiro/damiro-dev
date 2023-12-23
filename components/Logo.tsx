import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  color?: string;
  className?: string;
};

export default function Logo({ color = 'red', className }: LogoProps) {
  return (
    <Link href='/' className={cn('relative w-[54px] aspect-square', className)}>
      <div className='absolute w-[54px] aspect-square'>
        <div style={{ borderColor: color }} className='absolute w-[54px] aspect-square rounded-full border-[2px]' />
        <div
          style={{ borderColor: color }}
          className='absolute w-[42px] aspect-square rounded-full border-[2px] left-0 top-1/2 -translate-y-1/2'
        />
        <div
          style={{ borderColor: color }}
          className='absolute w-[30px] aspect-square rounded-full border-[2px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
        />
      </div>
    </Link>
  );
}
