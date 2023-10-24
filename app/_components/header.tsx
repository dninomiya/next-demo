import Path from '@/app/_components/path';
import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import React from 'react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="h-16 container flex items-center gap-2">
        <h1>Next.js Demo</h1>
        <Path />
        <div className="flex-1"></div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton afterSignUpUrl="/">
            <Button variant="outline">ログイン</Button>
          </SignInButton>
          <SignUpButton>
            <Button>アカウント作成</Button>
          </SignUpButton>
        </SignedOut>
      </div>
    </header>
  );
}
