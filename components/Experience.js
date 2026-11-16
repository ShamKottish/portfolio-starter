"use client";

import { useId, useState } from "react";
import { useI18n } from "./I18n";
import Section, { SubHead } from "./Section";
import Arrow from "./Arrow";

// ── career chart ────────────────────────────────────────────
const START = 2006;
const END = 2027;
const TICKS = [2008, 2012, 2016, 2020, 2024];
const pct = (year) => ((year - START) / (END - START)) * 100;

function CareerChart() {
  const { cv, ui } = useI18n();

  return (
    <figure className="mb-14" aria-hidden="true">
      <div className="flex items-center justify-between gap-4 pb-3">
        <figcaption className="label label-rose">{ui.experience.glance}</figcaption>
        <p className="label flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-[9px] w-4 bg-rose" />
            {ui.experience.work}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-[9px] w-4 bg-sage" />
            {ui.experience.study}
          </span>
        </p>
      </div>

      <div className="relative border-t border-rule pt-7">
        <div className="pointer-events-none absolute inset-y-0 end-0 start-[6.25rem] sm:start-[7.5rem]">
          {TICKS.map((year) => (
            <span
              key={year}
              className="absolute inset-y-0 w-px bg-rule"
              style={{ insetInlineStart: `${pct(year)}%` }}
            >
              <span className="label absolute -top-0 -translate-x-1/2 rtl:translate-x-1/2 !text-[10px]">
                <span className="num">{year}</span>
              </span>
            </span>
          ))}
        </div>

        {cv.timeline.map((row) => (
          <div key={row.key} className="grid h-[26px] grid-cols-[5.5rem_1fr] items-center gap-3 sm:grid-cols-[6.75rem_1fr]">
            <span className="label truncate !text-[10.5px]">{row.label}</span>
            <div className="relative h-full">
              <span
                className={`absolute top-1/2 h-[9px] -translate-y-1/2 rounded-[1px] ${row.kind === "work" ? "bg-rose" : "bg-sage"}`}
                style={{ insetInlineStart: `${pct(row.from)}%`, width: `${pct(row.to) - pct(row.from)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ── timeline pieces ─────────────────────────────────────────
function Item({ date, hidden, children }) {
  return (
    <li className="tl-item" hidden={hidden}>
      <span className="tl-node" aria-hidden="true" />
      <p className="label tl-date ps-[1.6rem] md:ps-0">{date}</p>
      <div className="tl-body mt-1.5 md:mt-0">{children}</div>
    </li>
  );
}

function Bullets({ points }) {
  return (
    <ul className="dash-list mt-3 space-y-1.5 text-[16px] leading-[25px] text-ink-2 rtl:text-[17.5px] rtl:leading-8">
      {points.map((pt) => (
        <li key={pt}>{pt}</li>
      ))}
    </ul>
  );
}

function Stack({ tech }) {
  const { ui } = useI18n();
  if (!tech?.length) return null;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
      <span className="label me-1">{ui.experience.stay}</span>
      {tech.map((t) => (
        <span key={t} className="chip !py-0 !text-[12.5px]" dir="ltr">
          {t}
        </span>
      ))}
    </div>
  );
}

function Job({ group }) {
  const { ui } = useI18n();
  const single = group.roles.length === 1;

  if (single) {
    const role = group.roles[0];
    return (
      <>
        <h4 className="t-h3">
          {role.title}
          {group.company && (
            <>
              {" "}
              <em>
                {ui.experience.at} <bdi>{group.company}</bdi>
              </em>
            </>
          )}
        </h4>
        <p className="label mt-1.5">{group.place}</p>
        <Bullets points={role.points} />
        <Stack tech={role.tech} />
      </>
    );
  }

  return (
    <>
      <h4 className="t-h3">
        <bdi>{group.company}</bdi>
      </h4>
      <p className="label mt-1.5">
        {ui.experience.roles(group.roles.length)} · {group.place}
      </p>
      <div className="mt-5 space-y-7">
        {group.roles.map((role) => (
          <div key={role.title} className="border-s border-rule ps-5">
            <h5 className="font-serif text-[1.2rem] font-[450] leading-tight">{role.title}</h5>
            <p className="label label-rose mt-1">{role.period}</p>
            <Bullets points={role.points} />
            <Stack tech={role.tech} />
          </div>
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  const { cv, ui } = useI18n();
  const [open, setOpen] = useState(false);
  const panel = useId();
  const earlier = cv.experience.filter((g) => g.earlier).length;

  return (
    <Section id="experience" num="02" title={ui.experience.title} kicker={ui.experience.kicker}>
      <CareerChart />

      <SubHead count={cv.experience.length}>{ui.experience.workHeading}</SubHead>
      <ol id={panel} className="tl mt-8">
        {cv.experience.map((g) => (
          <Item key={g.period + g.company} date={g.period} hidden={g.earlier && !open}>
            <Job group={g} />
          </Item>
        ))}
      </ol>

      <div className="mt-1 md:ms-[calc(var(--date-col)+2.25rem)]">
        <button
          type="button"
          className="btn btn-secondary"
          aria-expanded={open}
          aria-controls={panel}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? ui.experience.hide : ui.experience.earlier(earlier)}
          <Arrow dir="down" className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      <SubHead className="mt-20" count={cv.education.length}>
        {ui.experience.educationHeading}
      </SubHead>
      <ol className="tl mt-8">
        {cv.education.map((e) => (
          <Item key={e.degree} date={e.period}>
            <h4 className="t-h3">
              {e.degree}{" "}
              <em>
                <bdi>{e.school}</bdi>
              </em>
            </h4>
            <p className="label mt-1.5">{e.place}</p>
            <Bullets points={e.points} />
          </Item>
        ))}
      </ol>
    </Section>
  );
}
