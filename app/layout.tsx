import { ArrowRoot } from '@/components/arrow';
import Browser from '@/components/browser';
import { CacheStatusProvider } from '@/components/cache-status-provider';
import FlowMap from '@/components/flow-map';
import { buildTimestamp } from '@/lib/config';
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js Clerk Demo',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <CacheStatusProvider timestamp={buildTimestamp}>
          <ArrowRoot>
            <Link href="/static/a">a</Link>
            <Link href="/static/b">b</Link>
            <Link href="/dynamic/c">c</Link>
            <Link href="/dynamic/d">d</Link>
          </ArrowRoot>
        </CacheStatusProvider>
      </body>
    </html>
  );

  return (
    <html lang="ja">
      <body>
        <CacheStatusProvider timestamp={buildTimestamp}>
          <ArrowRoot>
            <FlowMap />
            <hr className="border-dashed" />
            <div className="max-w-2xl mx-auto mt-10">
              <Browser>{children}</Browser>
            </div>
          </ArrowRoot>
        </CacheStatusProvider>
      </body>
    </html>
  );
}
