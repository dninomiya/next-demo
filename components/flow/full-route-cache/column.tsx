'use client';

import { useCacheStatus } from '@/components/cache-status-provider';
import { format } from 'date-fns';

export default function FullRouteCacheColumn() {
  const { fullRouteCaches } = useCacheStatus();

  return (
    <ul className="space-y-2">
      {fullRouteCaches.map((cache) => (
        <li
          key={cache.pathname}
          className="flex p-2 border rounded-lg items-center gap-2 text-muted-foreground"
        >
          <span className="flex-1">{cache.pathname}</span>
          <time className="text-xs">
            {format(new Date(cache.timestamp), 'MM/dd HH:mm')}
          </time>
        </li>
      ))}
    </ul>
  );
}
