'use server';

import { revalidatePath } from 'next/cache';
import { cache } from 'react';

export const revalidate = (pathname: string) => {
  return revalidatePath(pathname);
};

export const time = cache(() => {
  return Date.now();
});
