import { allWorks } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='prose dark:prose-invert prose-sm'>
      {allWorks.map((work) => (
        <article key={work.slug}>
          <Link href={work.slug}>
            <h2>{work.title}</h2>
          </Link>
          <>{work.description}</>
        </article>
      ))}
    </div>
  );
}
