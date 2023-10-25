'use client';

import { ArcherContainer, ArcherElement } from 'react-archer';

export function ArrowRoot({ children }: { children: React.ReactNode }) {
  return <ArcherContainer strokeColor="#ec4899">{children}</ArcherContainer>;
}

export function ArrowElement({
  id,
  children,
  visible,
}: {
  id: string;
  children: React.ReactElement;
  visible: boolean;
}) {
  if (visible) {
    return (
      <ArcherElement
        id={id}
        relations={[
          {
            targetId: 'browser',
            targetAnchor: 'top',
            sourceAnchor: 'right',
            style: { strokeDasharray: '5,5' },
          },
        ]}
      >
        {children}
      </ArcherElement>
    );
  } else {
    return <>{children}</>;
  }
}

export function BrowserAnchor({ children }: { children: React.ReactElement }) {
  return <ArcherElement id="browser">{children}</ArcherElement>;
}
