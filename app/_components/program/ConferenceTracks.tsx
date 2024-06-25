'use client';
import { conferenceTracks } from '@/app/_utils/info';
import { StsLogoPattern } from '@/public/icons/SVGIcons';
import Image from 'next/image';
import React, { useState } from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function ConferenceTracks() {
  const [currentTrack, setCurrentTrack] = useState<string>(
    'Space Travel in National Space Programs'
  );

  return (
    <section className="section-pad !pb-0 !px-0 overflow-hidden">
      <div className="container">
        <h1 className="title">Conference Tracks</h1>
      </div>
      <div className="conference-tracks">
        <div className="container">
          <div className="filters py-4 px-4 flex 2xl:justify-center gap-3 my-10 overflow-x-scroll 2xl:overflow-x-visible scrollbar-rounded-full scrollbar-thin scrollbar-thumb-main-color scrollbar-track-card-blue">
            {conferenceTracks.map(({ track }, i) => (
              <button
                className={`${
                  currentTrack === track
                    ? 'bg-main-color text-white'
                    : 'bg-card-blue'
                } rounded-full whitespace-nowrap py-2 px-4 md:py-3 md:px-6 lg:px-8 transition-all`}
                onClick={() => setCurrentTrack(track)}
                key={i}
              >
                {track}
              </button>
            ))}
          </div>
        </div>
        <div className="tracks-container">
          {conferenceTracks.map(({ track, bg, topics }, i) => (
            <section
              className={`section-pad w-full ${
                currentTrack === track
                  ? 'h-full translate-x-0 transition-all duration-500 lg:duration-700'
                  : 'h-0 !p-0 translate-x-full transition-all duration-0'
              } ${bg} bg-cover bg-center relative overflow-hidden`}
              key={i}
            >
              <div className="lg:section-pad">
                <StsLogoPattern className="[&>path]:!fill-[#dde7ee] w-1/2 md:w-1/3 lg:w-1/4 absolute right-0 top-0 rotate-[30deg] translate-x-1/4 z-[1]" />
                <div className="track absolute top-0 w-full md:w-3/4 lg:w-1/2 aspect-square md:h-full left-0 md:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 rounded-full bg-[#4F7A9A] text-white"></div>
                <StsLogoPattern className="[&>path]:!fill-[#dde7eebb] w-1/2 md:w-1/3 lg:w-1/4 absolute left-0 bottom-0 -rotate-[30deg] -translate-x-1/4 z-[1]" />

                <div className="row z-[2] relative gap-y-10 md:gap-6 lg:gap-20">
                  <div className="col-span-12 md:col-span-4 lg:col-span-3 grid place-content-center">
                    <h2 className="w-2/3 md:w-full mx-auto text-center title md:!text-start !text-white">
                      {track}
                    </h2>
                  </div>

                  {[
                    { query: 'hidden lg:block ', number: 3, gap: 30 },
                    { query: 'hidden md:block lg:hidden', number: 2, gap: 30 },
                    { query: 'block md:hidden', number: 2, gap: 10 },
                  ].map(({ query, number, gap }, i) => (
                    <Splide
                      key={i}
                      className={`col-span-12 md:col-span-7 lg:col-span-8 ${query}`}
                      options={{
                        perPage: number,
                        focus: 0,
                        gap: gap,
                        arrows: false,
                      }}
                      hasTrack={false}
                    >
                      <SplideTrack>
                        {topics.map(({ icon, title, description }, i) => (
                          <SplideSlide
                            className="w-full bg-white p-3 md:p-5 rounded-sm"
                            key={i}
                          >
                            <div className="icon-container p-3 md:p-4 bg-main-color rounded-full w-fit">
                              <Image
                                src={icon}
                                className="w-8 md:w-10 aspect-square object-cover"
                                alt={`${title} Icon`}
                              />
                            </div>
                            <h3 className="card-title my-4">{title}</h3>
                            <p className="card-description">{description}</p>
                          </SplideSlide>
                        ))}
                      </SplideTrack>
                    </Splide>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
