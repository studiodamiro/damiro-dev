import { ImageFadeIn } from '@/components/ImageFadeIn';
import { cn } from '@/lib/utils';
import GgmdLogo from './GgmdLogo';

export default function GreenGrainsMdFigure() {
  return (
    <div className='w-full aspect-video'>
      {/* PROJECT FIGURE */}
      <div className={cn('relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] flex items-center')}>
        <GgmdLogo className='absolute w-1/2 md:w-2/3 lg:w-1/2 h-auto left-4 md:left-8 lg:left-4 top-0 bg-blend-overlay' />
        <div className='absolute w-full aspect-square scale-75 md:scale-50 lg:scale-75 -right-16 md:-right-52 lg:-right-16 xl:-right-24 2xl:-right-32'>
          <ImageFadeIn
            src='/images/ggmd-pack.webp'
            alt='Green Grains MD Rice Packaging'
            className='w-full object-cover scale-95 overflow-visible'
          />
        </div>
      </div>

      {/* BACKGROUND */}
      <div className='z-[-1] fixed w-screen h-screen top-0 left-0'>
        <ImageFadeIn
          src='/images/ggmd-bg.webp'
          alt='Green Grains MD Wood Background'
          className='opacity-10 bg-blend-overlay object-cover'
        />
      </div>
    </div>
  );
}
