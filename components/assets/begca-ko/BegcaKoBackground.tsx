import { ImageFadeIn } from '@/components/ImageFadeIn';

export default function BegcaKoBackground() {
  return (
    <>
      {/* sm */}
      <div className='flex lg:hidden z-[-1] w-screen aspect-square rotate-90 translate-y-[-100%] -mb-[100%]'>
        <ImageFadeIn
          src='/images/begca-bg.webp'
          alt='Begca Ko background image of buildings'
          className='opacity-10 dark:opacity-5 object-cover object-left'
        />
      </div>

      {/* lg */}
      <div className='hidden lg:block z-[-1] fixed w-full h-screen bottom-0 left-0'>
        <ImageFadeIn
          src='/images/begca-bg.webp'
          alt='Begca Ko background image of buildings'
          className='opacity-10 dark:opacity-5 bg-blend-overlay object-cover 2xl:object-contain object-right'
        />
      </div>
    </>
  );
}
