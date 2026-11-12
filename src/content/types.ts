export interface Row {
  title: string;
  body: string;
}

export interface Content {
  meta: { title: string; description: string };
  eyebrow: string;
  line: string;
  rows: Row[];
  terminal: string;
}

export const EMAIL = "sameterkanboz@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/sameterkanboz/";
export const GITHUB = "https://github.com/sameterkanboz";
export const TERMINAL = "https://terminal.seboz.dev";
export const SITE = "https://seboz.dev";
