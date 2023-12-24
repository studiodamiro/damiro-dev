import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  return (
    <nav className='absolute right-4 md:right-8 flex items-center ml-auto text-sm font-medium space-x-6'>
      {/* <Link href='/about'>a</Link>
      <Link href='/works'>w</Link>
      <Link href='/contact'>c</Link> */}
      <ThemeToggle />
    </nav>
  );
}
