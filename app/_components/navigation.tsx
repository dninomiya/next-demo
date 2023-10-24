import Link from 'next/link';
import React from 'react';

const pages = [
  {
    title: 'ホーム',
    path: '/',
  },
  {
    title: 'マイページ',
    path: '/mypage',
    private: true,
  },
];

export default function Navigation() {
  return (
    <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
      {pages.map((page) => (
        <Link
          key={page.path}
          href={page.path}
          className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50"
        >
          <span>{page.title}</span>
        </Link>
      ))}
    </div>
  );
}
