import CityLeft from './CityLeft';
import Clouds from './Clouds';

export default function SmartgridPhBackground() {
  return (
    <>
      <Clouds className='absolute top-8 left-1/2 -translate-x-1/2 w-4/5 h-auto dark:opacity-10' />

      {/* sm */}
      <div className='flex lg:hidden z-[-1] items-end w-screen h-32 overflow-visible'>
        <CityLeft className={'w-full md:w-2/3 lg:w-1/2 h-auto mr-8'} />
      </div>

      {/* lg */}
      <div className='hidden lg:block z-[-1] fixed w-screen h-screen top-0 left-0 pointer-events-none'>
        <CityLeft className={'absolute bottom-0 left-0 w-4/5 md:w-2/3 lg:w-1/2 h-auto'} />
      </div>
    </>
  );
}
