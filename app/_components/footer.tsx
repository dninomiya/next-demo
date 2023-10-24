import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="container py-10 text-sm text-muted-foreground text-center">
      &copy; {new Date().getFullYear()}{' '}
      <Link
        href="https://twitter.com/d151005"
        target="_blank"
        className="underline"
      >
        Daichi Ninomiya
      </Link>
    </div>
  );
}
