'use client';

import React from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Speaker, SplideArrows } from '..';
import Link from 'next/link';
import { SpeakerMainInfo } from 'Speakers';

export default function SpeakersSection({
  speakers,
  bg,
}: {
  speakers: SpeakerMainInfo[];
  bg?: string;
}) {
  return (
    <section className={`section-pad ${bg}`}>
      <div className="container mx-auto">
        <h2 className="title md:mb-8 4xl:mb-14">
          <span>STS</span> Speakers
        </h2>
        {/* handle sizes */}
        {[
          { query: 'hidden lg:block ', number: 3 },
          { query: 'hidden md:block lg:hidden', number: 2 },
          { query: 'block md:hidden', number: 1 },
        ].map(({ query, number }, i) => (
          <Splide
            key={i}
            className={query}
            options={{
              perPage: number,
              focus: 0,
              pagination: false,
            }}
            hasTrack={false}
          >
            <SplideTrack>
              {speakers.map(({ id, name, job_title, photo, company }, i) => (
                <SplideSlide
                  className="!p-6 4xl:!p-10 [&.is-next>a]:scale-[1.1] md:[&.is-next>a]:scale-[1] lg:[&.is-next>a]:scale-[1.1]"
                  key={i}
                >
                  <Speaker
                    id={id}
                    name={name}
                    session={job_title}
                    title={company}
                    image={photo}
                    className="!w-full h-full !shadow-none transition"
                    type="old"
                    key={i}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
            <SplideArrows />
          </Splide>
        ))}
        <Link
          className="main-btn md:mt-8 4xl:mt-14"
          href={'/speakers/versions/?year=2024'}
        >
          View more
        </Link>
      </div>
    </section>
  );
}
