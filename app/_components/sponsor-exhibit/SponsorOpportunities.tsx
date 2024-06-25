import { sponsorOpportunities } from '@/app/_utils/info';
import Link from 'next/link';
import React from 'react';

export default function SponsorOpportunities() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="row gap-6 md:gap-8">
          <div className="col-span-6 lg:col-span-4 grid place-content-center">
            <h2 className="title !text-start">Sponsorship Opportunities</h2>
            <p className="subtitle !w-full !text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaue
              ante pulvinar. Donec ut rhoncus ex.
            </p>
          </div>

          {sponsorOpportunities.map(({ title, description }, i) => (
            <div
              className="col-span-6 lg:col-span-4 p-4 md:p-8 rounded-sm bg-card-blue text-center"
              key={i}
            >
              <h4 className="font-medium md:text-lg lg:text-xl mb-2 md:mb-4">
                {title}
              </h4>
              <p className=" text-xs md:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
