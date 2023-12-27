import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allMusings } from 'contentlayer/generated';
import MainMusings from '@/components/MainMusings';

interface MusingProps {
  params: {
    slug: string[];
  };
}

export default async function MusingPage({ params }: MusingProps) {
  const musing = await getMusingFromParams(params);
  if (!musing) notFound();

  return <MainMusings page={musing} />;
}

async function getMusingFromParams(params: MusingProps['params']) {
  const slug = params?.slug?.join('/');
  const musing = allMusings.find((musing) => musing.slugAsParams === slug);
  if (!musing) null;
  return musing;
}

export async function generateMetadata({ params }: MusingProps): Promise<Metadata> {
  const musing = await getMusingFromParams(params);
  if (!musing) return {};
  return {
    title: musing.title,
    description: musing.description,
  };
}

export async function generateStaticParams(): Promise<MusingProps['params'][]> {
  return allMusings.map((musing) => ({
    slug: musing.slugAsParams.split('/'),
  }));
}
