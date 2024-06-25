import { privacyGuidelines } from '@/app/_utils/info';
import React from 'react';

export default function PrivacyGuidelines() {
  return (
    <main>
      <section className="section-pad">
        <div className="container">
          <h2 className="title">Privacy Policy</h2>
          <p className="text-body-gray text-xs md:text-sm lg:text-base mt-2 md:mt-4">
            We respect your privacy and are committed to protecting it through
            our compliance with this privacy policy. This Policy describes the
            types of information we may collect from you or that you may provide
            Personal Information on the STS website and any of its related
            products and services, and our practices for collecting, using,
            maintaining, protecting, and disclosing that Personal Information.
            It also describes the choices available to you regarding our use of
            your Personal Information and how you can access and update it. This
            Policy is a legally binding agreement between you and us. If you are
            entering into this Policy on behalf of a business or other legal
            entity, you represent that you have the authority to bind such
            entity to this Policy, in which case the terms your shall refer to
            such entity. If you do not have such authority, or if you do not
            agree with the terms of this Policy, you must not accept this Policy
            and may not access and use the Website and Services. By accessing
            and using the Website and Services, you acknowledge that you have
            read, understood, and agree to be bound by the terms of this Policy.
            This Policy does not apply to the practices of companies that we do
            not own or control, or to individuals that we do not employ or
            manage.{' '}
          </p>{' '}
          <ol className="guidelines list-decimal list-outside mx-3" type="1">
            {privacyGuidelines.map(({ title, sublist }, i) => (
              <>
                <li
                  className="item my-6 marker:md:text-xl marker:font-bold"
                  key={i}
                >
                  <h2 className="font-bold md:text-2xl text-dark-color">
                    {title}
                  </h2>
                </li>
                <ol className="list-[upper-alpha]" key={`sublist-${i + 1}`}>
                  {sublist.map(
                    (
                      { title, list }: { title: string; list?: string[] },
                      x
                    ) => (
                      <>
                        <li className="item my-4 marker:font-bold" key={x}>
                          <h5 className="md:text-lg text-dark-color">
                            {title}
                          </h5>
                        </li>
                        {list && (
                          <ol className="list-[upper-roman] ml-4">
                            {list?.map((item: string, z: number) => (
                              <li
                                className="item my-2 marker:font-semibold"
                                key={`nexted-list-${z}`}
                              >
                                <p className="text-sm md:text-base text-dark-color">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ol>
                        )}
                      </>
                    )
                  )}
                </ol>
              </>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
