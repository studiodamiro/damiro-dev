import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPages } from 'contentlayer/generated';
import SectionPrimary from '@/components/Main';

type PageProps = {
  params: {
    slug: string[];
    pretext?: string;
    subtext?: string;
    description?: string;
  };
};

export default async function PagePage({ params }: PageProps) {
  const color = '#fa8072';
  const page = await getPageFromParams(params);
  if (!page) notFound();

  return <SectionPrimary color={color} page={page} />;
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
