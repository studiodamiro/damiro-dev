'use client';

import { useEffect } from 'react';
import { Mdx } from '@/components/Mdx';
import { Page } from '@/.contentlayer/generated';
import { useColor } from '@/providers/ColorProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import SectionAside from './SectionAside';
import SectionWriteup from './SectionWriteup';
import AsideContact from './AsideContact';
import AsideWorks from './AsideWorks';
import AsideMusings from './AsideMusings';

type MainProps = {
  page: Page;
  color?: string;
};

export default function Main({ page }: MainProps) {
  const path = usePathname();
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor('#71717a'); // Default primary color
  }, []);

  const renderAsideComponent = () => {
    switch (page.slugAsParams) {
      case 'contact':
        return (
          <SectionAside>
            <AsideContact />
          </SectionAside>
        );
      case 'works':
        return (
          <SectionAside>
            <AsideWorks />
          </SectionAside>
        );
      case 'musings':
        return (
          <SectionAside>
            <AsideMusings />
          </SectionAside>
        );
      case 'hello':
        return (
          <SectionAside>
            <AsideWorks />
          </SectionAside>
        );
      default:
        return <SectionAside />;
    }
  };

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.main
        key={path}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full min-h-screen flex flex-col lg:flex-row'
      >
        <SectionWriteup
          title={page.title}
          description={page.description}
          subText={page.subtext}
          preText={page.pretext}
          color={color}
        >
          <Mdx code={page.body.code} />
        </SectionWriteup>
        {renderAsideComponent()}
      </motion.main>
    </AnimatePresence>
  );
}
