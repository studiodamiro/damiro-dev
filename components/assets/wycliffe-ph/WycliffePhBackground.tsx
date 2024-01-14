import { ImageFadeIn } from '@/components/ImageFadeIn';

export default function WycliffePhBackground() {
  return (
    <div className='z-[-1] fixed w-screen h-screen top-0 left-0'>
      <ImageFadeIn
        src='/images/wycliffe-bg.webp'
        alt='Green Grains MD Wood Background'
        className='opacity-80 dark:opacity-10 bg-blend-overlay object-cover'
      />
    </div>
  );
}
