"use client";

import { withBase } from "@/lib/withBase";
import { useI18n } from "./I18n";
import Arrow from "./Arrow";

export default function Hero() {
  const { cv, ui, rtl } = useI18n();
  const [pre, accent, post] = cv.headline;

  return (
    <section className="wrap pt-12 pb-14 sm:pt-16 lg:pt-20" aria-label={cv.name}>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="label settle flex items-center gap-3">
            <span className="h-px w-8 bg-ink-3" />
            {ui.hero.kicker}
          </p>

          <h1 className="t-display settle mt-7" style={{ "--d": "0.08s" }}>
            {pre}
            <span className="accent relative inline-block">
              {accent}
              {/* a single pen stroke under the accent word */}
              <svg
                className="pen absolute inset-x-0 -bottom-1 h-3 w-full text-rose opacity-70"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8c22-5 45-6 70-3s52 4 80 0c15-2 30-3 46-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {post}
          </h1>

          <p className="settle mt-8 max-w-[34rem] text-lg text-ink-2" style={{ "--d": "0.2s" }}>
            {cv.tagline}
          </p>

          <div className="settle mt-9 flex flex-wrap items-center gap-x-8 gap-y-5" style={{ "--d": "0.3s" }}>
            <a href={withBase(`/${cv.cvFile}`)} download className="btn btn-primary">
              {ui.hero.download}
              <Arrow dir="down" />
            </a>
            <a href="#contact" className="link text-[15px] font-medium">
              {ui.hero.touch}
            </a>
          </div>
        </div>

        <figure className="settle relative mx-auto w-full max-w-[22rem] lg:max-w-none" style={{ "--d": "0.25s" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border border-sage/60 bg-sage-wash">
            <div className="absolute inset-3 rounded-t-[999px] border border-sage/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pt-6">
              <span
                className="font-serif text-[5.5rem] font-light italic leading-none text-sage sm:text-[6.5rem]"
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
                dir="auto"
              >
                {cv.initials}
              </span>
              <span lang={rtl ? "en" : "ar"} dir={rtl ? "ltr" : "rtl"} className="font-serif text-2xl text-sage/80">
                {cv.nativeName}
              </span>
            </div>
          </div>

          <div
            className="label absolute -start-3 bottom-14 -rotate-6 border border-rose bg-paper px-3 py-2 text-center !leading-4 !text-rose sm:-start-6"
            aria-hidden="true"
          >
            {cv.stamp[0]}
            <br />
            {cv.stamp[1]}
          </div>

          <figcaption className="label mt-3 flex justify-between gap-4">
            <span>{ui.hero.fig}</span>
            <span>{ui.hero.place}</span>
          </figcaption>
        </figure>
      </div>

      <dl className="mt-16 grid border-y border-ink md:grid-cols-3">
        {cv.facts.map((f, i) => (
          <div
            key={f.label}
            className={`py-5 md:px-6 md:first:ps-0 md:last:pe-0 ${i > 0 ? "border-t border-rule md:border-s md:border-t-0" : ""}`}
          >
            <dt className="label">{f.label}</dt>
            <dd className="mt-1.5 text-[15px] leading-6">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
