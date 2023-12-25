import './globals.css';

import { Fira_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { ColorProvider } from '@/providers/ColorProvider';
import Copyright from '@/components/Copyright';
import Header from '@/components/Header';

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Damiro',
  description: 'Designer and Developer from MNL PH',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          fira.className,
          'antialiased min-h-screen',
          'bg-zinc-300 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400',
          'transition-colors duration-500 ease-out'
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <ColorProvider>
            <Header />
            <div>{children}</div>
            <Copyright rotate />
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
