'use client';

import Arrow from '@/components/arrow';
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
    <>
      {pathname === path && <Arrow start={id} end="browser" />}
      <div
        className="border flex items-center justify-between rounded-lg p-2"
        id={id}
      >
        <span className="text-muted-foreground">{path}</span>
        <span className="text-muted-foreground text-xs">{totalSeconds}</span>
      </div>
    </>
  );
}
