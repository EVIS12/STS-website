import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Plan Your Visit',
};

export default function PlanVisitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
