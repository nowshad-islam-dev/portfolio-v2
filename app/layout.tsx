import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nowshad Islam - Full Stack Engineer',
  description:
    'Portfolio of Nowshad Islam, a passionate full-stack engineer devops expert creating beautiful digital solutions.',
  keywords:
    'full stack engineer, web developer, app developer, devops expert, portfolio',
  authors: [{ name: 'Nowshad Islam' }],
  openGraph: {
    title: 'Nowshad Islam - Full Stack Engineer',
    description:
      'Portfolio of Nowshad Islam, a passionate full-stack engineer and devops expert.',
    type: 'website',
  },
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
