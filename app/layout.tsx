import { ArrowRoot } from '@/components/arrow';
import Browser from '@/components/browser';
import FlowMap from '@/components/flow-map';
import type { Metadata } from 'next';
import './globals.css';
import { kv } from '@vercel/kv';
import { TimeStamps } from '@/lib/types/timestamps';
import { isProd } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Next.js Clerk Demo',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const timestamps = isProd
    ? await kv.hgetall<TimeStamps>('buildTimestamps')
    : null;

  return (
    <html lang="ja">
      <body>
        <ArrowRoot>
          <FlowMap timestamps={timestamps} />
          <hr className="border-dashed" />
          <div className="max-w-2xl mx-auto mt-10">
            <Browser>{children}</Browser>
          </div>
        </ArrowRoot>
      </body>
    </html>
  );
}
