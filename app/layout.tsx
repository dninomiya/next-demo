import { ArrowRoot } from '@/components/arrow';
import Browser from '@/components/browser';
import { CacheStatusProvider } from '@/components/cache-status-provider';
import FlowMap from '@/components/flow-map';
import { buildTimestamp } from '@/lib/config';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';

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
