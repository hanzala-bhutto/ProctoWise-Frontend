'use client';

import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { protectedRoutes, publicRoutes } from '@/utils/routes';
import { useAppSelector } from '@/redux/store';
import React from 'react';

export function NavigationEvent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isAuthenticated = useAppSelector((state)=>state.auth.isAuthenticated);

    const [renderChild, setRenderChild] = React.useState(false);

  useEffect(() => {
    // const url = `${pathname}`;
    // const urlParts = url.split('/');
    // const currentPath = `/${urlParts.slice(2).join('/')}`;

    if(Object.values(publicRoutes).includes(pathname as publicRoutes)){
        if(isAuthenticated){
            router.push(protectedRoutes.DASHBOARD);
        }
    }

    if(Object.values(protectedRoutes).includes(pathname as protectedRoutes)) {
        // eslint-disable-next-line no-console
        console.log('protected route');
        if(!isAuthenticated) {
            router.push(publicRoutes.AUTH_LOGIN)
        }
        else{
            setRenderChild(true);
        }
    }
    else{
        // eslint-disable-next-line no-console
        console.log('public route');
        // eslint-disable-next-line no-console
        console.log(pathname);
        setRenderChild(true);
    }

  }, [pathname, searchParams]);

  return (
    <>
        {renderChild
        ?
            children
        :
            null
        }
    </>
  )
  
  
  ;
}