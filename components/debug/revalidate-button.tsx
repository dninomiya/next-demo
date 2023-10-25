'use client';

import { revalidate } from '@/actions/revalidate';
import { RefreshCw } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function RevalidateButton() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        revalidate(pathname);
        router.refresh();
      }}
    >
      <RefreshCw size={15} />
    </button>
  );
}
