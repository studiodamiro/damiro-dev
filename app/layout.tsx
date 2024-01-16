import './globals.css';

import { ReactNode } from 'react';
import { Fauna_One, Fira_Sans } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import PathProvider from '@/providers/PathProvider';
import SizeProvider from '@/providers/SizeProvider';
import ColorProvider from '@/providers/ColorProvider';
import Copyright from '@/components/Copyright';
import Header from '@/components/Header';
import Curtain from '@/components/Curtain';

const fira = Fira_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap', variable: '--font-fira' });
const fauna = Fauna_One({ subsets: ['latin'], weight: ['400'], display: 'swap', variable: '--font-fauna' });

export const metadata = {
  title: 'Damiro',
  description: 'Designer and Developer from MNL PH',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          fira.variable,
          fauna.variable,
          'antialiased min-h-screen font-fira',
          'bg-zinc-300 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400',
          'transition-colors duration-500 ease-out'
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <PathProvider>
            <SizeProvider>
              <ColorProvider>
                <Header />
                <Curtain />
                <div>{children}</div>
                <Copyright rotate />
              </ColorProvider>
            </SizeProvider>
          </PathProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
