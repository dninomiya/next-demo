'use client';

import { format } from 'date-fns';

export default function BuildTime({ timestamp }: { timestamp: number }) {
  return (
    <p className="text-xs italic text-muted-foreground">
      {format(new Date(timestamp), 'yyyy年MM月dd日 HH:mm:ss')}
      に生成
    </p>
  );
}
