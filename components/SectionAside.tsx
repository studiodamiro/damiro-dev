import { ReactNode } from 'react';

type SectionAsideProps = {
  paddedTop?: boolean;
  children?: ReactNode;
};

export default function SectionAside({ children, paddedTop = true }: SectionAsideProps) {
  return (
    <section className='relative flex flex-col grow-1 items-start w-full pl-[70px] md:pl-[152px] lg:pl-0'>
      <div className='w-full md:w-4/5 lg:w-full xl:w-2/3 pl-0 lg:pl-8 pr-4 md:pr-8 pb-8 flex flex-col gap-4'>
        {paddedTop && <span className='w-full h-8 lg:h-[calc(100vh/3)]' />}
        {children}
      </div>
    </section>
  );
}
