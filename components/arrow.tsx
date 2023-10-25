'use client';

import Xarrow from 'react-xarrows';

export default function Arrow({ start, end }: { start: string; end: string }) {
  return <Xarrow strokeWidth={2} start={start} end={end} />;
}
