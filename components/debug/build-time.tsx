import { formatInTimeZone } from 'date-fns-tz';

export default function BuildTime() {
  return (
    <p className="text-xs italic text-muted-foreground">
      {formatInTimeZone(new Date(), 'Asia/Tokyo', 'yyyy年MM月dd日 HH:mm:ss')}
      に生成
    </p>
  );
}
