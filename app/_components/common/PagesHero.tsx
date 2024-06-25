import Link from 'next/link';
import React from 'react';

interface Props {
  bg: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: {
    title: string;
    url: string;
  }[];
}

export default function PagesHero({
  bg,
  title,
  subtitle,
  description,
  buttons,
}: Props) {
  return (
    <section
      className={`${bg} bg-cover bg-center main-overlay -mt-[85px] md:-mt-[100px] h-[80vh] md:h-[calc(75vh+5px)] flex flex-col items-center justify-center px-10`}
    >
      <h1 className="hero-title mb-3 text-shadow-title-shadow text-center lg:w-3/5 z-[1]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white text-lg text-center md:w-2/3 lg:w-1/2 md:text-xl lg:text-2xl font-medium my-3 z-[1]">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-white w-full md:w-2/3 lg:w-1/2 mx-auto text-sm md:text-base lg:text-lg 4xl:text-xl leading-relaxed text-center mb-4 z-[1]">
          {description}
        </p>
      )}
      <div className="btns flex gap-4 mt-4">
        {buttons &&
          buttons.map(({ url, title }, i) => (
            <Link href={url} className="main-btn" key={i}>
              {title}
            </Link>
          ))}
      </div>
    </section>
  );
}
