import Browser from '@/components/ui/browser';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Clerk Demo',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="grid grid-cols-6 gap-4 container py-10 text-sm text-muted-foreground">
          <div className="col-span-2">
            <ScopeLabel>クライアント</ScopeLabel>
          </div>
          <div className="col-span-4">
            <ScopeLabel>サーバー</ScopeLabel>
          </div>

          <div className="col-span-1">
            <ColLabel title="ブラウザ" />
          </div>
          <div className="col-span-1">
            <ColLabel title="ルーターキャッシュ" inMemory />
          </div>
          <div className="col-span-1">
            <ColLabel title="フルルートキャッシュ" inMemory={false} />
          </div>
          <div className="col-span-1">
            <ColLabel title="リクエストメモ化" inMemory />
          </div>
          <div className="col-span-1">
            <ColLabel title="データキャッシュ" inMemory={false} />
          </div>
          <div className="col-span-1">
            <ColLabel title="データソース" />
          </div>
        </div>

        <hr className="border-dashed" />

        <div className="max-w-4xl mx-auto mt-10">
          <Browser>{children}</Browser>
        </div>
      </body>
    </html>
  );
}

const ScopeLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="bg-gray-50 font-semibold border rounded-lg shadow px-2 py-3 text-center">
      {children}
    </h2>
  );
};

const ColLabel = ({
  title,
  inMemory,
}: {
  title: string;
  inMemory?: boolean;
}) => {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-semibold">{title}</h2>
      {inMemory === true && <p className="text-xs">一時的（メモリ）</p>}
      {inMemory === false && <p className="text-xs">持続的</p>}
    </div>
  );
};
