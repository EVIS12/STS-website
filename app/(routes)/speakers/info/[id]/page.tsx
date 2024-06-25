import { BackBtn } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { SpeakerDetailsBox } from '@/app/_components';
import { SpeakerDetails, SpeakerMainInfo } from 'Speakers';
import React from 'react';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export const revalidate = 180;

export const dynamicParams = true;

export async function generateStaticParams() {
  const {
    data: { results },
  } = await axiosInterceptorInstance.get<{
    results: SpeakerMainInfo[];
  }>('/speakers/speakers/');
  return results.map(({ id }) => ({ id }));
}

export default async function SpeakerInfo({ params: { id } }: Props) {
  const speaker = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/speakers/speakers/${id}`
  );

  if (speaker.status === 404) {
    return notFound();
  }

  return (
    <main>
      <div className="container">
        <div className="section-pad font-default">
          <BackBtn />
          <SpeakerDetailsBox speaker={speaker.data} />
        </div>
      </div>
    </main>
  );
}
