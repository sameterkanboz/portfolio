import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content/types";
import { EMAIL, GITHUB, LINKEDIN } from "@/content/types";
import { Section } from "./section";
import { Work } from "./work";

const External = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-1 underline decoration-line underline-offset-4 hover:decoration-accent"
  >
    {label}
    <ArrowUpRight size={15} aria-hidden="true" />
  </a>
);

export const Page = ({ content }: { content: Content }) => (
  <div className="mx-auto max-w-3xl px-5 sm:px-8">
    <header className="flex items-center justify-between py-6 text-sm">
      <span className="font-medium">Samet Erkan Boz</span>
      <a
        href={content.other.href}
        hrefLang={content.other.hrefLang}
        lang={content.other.hrefLang}
        className="font-mono text-xs text-soft hover:text-accent"
      >
        {content.other.label}
      </a>
    </header>
    <main>
      <section className="pb-16 pt-12 sm:pb-24 sm:pt-20">
        <p className="font-mono text-xs text-accent">{content.hero.eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl leading-[1.1] sm:text-6xl">
          {content.hero.headline}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
          {content.hero.lede}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent"
          >
            {content.hero.email}
          </a>
          <External href={LINKEDIN} label="LinkedIn" />
          <External href={GITHUB} label="GitHub" />
        </div>
      </section>
      <Work work={content.work} />
      <Section
        id="path"
        label={content.path.label}
        heading={content.path.heading}
      >
        <ol className="space-y-7">
          {content.path.steps.map((step) => (
            <li
              key={`${step.place}-${step.role}`}
              className="grid gap-1 sm:grid-cols-[8.5rem_1fr]"
            >
              <span className="font-mono text-xs leading-6 text-soft">
                {step.period}
              </span>
              <div>
                <p className="font-medium">
                  {step.role}
                  <span className="text-soft">, {step.place}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-soft">
                  {step.note}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Section
        id="stack"
        label={content.stack.label}
        heading={content.stack.heading}
      >
        <dl className="space-y-5">
          {content.stack.groups.map((group) => (
            <div
              key={group.title}
              className="grid gap-1 sm:grid-cols-[8.5rem_1fr]"
            >
              <dt className="font-mono text-xs leading-6 text-soft">
                {group.title}
              </dt>
              <dd className="leading-relaxed">{group.body}</dd>
            </div>
          ))}
        </dl>
      </Section>
      <Section
        id="contact"
        label={content.contact.label}
        heading={content.contact.heading}
      >
        <p className="max-w-xl text-soft">{content.contact.body}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 inline-block break-all font-display text-2xl underline decoration-line underline-offset-8 hover:decoration-accent sm:text-4xl"
        >
          {EMAIL}
        </a>
      </Section>
    </main>
    <footer className="flex flex-wrap justify-between gap-3 border-t border-line py-8 font-mono text-xs text-soft">
      <span>Samet Erkan Boz, İstanbul</span>
      <span className="flex gap-5">
        <a href={LINKEDIN} className="hover:text-accent">
          LinkedIn
        </a>
        <a href={GITHUB} className="hover:text-accent">
          GitHub
        </a>
      </span>
    </footer>
  </div>
);
