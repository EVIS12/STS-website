import { PagesHero } from '@/app/_components';
import {
  registrationDetailsInfo,
  registrationOptionsInfo,
} from '@/app/_utils/info';
import Link from 'next/link';
import React from 'react';

export default function Registration() {
  return (
    <main className="bg-[#F8F8F8]">
      <PagesHero
        bg="bg-registration-bg"
        subtitle="Join us at the Space Travel Summit, where pioneers, enthusiasts, and leaders in space commerce and exploration gather to exchange ideas, innovations, and insights."
        buttons={[{ title: 'Register Your Interest', url: '/register-form' }]}
      />
      <section className="options-section section-pad !pb-0 !pt-14 md:!pt-16 ">
        <div className="container">
          <div className="head flex items-center mb-6 md:mb-12">
            <span className="ml-2 block w-2 h-1 border-[10px] md:border-[14px] border-transparent border-l-baby-blue md:rounded-md"></span>
            <h2 className="sub-section-title">Registration Options :</h2>
          </div>
          <div className="registration-packages w-full flex flex-col gap-6 md:gap-8">
            {registrationOptionsInfo.map(({ title, packages }, i) => (
              <div
                className="bg-white rounded-xl shadow-md drop-shadow-md md:shadow-xl md:drop-shadow-xl py-3 md:py-6"
                key={i}
              >
                <h4 className="pb-3 md:pb-6 px-5 md:px-10 border-b-[1px] border-b-[#939393] md:text-xl">
                  <span className="text-baby-blue">{i + 1}. </span>
                  {title}
                </h4>
                <ul className="list-disc pt-3 md:pt-6 px-10 md:px-20 text-xs md:text-base">
                  {packages.map((item, index) => (
                    <li className="my-2 md:my-4" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="details-section section-pad !pb-14 md:!pb-16 !pt-6 md:!pt-12">
        <div className="container">
          <div className="head flex items-center mb-6 md:mb-12">
            <span className="ml-2 block w-2 h-1 border-[10px] md:border-[14px] border-transparent border-l-baby-blue md:rounded-md"></span>
            <h2 className="sub-section-title">Registration Details :</h2>
          </div>
          <div className="registration-packages flex justify-center items-center gap-8">
            {registrationDetailsInfo.map(({ title, offers }, i) => (
              <div
                className="bg-white w-[48%] rounded-xl shadow-md drop-shadow-md md:shadow-xl md:drop-shadow-xl py-3 md:py-6"
                key={i}
              >
                <h4 className="pb-3 md:pb-6 px-5 md:px-10 border-b-[1px] border-b-[#939393] md:text-xl">
                  <span className="text-baby-blue">{i + 1}. </span>
                  {title}
                </h4>
                <ul className="list-disc pt-3 md:pt-6 px-10 md:px-20 text-xs md:text-base">
                  {offers.map((item, index) => (
                    <li className="my-2 md:my-4" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-second-color">
        <div className="container">
          <div className="head flex items-center mb-4 md:mb-6">
            <span className="ml-2 block w-2 h-1 border-[10px] md:border-[14px] border-transparent border-l-baby-blue md:rounded-md"></span>
            <h2 className="sub-section-title">Group Discounts :</h2>
          </div>
          <p className="sub-section-content">
            Bringing your team? Discounts available for groups of 5 or more.
          </p>{' '}
          <Link className="main-btn mt-6 !mx-0" href="/register-form">
            Register Now
          </Link>
        </div>
      </section>{' '}
    </main>
  );
}
