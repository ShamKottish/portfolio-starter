"use client";

import { useState } from "react";
import { useI18n } from "./I18n";
import Section from "./Section";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

export default function Contact() {
  const { cv, ui } = useI18n();
  const [copied, setCopied] = useState(false);
  const [pre, accent, post] = ui.contact.heading;
  const c = cv.contact;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${c.email}`;
    }
  };

  return (
    <Section id="contact" num="06" title={ui.contact.title} kicker={ui.contact.kicker}>
      <Reveal as="p" delay={80} className="t-h1 max-w-[16ch]">
        {pre}
        <span className="accent">{accent}</span>
        {post}
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
        <a href={`mailto:${c.email}`} className="link font-serif text-[clamp(1.05rem,0.55rem+2.7vw,2rem)] [overflow-wrap:anywhere]" dir="ltr">
          {c.email}
        </a>
        <button type="button" className="chip" onClick={copy}>
          {copied ? ui.contact.copied : ui.contact.copy}
        </button>
        <span className="sr-only" role="status">
          {copied ? ui.contact.copied : ""}
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {c.primary.map((l) => (
          <a key={l.label} href={l.href} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            {l.label}
            <Arrow dir="up" />
          </a>
        ))}
        <a href={`tel:${c.phoneHref}`} className="btn-ghost sm:ms-2">
          {ui.contact.call} <span className="num">{c.phone}</span>
        </a>
      </div>
      <p className="label mt-5">{ui.contact.location}</p>

      <div className="mt-16">
        <p className="label label-rose mb-1">{ui.contact.elsewhere}</p>
        <ul className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 sm:gap-x-10">
          {c.other.map((l) => (
            <li key={l.label} className="border-b border-rule">
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-baseline justify-between gap-4 py-3.5">
                <span className="shrink-0 text-[15px] font-medium group-hover:text-rose">{l.label}</span>
                <span className="label min-w-0 !normal-case truncate" dir="ltr">
                  {l.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
