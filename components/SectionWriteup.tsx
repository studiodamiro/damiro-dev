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
    <section className='flex flex-col gap-8 pr-4 md:pr-8 pl-[70px] md:pl-[84px] w-full 2xl:w-4/5 h-full lg:h-screen pt-20 pb-10'>
      {/* PAGE TITLE */}
      <h1
        style={{ color: color }}
        className='h-[100px] md:h-[200px] lg:h-[200px] flex items-end font-fauna lowercase text-5xl md:text-7xl -ml-[4px] md:ml-[-6px] mb-0'
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
          className='font-fauna text-2xl md:text-3xl -ml-0.5 leading-[35px] md:leading-[45px] lg:leading-[45px] max-w-lg md:max-w-xl lg:max-w-full'
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
        <div className='prose dark:prose-invert prose-sm md:prose-base max-w-lg md:max-w-xl lg:max-w-full prose-quoteless leading-loose pl-0 md:pl-[68px] pb-0 lg:pb-8'>
          {children}
        </div>
      )}
    </section>
  );
}
