"use client";

import { useState } from "react";
import { useI18n } from "./I18n";

// Not the research engine: just a few sliders that show why size, line length and
// line height matter for Arabic. The presets are hand-picked, not measured.
const PRESETS = {
  phone: { size: 17, measure: 30, leading: 1.9 },
  tablet: { size: 20, measure: 46, leading: 1.9 },
  desktop: { size: 22, measure: 62, leading: 1.85 },
  cramped: { size: 13, measure: 88, leading: 1.25 },
};

function Slider({ id, label, value, min, max, step, unit, onChange }) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="label">
          {label}
        </label>
        <output htmlFor={id} className="label !text-ink">
          <span className="num">
            {value}
            {unit}
          </span>
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default function KhattDemo() {
  const { ui } = useI18n();
  const k = ui.khatt;
  const [v, setV] = useState(PRESETS.tablet);
  const [serif, setSerif] = useState(true);
  const set = (key) => (val) => setV((cur) => ({ ...cur, [key]: val }));

  return (
    <section className="section" aria-labelledby="khatt-demo">
      <div className="wrap">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <h2 id="khatt-demo" className="t-h2">
            <span className="accent">{k.title}</span>
          </h2>
          <p className="label max-w-[44ch] sm:text-end">{k.kicker}</p>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)]">
          <div className="space-y-6">
            <div>
              <p className="label mb-3">{k.presets}</p>
              <div className="flex flex-wrap gap-2">
                {Object.keys(PRESETS).map((p) => (
                  <button
                    key={p}
                    type="button"
                    className="chip"
                    aria-pressed={JSON.stringify(v) === JSON.stringify(PRESETS[p])}
                    onClick={() => setV(PRESETS[p])}
                  >
                    {k[p]}
                  </button>
                ))}
              </div>
            </div>
            <Slider id="k-size" label={k.size} value={v.size} min={13} max={30} step={1} unit="px" onChange={set("size")} />
            <Slider id="k-measure" label={k.measure} value={v.measure} min={22} max={90} step={1} unit="ch" onChange={set("measure")} />
            <Slider id="k-leading" label={k.leading} value={v.leading} min={1.2} max={2.4} step={0.05} unit="" onChange={set("leading")} />
            <div className="flex gap-2">
              <button type="button" className="chip" aria-pressed={serif} onClick={() => setSerif(true)}>
                Naskh
              </button>
              <button type="button" className="chip" aria-pressed={!serif} onClick={() => setSerif(false)}>
                Sans
              </button>
            </div>
          </div>

          <div className="hatch border border-rule p-4 sm:p-8">
            <div dir="rtl" lang="ar" className="bg-card border border-rule p-5 sm:p-8">
              <p
                className={serif ? "font-serif" : "font-sans"}
                style={{
                  fontSize: `${v.size}px`,
                  lineHeight: v.leading,
                  maxWidth: `${v.measure}ch`,
                  transition: "font-size .2s, line-height .2s, max-width .2s",
                }}
              >
                {k.sample}
              </p>
            </div>
            {k.caption && (
              <p className="label mt-4 !normal-case" dir="ltr">
                {k.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
