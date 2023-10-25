'use client';

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
  );
}
