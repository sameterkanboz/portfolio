import { ArrowUpRight } from "lucide-react";
import type { Content } from "@/content/types";
import { EMAIL, GITHUB, LINKEDIN, TERMINAL } from "@/content/types";

const Link = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="inline-flex items-center gap-1 underline decoration-line underline-offset-4 hover:decoration-accent"
  >
    {label}
    <ArrowUpRight size={14} aria-hidden="true" />
  </a>
);

export const Card = ({ content }: { content: Content }) => (
  <main className="flex min-h-dvh items-center justify-center px-5 py-10">
    <article className="w-full max-w-2xl rounded-sm border border-line bg-card p-7 shadow-[0_1px_0_var(--line),0_24px_60px_-30px_rgba(0,0,0,0.35)] sm:p-12">
      <header className="flex items-start justify-between gap-4 font-mono text-xs">
        <p className="text-accent">{content.hero.eyebrow}</p>
        <a
          href={content.other.href}
          hrefLang={content.other.hrefLang}
          lang={content.other.hrefLang}
          className="text-soft hover:text-accent"
        >
          {content.other.label}
        </a>
      </header>
      <h1 className="mt-12 font-display text-5xl leading-none sm:mt-16 sm:text-7xl">
        Samet Erkan Boz
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-soft">
        {content.card.line}
      </p>
      <dl className="mt-10 space-y-3 border-t border-line pt-7 sm:mt-14">
        {content.card.rows.map((row) => (
          <div key={row.title} className="grid gap-0.5 sm:grid-cols-[7.5rem_1fr]">
            <dt className="font-mono text-xs leading-6 text-soft">
              {row.title}
            </dt>
            <dd>{row.body}</dd>
          </div>
        ))}
      </dl>
      <footer className="mt-10 border-t border-line pt-7 sm:mt-14">
        <a
          href={`mailto:${EMAIL}`}
          className="break-all font-display text-2xl underline decoration-line underline-offset-8 hover:decoration-accent sm:text-3xl"
        >
          {EMAIL}
        </a>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href={LINKEDIN} label="LinkedIn" />
          <Link href={GITHUB} label="GitHub" />
          <Link href={TERMINAL} label={content.card.terminal} />
        </p>
      </footer>
    </article>
  </main>
);
