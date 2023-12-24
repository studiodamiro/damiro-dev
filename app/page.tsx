import { allPages } from 'contentlayer/generated';
import SectionPrimary from '@/components/Main';

export default function Home() {
  const color = '#fa8072';
  const page = allPages.find((page) => page.slugAsParams === 'hello');
  if (!page) return null;

  return <SectionPrimary color={color} page={page} />;
}
