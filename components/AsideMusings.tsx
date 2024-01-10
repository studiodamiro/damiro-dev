import { allMusings } from '@/.contentlayer/generated';
import { usePath } from '@/providers/PathProvider';

export default function AsideMusings() {
  const { setPath } = usePath();

  return (
    <div className='flex flex-col items-start pl-0 md:pl-[68px] lg:pl-0 bg-red-400/0'>
      <div className='h-10 w-full hidden lg:block' />
      <span className='allcap-span pt-2 lg:pt-0 pb-2'>Latest</span>
      <div onClick={() => setPath(allMusings[0].slug)} className='cursor-pointer pb-8'>
        {allMusings[0].title}
      </div>
      <span className='allcap-span pt-2 lg:pt-0 pb-2'>Archive</span>
      <div className='flex flex-col gap-1'>
        {allMusings.map((musing) => (
          <span key={musing.slug} onClick={() => setPath(musing.slug)} className='cursor-pointer'>
            <span>{musing.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
