import { allMusings } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';

export default function AsideMusings() {
  const { setPath } = usePath();

  return (
    <section className='relative flex flex-col items-start'>
      {allMusings.map((musing) => (
        <span key={musing.slug} onClick={() => setPath(musing.slug)} className='cursor-pointer'>
          <span>{musing.title}</span>
        </span>
      ))}
    </section>
  );
}
