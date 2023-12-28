import { allMusings } from '@/.contentlayer/generated';
import Link from 'next/link';

export default function PageMusings() {
  return (
    <section className='relative flex flex-col items-start'>
      {allMusings.map((musing) => (
        <Link href={musing.slug} key={musing.slug}>
          <span>{musing.title}</span>
        </Link>
      ))}
    </section>
  );
}
