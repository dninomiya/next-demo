import { kv } from '@vercel/kv';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && id) {
    const timestamp = await kv.get(id);
    return Response.json({ timestamp });
  }

  return Response.json({ error: 'error' });
}
