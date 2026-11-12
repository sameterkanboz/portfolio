import type { Content } from "./types";

export const en: Content = {
  lang: "en",
  meta: {
    title: "Samet Erkan Boz · Full Stack Engineer",
    description:
      "Full stack engineer in Istanbul. I build storefronts, admin tools and services for beije, a subscription brand, with Next.js, React and NestJS.",
  },
  other: { href: "/tr", label: "Türkçe", hrefLang: "tr" },
  hero: {
    eyebrow: "Full stack engineer, Istanbul",
    headline:
      "I build the storefronts, admin tools and services behind a subscription business.",
    lede: "Since July 2024 I have worked at beije, a period care brand that sells by subscription. I started with landing pages and now own platform work across a monorepo of Next.js apps and NestJS services.",
    email: "Email me",
  },
  work: {
    label: "Work",
    heading: "What I have built at beije",
    intro:
      "Full Stack Developer, July 2024 to today. Four pieces of work show the range best.",
    cases: [
      {
        title: "The customer storefront",
        body: "I have been the most active developer on beije.co since 2025. I built campaign and landing pages, the cart and checkout with 3D Secure and one-time-password payments and saved cards, subscription editing, skipping and cancelling, and the customer return request flow from the form to the emails.",
        tags: ["Next.js", "React", "MUI", "Redux Toolkit"],
      },
      {
        title: "A new admin panel",
        body: "I moved the legacy operations panel to a new Next.js panel: order queues with bulk actions, refunds and returned orders, promo codes and coupons, label and invoice printing, customer and review moderation. One codebase serves two brands, runs in Turkish and English, and shows each admin only the screens their permissions allow.",
        tags: ["Next.js", "GraphQL", "Refine", "next-intl"],
      },
      {
        title: "A platform upgrade across the monorepo",
        body: "I led the move of all seven frontend apps to React 19, Next.js 16 and MUI 9 in two weeks, with ESLint 9 flat config and a newer Nx on the way. I also wrote the migration guide for the team.",
        tags: ["React 19", "Next.js 16", "MUI 9", "Nx"],
      },
      {
        title: "End-to-end tests on the whole stack",
        body: "I wrote most of the storefront's Cypress suite in my first months, then set up Playwright for the admin panel. The suites run in CI against a local Docker stack with seeded data and a payment sandbox, so a broken checkout fails a pull request before it reaches a customer.",
        tags: ["Playwright", "Cypress", "Docker", "GitHub Actions"],
      },
    ],
    alsoLabel: "Also at beije",
    also: [
      {
        title: "ruuts.xyz",
        body: "Most of the brand-specific features of ruuts, beije's sub-brand for shaving products: the starter kit builder, subscriptions that start on a future date, and sign-up with a beije account.",
      },
      {
        title: "Localized errors for every service",
        body: "The shared library that gives about ten NestJS services error and validation messages in the user's language, with numbered error codes.",
      },
      {
        title: "Design tokens from Figma",
        body: "Color, type and spacing tokens generated from the Figma design system, a lint rule that rejects hard-coded values, and one library of about 1,400 icons that take their color from the text around them.",
      },
      {
        title: "Backend services",
        body: "One-time passwords over SMS with rate limiting, login history, moderation APIs for the community, admin permissions, and shipping carrier integrations with label printing.",
      },
    ],
  },
  path: {
    label: "Before",
    heading: "How I got here",
    steps: [
      {
        period: "2024",
        role: "Frontend Developer, contract",
        place: "kargakarga",
        note: "Web pages built for performance, with Next.js.",
      },
      {
        period: "2024",
        role: "Full Stack Intern",
        place: "Kafein",
        note: "A mobile app from database to screens in one month, with React Native, Go and PostgreSQL.",
      },
      {
        period: "2023",
        role: "Frontend Developer, contract",
        place: "fiyatperformans",
        note: "E-commerce frontend with Next.js and Redux.",
      },
      {
        period: "2022 to 2023",
        role: "Frontend Developer",
        place: "Depixen",
        note: "React and React Native products, and 3D research work with Three.js.",
      },
      {
        period: "2020 to 2024",
        role: "BSc, Computer Engineering",
        place: "Istanbul Gelişim University",
        note: "Student assistant at the university's robotics research center in my last year.",
      },
    ],
  },
  stack: {
    label: "Stack",
    heading: "What I work with",
    groups: [
      {
        title: "Frontend",
        body: "TypeScript, React, Next.js, MUI, Redux Toolkit, Storybook, React Native",
      },
      {
        title: "Backend",
        body: "Node.js, NestJS, GraphQL, MongoDB, PostgreSQL, RabbitMQ",
      },
      {
        title: "Testing and delivery",
        body: "Playwright, Cypress, Nx, GitHub Actions, Docker",
      },
    ],
  },
  contact: {
    label: "Contact",
    heading: "Get in touch",
    body: "Email is the quickest way to reach me. I answer within a day or two.",
  },
  card: {
    line: "I build the storefronts, admin tools and services behind beije, a period care brand that sells by subscription.",
    rows: [
      { title: "Now", body: "Full Stack Developer at beije, since 2024" },
      {
        title: "Works on",
        body: "Web apps, backend services, design systems, test automation",
      },
      { title: "Before", body: "Depixen, fiyatperformans, kargakarga" },
    ],
    terminal: "The work, in a terminal",
  },
};
