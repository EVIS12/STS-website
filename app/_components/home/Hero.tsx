import Image from 'next/image';
import LocationIcon from '@/public/icons/locationIcon.webp';

export default function Hero() {
  return (
    <section className="bg-cover bg-home-bg bg-center main-overlay before:!opacity-70 -mt-[85px] md:-mt-[100px] 4xl:-mt-[85px] h-[80vh] md:h-[calc(75vh+5px)] flex items-center px-6">
      <div className="container mt-20">
        <div className="content flex flex-col items-center text-center md:text-left md:block z-[2] relative">
          <h1 className="text-white text-3xl md:text-4xl 2xl:text-5xl font-bold ">
            From Space Dreams <br /> to Accessible Reality!
          </h1>
          <p className="text-sm md:text-base 2xl:text-xl text-white lg:w-1/2 mt-4">
            A deep dive into the future of space travel and commercial space
            activities.
          </p>
          <h1 className="text-white text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-bold mt-2">
            28-29 January, 2025 <br />{' '}
            <Image
              className="w-4 md:w-5 lg:w-7 inline mb-2"
              src={LocationIcon}
              alt="Location Icon"
            />
            Connect Conference Centre <br /> At Expo City, Dubai.
          </h1>

          <div className="btns flex gap-4 md:gap-6 mt-5 md:mt-8 lg:mt-10">
            <a
              href={'/register-form'}
              target="_blank"
              className="!mx-0 main-btn"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
