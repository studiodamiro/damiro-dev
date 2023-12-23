import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allWorks } from 'contentlayer/generated';
import { Mdx } from '@/components/Mdx';
import { cn } from '@/lib/utils';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getWorkFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const work = allWorks.find((work) => work.slugAsParams === slug);

  if (!work) {
    null;
  }

  return work;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const work = await getWorkFromParams(params);

  if (!work) {
    return {};
  }

  return {
    title: work.title,
    description: work.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allWorks.map((work) => ({
    slug: work.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const work = await getWorkFromParams(params);

  if (!work) {
    notFound();
  }

  return (
    <article className='py-6 prose dark:prose-invert'>
      <h1 className='mb-2'>{work.title}</h1>
      {work.description && <p className={cn('text-xl mt-0 text-stone-700 dark:text-stone-200')}>{work.description}</p>}
      <hr className='my-4' />
      <Mdx code={work.body.code} />
    </article>
  );
}
