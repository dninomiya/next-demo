'use client';

import { ArrowElement } from '@/components/arrow';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useTimer } from 'react-timer-hook';

export default function RouterCache({
  type,
  onExpire,
  pathname: path,
}: {
  type: 'static' | 'dynamic';
  onExpire: VoidFunction;
  pathname: string;
}) {
  const sec = type === 'dynamic' ? 30 : 300;
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + sec);
  const pathname = usePathname();

  const { totalSeconds } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire,
  });

  const id = `router-cache-${path}`;

  return (
    <div>
      <ArrowElement visible={path === pathname} id={id}>
        <div
          className={cn(
            'border relative flex items-center justify-between rounded-lg p-2',
            pathname === path &&
              'outline outline-2 outline-pink-500 border-transparent'
          )}
        >
          <span className="text-muted-foreground">{path}</span>
          <span className="text-muted-foreground text-xs">{totalSeconds}</span>
        </div>
      </ArrowElement>
    </div>
  );
}
