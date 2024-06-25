import {
  Advisory,
  BlogSection,
  DetailsCard,
  Hero,
  LogosSlider,
  PlanVisitSec,
  Speaker,
  Statistics,
} from '../_components';
import Link from 'next/link';

import { AdaptiveCards } from './providers';
import axiosInterceptorInstance from '../_lib/axiosInterceptor';
import { SpeakerMainInfo } from 'Speakers';
import { ArticleMaininfo } from 'PressCenter';
import { keyInsights, whyAttendSTS } from '../_utils/info';
import { AdvisorMainInfo } from 'Advisors';

export const revalidate = 180;

export default async function Home() {
  const homeArticles = await axiosInterceptorInstance.get<ArticleMaininfo[]>(
    '/blog/blog-home/'
  );
  const homeAdvisors = await axiosInterceptorInstance.get<AdvisorMainInfo[]>(
    '/advisors/advisors?home_page=true'
  );

  return (
    <main>
      <Hero />
      {/* Start About STS section */}
      <section className="section-pad">
        <div className="container">
          <h1 className="title mb-6 md:mb-8">
            About <span>STS</span>
          </h1>
          <p className="sub-section-content text-center">
            In a world filled with boundless opportunities, space travel stands
            as a testament to human innovation and the insatiable quest for
            knowledge. Nirvana MICE proudly hosts the most anticipated event in
            the MENA region showcasing the future of space travel and
            exploration. Space Travel Summit serves as a global platform to meet
            the space ecosystem – Interact and engage in discussions about the
            role and future of space travel with industry pioneers, visionaries,
            experts, enthusiasts, and entrepreneurs. This is an invaluable
            opportunity to exchange ideas, gain new insights, and cultivate
            meaningful connections that transcend conventional boundaries. Our
            esteemed lineup of speakers comprises a diverse range of industry
            luminaries – astronauts, researchers, innovators, and
            decision-makers bringing forth distinctive insights and expertise,
            enriching our collective understanding of the future of space
            travel. <br /> <br /> JOIN us this 28 & 29 of January 2025, Connect
            Conference Centre At Expo City, Dubai. – where groundbreaking ideas
            meet actionable strategies. Witness the incredible growth of the
            space travel industry, fueled by an unending fascination, and
            discover the vast resources that await us beyond Earth&apos;s
            atmosphere. Together, we champion inclusivity and accessibility,
            ensuring that the benefits of space exploration are accessible.
          </p>
          <Link className="main-btn mt-8 md:mt-12" href={'/about'}>
            Learn More
          </Link>
        </div>
      </section>
      {/* End About STS section */}

      <Statistics />

      {/* Start Why ateend STS section */}
      <section className="why-attend section-pad">
        <div className="container">
          <h2 className="title">
            Why Attend <span>STS</span>
          </h2>

          <div className="cards overflow-hidden cards-container">
            {whyAttendSTS.map(({ title, details, imageUrl }, i) => (
              <DetailsCard
                title={title}
                description={details}
                index={i}
                bgUrl={imageUrl}
                key={i}
              />
            ))}
          </div>
          <Link className="main-btn mt-12" href={'/about'}>
            Learn more about STS
          </Link>
        </div>
      </section>
      {/* End Why ateend STS section */}

      {/* Advisory section */}
      {homeAdvisors.data.length > 0 && (
        <Advisory advisors={homeAdvisors?.data} bg="bg-second-color" />
      )}

      {/* Key Insight */}
      <section className="section-pad">
        <div className="container">
          <h1 className="title">Key Insights</h1>
          <div className="row gap-6 md:gap-12 mt-10 md:mt-14">
            {keyInsights.map(
              ({ Icon, report_url, number, title, description }, i) => (
                <a
                  href={report_url}
                  className="col-span-6 lg:col-span-3 flex flex-col items-center text-center bg-card-blue rounded-md mt-8 hover:scale-105 transition-all"
                  target="_blank"
                  key={i}
                >
                  <div className="icon-container px-3 py-2 bg-[#EAF0F2] rounded-full -mt-6 md:-mt-8">
                    <Icon className="w-8 h-10 md:w-10 md:h-12 aspect-square" />
                  </div>
                  <div className="content p-4 md:p-6 pt-0 ">
                    <h3 className="font-bold text-lg md:text-xl 2xl:text-2xl mt-6">
                      {number + ' '}
                      <span className="text-main-color">{title}</span>
                    </h3>
                    <p className="mt-2 md:mt-6 card-description text-justify">
                      {description}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Blog section */}
      {homeArticles.data.length > 0 && (
        <BlogSection className="bg-second-color" articles={homeArticles.data} />
      )}
    </main>
  );
}
