export const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
export const buildTimestamp = isProd ? Date.now() : 1698298280014;
