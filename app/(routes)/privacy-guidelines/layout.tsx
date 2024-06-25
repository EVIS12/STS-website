import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Guidelines',
};

export default function PrivacyGuidelinesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
