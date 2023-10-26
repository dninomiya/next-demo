import { getBuildTimestamp } from '@/actions/revalidate';
import { TimeStamps } from '@/lib/types/timestamps';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

export default function FullRouteCacheColumn() {
  const [buildTimestamps, setBuildTimestamps] = useState<TimeStamps | null>();

  useEffect(() => {
    getBuildTimestamp().then((res) => {
      setBuildTimestamps(res);
    });
  }, []);

  return (
    <>
      {buildTimestamps?.a && (
        <div className="p-2 text-xs border rounded-lg">
          {format(new Date(buildTimestamps?.a), 'yyyy/MM/dd HH:mm:ss')}
        </div>
      )}
      {buildTimestamps?.b && (
        <div className="p-2 text-xs border rounded-lg">
          {format(new Date(buildTimestamps?.b), 'yyyy/MM/dd HH:mm:ss')}
        </div>
      )}
    </>
  );
}
