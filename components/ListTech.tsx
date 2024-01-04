import { Work } from '@/.contentlayer/generated';
import PillTech from './PillTech';

type ListTechProps = {
  page: Work;
  color?: string;
};

export default function ListTech({ page }: ListTechProps) {
  return (
    <>
      <span className='allcap-span'>Technologies</span>
      <div className='flex flex-wrap gap-2 mt-0.5'>
        {page.technologies &&
          page.technologies.split(', ').map((technology, index) => <PillTech key={index} tech={technology} />)}
      </div>
    </>
  );
}
