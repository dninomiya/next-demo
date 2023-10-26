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
      if (!prev.find((cache) => cache.pathnaem === pathname)) {
        return [
          ...prev,
          {
            type: pathname.match('dynamic') ? 'dynamic' : 'static',
            pathnaem: pathname,
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
          pathname={cache.pathnaem}
          type={cache.type}
          onExpire={() => {
            setRouterCaches((prev) =>
              prev.filter((v) => v.pathnaem !== cache.pathnaem)
            );
          }}
          key={`router-cache-${cache.pathnaem}`}
        />
      ))}
    </>
  );
}
