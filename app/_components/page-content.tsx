import BuildTime from '@/components/debug/build-time';
import RevalidateButton from '@/components/debug/revalidate-button';
import { Globe, Unlock, Zap, ZapOff } from 'lucide-react';

export default function PageContent({
  isPrivate,
  title,
  isStatic,
}: {
  title: string;
  isPrivate?: boolean;
  isStatic?: boolean;
}) {
  return (
    <div>
      <h1 className="mb-2 text-sm text-muted-foreground">{title}</h1>
      <div className="text-muted-foreground flex justify-center flex-col items-center space-y-8 px-6 py-10 border rounded-md"></div>
      <div className="text-right mt-2">
        <BuildTime />
      </div>
    </div>
  );
}
