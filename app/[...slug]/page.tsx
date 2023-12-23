import { Fauna_One, Fira_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';
import { Mdx } from '@/components/Mdx';
import { cn } from '@/lib/utils';

const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'] });

type PageProps = {
  params: {
    slug: string[];
    pretext?: string;
    subtext?: string;
    description?: string;
  };
};

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);
  if (!page) notFound();

  const color = '#fa8072';

  return (
    <article className='flex flex-col gap-8 py-8'>
      {/* PAGE TITLE */}
      <h1
        style={{ textWrap: 'balance', color: color }}
        className={cn('font-fauna text-5xl md:text-8xl lowercase ml-[48px]', fauna.className)}
      >
        {page.title}
      </h1>

      {/* PRE TEXTS */}
      <div className='flex flex-col gap-2 ml-[52px]'>
        <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
          {page.pretext}
        </span>

        <p
          style={{ textWrap: 'balance' }}
          className={cn('font-fauna text-2xl md:text-4xl leading-tight -ml-0.5 text-zinc-500', fauna.className)}
        >
          {page.description}
        </p>
        <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
          {page.subtext}
        </span>
      </div>

      {/* BODY */}
      <div className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless max-w-full text-zinc-700 dark:text-zinc-300 ml-[52px]'>
        <Mdx code={page.body.code} />
      </div>
    </article>
  );
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params?.slug?.join('/');
  const page = allPages.find((page) => page.slugAsParams === slug);
  if (!page) null;
  return page;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
  };
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }));
}
