import NavigationLink from '@/app/(main)/_components/navigation-link';
import { Globe, Lock } from 'lucide-react';
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
        <h2 className="mb-2 text-sm text-muted-foreground">静的レンダリング</h2>

        <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
          {publicPages.map((page) => (
            <NavigationLink page={page} key={page.path} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-sm text-muted-foreground">
          動的レンダリング
          <span className="text-xs ml-1 opacity-60">ClerkProvider配下</span>
        </h2>
        <div className="border text-sm rounded-md flex flex-col divide-y overflow-hidden col-span-1">
          {clerkChildrenPages.map((page) => (
            <NavigationLink page={page} key={page.path} />
          ))}
        </div>
      </div>
    </div>
  );
}
