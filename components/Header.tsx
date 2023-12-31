import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <>
      <Logo damiro className='fixed z-30 scale-75 top-2 md:top-4 left-4 md:left-8' />
      <Navigation className='fixed z-30 flex-col-reverse top-6 md:top-8 right-4 md:right-8' />
    </>
  );
}
