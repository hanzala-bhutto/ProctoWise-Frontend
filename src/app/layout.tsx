'use client'
import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router:any = usePathname();

  useEffect(() => {
    const isEventFunctionsFolder = router.includes('/organizer');
    console.log('Is in Event Functions folder:', isEventFunctionsFolder);

    // You can add more logic here based on the result
    if (isEventFunctionsFolder) {
      // Do something when in the Event Functions folder
    } else {
      // Do something else when not in the Event Functions folder
    }
  }, [router?.pathname]);

  return (
    <html lang="en" className="light">
      <body className={cn('font-sans antialiased grainy', inter.className)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider> 

      </body>
    </html>
  );
}
