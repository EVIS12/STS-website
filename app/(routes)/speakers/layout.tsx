import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'STS Speakers',
};

export default function SpeakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
