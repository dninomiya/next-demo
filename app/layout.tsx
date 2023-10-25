import Browser from '@/components/browser';
import FlowMap from '@/components/flow-map';
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
        <FlowMap />
        <hr className="border-dashed" />
        <div className="max-w-2xl mx-auto mt-10">
          <Browser>{children}</Browser>
        </div>
      </body>
    </html>
  );
}
