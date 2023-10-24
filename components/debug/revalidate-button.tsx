'use client';

import { revalidate } from '@/actions/revalidate';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function RevalidateButton() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        revalidate(pathname);
        router.refresh();
      }}
    >
      <RefreshCw size={16} className="mr-2" />
      このページを再生成
    </Button>
  );
}
