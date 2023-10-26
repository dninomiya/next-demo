'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { revalidate } from '@/actions/revalidate';
import { cn } from '@/lib/utils';
import { RefreshCw } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useCacheStatus } from '@/components/cache-status-provider';

export default function RevalidateButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { setBuildTasks } = useCacheStatus();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn(isPending && 'animate-spin')}
            onClick={() => {
              setBuildTasks((prev) => [...prev, pathname]);

              startTransition(() => {
                revalidate(pathname);
                router.refresh();
              });
            }}
          >
            <RefreshCw size={15} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-muted-foreground">revalidatePath({pathname})</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
