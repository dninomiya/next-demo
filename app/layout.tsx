import { getBuildTimestamp } from '@/actions/revalidate';
import { ArrowRoot } from '@/components/arrow';
import Browser from '@/components/browser';
import FlowMap from '@/components/flow-map';
import type { Metadata } from 'next';
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
  const buildTimestamps = await getBuildTimestamp();

  return (
    <html lang="ja">
      <body>
        <ArrowRoot>
          <FlowMap buildTimestamps={buildTimestamps} />
          <hr className="border-dashed" />
          <div className="max-w-2xl mx-auto mt-10">
            <Browser>{children}</Browser>
          </div>
        </ArrowRoot>
      </body>
    </html>
  );
}
