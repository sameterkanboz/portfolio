import type { Content } from "@/content/types";
import { Section } from "./section";

export const Work = ({ work }: { work: Content["work"] }) => (
  <Section id="work" label={work.label} heading={work.heading}>
    <p className="max-w-xl text-soft">{work.intro}</p>
    <ol className="mt-10 space-y-12">
      {work.cases.map((item, index) => (
        <li key={item.title} className="grid gap-3 sm:grid-cols-[3.5rem_1fr]">
          <span className="font-mono text-sm text-accent" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-2xl leading-snug">{item.title}</h3>
            <p className="mt-3 leading-relaxed">{item.body}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-soft">
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
    <h3 className="mt-16 font-mono text-xs text-accent">{work.alsoLabel}</h3>
    <dl className="mt-5 grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {work.also.map((item) => (
        <div key={item.title}>
          <dt className="font-medium">{item.title}</dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-soft">
            {item.body}
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);
