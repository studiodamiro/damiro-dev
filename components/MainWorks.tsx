'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { Mdx } from './Mdx';
import { buttonVariants } from './ui/button';
import { FaLink, FaGit } from 'react-icons/fa6';
import { IoBulbOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import SectionWriteup from './SectionWriteup';
import SectionAside from './SectionAside';
import AsideWorks from './AsideWorks';
import TechPill from './TechPill';

type MainProps = {
  page: Work;
  color?: string;
};

export default function MainWorks({ page }: MainProps) {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor(`#${page.colors.split(', ')[0]}`);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-16 lg:gap-0'>
      <SectionWriteup
        title={page.company}
        description={page.description}
        subText={page.subtext}
        preText={page.works.split(', ').join(' / ')}
        color={color}
      >
        <div className={cn('mb-8', !page.body.code && 'hidden')}>
          <Mdx code={page.body.code} />
        </div>
        <div className='flex flex-col gap-2'>
          <span
            style={{ textWrap: 'balance' }}
            className='text-sm uppercase tracking-widest font-semibold text-zinc-600 dark:text-zinc-400'
          >
            Technologies
          </span>
          <div className='flex flex-wrap gap-2'>
            {page.technologies.split(', ').map((technology, index) => (
              <TechPill key={index} tech={technology} />
            ))}
          </div>
          <span
            style={{ textWrap: 'balance' }}
            className='text-sm uppercase tracking-widest font-semibold text-zinc-600 dark:text-zinc-400 mt-6'
          >
            Project Links
          </span>
          <div className='flex flex-wrap gap-4 items-center'>
            {page.repo && (
              <Link
                href={`https://github.com/studiodamiro/${page.repo}`}
                target='_blank'
                className={cn(
                  buttonVariants(),
                  'no-underline flex flex-row items-center gap-2 aspect-square tracking-wider'
                )}
              >
                <span className='sr-only'>Git Repository</span>
                <FaGit className='scale-[2.2]' />
              </Link>
            )}
            {page.links?.split(', ').map((link, index) => (
              <Link
                key={index}
                href={index === 0 ? `https://${link}` : `/musings/${link}`}
                target={index === 0 ? '_blank' : '_self'}
                className={cn(
                  buttonVariants({ variant: index === 0 ? 'default' : 'secondary' }),
                  'no-underline flex flex-row items-center gap-2 tracking-wider'
                )}
              >
                {index === 0 ? <FaLink /> : <IoBulbOutline />}
                {index === 0 ? link : 'Project Musings'}
              </Link>
            ))}
          </div>
        </div>
      </SectionWriteup>
      <SectionAside>
        <AsideWorks />
      </SectionAside>
    </main>
  );
}
