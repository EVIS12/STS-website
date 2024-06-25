import React from 'react';

export async function generateMetadata() {
  return {
    title: `STS Blog`,
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
