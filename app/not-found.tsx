import { NotFoundFrame } from '@/public/icons/SVGIcons';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="grid place-content-center py-16">
      <NotFoundFrame className="w-full md:w-[600px] max-w-full" />
      <h2 className="title">Page Not Found</h2>
      <Link className="main-btn mt-5" href={'/'}>
        Back to Home
      </Link>
    </main>
  );
}
