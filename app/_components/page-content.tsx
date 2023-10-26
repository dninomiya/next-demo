import BuildTime from '@/components/debug/build-time';
import { buildTimestamp, isProd } from '@/lib/config';
import { build } from '@/lib/utils';

export default async function PageContent({
  title,
}: {
  title: string;
  isPrivate?: boolean;
  isStatic?: boolean;
}) {
  // if (isProd) {
  //   await build(5);
  // }

  return (
    <div>
      <h1 className="mb-2 text-sm text-muted-foreground">{title}</h1>
      <div className="text-muted-foreground flex justify-center flex-col items-center space-y-8 px-6 py-10 border rounded-md"></div>
      <div className="text-right mt-2">
        <BuildTime timestamp={buildTimestamp} />
      </div>
    </div>
  );
}
