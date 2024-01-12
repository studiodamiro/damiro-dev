import { cn } from '@/lib/utils';
import CityLeft from './CityLeft';
import CityRight from './CityRight';
import Clouds from './Clouds';

export default function SmartgridPhFigure() {
  return (
    <>
      {/* RIGHT FIGURE */}
      <div className={cn('w-full aspect-square place-content-center flex items-center justify-end')}>
        {/* <CityRight className='absolute w-3/5 h-auto bottom-1/2 right-0 translate-y-[100%]' /> */}
      </div>

      {/* BOTTOM BACKGROUND */}
      <div className='z-[-1] fixed w-screen h-screen top-0 left-0 pointer-events-none'>
        <CityLeft className={'absolute bottom-0 left-0 w-4/5 md:w-2/3 lg:w-1/2 h-auto'} />
        <Clouds className='absolute top-8 left-1/2 -translate-x-1/2 w-4/5 h-auto dark:opacity-20' />
      </div>
    </>
  );
}
