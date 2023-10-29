import BuildTime from '@/components/debug/build-time';
import { buildTimestamp, isProd } from '@/lib/config';
import { build, getRandomString } from '@/lib/utils';

export default async function PageContent({
  title,
}: {
  title: string;
  isPrivate?: boolean;
  isStatic?: boolean;
}) {
  if (isProd) {
    await build(3);
  }

  const time = getRandomString();
  const time2 = getRandomString();

  return (
    <div>
      <h1 className="mb-2 text-sm text-muted-foreground">{title}</h1>
      <div className="text-muted-foreground flex justify-center flex-col items-center space-y-8 px-6 py-10 border rounded-md"></div>
      <div className="text-right mt-2">
        <BuildTime key={buildTimestamp} timestamp={buildTimestamp} />
        <p>{time}</p>
        <p>{time2}</p>
      </div>
    </div>
  );
}
