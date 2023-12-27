import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allWorks } from 'contentlayer/generated';
import MainWorks from '@/components/MainWorks';

interface WorkProps {
  params: {
    slug: string[];
  };
}

export default async function WorkPage({ params }: WorkProps) {
  const work = await getWorkFromParams(params);
  if (!work) notFound();

  return <MainWorks page={work}></MainWorks>;
}

async function getWorkFromParams(params: WorkProps['params']) {
  const slug = params?.slug?.join('/');
  const work = allWorks.find((work) => work.slugAsParams === slug);
  if (!work) null;
  return work;
}

export async function generateMetadata({ params }: WorkProps): Promise<Metadata> {
  const work = await getWorkFromParams(params);
  if (!work) return {};
  return {
    title: work.title,
    description: work.description,
  };
}

export async function generateStaticParams(): Promise<WorkProps['params'][]> {
  return allWorks.map((work) => ({
    slug: work.slugAsParams.split('/'),
  }));
}
