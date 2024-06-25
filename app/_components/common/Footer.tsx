import axiosInterceptorInstance from '@/app/_lib/axiosInterceptor';
import { contactInfo, navLinks, socialLinks } from '@/app/_utils/info';
import { LeadingEvents, NirvanaMice } from '@/public/icons/SVGIcons';
import whiteLogo from '@/public/imgs/stsLogoWhite.webp';
import { DownloadableFile } from 'Files';
import { ContactLinks } from 'Links';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const revalidate = 180;

export default async function Footer() {
  const rawContacts = await axiosInterceptorInstance.get<ContactLinks>(
    `/home/contacts`
  );
  const files = await axiosInterceptorInstance.get<DownloadableFile[]>(
    '/conference/contract-file/'
  );

  return (
    <footer className="bg-main-color pt-8 md:pt-14 4xl:pt-20 px-5 md:px-10">
      <div className="container">
        <div className="content grid grid-cols-12 gap-6 lg:gap-10">
          <div className="info-col col-span-7 lg:col-span-5 md:px-10">
            <Image
              className="w-10/12 md:w-8/12 md:mx-auto"
              src={whiteLogo}
              alt="logo"
            />

            <div className="links flex items-center md:justify-center mt-6">
              {socialLinks.map(({ title, icon, url }, i) => (
                <Link
                  className="social-link mx-2 md:mx-3 text-black"
                  href={url}
                  target="_blank"
                  key={i}
                  title={`${title} Link`}
                >
                  {icon}
                </Link>
              ))}
            </div>
            <div className="organizers flex mt-10 gap-2 md:gap-4 justify-center">
              <div className="nirvana">
                <p className="text-xs md:text-sm text-white mb-2">
                  Organized By
                </p>
                {/* bg-[#1E1E1E] */}
                <div className="logo rounded-sm p-[5px]">
                  <NirvanaMice className="w-14 lg:w-20" />
                </div>
              </div>
              <div className="leading">
                <p className="text-xs md:text-sm text-white mb-3">
                  Co-organized By
                </p>
                {/* bg-white */}
                <div className="logo flex rounded-sm p-1">
                  <LeadingEvents className="w-4 md:w-6" />{' '}
                  <p className="text-[#5A4C96] font-bold ml-1 text-xs sm:text-sm ">
                    Leading Events
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="flex flex-col text-[#c0c0c0]">
              {navLinks.map(({ title, link }, i) => (
                <Link
                  className="hover:text-white transition-all my-2 text-xs md:text-sm 4xl:text-lg w-fit"
                  href={link}
                  key={i}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="col-span-7 lg:col-span-3">
            <h3 className="footer-title">Contact us</h3>
            <nav className="flex flex-col text-[#c0c0c0]">
              {contactInfo.map(({ title, url }, i) => (
                <a
                  className="my-2 lg:my-3 text-xs md:text-sm hover:text-white transition-all"
                  href={url}
                  target="_blank"
                  key={i}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <h3 className="footer-title">Downloads</h3>
            <nav className="flex flex-col text-[#c0c0c0]">
              {files.data.map(({ type, id }) => (
                <Link
                  className="hover:text-white transition-all my-2 text-xs md:text-sm 4xl:text-lg flex w-fit"
                  href={`/download-files/?file=${id}`}
                  key={id}
                >
                  {type}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <p className="copyright mt-4 md:mt-10 py-4 md:py-5 text-sm border-t-[0.5px] text-white border-[#7B8E8E] text-center">
          Copyright © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
