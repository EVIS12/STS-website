import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },

    extend: {
      backgroundImage: {
        'btns-gradient':
          'linear-gradient(121deg, #6AD9D6 6.25%, #25BDB9 48.44%, #32B9B5 100%)',
        'gradient-hover': 'linear-gradient(121deg, #24B1AE 0%, #219B98 100%)',
        'icon-bg': 'linear-gradient(134deg, #25BDB9 0%, #5DDCD8 100%)',
        'home-bg': "url('/imgs/homeHeroBg.webp')",
        'conference-bg': "url('/imgs/conferenceHeroBg.webp')",
        'speakers-bg': "url('/imgs/conference.webp')",
        'sponsors-bg': "url('/imgs/sponsorExhibit.webp')",
        'registration-bg': "url('/imgs/registration.webp')",
        'about-hero-bg': "url('/imgs/aboutHeroBg.webp')",
        'exhibition-hero-bg': "url('/imgs/exhibitionHero.webp')",
        'program-hero-bg': "url('/imgs/programHeroBg.webp')",
        'plan-visit-bg': "url('/imgs/planVisitHero.webp')",
        'commercial-activities-bg':
          "url('/imgs/commercialActivitiesTrack.webp')",
        'industry-growth-bg': "url('/imgs/industryGrowthTrack.webp')",
        'national-program-bg': "url('/imgs/nationalProgramTrack.webp')",
        'main-gradient': 'linear-gradient(#173e56, #0e202b)',
        'blue-gradient': 'linear-gradient(#4d98cf, #79b7e5)',
        'btn-gradient': 'linear-gradient(to right, #0A1B23, #307691)',
      },
      colors: {
        'main-color': '#173e56',
        'card-blue': '#D1E3EF',
        'card-gray': '#f1f1f1',
        'second-color': '#eff8ff',
        'baby-blue': '#4d98cf',
        'dark-color': '#2A3030',
        'light-gray': '#939393',
        'body-gray': '#495858',
      },
      textShadow: {
        'title-shadow': ' -4px 4px 20px rgb(23, 62, 86);',
      },
      backgroundSize: {
        'size-100': '120% 120%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-textshadow'),
  ],
};
export default config;
