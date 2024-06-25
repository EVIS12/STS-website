import { Speaker } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { SpeakerMainInfo, SpeakersVersion } from 'Speakers';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';

export const revalidate = 180;
//This page in block now
// We will reuse it when STS has more than one version
export default async function Speakers() {
  return notFound();
  const res = await axiosInterceptorInstance.get<SpeakersVersion[]>(
    '/speakers/speaker-version/'
  );

  const allSpeakers = res.data?.map(async ({ year }) => {
    const versionSpeakers = await axiosInterceptorInstance.get<{
      count: number;
      results: SpeakerMainInfo[];
    }>(`/speakers/speakers/?version__year=${year}`);
    return {
      year,
      speakers: versionSpeakers?.data.results.slice(0, 3 + (+year % 2)),
    };
  });

  const versionsSpeakers = await Promise.all(allSpeakers);

  return (
    <main>
      <div className="container">
        {versionsSpeakers?.map(({ year, speakers }, i) => (
          <section className="section-pad" key={i}>
            <h2 className="title">
              <span>STS</span> Speakers <span>{year}</span>
            </h2>
            <div className="speakers cards-container ">
              {speakers.map(({ id, name, photo, job_title, company }) => (
                <Speaker
                  id={id}
                  name={name}
                  session={job_title}
                  title={company}
                  image={photo}
                  type={+year % 2 === 0 ? 'new' : 'old'}
                  key={id}
                />
              ))}
            </div>
            <Link
              className="green-btn mt-8 md:mt-14"
              href={`/speakers/versions?year=${year}`}
            >
              View more
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
