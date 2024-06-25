'use client';

import React from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { SplideArrows } from '..';
import Image from 'next/image';

export default function ImagesSlider({
  images,
  title,
  subtitle,
}: {
  images: { id: string; image: string }[];
  title: string;
  subtitle: string;
}) {
  return (
    <section className="about-2 section-pad bg-second-color">
      <div className="container">
        <h2 className="title">{title}</h2>
        <p className="subtitle lg:!w-1/2 mb-5">{subtitle}</p>
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
              {images.map(({ id, image }) => (
                <SplideSlide className="!p-6 4xl:!p-10" key={id}>
                  <div className="bg-white p-3 md:p-5 rounded-lg">
                    <Image
                      className="w-full h-[200px] md:h-[270px] lg:h-[300px] 4xl:h-[350px] object-cover rounded-lg"
                      src={image}
                      alt="Image from the conference"
                      width={220}
                      height={220}
                    />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
            <SplideArrows />
          </Splide>
        ))}
      </div>
    </section>
  );
}
