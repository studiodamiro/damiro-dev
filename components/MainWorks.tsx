'use client';

import { useEffect } from 'react';
import { Work } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import SectionWriteup from './SectionWriteup';
import PageWorks from './PageWorks';
import SectionAside from './SectionAside';
import { Mdx } from './Mdx';
import { Button } from './ui/button';
import { FaLink } from 'react-icons/fa6';
import Link from 'next/link';

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
              <div key={index} className='py-0.5 px-2 bg-zinc-700/30 rounded-md text-xs md:text-sm'>
                {technology}
              </div>
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
              <Button key={index} className='gap-2'>
                <FaLink className='dark:text-zinc-800 text-zinc-200' />
                <a
                  href={`https://${link}`}
                  target='_blank'
                  className='dark:text-zinc-800 text-zinc-200 no-underline tracking-wider'
                >
                  {link}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </SectionWriteup>
      <SectionAside>
        <PageWorks />
      </SectionAside>
    </main>
  );
}
