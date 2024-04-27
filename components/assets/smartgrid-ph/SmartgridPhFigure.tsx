import { cn } from '@/lib/utils';
import Clouds from './Clouds';

export default function SmartgridPhFigure() {
  return (
    <div
      className={cn(
        'relative w-full aspect-square place-content-center flex items-center justify-end overscroll-none bg-red-500/20'
      )}
    >
      <Clouds className='block lg:hidden absolute top-8 left-1/2 -translate-x-1/2 w-4/5 h-auto dark:opacity-10' />
    </div>
  );
}
