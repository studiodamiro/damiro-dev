import { cn } from '@/lib/utils';
import { Mdx } from '@/components/Mdx';
import { Fauna_One } from 'next/font/google';
import { Page } from '@/.contentlayer/generated';

const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'] });

type SectionPrimaryProps = {
  page: Page;
  color?: string;
};

export default function Main({ page, color = '#fa8072' }: SectionPrimaryProps) {
  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center'>
      <section className='flex flex-col gap-4 md:gap-8 pr-4 md:pr-8 max-w-3xl lg:max-w-xl ml-[70px] md:ml-[84px] h-full lg:h-screen'>
        {/* PAGE TITLE */}
        <h1
          style={{ textWrap: 'balance', color: color }}
          className={cn(
            'mt-32 md:mt-40 lg:mt-0 lg:h-1/3 flex items-end font-fauna lowercase text-5xl md:text-8xl ml-[-4px] md:ml-[-6px]',
            fauna.className
          )}
        >
          {page.title}
        </h1>

        {/* PRE TEXTS */}
        <div className='relative flex flex-col gap-2 ml-0 md:ml-[68px]'>
          <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
            {page.pretext}
          </span>

          <p
            style={{ textWrap: 'balance' }}
            className={cn(
              'font-fauna text-2xl md:text-4xl -ml-0.5 leading-[35px] md:leading-[50px] lg:leading-[50px] text-zinc-500',
              fauna.className
            )}
          >
            {page.description}
          </p>

          <span style={{ textWrap: 'balance' }} className='text-sm uppercase tracking-widest font-semibold'>
            {page.subtext}
          </span>
        </div>

        {/* BODY */}
        <div className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless ml-0 md:ml-[68px] max-w-2xl text-zinc-700 dark:text-zinc-300'>
          <Mdx code={page.body.code} />
        </div>
      </section>
      <section className='flex flex-col items-start w-full min-h-full lg:min-h-screen pl-[70px] md:pl-[152px] lg:pl-0'>
        <div className='w-full h-full lg:h-[calc(100vh/3)]' />
        <p className='prose dark:prose-invert prose-sm md:prose-base prose-quoteless max-w-4xl pl-0 py-0 lg:py-8 pb-8 pr-4 md:pr-8 mx-w-xl'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti consequatur enim vero! Quibusdam
          alias aliquam quis aut provident beatae. Asperiores a vel rerum facere accusamus architecto, mollitia dolorem
          modi. Aliquam dolorum necessitatibus quisquam, impedit pariatur soluta ea at, sint dolor voluptatem iste
          tempora debitis sit, corrupti quis. Amet quasi error exercitationem unde repudiandae asperiores itaque
          eligendi obcaecati necessitatibus sunt. Nostrum tempore autem non debitis. Nesciunt est, officiis sapiente
          sit, autem voluptates corporis laboriosam amet blanditiis mollitia accusantium consequuntur! Eveniet, aut
          fugit maiores nostrum ullam magni voluptate soluta corrupti beatae. Temporibus consequatur repellat hic
          officiis sit. Eius cupiditate laboriosam asperiores ea obcaecati incidunt illum quia, qui commodi aperiam modi
          sapiente libero eum ullam voluptatem, optio quidem? Voluptates porro autem eos. Earum, assumenda dolore. Eius
          a quisquam, hic magnam laboriosam fugiat obcaecati consequuntur voluptatibus. Adipisci quos ducimus harum
          voluptatibus cumque fugiat, incidunt nesciunt maiores maxime recusandae debitis consectetur dolores odio?
          Inventore? Hic cumque molestiae repellendus recusandae possimus a quidem corporis, illum consectetur est ipsum
          ipsa, consequatur quibusdam facere voluptas. Distinctio, minima adipisci maxime quod a ullam dignissimos
          eligendi dolorum cupiditate perferendis? Voluptates voluptas, ipsum cupiditate placeat architecto asperiores
          magnam, hic harum sunt officia saepe dolores et distinctio impedit tenetur adipisci sapiente totam in
          recusandae dolorem repellat. Veritatis necessitatibus modi expedita ipsam. Tenetur fuga temporibus incidunt
          similique quod asperiores deleniti deserunt laborum dolor consectetur, quo officiis ipsum dolores porro
          sapiente unde explicabo. Exercitationem, eveniet voluptate. Nobis cumque nostrum odio eum ipsa? Ratione.
          Dicta, eos fugiat ea sequi expedita harum hic vel, optio, voluptas consequuntur tempora autem quis reiciendis
          non earum est incidunt placeat atque. Voluptates quisquam dolorum quae deleniti autem nemo ratione! Pariatur
          nesciunt quia labore delectus quam, quaerat sunt aut aspernatur reiciendis dolorum nihil officia, distinctio,
          ut molestias! Quia, magni ut maiores blanditiis pariatur reprehenderit consectetur sit molestias beatae ipsam
          voluptate!
        </p>
      </section>
    </main>
  );
}
