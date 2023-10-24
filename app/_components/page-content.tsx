import { Globe, Lock } from 'lucide-react';

export default function PageContent({ isPrivate }: { isPrivate?: boolean }) {
  return (
    <div className="text-muted-foreground flex justify-center flex-col items-center space-y-4 p-6 border rounded-xl">
      {isPrivate ? <Lock size={40} /> : <Globe size={40} />}
      {isPrivate && (
        <p>このページは非公開ですが、ログイン中なので閲覧できます。</p>
      )}
      {!isPrivate && <p>このページは公開されています。</p>}
    </div>
  );
}
