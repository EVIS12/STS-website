'use client';

import React, { useState, useEffect } from 'react';
//@ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { SplideArrows } from '..';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import Link from 'next/link';

interface ExhibitorSlide {
  id: string;
  logo: string;
  sponserShipTitle?: string;
}

export default function LogosSlider() {
  const [slider, setSlider] = useState('Exhibitors');
  const [slides, setSlides] = useState<ExhibitorSlide[]>([]);

  const getItems = async () => {
    const res = await axiosInterceptorInstance.get<ExhibitorSlide[]>(
      `/exhibitor/exhibitors-slider/?is_partner=${
        slider === 'Partners'
      }&is_sponser=${slider === 'Sponsors'}`
    );

    setSlides(res.data);
  };

  useEffect(() => {
    getItems();
  }, [slider]);

  return (
    <section className="section-pad">
      <div className="container mx-auto">
        <div className="filters flex justify-center mb-20">
          {['Exhibitors', 'Partners', 'Sponsors'].map((item, i) => (
            <button
              onClick={() => setSlider(item)}
              className={`${
                slider === item
                  ? 'text-dark-color border-dark-color border-b-2'
                  : 'text-light-gray border-light-gray border-b'
              } font-bold transition-all duration-200 px-6 py-3 md:px-8 md:py-4 text-lg md:text-2xl border-solid`}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>

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
              {slides?.map(({ id, logo, sponserShipTitle }) => (
                <SplideSlide className="px-8" key={id} role="slide">
                  <Link href={`/exhibit/exhibitor-list/${id}`} target="_blank">
                    <Image
                      src={logo ?? ''}
                      className="h-52 w-5/6 object-contain mx-auto"
                      alt="test image"
                      width={300}
                      height={200}
                    />
                    {['Sponsors', 'Partners'].includes(slider) &&
                      sponserShipTitle && (
                        <p className="mx-3 font-medium mt-2 text-main-dark text-center text-lg">
                          {sponserShipTitle}
                        </p>
                      )}
                  </Link>
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
