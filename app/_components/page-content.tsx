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
      <div className="text-muted-foreground flex justify-center flex-col items-center space-y-8 px-6 py-10 border rounded-md">
        <div className="flex items-center gap-4">
          {isPrivate ? (
            <div className="flex items-center gap-2 text-sm">
              <Unlock size={20} />
              非公開
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm">
              <Globe size={20} />
              公開
            </div>
          )}
          /
          {isStatic ? (
            <div className="flex items-center gap-2 text-sm">
              <ZapOff size={20} />
              静的生成
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm">
              <Zap size={20} />
              動的生成
            </div>
          )}
        </div>

        <RevalidateButton />
      </div>
      <div className="text-right mt-2">
        <BuildTime />
      </div>
    </div>
  );
}
