import { allPages } from 'contentlayer/generated';
import Main from '@/components/Main';

export default function Home() {
  const mdFile = 'not-found';
  const page = allPages.find((page) => page.slugAsParams === mdFile);
  if (!page) return null;

  return <Main page={page} />;
}
