import Footer from '@/app/(main)/_components/footer';
import Header from '@/app/(main)/_components/header';
import Navigation from '@/app/(main)/_components/navigation';
import DebugControl from '@/components/debug/control';
import { jaJP } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={jaJP}>
      <Header />
      <div className="grid grid-cols-4 gap-4 container max-w-4xl mt-4">
        <div className="cols-span-1">
          <Navigation />
        </div>
        <main className="col-span-3">{children}</main>
      </div>
      <Footer />
      <DebugControl />
    </ClerkProvider>
  );
}
