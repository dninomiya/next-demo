'use client';

import React from 'react';

type RouterCache = {
  type: 'static' | 'dynamic';
  pathnaem: string;
};

type CacheStatusContextType = {
  routerCaches: RouterCache[];
  fullRouteCaches: any[];
  buildTasks: any[];
  requestMemoCaches: any[];
  setRouterCaches: React.Dispatch<React.SetStateAction<RouterCache[]>>;
  setFullRouteCaches: React.Dispatch<React.SetStateAction<any[]>>;
  setBuildTasks: React.Dispatch<React.SetStateAction<any[]>>;
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
