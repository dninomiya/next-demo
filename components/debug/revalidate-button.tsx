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

export default function RevalidateButton() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={cn(isPending && 'animate-spin')}
            onClick={() => {
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
