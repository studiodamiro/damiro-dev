import { ReactNode } from 'react';

type SectionWriteupProps = {
  title: string;
  preText?: string;
  description?: string;
  subText?: string;
  color?: string;
  children?: ReactNode;
};

export default function SectionWriteup({ title, preText, description, subText, color, children }: SectionWriteupProps) {
  return (
    <section className='flex flex-col gap-4 md:gap-8 pr-4 md:pr-8 pl-[70px] md:pl-[84px] w-full lg:w-1/2 h-full lg:h-screen'>
      {/* PAGE TITLE */}
      <h1
        style={{ textWrap: 'balance', color: color }}
        className='h-[200px] md:h-[300px] lg:h-[300px] flex items-end font-fauna lowercase text-5xl md:text-8xl -ml-[4px] md:ml-[-6px] mb-8'
      >
        {title}
      </h1>

      {/* PRE TEXTS */}
      <div className='relative flex flex-col gap-2 pl-0 md:pl-[68px]'>
        <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
          {preText}
        </span>

        <p
          style={{ textWrap: 'balance' }}
          className='font-fauna text-2xl md:text-4xl -ml-0.5 leading-[35px] md:leading-[50px] lg:leading-[50px] text-zinc-500'
        >
          {description}
        </p>

        <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
          {subText}
        </span>
      </div>

      {/* BODY */}
      <div className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless leading-loose pl-0 md:pl-[68px] text-zinc-700 dark:text-zinc-300 max-w-2xl'>
        {children}
      </div>
    </section>
  );
}