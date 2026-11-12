export const Section = ({
  id,
  label,
  heading,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className="border-t border-line py-14 sm:py-20"
  >
    <p className="font-mono text-xs text-accent">{label}</p>
    <h2
      id={`${id}-heading`}
      className="mt-3 font-display text-3xl leading-tight sm:text-4xl"
    >
      {heading}
    </h2>
    <div className="mt-8 sm:mt-10">{children}</div>
  </section>
);
