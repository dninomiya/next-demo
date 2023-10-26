'use client';

import BuildTask from '@/components/build-task';
import { useCacheStatus } from '@/components/cache-status-provider';

export default function BuildTaskColumn() {
  const { buildTasks, setBuildTasks, setFullRouteCaches } = useCacheStatus();

  return (
    <div className="space-y-2">
      {buildTasks.map((pathname) => (
        <BuildTask
          pathname={pathname}
          onExpire={() => {
            setBuildTasks((prev) => prev.filter((v) => v !== pathname));

            if (pathname.match(/^\/static/)) {
              setFullRouteCaches((prev) => {
                if (prev.find((cache) => cache.pathname === pathname)) {
                  return prev;
                } else {
                  return [
                    ...prev,
                    {
                      pathname,
                      timestamp: Date.now(),
                    },
                  ];
                }
              });
            }
          }}
          key={pathname}
        />
      ))}
    </div>
  );
}
