import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className='fixed z-30 w-screen ml-0 p-4 md:p-8 flex items-center justify-between'>
      <Logo color='#666666' damiro className='scale-75' />
      <Navigation />
    </header>
  );
}
