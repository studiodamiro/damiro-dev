import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Main from '@/components/Main';

export default function NotFound() {
  const mdFile = 'not-found';
  const page = allPages.find((page) => page.slugAsParams === mdFile);
  if (!page) notFound();

  return <Main page={page} />;
}
