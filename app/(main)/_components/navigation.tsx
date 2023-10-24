import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Globe, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';

const publicPages = [
  {
    title: 'ランディングページ',
    path: '/about',
  },
  {
    title: '利用規約',
    path: '/terms',
  },
  {
    title: 'プライバシーポリシー',
    path: '/privacy',
  },
];

const clerkChildrenPages = [
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
    <div className="space-y-6">
      <div>
        <h2 className="mb-2 text-sm text-muted-foreground">No Clerk</h2>

        <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
          {publicPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50"
            >
              <span>
                <Globe size={16} className="text-muted-foreground" />
                <span className="sr-only">公開</span>
              </span>
              <span>{page.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-sm text-muted-foreground">Use Clerk</h2>
        <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
          {clerkChildrenPages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="px-4 py-3 flex items-center gap-4 hover:bg-slate-50"
            >
              {page.private ? (
                <span>
                  <SignedIn>
                    <Unlock size={16} className="text-muted-foreground" />
                  </SignedIn>
                  <SignedOut>
                    <Lock size={16} className="text-muted-foreground" />
                  </SignedOut>
                  <span className="sr-only">プライベート</span>
                </span>
              ) : (
                <span>
                  <Globe size={16} className="text-muted-foreground" />
                  <span className="sr-only">公開</span>
                </span>
              )}
              <span>{page.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
