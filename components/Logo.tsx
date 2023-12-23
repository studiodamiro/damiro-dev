import { cn } from '@/lib/utils';
import { Fauna_One } from 'next/font/google';
import Link from 'next/link';

const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'] });

type LogoProps = {
  color?: string;
  damiro?: boolean;
  className?: string;
};

export default function Logo({ color = 'red', damiro = false, className }: LogoProps) {
  return (
    <Link
      href='/'
      className={cn(
        'relative w-[54px] aspect-square flex flex-row gap-4 items-center justify-center origin-left',
        className
      )}
    >
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
      <span
        style={{ color: color }}
        className={cn('relative text-3xl translate-x-full -ml-8', !damiro && 'hidden', fauna.className)}
      >
        Damiro
      </span>
    </Link>
  );
}
