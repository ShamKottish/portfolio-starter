"use client";

import { useRef, useState } from "react";
import { useI18n } from "./I18n";
import Section, { SubHead } from "./Section";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"];
const TABS = ["awards", "patents", "publications", "talks", "certifications", "community"];

// ── panels ──────────────────────────────────────────────────
function Awards() {
  const { cv } = useI18n();
  return (
    <ol className="border-t border-rule">
      {cv.awards.map((a, i) => (
        <li key={a.title} className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-rule py-5">
          <span className="font-serif text-lg italic text-rose" style={{ fontVariationSettings: '"WONK" 1' }}>
            {ROMAN[i]}.
          </span>
          <div>
            <h4 className="font-serif text-[1.2rem] font-[450] leading-snug">{a.title}</h4>
            <p className="t-small mt-1">
              <bdi>{a.issuer}</bdi> · {a.detail}
            </p>
          </div>
          <span className="label num">{a.year}</span>
        </li>
      ))}
    </ol>
  );
}

function Patents() {
  const { cv } = useI18n();
  return (
    <ul className="border-t border-rule">
      {cv.patents.map((p) => {
        const granted = p.state === "granted";
        return (
          <li key={p.number} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-rule py-6">
            <div className="max-w-[34rem]">
              <h4 className="t-h3 !text-[1.3rem]">{p.title}</h4>
              <p className="label mt-2">
                <bdi>{p.number}</bdi>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="label">{p.date}</span>
              <span className={`chip ${granted ? "chip-sage" : "chip-rose"}`}>
                {p.status}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Publications() {
  const { cv, ui } = useI18n();
  return (
    <>
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <p className="label">{cv.publicationsNote}</p>
        <a href={cv.publicationsLink.href} className="link label !text-ink">
          {ui.recognition.fullList}: <bdi>{cv.publicationsLink.label}</bdi>
        </a>
      </div>
      <ol className="mt-3 border-t border-rule">
        {cv.publications.map((p, i) => (
          <li key={p.title} className="grid grid-cols-[2.5rem_1fr_auto] gap-x-4 border-b border-rule py-5">
            <span className="label pt-1.5 num">{String(i + 1).padStart(2, "0")}</span>
            <div dir="auto" lang="en">
              <h4 className="font-serif text-[1.15rem] font-[450] leading-snug">{p.title}</h4>
              <p className="t-small mt-1">{p.authors}</p>
              <p className="t-small italic">{p.venue}</p>
            </div>
            <span className="label num">{p.year}</span>
          </li>
        ))}
      </ol>
    </>
  );
}

function Talks() {
  const { cv, ui } = useI18n();
  const type = (t) => ui.recognition.types[t] || t;
  return (
    <>
      <SubHead count={cv.talksNote}>{ui.recognition.speaking}</SubHead>
      <ul className="mt-2">
        {cv.talks.map((t) => (
          <li key={t.title} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-rule py-4 sm:grid-cols-[6.5rem_1fr_auto]">
            <span className="label label-rose order-1">{type(t.type)}</span>
            <div dir="auto" lang="en" className="order-3 col-span-2 sm:order-2 sm:col-span-1">
              <h4 className="font-serif text-[1.1rem] font-[450] leading-snug">{t.title}</h4>
              <p className="t-small">
                {t.event} · {t.place}
              </p>
            </div>
            <span className="label num order-2 sm:order-3">{t.year}</span>
          </li>
        ))}
      </ul>

      <SubHead className="mt-12" count={cv.media.length}>
        {ui.recognition.media}
      </SubHead>
      <ul className="mt-2">
        {cv.media.map((m) => (
          <li key={m.title} className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1.5 border-b border-rule py-4 sm:grid-cols-[6.5rem_1fr_auto]">
            <span className="label label-rose order-1">{type(m.type)}</span>
            <div dir="auto" lang="en" className="order-3 col-span-2 sm:order-2 sm:col-span-1">
              <h4 className="font-serif text-[1.1rem] font-[450] leading-snug">
                {m.href ? (
                  <a href={m.href} className="link">
                    {m.title}
                  </a>
                ) : (
                  m.title
                )}
              </h4>
              <p className="t-small">{m.where}</p>
            </div>
            <span className="label num order-2 sm:order-3">{m.year}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function Certifications() {
  const { cv, ui } = useI18n();
  const [filter, setFilter] = useState("all");
  const counts = cv.certifications.reduce((acc, c) => ({ ...acc, [c.status]: (acc[c.status] || 0) + 1 }), {});
  const list = cv.certifications.filter((c) => filter === "all" || c.status === filter);
  const chip = { active: "chip-sage", lifetime: "chip-sage", progress: "chip-rose", expired: "" };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label={ui.recognition.tabs.certifications}>
          {["all", "active", "lifetime", "expired", "progress"].map((f) => (
            <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === "all" ? ui.projects.filters.all : ui.recognition.status[f]}
              <span className="num ms-1.5 opacity-60">{f === "all" ? cv.certifications.length : counts[f] || 0}</span>
            </button>
          ))}
        </div>
        <p className="label">{ui.recognition.showing(19)}</p>
      </div>

      <ul className="mt-4 grid gap-x-10 border-t border-rule md:grid-cols-2">
        {list.map((c) => (
          <li key={c.name} className="border-b border-rule py-4" dir="auto" lang="en">
            <h4 className={`font-serif text-[1.05rem] font-[450] leading-snug ${c.status === "expired" ? "text-ink-2" : ""}`}>
              {c.name}
            </h4>
            <p className="t-small mt-0.5">{c.issuer}</p>
            <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
              {c.status !== "progress" && <span className="label num">{c.year}</span>}
              <span className={`chip !py-0 !text-[12px] ${chip[c.status]}`}>
                {c.status === "expired" ? ui.recognition.expired(c.expired) : ui.recognition.status[c.status]}
              </span>
              {c.id && <span className="label !text-[10.5px] normal-case">{c.id}</span>}
              {c.note && <span className="label !text-[10.5px]">{c.note}</span>}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

function Community() {
  const { cv } = useI18n();
  return (
    <ul className="border-t border-rule">
      {cv.community.map((c) => (
        <li key={c.role + c.org} className="grid gap-x-8 gap-y-1 border-b border-rule py-6 md:grid-cols-[13rem_1fr]">
          <p className="label pt-1.5">
            <span className="num">{c.period}</span>
          </p>
          <div>
            <h4 className="t-h3 !text-[1.25rem]">{c.role}</h4>
            <p className="label mt-1">
              <bdi>{c.org}</bdi>
            </p>
            <p className="t-small mt-2 max-w-[56ch] !text-[15px]">{c.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const PANELS = {
  awards: Awards,
  patents: Patents,
  publications: Publications,
  talks: Talks,
  certifications: Certifications,
  community: Community,
};

export default function Recognition() {
  const { cv, ui } = useI18n();
  const [tab, setTab] = useState("awards");
  const refs = useRef({});

  const counts = {
    awards: cv.awards.length,
    patents: cv.patents.length,
    publications: cv.publications.length,
    talks: cv.talks.length + cv.media.length,
    certifications: cv.certifications.length,
    community: cv.community.length,
  };

  // arrow keys / Home / End move between tabs, as in the ARIA tabs pattern
  const onKeyDown = (e) => {
    const i = TABS.indexOf(tab);
    const step = document.documentElement.dir === "rtl" ? -1 : 1;
    let next = null;
    if (e.key === "ArrowRight") next = TABS[(i + step + TABS.length) % TABS.length];
    if (e.key === "ArrowLeft") next = TABS[(i - step + TABS.length) % TABS.length];
    if (e.key === "Home") next = TABS[0];
    if (e.key === "End") next = TABS[TABS.length - 1];
    if (next) {
      e.preventDefault();
      setTab(next);
      refs.current[next]?.focus();
    }
  };

  return (
    <Section id="recognition" num="05" title={ui.recognition.title} kicker={ui.recognition.kicker}>
      <div
        role="tablist"
        aria-label={ui.recognition.title}
        className="-mx-5 mb-8 flex gap-6 overflow-x-auto border-b border-rule px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        onKeyDown={onKeyDown}
      >
        {TABS.map((id) => {
          const on = tab === id;
          return (
            <button
              key={id}
              ref={(el) => (refs.current[id] = el)}
              role="tab"
              id={`tab-${id}`}
              aria-selected={on}
              aria-controls={`panel-${id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setTab(id)}
              className={`relative whitespace-nowrap pb-3 text-[15px] transition-colors hover:text-rose ${on ? "text-ink" : "text-ink-2"}`}
            >
              {ui.recognition.tabs[id]}
              <sup className="label label-rose ms-1 text-[9px] tracking-normal">
                <span className="num">{counts[id]}</span>
              </sup>
              <span className={`absolute inset-x-0 -bottom-px h-px bg-rose transition-transform duration-200 ${on ? "scale-x-100" : "scale-x-0"}`} />
            </button>
          );
        })}
      </div>

      {TABS.map((id) => {
        const Panel = PANELS[id];
        return (
          <div key={id} role="tabpanel" id={`panel-${id}`} aria-labelledby={`tab-${id}`} hidden={tab !== id} tabIndex={0}>
            <Panel />
          </div>
        );
      })}
    </Section>
  );
}
