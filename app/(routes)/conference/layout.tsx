import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'STS Conference',
};

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
