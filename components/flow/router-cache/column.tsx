'use client';

import { useCacheStatus } from '@/components/cache-status-provider';
import RouterCache from '@/components/router-cache';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

export default function RouterCacheColumn() {
  const { routerCaches, setRouterCaches } = useCacheStatus();
  const pathname = usePathname();

  useEffect(() => {
    setRouterCaches((prev) => {
      if (!prev.find((cache) => cache.pathname === pathname)) {
        return [
          ...prev,
          {
            type: pathname.match('dynamic') ? 'dynamic' : 'static',
            pathname: pathname,
          },
        ];
      } else {
        return prev;
      }
    });
  }, [pathname, setRouterCaches]);

  return (
    <>
      {routerCaches.map((cache) => (
        <RouterCache
          pathname={cache.pathname}
          type={cache.type}
          onExpire={() => {
            setRouterCaches((prev) =>
              prev.filter((v) => v.pathname !== cache.pathname)
            );
          }}
          key={`router-cache-${cache.pathname}`}
        />
      ))}
    </>
  );
}
