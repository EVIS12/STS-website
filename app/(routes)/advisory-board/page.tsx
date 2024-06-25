import { Speaker } from '@/app/_components';
import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { SpeakerMainInfo } from 'Speakers';
import React from 'react';

export const revalidate = 180;

export default async function AdvisoryBoard() {
  const advisors = await axiosInterceptorInstance.get<SpeakerMainInfo[]>(
    '/advisors/advisors-board/'
  );

  return (
    <main>
      <div className="container">
        <div className="section-pad">
          <div className="head mb-6 md:mb-16">
            <h2 className="title">
              <span>STS</span> Community
            </h2>
            <p className="text-center mt-2 text-sm md:text-base lg:text-lg">
              Watch out for this space , we will be sharing the details soon
            </p>
          </div>
          <div className="row gap-y-6 md:gap-6 lg:gap-8">
            {advisors.data?.map(({ id, name, job_title, photo, company }) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-3" key={id}>
                <Speaker
                  id={id}
                  name={name}
                  session={job_title}
                  title={company}
                  image={photo}
                  advisor={true}
                  type="old"
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
