import {
  AgendaCards,
  ConferenceTracks,
  PagesHero,
  SpeakersSection,
} from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { Day, Session } from '@/app/_types/agendaTypes';
import { DownloadableFile } from 'Files';
import { SpeakerMainInfo } from 'Speakers';
import { notFound } from 'next/navigation';
import React from 'react';

export const revalidate = 180;

export default async function Conference({
  searchParams,
}: {
  searchParams: { [key: string]: string[] | string | undefined };
}) {
  const currentDay = searchParams.day ?? '1';
  const days = await axiosInterceptorInstance.get<Day[]>('/agenda/days/');
  const sessions = await axiosInterceptorInstance.get<Session[]>(
    `/agenda/agenda?day=${currentDay}`
  );
  const programSpeakers = await axiosInterceptorInstance.get<{
    count: number;
    results: SpeakerMainInfo[];
  }>('/speakers/speakers/?program_page=true');
  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );

  const [agenda] = files.data.filter((item) => item.type === 'Event Brochure');

  return (
    <main className="bg-[#f8f8f8]">
      <PagesHero
        bg="bg-program-hero-bg"
        subtitle="As a Conference Participant, you're not just attending – you're influencing the trajectory of space exploration"
      />

      <ConferenceTracks />

      {programSpeakers.data.results.length > 0 && (
        <SpeakersSection speakers={programSpeakers.data.results} />
      )}

      {days.data.length > 0 && (
        <>
          <section className="titles-section section-pad bg-second-color">
            <div className="container">
              <h2 className="font-bold text-dark-color text-xl md:text-2xl lg:text-4xl mb-4">
                SPACE TRAVEL SUMMIT AGENDA
              </h2>
              <p className="date text-sm md:text-base text-light-gray font-medium">
                JUNE 12-13, 2024
              </p>
              <p className="md:text-lg text-dark-color">
                ABU DHABI NATIONAL EXHIBITION CENTER DRAFT PROGRAMME
              </p>
              <h3 className="font-medium text-baby-blue md:text-xl lg:text-2xl mt-4">
                Unlocking Potential: Investments, Infrastructure, Technology
              </h3>
            </div>
          </section>
          <AgendaCards
            days={days.data}
            sessions={sessions.data}
            agendaId={agenda.id}
          />
        </>
      )}
    </main>
  );
}
