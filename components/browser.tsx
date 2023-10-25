import Navigation from '@/app/(main)/_components/navigation';
import Path from '@/app/(main)/_components/path';
import { BrowserAnchor } from '@/components/arrow';
import RevalidateButton from '@/components/debug/revalidate-button';
import React from 'react';

export default function Browser({ children }: { children: React.ReactNode }) {
  return (
    <BrowserAnchor>
      <div className="shadow rounded-xl border overflow-hidden">
        <div className="border-b bg-gray-50 px-4 py-2 items-center flex gap-2">
          <div className="flex flex-1 gap-2">
            <span className="rounded-full w-3 h-3 bg-[#FD4646]" />
            <span className="rounded-full w-3 h-3 bg-[#FCB024]" />
            <span className="rounded-full w-3 h-3 bg-[#28C130]" />
          </div>
          <div className="w-64 h-8 flex items-center px-2 text-sm justify-center text-muted-foreground border rounded-lg">
            <span className="flex-1" />
            <Path />
            <span className="flex-1 flex justify-end">
              <RevalidateButton />
            </span>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="p-4 grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Navigation />
          </div>
          <div className="col-span-2">{children}</div>
        </div>
      </div>
    </BrowserAnchor>
  );
}
