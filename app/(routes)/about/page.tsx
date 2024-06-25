import { PagesHero, Partners } from '@/app/_components';
import missionImage from '@/public/imgs/missionImage.webp';
import communityImage from '@/public/imgs/communityImage.webp';
import aboutNMbg from '@/public/imgs/aboutNMbg.webp';
import homeHeroBg from '@/public/imgs/homeHeroBg.webp';
import Image from 'next/image';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';

type Partner = {
  id: string;
  logo: string;
  title: string;
};

export const revalidate = 180;

export default async function About() {
  const partners = await axiosInterceptorInstance.get<Partner[]>(
    '/exhibitor/partner/'
  );

  return (
    <main>
      <PagesHero
        bg="bg-about-hero-bg"
        subtitle="Where industry stakeholders and innovation converge"
      />

      {/* Start about nirvana mice */}
      <section className="section-pad">
        <div className="container">
          <p className="sub-section-content text-center">
            In a world filled with boundless opportunities, space travel stands
            as a testament to human innovation and the insatiable quest for
            knowledge. Witness the incredible growth of the space travel
            industry, fueled by unending fascination, and discover the vast
            resources that awaits us beyond earth’s atmosphere. Let’s boldly
            venture into the universe, shaping a sustainable future for
            generations to come.
          </p>
        </div>
      </section>
      {/* End about nirvana mice */}

      {/* Start Vision section */}
      <section className="section-pad bg-second-color">
        <div className="container">
          <div className="row gap-6 lg:gap-14">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:order-2">
              <div className="image-container relative w-full">
                <Image
                  className="w-full rounded-md z-[1] relative mt-6"
                  src={homeHeroBg}
                  alt="Vision Image"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:pr-10 2xl:pr-14 my-auto lg:order-1">
              <h1 className="title !text-left mb-6 md:mb-10">
                <span>STS</span> Vision
              </h1>
              <p className="sub-section-content">
                Building an ecosystem in the space travel industry that sustain
                future innovation through an inclusive market by empowering
                existing stakeholders and introducing new key players who can
                make the future of space development brighter and stronger.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Vision section */}

      {/* Start Mission section */}
      <section className="section-pad">
        <div className="container">
          <div className="row gap-6 lg:gap-14">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="image-container relative w-full">
                {/* <StsLogoPattern className="w-64 absolute -rotate-[30deg] left-0 top-0 -translate-x-1/2 -translate-y-1/4" /> */}
                <Image
                  className="w-full rounded-md z-[1] relative mt-6"
                  src={missionImage}
                  alt="Mission Image"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:pr-10 2xl:pr-14 my-auto">
              <h1 className="title !text-left mb-6 md:mb-10">
                <span>STS</span> Mission
              </h1>
              <p className="sub-section-content">
                Using the new gaps resulting from commercial space industry
                growth as opportunities and valid entry points for nations with
                the highest potential yet struggle with the lack off
                accessibility due to the commonly known exclusivity of space
                sector.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Mission section */}

      {/* Start Our Community section */}
      <section className="section-pad bg-second-color relative overflow-hidden">
        <div className="container">
          <div className="row gap-6 lg:gap-14">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:order-2">
              <Image
                className="w-full rounded-md z-[1] relative mt-6"
                src={communityImage}
                alt="Community Image"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:order-1 lg:pr-10 2xl:pr-14 my-auto">
              <h1 className="title !text-left mb-6 md:mb-10">
                <span>STS</span> Community
              </h1>
              <p className="sub-section-content">
                A diverse constellation of individuals, startups, industry
                affiliates, experts, government representatives, academia
                specialists, regulators, and more. Join forces with government
                sectors, private entities, academic institutions, space
                agencies, organizations, media outlets, students, and
                environmental advocates. Together, we chart the course for a
                unified exploration into the vast realms of space travel.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Community section */}

      {/* Start about nirvana mice */}
      <section className="section-pad relative">
        {/* <StsLogoPattern className="w-1/2 md:w-1/3 lg:w-1/4 absolute left-0 bottom-5 rotate-[30deg] -translate-x-1/4 -z-[1]" /> */}
        <div className="container">
          <div className="row gap-6 lg:gap-14">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <Image
                className="w-full rounded-md z-[1] relative mt-6"
                src={aboutNMbg}
                alt="People in meeting room"
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-7 lg:pl-10 2xl:pl-14 my-auto">
              <h1 className="title !text-left mb-6 md:mb-10">
                About the Organizers
              </h1>
              <p className="sub-section-content">
                Nirvana MICE emerged as a dynamic division of Nirvana Holdings,
                specializing in Meetings, Incentives, Conferences and
                Exhibitions. The company offers a sweeping array of event
                management services, meticulously tailored to embrace their
                client’s unique needs. They curate events that transcend the
                ordinary, embodying their commitment to innovation,
                sustainability and sophisticated experiences.
              </p>
              <a
                className="main-btn mt-10 !mx-0"
                href={'https://nirvanamice.com'}
                target="_blank"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End about nirvana mice */}

      {partners.data.length > 0 && <Partners partners={partners.data} />}
    </main>
  );
}
