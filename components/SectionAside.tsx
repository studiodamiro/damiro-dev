import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionAsideProps = {
  paddedTop?: boolean;
  children?: ReactNode;
};

export default function SectionAside({ children, paddedTop = true }: SectionAsideProps) {
  return (
    <section className='relative flex flex-col items-start w-full lg:w-1/2 2xl:w-2/3 pl-[70px] md:pl-[84px] lg:pl-0 bg-red-500/10'>
      <span className={cn('w-full h-0 bg-red-500', paddedTop && 'lg:h-[calc(100vh/3)]')} />
      {children}
    </section>
  );
}
