import { ReactNode } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { cn } from '@/lib/utils';

type SectionWriteupProps = {
  title: string;
  preText?: string;
  description?: string;
  subText?: string;
  color?: string;
  children?: ReactNode;
};

export default function SectionWriteup({ title, preText, description, subText, children }: SectionWriteupProps) {
  const { color } = useColor();

  return (
    <section className='flex flex-col gap-0 pr-4 md:pr-8 pl-[70px] md:pl-[84px] w-full 2xl:w-4/5 h-full lg:h-screen'>
      {/* PAGE TITLE */}
      <h1
        style={{ color: color }}
        className='h-[200px] md:h-[300px] lg:h-[300px] flex items-end font-fauna lowercase text-5xl md:text-7xl -ml-[4px] md:ml-[-6px] mb-7'
      >
        {title}
      </h1>

      {/* PRE TEXTS */}
      <div className='relative flex flex-col gap-2 pl-0 md:pl-[68px]'>
        <span
          style={{ textWrap: 'balance' }}
          className={cn('text-sm uppercase tracking-widest font-semibold', !preText && 'hidden')}
        >
          {preText}
        </span>

        <span
          style={{ textWrap: 'balance' }}
          className='font-fauna text-2xl md:text-3xl -ml-0.5 mb-4 leading-[35px] md:leading-[45px] lg:leading-[45px] text-zinc-500 max-w-lg md:max-w-xl lg:max-w-full'
        >
          {description}
        </span>

        <span
          style={{ textWrap: 'balance' }}
          className={cn('text-sm uppercase tracking-widest font-semibold', !subText && 'hidden')}
        >
          {subText}
        </span>
      </div>

      {/* BODY */}
      <div className='prose dark:prose-invert prose-sm md:prose-base max-w-lg md:max-w-xl lg:max-w-full prose-quoteless leading-loose pl-0 md:pl-[68px] text-zinc-700 dark:text-zinc-300 mb-0 lg:mb-8'>
        {children}
      </div>
    </section>
  );
}
