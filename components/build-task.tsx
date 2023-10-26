'use client';

import { File, Loader } from 'lucide-react';
import { useTimer } from 'react-timer-hook';

export default function BuildTask({
  pathname,
  onExpire,
}: {
  pathname: string;
  onExpire: VoidFunction;
}) {
  const sec = 5;
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + sec);

  useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire,
  });

  return (
    <div className="flex p-2 border rounded-lg items-center gap-2 text-muted-foreground">
      <File size={16} />
      <span className="flex-1">{pathname}</span>
      <small>ビルド中...</small>
      <Loader size={16} className="text-muted-foreground/60 animate-spin" />
    </div>
  );
}
