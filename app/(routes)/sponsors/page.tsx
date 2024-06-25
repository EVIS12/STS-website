import {
  ExhibitorOpportunities,
  KeyBenefits,
  LogosSlider,
  PagesHero,
  SponsorOpportunities,
} from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { whySponsor } from '@/app/_utils/info';
import { DownloadableFile } from 'Files';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export const revalidate = 180;

export default async function SponsorExhibit() {
  return notFound();
  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );
  const [sponsorship_brochure] = files.data.filter(
    (item) => item.type === 'Sponsorship and Exhibition Opportunities'
  );

  return (
    <main>
      <PagesHero
        bg="bg-sponsors-bg"
        title="Why Sponsor or Exhibit at the Inaugural STS?"
        description="Be a part of history by aligning your brand with the launch of the premier confex dedicated to space commerce and innovation. The inaugural Space Travel Summit promises to be a landmark event, bringing together industry leaders, innovators, and enthusiasts. As a sponsor or exhibitor, you'll not only gain invaluable exposure but also play a pivotal role in shaping the future of space commerce."
        buttons={[{ title: 'Submit Your Interest', url: '/register-form' }]}
      />
      {/* Start why sponsor */}
      <section className="section-pad relative">
        {/* <StsLogoPattern className="w-3/4 md:w-2/3 lg:w-1/3 -z-[1] absolute -rotate-[30deg] left-0 top-1/2 -translate-x-1/4 -translate-y-1/2" /> */}
        <div className="container">
          <h1 className="title">Why Sponsor?</h1>
          <div className="sponsorship-reasons row gap-4 md:gap-8 lg:gap-12 mt-6 md:mt-16">
            {whySponsor.map(({ Icon, title, description }, i) => (
              <div
                className="col-span-6 lg:col-span-3 flex flex-col items-center text-center bg-card-gray p-3 md:p-5 rounded-sm"
                key={i}
              >
                <div className="icon-container px-3 py-2 bg-main-color rounded-full w-fit">
                  <Icon className="w-8 h-10 md:w-10 md:h-12 aspect-square [&>path]:fill-white" />
                </div>
                <h3 className="card-title my-4">{title}</h3>
                <p className="card-description">{description}</p>
              </div>
            ))}
          </div>
          <Link
            className="main-btn mt-6 md:mt-10"
            href={`/download-files/?file=${sponsorship_brochure.id}`}
          >
            Download Sponsorship brochure
          </Link>
        </div>
      </section>
      {/* End why sponsor */}
      <KeyBenefits />
      <SponsorOpportunities />
      <LogosSlider
        title="Sponsors 2024"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiaue
              ante pulvinar. Donec ut rhoncus ex."
      />
      <section className="section-pad">
        <div className="container">
          <h2 className="sub-section-title text-center">
            Be Part of Our Journey
          </h2>
          <p className="sub-section-content text-center mt-4 md:mt-6">
            By becoming a sponsor or exhibitor at the inaugural STS, you&apos;re
            not just attending an event—you&apos;re becoming a foundational
            partner in an exciting journey towards the future of space commerce.
            Join us in launching this vision and setting the trajectory for
            years to come.
          </p>
          <Link className="main-btn mt-6 md:mt-10" href={'/register-form'}>
            Register Now
          </Link>
        </div>
      </section>
    </main>
  );
}
