import { ArrowRoot } from '@/components/arrow';
import Browser from '@/components/browser';
import FlowMap from '@/components/flow-map';
import type { Metadata } from 'next';
import './globals.css';
import { build } from '@/lib/utils';
import { Suspense } from 'react';
import { isProd } from '@/lib/config';
import { CacheStatusProvider } from '@/components/cache-status-provider';

export const metadata: Metadata = {
  title: 'Next.js Clerk Demo',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (isProd) {
    await build(5);
  }

  return (
    <html lang="ja">
      <body>
        <CacheStatusProvider>
          <ArrowRoot>
            <Suspense>
              <FlowMap />
            </Suspense>
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
