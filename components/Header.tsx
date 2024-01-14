'use client';

import Logo from './Logo';
import Navigation from './Navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    console.log('scrollY', scrollY);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY]);

  return (
    <>
      <Logo damiro scrollY={scrollY} className='fixed z-30 scale-75 top-2 md:top-4 left-4 md:left-8' />
      <Navigation scrollY={scrollY} className='fixed z-30 flex-col-reverse top-3.5 md:top-6 right-4 md:right-8' />
    </>
  );
}
