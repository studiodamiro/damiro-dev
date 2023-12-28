import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionAsideProps = {
  paddedTop?: boolean;
  children?: ReactNode;
};

export default function SectionAside({ children, paddedTop = true }: SectionAsideProps) {
  return (
    <section className='relative flex flex-col items-start w-full pl-[70px] md:pl-[84px] lg:pl-0 mb-8 lg:mb-0'>
      <span className={cn('w-full h-0', paddedTop && 'lg:h-[calc(100vh/3)]')} />
      {children}
    </section>
  );
}
