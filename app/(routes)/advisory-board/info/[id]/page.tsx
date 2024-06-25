import { BackBtn, SpeakerDetailsBox } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { SpeakerDetails } from 'Speakers';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Props) {
  const advisor = await axiosInterceptorInstance.get<SpeakerDetails>(
    `/advisors/advisors-board/${id}`
  );
  return {
    title: advisor.status === 404 ? 'Advisor Not Found' : advisor.data.name,
  };
}

export const revalidate = 180;

export default async function AdvisorDetails({ params: { id } }: Props) {
  let advisor;
  try {
    advisor = await axiosInterceptorInstance.get<SpeakerDetails>(
      `/advisors/advisors-board/${id}`
    );
  } catch (e) {
    return notFound();
  }

  return (
    <main>
      <div className="container">
        <div className="section-pad">
          <BackBtn />
          <SpeakerDetailsBox speaker={advisor.data} />
        </div>
      </div>
    </main>
  );
}
