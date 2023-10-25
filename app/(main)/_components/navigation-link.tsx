'use client';

import { File } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function NavigationLink({
  page,
}: {
  page: {
    title: string;
    path: string;
  };
}) {
  const pathname = usePathname();
  const [seconds, setSeconds] = useState<number>(0);
  const createdAt = useRef<Date | null>(null);

  useEffect(() => {
    if (page.path === pathname && !createdAt.current) {
      createdAt.current = new Date();

      const timer = setInterval(() => {
        const diff = Math.floor(
          (new Date().getTime() - createdAt.current!.getTime()) / 1000
        );
        if (30 - diff < 1) {
          clearInterval(timer);
          createdAt.current = null;
        }
        setSeconds(30 - diff);
      }, 1000);
    }
  }, [pathname, page]);

  return (
    <Link
      href={page.path}
      className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50 relative"
    >
      <File size={16} className="text-muted-foreground" />
      <span>{page.title}</span>
      <span className="flex-1"></span>
      {pathname === page.path && (
        <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_4px] shadow-pink-500"></span>
      )}

      {seconds > 0 && (
        <div className="absolute bottom-0 inset-x-0">
          <div
            className="h-1 bg-green-300 w-full transition duration-1000 origin-left ease-linear"
            style={{
              transform: `scaleX(${seconds / 30})`,
            }}
          ></div>
        </div>
      )}
    </Link>
  );
}
