import { allPages } from 'contentlayer/generated';
import SectionPrimary from '@/components/Main';

export default function Home() {
  const page = allPages.find((page) => page.slugAsParams === 'hello');
  const color = '#fa8072';

  return page && <SectionPrimary color={color} page={page} />;
}
