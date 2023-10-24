export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#5824FF] p-8 min-h-[100dvh]">
      <div className="bg-white mx-auto max-w-4xl rounded-xl shadow-lg">
        <div className="grid grid-cols-3 px-6 gap-6 py-6">
          <div className="cols-span-1"></div>
          <main className="col-span-2">{children}</main>
        </div>
      </div>
    </div>
  );
}
