export type Day = {
  id: string;
  day_number: string;
  day_date: string;
};

export type Session = {
  id: string;
  day: {
    id: string;
    day_number: string;
    day_date: string;
  }[];
  type_of_session: string;
  session_title: string;
  session_subtitle: string;
  session_description: string;
  session_start_time: string;
  session_end_time: string;
};
