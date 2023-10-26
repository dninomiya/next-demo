'use client';

import BuildTask from '@/components/build-task';
import { useCacheStatus } from '@/components/cache-status-provider';

export default function RequestMemoColumn() {
  const { buildTasks, setBuildTasks } = useCacheStatus();

  return (
    <div className="space-y-2">
      {buildTasks.map((id) => (
        <BuildTask
          pathname={id}
          onExpire={() => {
            setBuildTasks((prev) => prev.filter((v) => v !== id));
          }}
          key={id}
        />
      ))}
    </div>
  );
}
