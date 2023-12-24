import { cn } from '@/lib/utils';
import { Mdx } from '@/components/Mdx';
import { Fauna_One } from 'next/font/google';
import { Page } from '@/.contentlayer/generated';
import ImageFadeIn from './ImageFadeIn';

const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'] });

type SectionPrimaryProps = {
  page: Page;
  color?: string;
};

export default function Main({ page, color = '#fa8072' }: SectionPrimaryProps) {
  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center'>
      <section className='flex flex-col gap-4 md:gap-8 pr-4 md:pr-8 max-w-3xl lg:max-w-xl ml-[70px] md:ml-[84px] h-full lg:h-screen'>
        {page.slugAsParams === 'works' && <div className='w-full h-[calc(15vh)] lg:h-0 block lg:hidden' />}
        {/* PAGE TITLE */}
        <h1
          style={{ textWrap: 'balance', color: color }}
          className={cn(
            'h-full lg:h-1/3 flex items-end font-fauna lowercase text-5xl md:text-8xl ml-[-4px] md:ml-[-6px] mb-8 lg:mb-0',
            fauna.className
          )}
        >
          {page.title}
        </h1>

        {/* PRE TEXTS */}
        <div className='relative flex flex-col gap-2 ml-0 md:ml-[68px]'>
          <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
            {page.pretext}
          </span>

          <p
            style={{ textWrap: 'balance' }}
            className={cn(
              'font-fauna text-2xl md:text-4xl -ml-0.5 leading-[35px] md:leading-[50px] lg:leading-[50px] text-zinc-500',
              fauna.className
            )}
          >
            {page.description}
          </p>

          <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
            {page.subtext}
          </span>
        </div>

        {/* BODY */}
        <div className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless ml-0 md:ml-[68px] max-w-2xl text-zinc-700 dark:text-zinc-300'>
          <Mdx code={page.body.code} />
        </div>
      </section>

      {/* ASIDE */}
      {page.slugAsParams === 'works' ? (
        <section className='relative flex flex-col items-start w-full min-h-screen pl-[70px] md:pl-[152px] lg:pl-0'>
          <div className='w-full h-full lg:h-[calc(100vh/3)]' />

          {/* CONTENT */}
          <div className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless max-w-4xl pl-0 py-0 lg:py-8 pb-8 pr-4 md:pr-8 mx-w-xl'>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, saepe velit. Illum numquam ex, ipsum
              perferendis nisi soluta incidunt ducimus. Quasi voluptas at quisquam impedit odio cupiditate mollitia
              ullam ea! Dolorem ipsa assumenda distinctio deleniti necessitatibus! Quos laboriosam dolore suscipit
              tenetur animi tempora, consequatur sequi nemo fugit libero quis ducimus ab, dicta nulla quaerat cupiditate
              repellendus. Tenetur aliquam officiis quidem. Aliquid sequi eum debitis ipsam recusandae laudantium optio
              nostrum blanditiis perferendis nisi asperiores esse doloremque minima nulla, fugit natus temporibus
              perspiciatis ratione!
            </p>
          </div>

          {/* BACKGROUND */}
          <div className='-z-10 absolute inset-0 w-full h-full object-fit object-center overflow-hidden opacity-5'>
            <ImageFadeIn
              src={'/images/blog-post-1.jpg'}
              alt={'some awesome image'}
              className='w-full h-full object-cover'
            />
          </div>
        </section>
      ) : (
        <section className='relative flex flex-col items-start w-full pl-[70px] md:pl-[152px] lg:pl-0'>
          <div className='w-full h-1/3 hidden mb-8 lg:block' />
          <div className='max-w-3xl pl-0 lg:pl-8 pr-8 pb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius deserunt quod at id beatae ullam ipsa
            accusamus aliquam iusto quos, facilis accusantium illo praesentium earum laudantium? Omnis, blanditiis ab.
            Repudiandae ut ullam eaque nobis facere! Quis quos quasi aspernatur quod, soluta.
          </div>
        </section>
      )}
    </main>
  );
}
