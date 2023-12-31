import { allPages } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Main from '@/components/Main';

export default function Home() {
  const mdFile = 'hello';
  const page = allPages.find((page) => page.slugAsParams === mdFile);
  if (!page) notFound();

  return <Main page={page} />;
}
