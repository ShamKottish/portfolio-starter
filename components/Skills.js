"use client";

import { useI18n } from "./I18n";
import Section from "./Section";
import Reveal from "./Reveal";

const MAX_YEARS = 18;
const tone = {
  expert: { chip: "chip-rose", bar: "bg-rose" },
  advanced: { chip: "", bar: "bg-ink-2" },
  intermediate: { chip: "chip-sage", bar: "bg-sage" },
};

export default function Skills() {
  const { cv, ui } = useI18n();

  return (
    <Section id="skills" num="04" title={ui.skills.title} kicker={ui.skills.kicker}>
      <p className="label mb-2 flex flex-wrap gap-x-6 gap-y-2" aria-hidden="true">
        {Object.keys(tone).map((t) => (
          <span key={t} className="flex items-center gap-2">
            <span className={`h-[3px] w-5 ${tone[t].bar}`} />
            {ui.skills.tiers[t]}
          </span>
        ))}
      </p>

      <div className="grid gap-x-12 md:grid-cols-2">
        {cv.skills.map((s) => (
          <div key={s.group} className="border-t border-rule py-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-[1.3rem] font-[400] italic leading-tight" style={{ fontVariationSettings: '"WONK" 1, "opsz" 36' }}>
                {s.group}
              </h3>
              <p className="label whitespace-nowrap">
                {s.level} · <span className="num">{ui.skills.years(s.years)}</span>
              </p>
            </div>

            <div className="mt-3 h-[3px] bg-rule-strong/50" aria-hidden="true">
              <div className={`h-full ${tone[s.tier].bar}`} style={{ width: `${(s.years / MAX_YEARS) * 100}%` }} />
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item, i) => (
                <Reveal as="li" i={i} key={item} className={`chip ${tone[s.tier].chip}`}>
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
