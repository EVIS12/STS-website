import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Registration',
};

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
