'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePath } from '@/providers/PathProvider';
import { useRouter } from 'next/navigation';
import useMousePosition from '@/lib/useMousePosition';
import { useSize } from '@/providers/SizeProvider';

export default function Curtain() {
  const { w, h } = useSize();
  const duration = 0.5;
  const mouse = useMousePosition();
  const route = useRouter();
  const { path, cover, setCover } = usePath();
  const [init, setInit] = useState(true);
  const [hypotenous, setHypotenous] = useState(0);

  // INITIALIZE`
  useEffect(() => {
    const handleResize = () => setHypotenous(Math.hypot(w, h));
    const timer = setTimeout(() => setInit(false), duration * 1000);

    handleResize(); // Set the initial value on mount
    if (typeof window !== 'undefined') window.addEventListener('resize', handleResize);

    return () => {
      if (typeof window !== 'undefined') window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [w, h]);

  // DETECT ROUTE
  useEffect(() => {
    setCover(true);
    const timer = setTimeout(() => route.push(path), duration * 1000);
    return () => clearTimeout(timer); // cleanup
  }, [path]);

  return (
    <>
      {init && (
        <div className='fixed z-[8] w-screen h-screen top-0 left-0 bg-zinc-300 dark:bg-zinc-900 pointer-events-none' />
      )}
      {cover ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: duration - 0.1, ease: 'easeIn' }}
          className='fixed z-[9] w-screen h-screen top-0 left-0 bg-zinc-300 dark:bg-zinc-900 pointer-events-none'
        />
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: 'easeIn' }}
          className='fixed z-[9] w-screen h-screen top-0 left-0 bg-zinc-300 dark:bg-zinc-900 pointer-events-none'
        />
      )}
      {cover ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: hypotenous }}
          transition={{ duration: duration, ease: 'easeIn' }}
          style={{ translate: `${mouse.x}px ${mouse.y}px`, width: 2, height: 2 }}
          className='fixed z-10 bg-zinc-300 dark:bg-zinc-900 rounded-full origin-center aspect-square top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-100 ring ring-transparent'
        />
      ) : (
        <motion.div
          initial={{ scale: hypotenous }}
          animate={{ scale: 0 }}
          transition={{ duration: duration, ease: 'easeOut' }}
          style={{ translate: `${mouse.x}px ${mouse.y}px`, width: 2, height: 2 }}
          className='fixed z-10 bg-zinc-300 dark:bg-zinc-900 rounded-full origin-center aspect-square top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none ring ring-transparent'
        />
      )}
    </>
  );
}
