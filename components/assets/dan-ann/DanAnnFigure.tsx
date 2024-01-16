import { cn } from '@/lib/utils';
import { ImageFadeIn } from '@/components/ImageFadeIn';
import DannAnnLogo from './DannAnnLogo';
import { useSize } from '@/providers/SizeProvider';

export default function DanAnnFigure() {
  const { w, h } = useSize();
  return (
    <>
      {/* lg */}
      <div className={cn('w-full aspect-video flex items-center justify-center')}>
        <DannAnnLogo classname='opacity-70 dark:opacity-40' />
      </div>

      {/* sm */}
      <div style={{ height: w }} className='flex lg:hidden z-[-1] w-screen rotate-90 overflow-visible bg-red-500/20'>
        <ImageFadeIn
          src='/images/danann-bg.webp'
          alt='Dan / Ann Nuptials textured background of recycled paper'
          className='opacity-40 dark:opacity-20 object-fill overflow-visible'
        />
      </div>
    </>
  );
}
