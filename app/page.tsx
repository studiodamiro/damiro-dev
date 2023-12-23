import { allPages } from 'contentlayer/generated';
import { Mdx } from '@/components/Mdx';
import { cn } from '@/lib/utils';
import { Fauna_One } from 'next/font/google';

const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  const hello = allPages.find((page) => page.slugAsParams === 'hello');
  const color = '#fa8072';

  return (
    hello && (
      <article className='flex flex-col gap-4 md:gap-8 py-8'>
        {/* PAGE TITLE */}
        <h1
          style={{ textWrap: 'balance', color: color }}
          className={cn('font-fauna text-5xl md:text-8xl lowercase ml-[48px]', fauna.className)}
        >
          {hello.title}
        </h1>

        {/* PRE TEXTS */}
        <div className='flex flex-col gap-2 ml-[52px] md:ml-[128px]'>
          <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
            {hello.pretext}
          </span>
          <p
            style={{ textWrap: 'balance' }}
            className={cn('font-fauna text-2xl md:text-4xl -ml-0.5 text-zinc-500', fauna.className)}
          >
            {hello?.description}
          </p>
          <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
            {hello.subtext}
          </span>
        </div>

        {/* BODY */}
        <div className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless max-w-full text-zinc-700 dark:text-zinc-300 ml-[52px] md:ml-[128px]'>
          <Mdx code={hello.body.code} />
        </div>
      </article>
    )
  );
}
