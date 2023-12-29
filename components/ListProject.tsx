import { Work } from '@/.contentlayer/generated';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { FaGit, FaLink } from 'react-icons/fa6';
import { IoBulbOutline } from 'react-icons/io5';

type ListProjectProps = {
  page: Work;
  color?: string;
};

export default function ListProject({ page }: ListProjectProps) {
  return (
    <>
      <span className='allcap-span'>Project Links</span>
      <div className='flex flex-wrap gap-2 items-center'>
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
    </>
  );
}
