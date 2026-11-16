"use client";

import { useI18n } from "./I18n";
import Section, { SubHead } from "./Section";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  const { cv, ui } = useI18n();
  const { lead, paragraphs } = cv.about;

  return (
    <Section id="about" num="01" title={ui.about.title} kicker={ui.about.kicker}>
      <Reveal as="p" delay={80} className="t-lead max-w-[38ch]">
        <span className="accent">{lead.slice(0, 1)}</span>
        {lead.slice(1)}
      </Reveal>

      <div className="mt-9 grid gap-x-10 gap-y-5 md:grid-cols-2">
        {paragraphs.map((p, i) => (
          <Reveal as="p" key={p} delay={160 + i * 80} className="text-[16px] leading-[26px] text-ink-2 rtl:leading-8">
            {p}
          </Reveal>
        ))}
      </div>

      <SubHead className="mt-14" count={cv.highlights.length}>
        {ui.about.by}
      </SubHead>
      <dl className="mt-1 grid grid-cols-2 gap-px border-y border-rule bg-rule md:grid-cols-4">
        {cv.highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse justify-end bg-paper px-5 py-6 first:ps-0 md:[&:nth-child(4n+1)]:ps-0">
            <dt className="mt-3">
              <span className="block text-[15px] font-medium leading-5">{h.label}</span>
              <span className="label mt-1.5 block !text-[10.5px]">{h.note}</span>
            </dt>
            <dd className="font-serif text-[2.6rem] font-light leading-none tracking-tight">
              <CountUp value={h.value} />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-12 md:grid-cols-[1.35fr_1fr]">
        <div>
          <SubHead>{ui.about.away}</SubHead>
          <ul className="mt-2 grid grid-cols-2 gap-x-6">
            {cv.interests.map((it) => (
              <li key={it.label} className="border-b border-rule py-5">
                <span className="num t-lead !text-[1.9rem] !leading-none italic text-rose" style={{ fontVariationSettings: '"WONK" 1' }}>
                  {it.value}
                </span>
                <p className="mt-2 text-[14px] leading-5 text-ink-2">{it.label}</p>
                <span className="sr-only">{it.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SubHead>{ui.about.speaks}</SubHead>
          <ul className="mt-2">
            {cv.languages.map((l) => (
              <li key={l.name} className="grid grid-cols-[5.5rem_1fr] items-center gap-4 border-b border-rule py-3">
                <span className="font-serif text-lg font-[450]">{l.name}</span>
                <div>
                  <div className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: 6 }, (_, i) => (
                      <span key={i} className={`h-[3px] flex-1 ${i < l.score ? "bg-rose" : "bg-rule-strong/60"}`} />
                    ))}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-[18px] text-ink-2">{l.level}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
