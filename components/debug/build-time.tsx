import { format } from 'date-fns';

export default function BuildTime() {
  return (
    <p className="text-xs italic text-muted-foreground">
      ビルド日時: {format(new Date(), 'yyyy年MM月dd日 HH:mm:ss')}
    </p>
  );
}
