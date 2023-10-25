'use server';

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
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    kv.set('static-a', Date.now());
  }
};
