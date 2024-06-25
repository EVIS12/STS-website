import axiosInterceptor from '@/app/_lib/axiosInterceptor';
import { statistics } from '@/app/_utils/info';
import { AllStatistics } from 'Statistics';
import Image from 'next/image';
import React from 'react';

export default async function Statistics() {
  const allStatistics = await axiosInterceptor.get<AllStatistics>(
    '/home/statistics'
  );

  return (
    <section className="section-pad  md:!py-10 4xl:!py-12 !px-0 bg-second-color">
      <div className="container">
        <h1 className="title mb-4 lg:mb-10">
          Key <span>Statistics</span>
        </h1>
        <div className="statistics-container mx-auto flex flex-wrap justify-center">
          {statistics.map(({ icon, title, key }, i) => (
            <div
              className="flex flex-col items-center m-2 my-5 md:m-6 4xl:m-10 w-40 md:w-48 4xl:w-52"
              key={i}
            >
              <div className="icon bg-main-color w-12 h-12 4xl:h-16 rounded-full flex justify-center items-center p-2">
                <Image
                  className=""
                  src={icon}
                  alt={`${title.split(' ')[0]} Icon`}
                />
              </div>
              <h2 className="number text-2xl md:text-3xl 4xl:text-4xl font-extrabold mt-4 text-dark-color">
                {allStatistics.data?.[key as keyof AllStatistics]}
              </h2>
              <p className="text-sm md:text-base text-center text-body-gray md:mt-2">
                {title.split(' ')[0]} <br />{' '}
                <strong>{title.split(' ').slice(1).join(' ')}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
