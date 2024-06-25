import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
