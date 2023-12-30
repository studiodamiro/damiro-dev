import { allWorks } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';

export default function AsideWorks() {
  const { setPath } = usePath();

  return (
    <section className='relative flex flex-col items-start justify-center bg-red-500/20 h-full w-full'>
      {allWorks.map((work) => (
        <span key={work.slug} onClick={() => setPath(work.slug)} className='cursor-pointer'>
          <span>{work.company}</span>
        </span>
      ))}
    </section>
  );
}
