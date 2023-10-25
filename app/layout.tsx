import BuildTime from '@/components/debug/build-time';
import type { Metadata } from 'next';
import './globals.css';
import { time } from '@/actions/revalidate';

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
        {children}
        <BuildTime />
        {time()}
      </body>
    </html>
  );
}
