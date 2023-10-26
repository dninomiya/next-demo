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
                return prev.map((cache) => {
                  if (cache.pathname === pathname) {
                    return {
                      ...cache,
                      timestamp: Date.now(),
                    };
                  } else {
                    return cache;
                  }
                });
              });
            }
          }}
          key={pathname}
        />
      ))}
    </div>
  );
}
