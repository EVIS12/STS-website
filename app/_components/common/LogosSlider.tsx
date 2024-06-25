'use client';

import React from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { SplideArrows } from '..';
import Image from 'next/image';
import stsLogo from '@/public/imgs/stsLogo.webp';

type Props = {
  brands?: { logo: string; title?: string; id: string }[];
  title?: string;
  subtitle?: string;
};

export default function LogosSlider({ brands, title, subtitle }: Props) {
  return (
    <section className="section-pad bg-second-color">
      <div className="container">
        <div className="row gap-6 lg:gap-14">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 grid place-content-center">
            <h1 className="title !text-start">
              <span>STS</span> {title}
            </h1>
            <p className="subtitle !w-full !text-start">{subtitle}</p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            {[
              { query: 'hidden lg:block', number: 3 },
              { query: 'block lg:hidden', number: 2 },
            ].map(({ query, number }, i) => (
              <Splide
                key={i}
                className={`${query} my-6 md:my-10`}
                options={{
                  perPage: number,
                  focus: 0,
                  pagination: false,
                  gap: 20,
                  padding: 15,
                }}
                hasTrack={false}
              >
                <SplideTrack>
                  {brands?.map(({ id, logo }) => (
                    <SplideSlide
                      className="p-5 grid place-content-center"
                      key={id}
                    >
                      <Image
                        className="grayscale"
                        src={logo}
                        alt=""
                        width={400}
                        height={250}
                      />
                    </SplideSlide>
                  ))}
                </SplideTrack>
                <SplideArrows />
              </Splide>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
