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
  return (
    <html lang="ja">
      <body>
        {children}
        {/* <CacheStatusProvider timestamp={buildTimestamp}>
          <ArrowRoot>
            <FlowMap />
            <hr className="border-dashed" />
            <div className="max-w-2xl mx-auto mt-10">
              <Browser>{children}</Browser>
            </div>
          </ArrowRoot>
        </CacheStatusProvider> */}
      </body>
    </html>
  );
}
