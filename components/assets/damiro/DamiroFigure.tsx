import { cn } from '@/lib/utils';

export default function DamiroFigure() {
  return (
    <>
      {/* FIGURE */}
      <div
        className={cn(
          'w-full aspect-[2/1] place-content-center flex items-center justify-center scale-100 sm:scale-150'
        )}
      >
        <div className='flex flex-row gap-4 items-center'>
          <div className='w-[77.63px] aspect-square border-2 border-[#52525b] dark:border-[#d4d4d8] rounded-full' />
          <div className='w-[100px] aspect-square border-2 border-[#52525b] dark:border-[#d4d4d8] rounded-full' />
          <div className='w-[55.92px] aspect-square border-2 border-[#52525b] dark:border-[#d4d4d8] rounded-full' />
        </div>
      </div>

      {/* FOREGROUND */}
      {/* <div className='z-[1] fixed bottom-0 left-0 w-full h-10 pointer-events-none bg-red-500/40' /> */}
    </>
  );
}
