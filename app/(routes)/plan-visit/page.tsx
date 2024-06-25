import React from 'react';
import { PagesHero } from '@/app/_components';
import flight from '@/public/imgs/flight.webp';
import experience from '@/public/imgs/experience.webp';
import visa from '@/public/imgs/visa.webp';
import Image from 'next/image';
import { planVisit } from '@/app/_utils/info';

export const revalidate = 180;

export default async function PlanVisit() {
  return (
    <main>
      <PagesHero
        bg="bg-plan-visit-bg"
        subtitle="Your Guide to Navigating the Space Travel Summit Experience"
      />
      <section className="section-pad">
        <div className="container">
          <div className="steps mt-8 md:mt-16">
            {planVisit.map(({ image, title, description, btn }, i) => (
              <div
                className="step my-12 md:my-20 lg:my-24 flex flex-col lg:flex-row"
                key={i}
              >
                <Image
                  className="w-full lg:w-1/3 h-[250px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
                  src={image}
                  alt={`${title} image`}
                  width={500}
                  height={500}
                />
                <div className="content w-5/6 mx-auto lg:w-2/3 lg:mt-10">
                  <h3 className="title !text-start ml-8 mb-8 hidden lg:block">
                    {title}
                  </h3>
                  <div className="bg-card-blue p-5 md:p-10 font-default">
                    <h3 className="sub-section-title mb-3 lg:hidden">
                      {title}
                    </h3>
                    <p className="text-body-gray md:text-xl leading-normal text-justify">
                      {description}
                    </p>
                    <a
                      className="main-btn !mx-0 mt-4"
                      href={btn.url}
                      target="_blank"
                    >
                      {btn.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
