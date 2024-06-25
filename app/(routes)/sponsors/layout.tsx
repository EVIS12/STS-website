import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Sponsor & Exhibit Page',
};

export default function SponsorExhibitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
