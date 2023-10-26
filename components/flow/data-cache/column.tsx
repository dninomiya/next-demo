import { format } from 'date-fns';

export default function DataCacheColumn() {
  return (
    <div>
      <Data title="記事A" timestamp={Date.now()} />
    </div>
  );
}

const Data = ({ title, timestamp }: { title: string; timestamp: number }) => {
  return (
    <div className="p-4 flex items-center justify-between rounded-lg border text-xs text-muted-foreground">
      {title}
      <time>{format(new Date(timestamp), 'yyyy年MM月dd日 HH:mm:ss')}</time>
    </div>
  );
};
