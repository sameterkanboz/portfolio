export type Lang = "en" | "tr";

export interface Case {
  title: string;
  body: string;
  tags: string[];
}

export interface Note {
  title: string;
  body: string;
}

export interface Step {
  period: string;
  role: string;
  place: string;
  note: string;
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  other: { href: string; label: string; hrefLang: Lang };
  hero: { eyebrow: string; headline: string; lede: string; email: string };
  work: {
    label: string;
    heading: string;
    intro: string;
    cases: Case[];
    alsoLabel: string;
    also: Note[];
  };
  path: { label: string; heading: string; steps: Step[] };
  stack: { label: string; heading: string; groups: Note[] };
  contact: { label: string; heading: string; body: string };
}

export const EMAIL = "sameterkanboz@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/sameterkanboz/";
export const GITHUB = "https://github.com/sameterkanboz";
export const SITE = "https://seboz.dev";
