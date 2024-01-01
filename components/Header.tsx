'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div>
      <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <Logo damiro className='fixed z-30 scale-75 top-2 md:top-4 left-4 md:left-8' />
      </motion.span>
      <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Navigation className='fixed z-30 flex-col-reverse top-3.5 md:top-6 right-4 md:right-8' />
      </motion.span>
    </div>
  );
}
