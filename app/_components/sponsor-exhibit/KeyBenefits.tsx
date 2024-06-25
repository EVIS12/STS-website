import { keyBenefitsOfExhibit } from '@/app/_utils/info';
import Image from 'next/image';
import React from 'react';

export default function KeyBenefits() {
  return (
    <section className="section-pad bg-second-color">
      <div className="container">
        <h2 className="title">Key Benefits for Sponsors</h2>
        <div className="keys row gap-4 md:gap-6 mt-8 md:mt-12">
          {keyBenefitsOfExhibit.map(({ Icon, title, description }, i) => (
            <div
              className="col-span-6 lg:col-span-3 bg-white p-3 md:p-5 rounded-sm"
              key={i}
            >
              <div className="icon-container p-4 bg-main-color rounded-full w-fit">
                <Image
                  src={Icon}
                  className="w-8 md:w-10 aspect-square object-cover"
                  alt={`${title} Icon`}
                />
              </div>
              <h3 className="card-title my-4">{title}</h3>
              <p className="card-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
