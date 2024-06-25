import { exhibitorOpportunities } from '@/app/_utils/info';
import Image from 'next/image';
import React from 'react';

export default function ExhibitorOpportunities() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="row gap-6">
          <div className="col-span-12 lg:col-span-4 grid place-content-center">
            <h2 className="title !text-start">Exhibitor Opportunities</h2>
            <p className="subtitle !w-full !text-start">
              Chart Your Course: Navigate Exhibitor Opportunities for a Stellar
              Presence at the Space Travel Summit.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 row gap-6">
            {exhibitorOpportunities.map(({ Icon, title, description }, i) => (
              <div
                className="col-span-6 lg:col-span-4 flex flex-col items-center text-center bg-card-blue rounded-md mt-8"
                key={i}
              >
                <div className="icon-container p-4 bg-[#EAF0F2] rounded-full -mt-6 md:-mt-8">
                  <Image
                    src={Icon}
                    className="w-8 md:w-10 aspect-square object-cover"
                    alt={`${title} Icon`}
                  />
                </div>
                <div className="content p-4 md:p-8 pt-0">
                  <h3 className="font-bold text-lg md:text-xl 2xl:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 md:mt-6 card-description">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
