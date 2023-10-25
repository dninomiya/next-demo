import { isProd } from '@/lib/config';
import { TimeStamps } from '@/lib/types/timestamps';
import { kv } from '@vercel/kv';

export async function GET() {
  if (isProd) {
    const timestamps = await kv.hgetall<TimeStamps>('buildTimestamps');
    return Response.json({ data: timestamps });
  }

  return Response.json({ error: 'error' });
}
