declare module 'Links' {
  interface RegisterLink {
    id: number;
    link: string;
    type: string;
    created_at: string;
    rank: number;
  }

  interface ContactLinks {
    id: number;
    email1: string;
    email2: string;
    phone1: string;
    phone2: string;
  }
}
