import {
  ExhibitorOpportunities,
  LogosSlider,
  PagesHero,
  RegisterSection,
} from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { whyExhibit } from '@/app/_utils/info';
import { StsLogoPattern } from '@/public/icons/SVGIcons';
import exhibitionRegisterCard from '@/public/imgs/exhibitionRegisterCard.webp';
import { ExhibitorMainInfo } from 'Exhibitors';
import { DownloadableFile } from 'Files';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const revalidate = 180;

export default async function Exhibition() {
  const exhibitors = await axiosInterceptorInstance.get<ExhibitorMainInfo[]>(
    '/exhibitor/exhibitors-logo'
  );

  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );
  const [exhibitor_agenda] = files.data.filter(
    (item) => item.type === 'Sponsorship and Exhibition Opportunities Brochure'
  );
  return (
    <main>
      <PagesHero
        bg="bg-exhibition-hero-bg"
        subtitle="As a sponsor or exhibitor, you'll not only gain invaluable exposure but also play a pivotal role in shaping the future of space commerce"
      />

      {/* Start why exhibit */}
      <section className="section-pad relative">
        {/* <StsLogoPattern className="w-3/4 md:w-2/3 lg:w-1/3 -z-[1] absolute -rotate-[30deg] left-0 top-1/2 -translate-x-1/4 -translate-y-1/2" /> */}
        <div className="container">
          <h1 className="title">Why Exhibit / Sponsor?</h1>
          <div className="exhibition-reasons row gap-4 md:gap-8 lg:gap-12 mt-6 md:mt-16">
            {whyExhibit.map(({ Icon, title, description }, i) => (
              <div
                className="col-span-6 lg:col-span-3 flex flex-col items-center text-center bg-card-gray p-3 md:p-5 rounded-sm"
                key={i}
              >
                <div className="icon-container p-4 bg-main-color rounded-full w-fit">
                  <Image
                    className="w-6 md:w-8 aspect-square object-contain [&>path]:fill-white"
                    src={Icon}
                    alt={`${title} Icon`}
                  />
                </div>
                <h3 className="card-title my-6">{title}</h3>
                <p className="card-description text-center">{description}</p>
              </div>
            ))}
          </div>
          <Link
            className="main-btn mt-6 md:mt-10"
            href={`/download-files/?file=${exhibitor_agenda.id}`}
          >
            Download Brochure
          </Link>
        </div>
      </section>
      {/* End why exhibit */}

      {exhibitors.data.length > 0 && (
        <LogosSlider
          title="Exhibitors 2024"
          subtitle="Shaping the Cosmos: Unveiling Our Distinguished Exhibitors at the Space Travel Summit"
          brands={exhibitors.data}
        />
      )}

      <ExhibitorOpportunities />

      {/* Start registered card */}
      <section className="section-pad relative overflow-hidden !pb-0 bg-second-color">
        {/* <StsLogoPattern className="w-3/4 md:w-2/3 lg:w-1/3 absolute right-0 top-0 rotate-[30deg] translate-x-1/4" /> */}

        <RegisterSection
          className="z-[1] relative"
          image={exhibitionRegisterCard}
          title="Register for Exhibition"
          description=" Maximize visibility at the debut of our summit's exhibition. Become a sponsor/exhibitor to establish your brand as a frontrunner in the space travel industry. Forge invaluable connections and be a foundational partner in shaping the future of space commerce."
          btn={{ url: '/register-form', title: 'Register Now' }}
        />
      </section>
      {/* End registered card */}
    </main>
  );
}
