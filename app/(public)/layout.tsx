import Footer from '@/app/(main)/_components/footer';
import Header from '@/app/(main)/_components/header';
import Navigation from '@/app/(main)/_components/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#5824FF] p-8 min-h-[100dvh]">
      <div className="bg-white mx-auto max-w-4xl rounded-xl shadow-lg">
        <Header authDisabled />
        <div className="grid grid-cols-3 px-6 gap-6 py-6">
          <div className="cols-span-1">{/* <Navigation /> */}</div>
          <main className="col-span-2">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
