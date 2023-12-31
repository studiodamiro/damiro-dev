import { allPages } from 'contentlayer/generated';
import Main from '@/components/Main';
import { notFound } from 'next/navigation';

export default function Home() {
  const mdFile = 'hello';
  const page = allPages.find((page) => page.slugAsParams === mdFile);
  if (!page) notFound();

  return <Main page={page} />;
}
