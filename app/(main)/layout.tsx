import { jaJP } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={jaJP}>
      <main className="col-span-2">{children}</main>
    </ClerkProvider>
  );
}
