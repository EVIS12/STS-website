'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { navLinks } from '../../_utils/info';
import whiteLogo from '@/public/imgs/stsLogoWhite.webp';
import coloredLogo from '@/public/imgs/stsLogo.webp';
import Image from 'next/image';

const pagesWithTransparentNav = [
  '/',
  '/conference',
  '/program',
  '/registration',
  '/about',
  '/exhibition',
  '/plan-visit',
];

export default function Navbar() {
  //navbar bg state
  const [active, setActive] = useState<boolean>(true);
  //mbile nav state
  const [navExpanded, setNavExpanded] = useState(false);

  const pathname = usePathname();

  //change bg on scroll
  useEffect(() => {
    if (pagesWithTransparentNav.includes(pathname)) {
      setActive(false);
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setActive(true) : setActive(false);
      });
    } else {
      setActive(true);
      window.addEventListener('scroll', () => {
        setActive(true);
      });
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavExpanded(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-20 flex bg-transparent transition ${
        navExpanded
          ? 'bg-white'
          : active
          ? 'bg-white shadow-sm drop-shadow-md'
          : 'bg-transparent'
      } py-3 px-5 md:py-5`}
    >
      <div className="container flex flex-col md:flex-row md:items-center">
        <div className="heade-content flex justify-between items-center">
          <Link href={'/'} title="Home Link">
            {navExpanded ? (
              <Image
                className="w-28 md:w-40 md:mx-auto"
                src={coloredLogo}
                alt="STS logo"
              />
            ) : active ? (
              <Image
                className="w-28 md:w-40 md:mx-auto"
                src={coloredLogo}
                alt="STS logo"
              />
            ) : (
              <Image
                className="w-28 md:w-40 md:mx-auto"
                src={whiteLogo}
                alt="STS logo"
              />
            )}
          </Link>
          <button
            className="nav-toggle outline-none md:hidden"
            onClick={() => setNavExpanded(!navExpanded)}
            title="Toggle Btn"
          >
            <div className="toggle-icon w-5 h-5 flex flex-col justify-between relative">
              {[
                `${navExpanded && 'rotate-45'}`,
                `${navExpanded && 'hidden'}`,
                `${navExpanded && '-rotate-45'}`,
              ].map((item, i) => (
                <span
                  className={`bar-${i + 1} w-full h-[3px] ${
                    active || navExpanded ? 'bg-main-color' : 'bg-white'
                  } rounded-full transition duration-300 ${
                    navExpanded && 'absolute top-1/2'
                  } ${item}`}
                  key={i}
                ></span>
              ))}
            </div>
          </button>
        </div>
        <nav
          className={`w-full transition-all duration-500 ${
            navExpanded ? 'h-[270px]' : 'h-0'
          } md:h-fit overflow-hidden flex flex-col md:flex-row justify-center `}
        >
          {navLinks.map(({ title, link }, i) => (
            <Link
              className={`m-1 transition-all text-sm 2xl:text-lg text-dark-color hover:text-baby-blue px-3 py-1 rounded-full ${
                pathname === link
                  ? '!text-baby-blue font-medium'
                  : navExpanded
                  ? 'text-black'
                  : active
                  ? 'text-black'
                  : 'text-white'
              }`}
              href={link}
              key={i}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
