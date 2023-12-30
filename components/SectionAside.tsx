import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';

type SectionAsideProps = {
  paddedTop?: boolean;
  fixed?: boolean;
  children?: React.ReactNode;
};

export default function SectionAside({ children, paddedTop = false, fixed = false }: SectionAsideProps) {
  let [ref, { width }] = useMeasure();

  return (
    <>
      <section ref={ref} className='flex w-full h-full bg-red-500' />
      <section
        style={{ width: `${width}px` }}
        className={cn(
          fixed ? 'lg:fixed' : 'lg:absolute pr-4 md:pr-8 pl-[70px] md:pl-[84px] lg:pl-8 lg:pt-20 pb-8',
          'relative right-0 h-full z-0'
        )}
      >
        {paddedTop && <span className='hidden lg:block w-full h-0 lg:h-[200px]' />}
        {children}
      </section>
    </>
  );
}
