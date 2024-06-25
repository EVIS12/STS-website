'use client';

import { Day, Session } from '@/app/_types/agendaTypes';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

type Props = {
  days: Day[];
  sessions: Session[];
  agendaId: string;
};

export default function AgendaCards({ days, sessions, agendaId }: Props) {
  const searchParams = useSearchParams();
  const currentDay = searchParams.get('day') ?? '1';
  const agendaRef = useRef<HTMLElement>();

  useEffect(() => {
    searchParams.get('day') &&
      agendaRef.current?.scrollIntoView({
        block: 'nearest',
        inline: 'start',
      });
  }, [searchParams.get('day') ?? false]);

  return (
    <section
      className="sessions-section section-pad bg-second-color !pt-0 md:!pt-6"
      ref={(ref) => (agendaRef.current = ref as HTMLElement)}
    >
      <div className="container">
        <div className="days-filters flex justify-center md:justify-start border-b-[3px] border-b-dark-color px-2 md:px-6">
          {days.map(({ day_number }, i) => (
            <Link
              className={`text-center -mb-[2.5px] text-light-gray font-medium text-sm md:text-lg lg:text-xl mx-4 px-2 md:px-4 pb-4 ${
                currentDay === day_number && 'border-b-[3px] border-b-baby-blue'
              } transition-all duration-300`}
              href={`/program/?day=${day_number}`}
              key={i}
            >
              <p
                className={`${
                  currentDay === day_number && 'text-dark-color'
                } transition-all duration-300 mb-1 md:mb-3`}
              >
                Day {day_number}
              </p>
            </Link>
          ))}
        </div>

        <table className="table-auto border-collapse bg-white rounded-xl overflow-hidden shadow-md drop-shadow-lg mt-8 md:mt-16 w-full">
          <tbody>
            {sessions
              .slice(0, 2)
              .map(
                ({
                  type_of_session,
                  session_start_time,
                  session_end_time,
                  session_description,
                  session_subtitle,
                  session_title,
                  id,
                }) => (
                  <tr className={`border-b-light-gray border-b-[1px]`} key={id}>
                    <td className="border-r-[1px] border-r-light-gray p-4 md:p-6 w-2/12 lg:w-[12%] align-top">
                      <p className="time text-light-gray text-center text-sm md:text-base lg:text-lg">
                        {session_start_time.slice(0, -3)} -{' '}
                        {session_end_time.slice(0, -3)}
                      </p>
                    </td>
                    <td className="border-l-[1px] border-l-light-gray p-3 md:p-6">
                      <h3 className="text-dark-color font-medium text-sm md:text-lg lg:text-xl">
                        {/* {type_of_session} */}
                        TBA
                      </h3>
                      {session_title && (
                        <h3 className="text-baby-blue font-medium text-sm md:text-lg lg:text-xl mt-4">
                          {/* {session_title} */}
                          Topic
                        </h3>
                      )}
                      {session_subtitle && (
                        <h4 className="text-dark-color font-semibold text-sm md:text-base lg:text-lg">
                          {/* {session_subtitle} */}
                          Subtopic
                        </h4>
                      )}
                      {session_description && (
                        <p className="mt-4 text-xs md:text-base">
                          {session_description}
                        </p>
                      )}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
        <Link
          className="main-btn mt-10 !mx-0"
          href={`/download-files/?file=${agendaId}`}
        >
          Download Agenda
        </Link>
      </div>
    </section>
  );
}
