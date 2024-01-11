import { Work } from '@/.contentlayer/generated';
import { cn } from '@/lib/utils';
import PillTech from './PillTech';

type ListToolsProps = {
  page: Work;
  color?: string;
  className?: string;
};

export default function ListTools({ page, className }: ListToolsProps) {
  return (
    <div className={cn(className)}>
      <span className='allcap-span'>Tools</span>
      <div className='flex flex-wrap justify-start lg:justify-end gap-2 pr-4 lg:pr-0 mt-0.5'>
        {page.tools && page.tools.split(', ').map((tool, index) => <PillTech key={index} tech={tool} />)}
      </div>
    </div>
  );
}
