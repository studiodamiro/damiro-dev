import { allWorks } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function AsideWorks() {
  return (
    <section className='relative flex flex-col items-start justify-center bg-red-500/20 h-full w-full'>
      {allWorks.map((work) => (
        <Link href={work.slug} key={work.slug}>
          <span>{work.company}</span>
        </Link>
      ))}
    </section>
  );
}
