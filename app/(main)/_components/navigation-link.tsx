'use client';

import { File } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationLink({
  page,
}: {
  page: {
    title: string;
    path: string;
  };
}) {
  const pathname = usePathname();

  return (
    <Link
      href={page.path}
      className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50"
    >
      <File size={16} className="text-muted-foreground" />
      <span>{page.title}</span>
      <span className="flex-1"></span>
      {pathname === page.path && (
        <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_4px] shadow-pink-500"></span>
      )}
    </Link>
  );
}
