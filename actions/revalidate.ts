'use server';

import { isProd } from '@/lib/config';
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
    fetch(
      `${process.env.KV_REST_API_URL}/set/buildTimestamps/${id}/${Date.now()}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
        },
      }
    );
  }
};

export const getBuildTimestamp = () => {
  return fetch(`${process.env.KV_REST_API_URL}/hgetall/buildTimestamps`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then(({ result }) => {
      const obj: any = {};
      for (let i = 0; i < result.length; i += 2) {
        obj[result[i]] = Number(result[i + 1]);
      }

      return obj;
    });
};
