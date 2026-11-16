import Reveal from "./Reveal";

// One numbered part of the page. Left column holds the numeral, title and a mono kicker;
// on small screens they collapse into a single line above the content.
export default function Section({ id, num, title, kicker, children, aside }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="wrap grid gap-9 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
        <Reveal as="header" className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-baseline gap-4 lg:block">
            <span className="t-numeral block">{num}</span>
            <h2 id={`${id}-title`} className="t-h2 lg:mt-3">
              {title}
            </h2>
          </div>
          <p className="label mt-2">{kicker}</p>
          {aside}
        </Reveal>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

// Used inside a section to start a sub-block: LABEL ——————— 4 ENTRIES
export function SubHead({ children, count, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h3 className="label label-rose whitespace-nowrap">{children}</h3>
      <span className="h-px flex-1 bg-rule" />
      {count !== undefined && <span className="label whitespace-nowrap">{count}</span>}
    </div>
  );
}
