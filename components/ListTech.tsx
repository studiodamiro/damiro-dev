import { Work } from '@/.contentlayer/generated';
import { cn } from '@/lib/utils';
import PillTech from './PillTech';

type ListTechProps = {
  page: Work;
  color?: string;
  className?: string;
};

export default function ListTech({ page, className }: ListTechProps) {
  return (
    <div className={cn(className)}>
      <span className='allcap-span'>Technologies</span>
      <div className='flex flex-wrap justify-start lg:justify-end gap-2 pr-4 lg:pr-0 mt-0.5'>
        {page.technologies &&
          page.technologies.split(', ').map((technology, index) => <PillTech key={index} tech={technology} />)}
      </div>
    </div>
  );
}
