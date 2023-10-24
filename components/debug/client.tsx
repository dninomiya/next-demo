'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import useLocalStorageState from 'use-local-storage-state';

export default function RCC({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Slot>) {
  const [isVisible] = useLocalStorageState<boolean>('isVisibleRCC');

  return (
    <Slot
      className={cn(isVisible && 'ring-2 ring-red-500', className)}
      {...props}
    />
  );
}
