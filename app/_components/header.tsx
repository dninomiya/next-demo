import Path from '@/app/_components/path';
import React from 'react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="h-16 container flex items-center gap-2">
        <h1>Next.js Demo</h1>
        <Path />
        <div className="flex-1"></div>
      </div>
    </header>
  );
}
