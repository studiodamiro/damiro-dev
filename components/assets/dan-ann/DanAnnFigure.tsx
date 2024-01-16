import { cn } from '@/lib/utils';
import { ImageFadeIn } from '@/components/ImageFadeIn';
import { useSize } from '@/providers/SizeProvider';
import DannAnnLogo from './DannAnnLogo';
import useMeasure from 'react-use-measure';

export default function DanAnnFigure() {
  const { w, h } = useSize();
  const [ref, { width, height, top, left }] = useMeasure();

  return (
    <>
      {/* emblem */}
      <div ref={ref} className={cn('w-full aspect-video flex items-center justify-center bg-blue-500/10')}>
        <DannAnnLogo classname='scale-75 opacity-70 dark:opacity-40' />
      </div>

      {/* sm background */}
      <div
        style={{ top: top, left: left, width: height }}
        className='absolute lg:hidden z-[-1] origin-top-left rotate-90 translate-x-[100%] overflow-visible bg-red-500/20 w-screen h-screen'
      >
        <ImageFadeIn
          src='/images/danann-bg.webp'
          alt='Dan / Ann Nuptials textured background of recycled paper'
          className='opacity-40 dark:opacity-20 object-cover object-left'
        />
      </div>
    </>
  );
}
