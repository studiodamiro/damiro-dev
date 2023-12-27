import { allWorks } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function PageWorks() {
  return (
    <section className='relative flex flex-col items-start bg-red-500/20'>
      {allWorks.map((work) => (
        <Link href={work.slug} key={work.slug}>
          <span>{work.slug}</span>
        </Link>
      ))}
    </section>
  );
}
