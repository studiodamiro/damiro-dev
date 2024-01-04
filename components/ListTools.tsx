import { Work } from '@/.contentlayer/generated';
import PillTech from './PillTech';

type ListToolsProps = {
  page: Work;
  color?: string;
};

export default function ListTools({ page }: ListToolsProps) {
  return (
    <>
      <span className='allcap-span'>Tools</span>
      <div className='flex flex-wrap gap-2 mt-0.5'>
        {page.tools && page.tools.split(', ').map((tool, index) => <PillTech key={index} tech={tool} />)}
      </div>
    </>
  );
}
