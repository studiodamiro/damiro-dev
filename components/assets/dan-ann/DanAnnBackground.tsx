import { ImageFadeIn } from '@/components/ImageFadeIn';

export default function DanAnnBackground() {
  return (
    <>
      <div className='hidden lg:block z-[-1] fixed w-full h-screen bottom-0 left-[50%]'>
        <ImageFadeIn
          src='/images/danann-bg.webp'
          alt='Dan / Ann Nuptials textured background of recycled'
          className='opacity-80 dark:opacity-5 object-cover object-left'
        />
      </div>
    </>
  );
}
