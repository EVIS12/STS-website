import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { SpeakerDetails } from 'Speakers';
import React from 'react';

interface Props {
  params: { id: string };
  children: React.ReactNode;
}

export async function generateMetadata({ params: { id } }: Props) {
  const speaker = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/speakers/speakers/${id}`
  );

  return {
    title: speaker.data.name,
  };
}

export default function SpeakerInfoLayout({ children }: Props) {
  return <>{children}</>;
}
