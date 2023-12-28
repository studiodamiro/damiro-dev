'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { Mdx } from './Mdx';
import { buttonVariants } from './ui/button';
import { FaLink } from 'react-icons/fa6';
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
        title={page.works.split(', ')[0]}
        description={page.description}
        subText={page.subtext}
        preText={page.company}
        color={color}
      >
        <Mdx code={page.body.code} />
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
          <div className='flex flex-wrap gap-2'>
            {page.links?.split(', ').map((link, index) => (
              <Link
                key={index}
                href={`https://${link}`}
                target='_blank'
                className={cn(buttonVariants(), 'no-underline gap-2 tracking-wider')}
              >
                <FaLink />
                {link}
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
