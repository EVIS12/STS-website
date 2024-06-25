import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Exhibition',
};

export default function ExhibitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
