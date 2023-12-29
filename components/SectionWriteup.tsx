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
    <section className='flex flex-col gap-10 pr-4 md:pr-8 pl-[70px] md:pl-[84px] w-full 2xl:w-4/5 h-full lg:h-screen pt-20 pb-10'>
      {/* PAGE TITLE */}
      <h1
        style={{ color: color }}
        className='min-h-[100px] md:min-h-[200px] lg:min-h-[200px] flex items-end font-fauna lowercase text-5xl md:text-7xl -ml-[4px] md:ml-[-6px] mb-0'
      >
        {title}
      </h1>

      {/* PRE TEXTS */}
      <div className='relative flex flex-col pl-0 md:pl-[68px]'>
        {preText && (
          <span style={{ textWrap: 'balance' }} className='allcap-span'>
            {preText}
          </span>
        )}

        <span
          style={{ textWrap: 'balance' }}
          className='font-fauna text-2xl md:text-3xl -ml-0.5 pt-1 md:pt-1.5 leading-snug md:leading-normal max-w-lg md:max-w-xl lg:max-w-full text-zinc-500'
        >
          {description}
        </span>

        {subText && (
          <span style={{ textWrap: 'balance' }} className='allcap-span'>
            {subText}
          </span>
        )}
      </div>

      {/* BODY */}
      {children && (
        <div className='prose dark:prose-invert prose-sm md:prose-base max-w-lg md:max-w-xl lg:max-w-full prose-quoteless leading-loose pl-0 md:pl-[68px] pb-0 lg:pb-8 text-zinc-600 dark:text-zinc-400'>
          {children}
        </div>
      )}
    </section>
  );
}
