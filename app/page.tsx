import { allPages } from 'contentlayer/generated';
import Main from '@/components/Main';

export default function Home() {
  const page = allPages.find((page) => page.slugAsParams === 'hello');
  if (!page) return null;

  return <Main page={page} />;
}
