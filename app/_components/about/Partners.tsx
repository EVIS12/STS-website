'use client';

import React from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { SplideArrows } from '..';
import Image from 'next/image';
import stsLogo from '@/public/imgs/stsLogo.webp';

type Props = {
  partners: {
    id: string;
    title: string;
    logo: string;
  }[];
};

export default function Partners({ partners }: Props) {
  return (
    <section className="section-pad bg-second-color">
      <div className="container">
        <h1 className="title">Partners</h1>
        <p className="subtitle">
          Forging the Future Together: Meet Our Esteemed Partners at the Space
          Travel Summit
        </p>
        {/* handle sizes */}
        {[
          { query: 'hidden 2xl:block', number: 4 },
          { query: 'hidden lg:block 2xl:hidden', number: 3 },
          { query: 'hidden md:block lg:hidden', number: 2 },
          { query: 'block md:hidden', number: 1 },
        ].map(({ query, number }, i) => (
          <Splide
            key={i}
            className={`${query} my-6 md:my-10`}
            options={{
              perPage: number,
              focus: 0,
              pagination: false,
              gap: 45,
              padding: 15,
            }}
            hasTrack={false}
          >
            <SplideTrack>
              {partners.map(({ id, title, logo }) => (
                <SplideSlide className="p-5" key={id}>
                  <div className="image-container bg-white px-10 rounded-md shadow-sm drop-shadow-md w-full aspect-video grid place-content-center">
                    <Image
                      src={logo}
                      alt={`${title} Logo`}
                      width={300}
                      height={150}
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
