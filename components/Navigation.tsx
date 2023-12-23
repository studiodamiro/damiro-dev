import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  return (
    <nav className='absolute right-4 md:right-8 flex items-center ml-auto text-sm font-medium space-x-6'>
      <Link href='/about'>About</Link>
      <Link href='/works'>Works</Link>
      <Link href='/contact'>Contact</Link>
      <ThemeToggle />
    </nav>
  );
}
