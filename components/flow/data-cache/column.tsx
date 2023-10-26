import { format } from 'date-fns';
import { Braces } from 'lucide-react';

export default function DataCacheColumn() {
  return (
    <div>
      <Data title="記事" timestamp={Date.now()} />
    </div>
  );
}

const Data = ({ title, timestamp }: { title: string; timestamp: number }) => {
  return (
    <div className="p-2 flex gap-2 items-center rounded-lg border text-muted-foreground">
      <Braces size={16} />
      <div className="flex-1">{title}</div>
      <time className="text-xs">
        {format(new Date(timestamp), 'MM/dd HH:mm')}
      </time>
    </div>
  );
};
