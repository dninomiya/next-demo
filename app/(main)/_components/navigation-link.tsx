'use client';

import { Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function NavigationLink({
  page,
}: {
  page: {
    title: string;
    path: string;
    private?: boolean;
  };
}) {
  const pathname = usePathname();
  const [seconds, setSeconds] = useState<number>(0);
  const createdAt = useRef<Date | null>(null);

  useEffect(() => {
    if (page.path === pathname) {
      createdAt.current = new Date();

      setInterval(() => {
        const diff = Math.floor(
          (new Date().getTime() - createdAt.current!.getTime()) / 1000
        );
        setSeconds(30 - diff);
      }, 1000);
    }
  }, [pathname, page]);

  return (
    <Link
      href={page.path}
      className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50 relative"
    >
      {page.private ? (
        <span>
          <Lock size={16} className="text-muted-foreground" />
          <span className="sr-only">プライベート</span>
        </span>
      ) : (
        <span>
          <Globe size={16} className="text-muted-foreground" />
          <span className="sr-only">公開</span>
        </span>
      )}
      <span>{page.title}</span>
      <span className="flex-1"></span>
      {pathname === page.path && (
        <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_4px] shadow-pink-500"></span>
      )}

      {seconds > 0 && <p>{seconds}</p>}
    </Link>
  );
}
