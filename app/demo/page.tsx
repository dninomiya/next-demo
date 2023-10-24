import { format } from 'date-fns';
import React from 'react';

export default function Page() {
  const date = new Date();

  return <div>{format(date, 'yyyy/MM/dd HH:mm:ss')}</div>;
}
