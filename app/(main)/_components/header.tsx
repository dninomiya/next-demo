import Path from '@/app/(main)/_components/path';
import { Button } from '@/components/ui/button';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Header({ authDisabled }: { authDisabled?: boolean }) {
  return (
    <header className="border-b">
      <div className="h-16 px-6 flex items-center gap-2">
        <h1>Next.js Demo</h1>
        <Path />
        <div className="flex-1"></div>
        {!authDisabled && (
          <>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button variant="outline">ログイン</Button>
              </SignInButton>
              <SignUpButton>
                <Button>アカウント作成</Button>
              </SignUpButton>
            </SignedOut>
          </>
        )}
      </div>
    </header>
  );
}
