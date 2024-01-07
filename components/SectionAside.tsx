import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';

type SectionAsideProps = {
  padded?: boolean;
  margined?: boolean;
  fixed?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export default function SectionAside({
  children,
  padded = false,
  margined = false,
  fixed = false,
  className,
}: SectionAsideProps) {
  let [ref, { width }] = useMeasure();

  return (
    <>
      <section ref={ref} className='flex w-full h-full' />
      <section
        style={{ width: `${width}px` }}
        className={cn(
          'right-0 h-full',
          fixed ? 'lg:fixed' : 'lg:absolute lg:pt-20',
          margined ? 'pl-[70px] md:pl-[84px] lg:pl-8 pr-4 md:pr-8 pb-8' : 'pl-0',
          className
        )}
      >
        {padded && <span className='hidden lg:block w-full h-0 lg:h-[200px]' />}
        {children}
      </section>
    </>
  );
}
