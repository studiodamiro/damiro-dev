import { ImageFadeIn } from '@/components/ImageFadeIn';
import { cn } from '@/lib/utils';
import GgmdLogo from './GgmdLogo';

export default function GreenGrainsMdFigure() {
  return (
    <div className={cn('relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] flex items-center')}>
      <GgmdLogo className='absolute w-1/2 md:w-2/3 lg:w-1/2 h-auto left-4 md:left-8 lg:left-4 top-0 bg-blend-overlay' />
      <div className='absolute w-full aspect-square scale-75 md:scale-50 lg:scale-75 -right-16 md:-right-52 lg:-right-16 xl:-right-24 2xl:-right-32'>
        <ImageFadeIn
          src='/images/ggmd-pack.webp'
          alt='Green Grains MD Rice Packaging'
          className='w-full object-contain'
        />
      </div>
    </div>
  );
}
