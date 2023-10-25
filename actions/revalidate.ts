'use server';

import { isProd } from '@/lib/config';
import { kv } from '@vercel/kv';
import { revalidatePath } from 'next/cache';
import { cache } from 'react';

export const revalidate = (pathname: string) => {
  return revalidatePath(pathname);
};

export const time = cache(() => {
  return Date.now();
});

export const saveBuildTimestamp = (id: string) => {
  if (isProd) {
    console.log('demo');
    // kv.hset('buildTimestamps', {
    //   [id]: Date.now(),
    // });
  }
};
