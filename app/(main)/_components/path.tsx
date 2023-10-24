'use client';

import RCC from '@/components/debug/client';
import { usePathname } from 'next/navigation';

export default function Path() {
  const pathname = usePathname();

  return (
    <RCC>
      <div className="border text-muted-foreground leading-none bg-gray-50 rounded-md px-2 py-1.5 text-xs">
        {pathname}
      </div>
    </RCC>
  );
}
