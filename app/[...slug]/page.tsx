import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';
import Main from '@/components/Main';

type PageProps = {
  params: {
    slug: string[];
  };
};

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);
  if (!page) notFound();

  return <Main page={page} />;
}

async function getPageFromParams(params: PageProps['params']) {
  const slug = params.slug.join('/');
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
