import { ReactNode, useEffect, useState } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { cn } from '@/lib/utils';

type SectionWriteupProps = {
  title?: string;
  preText?: string;
  description?: string;
  smallDesc?: string;
  subText?: string;
  color?: string;
  children?: ReactNode;
  slug?: string;
};

export default function SectionWriteup({
  title,
  preText,
  description,
  smallDesc,
  subText,
  children,
  slug,
}: SectionWriteupProps) {
  const { color } = useColor();
  const [showWorks, setShowWorks] = useState(false);

  useEffect(() => {
    setShowWorks(slug === 'works' || slug === 'hello');
  }, []);

  return (
    <section
      className={cn(
        'flex flex-col gap-10 pr-8 pl-[70px] md:pl-[84px] w-full 2xl:w-4/5 h-full pb-8 lg:h-screen z-0',
        showWorks ? 'pt-0 lg:pt-20' : 'lg:pt-20'
      )}
    >
      {/* PAGE TITLE */}
      <h1
        style={{ color: color }}
        className={cn(
          showWorks ? 'min-h-[0px] lg:min-h-[200px]' : 'min-h-[150px] md:min-h-[200px] lg:min-h-[200px]',
          'flex items-end max-w-3xl font-fauna lowercase text-5xl md:text-7xl -ml-[4px] md:ml-[-6px] mb-0'
        )}
      >
        {title}
      </h1>

      {/* PRE TEXTS */}
      <div className='relative flex flex-col pl-0 md:pl-[68px] z-[-1]'>
        {preText && (
          <span style={{ textWrap: 'balance' }} className='allcap-span'>
            {preText}
          </span>
        )}

        {description && (
          <span
            style={{ textWrap: 'balance' }}
            className={cn(
              'font-fauna text-2xl md:text-3xl -ml-0.5 pt-1 md:pt-1.5 leading-snug md:leading-normal',
              'max-w-lg md:max-w-xl lg:max-w-3xl text-zinc-500'
            )}
          >
            {description}
          </span>
        )}

        {smallDesc && (
          <span
            style={{ textWrap: 'balance' }}
            className='font-fauna text-lg lg:text-xl pt-4 leading-snug md:leading-normal max-w-lg md:max-w-xl lg:max-w-3xl'
          >
            {smallDesc}
          </span>
        )}

        {subText && (
          <span style={{ textWrap: 'balance' }} className='allcap-span'>
            {subText}
          </span>
        )}
      </div>

      {/* BODY */}
      {children && (
        <div
          style={{ textWrap: 'pretty' }}
          className={cn(
            'prose prose-zinc dark:prose-invert prose-sm md:prose-base prose-quoteless',
            'max-w-lg md:max-w-xl lg:max-w-3xl leading-loose',
            'pl-0 md:pl-[68px] text-zinc-600 dark:text-zinc-400'
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}
