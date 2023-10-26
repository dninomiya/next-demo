'use client';

import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

type RouterCache = {
  type: 'static' | 'dynamic';
  pathname: string;
};

type CacheStatusContextType = {
  routerCaches: RouterCache[];
  fullRouteCaches: any[];
  buildTasks: string[];
  requestMemoCaches: any[];
  setRouterCaches: React.Dispatch<React.SetStateAction<RouterCache[]>>;
  setFullRouteCaches: React.Dispatch<React.SetStateAction<any[]>>;
  setBuildTasks: React.Dispatch<React.SetStateAction<string[]>>;
  setRequestMemoCaches: React.Dispatch<React.SetStateAction<any[]>>;
};

const CachStatusContext = React.createContext<CacheStatusContextType>(
  {} as CacheStatusContextType
);

export function CacheStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [routerCaches, setRouterCaches] = React.useState<RouterCache[]>([]);
  const [fullRouteCaches, setFullRouteCaches] = React.useState<any[]>([]);
  const [buildTasks, setBuildTasks] = React.useState<any[]>([]);
  const [requestMemoCaches, setRequestMemoCaches] = React.useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const hasRouterCache = routerCaches.find(
      (cache) => cache.pathname === pathname
    );
    const hasFullRouteCache = fullRouteCaches.find(
      (cache) => cache.pathnaem === pathname
    );

    if (!hasRouterCache && !hasFullRouteCache) {
      setBuildTasks((prev) =>
        prev.includes(pathname) ? prev : [...prev, pathname]
      );
    }
  }, [pathname, routerCaches, fullRouteCaches]);

  return (
    <CachStatusContext.Provider
      value={{
        routerCaches,
        fullRouteCaches,
        buildTasks,
        requestMemoCaches,
        setRouterCaches,
        setFullRouteCaches,
        setBuildTasks,
        setRequestMemoCaches,
      }}
    >
      {children}
    </CachStatusContext.Provider>
  );
}

export function useCacheStatus() {
  return React.useContext(CachStatusContext);
}
