import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionAsideProps = {
  paddedTop?: boolean;
  children?: ReactNode;
};

export default function SectionAside({ children, paddedTop = true }: SectionAsideProps) {
  return (
    <section className='flex flex-col pr-4 md:pr-8 pl-[70px] md:pl-[84px] lg:pl-8 w-full h-auto lg:pt-20 pb-8'>
      {paddedTop && <span className='hidden lg:block w-full h-0 lg:h-[200px]' />}
      {children}
    </section>
  );
}
