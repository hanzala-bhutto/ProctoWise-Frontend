'use client'
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = usePathname();

  useEffect(() => {
    const isEventFunctionsFolder = router.includes('/organizer');
    console.log('Is in Event Functions folder:', isEventFunctionsFolder);

    // You can add more logic here based on the result
    if (isEventFunctionsFolder) {
      // Do something when in the Event Functions folder
    } else {
      // Do something else when not in the Event Functions folder
    }
  }, [router.pathname]);

  return (
    <html lang="en" className="light">
      <body className={cn('font-sans antialiased grainy', inter.className)}>
        {router.includes('/organizer') ? null : <Navbar />}
        {children}
      </body>
    </html>
  );
}
