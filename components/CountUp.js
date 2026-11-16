"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "./I18n";
import { prefersReducedMotion, watch } from "@/lib/reveal";

// "1,400+" -> prefix "", digits "1,400", suffix "+"   ·   "9M+" -> "", "9", "M+"
const PARSE = /^(\D*?)(\d[\d,]*)(.*)$/;

// The markup always carries the final value (server HTML, no-JS, reduced motion, screen
// readers). On the client the visible number is reset to 0 and counted up the first time
// it scrolls into view.
export default function CountUp({ value, duration = 1200 }) {
  const { lang } = useI18n();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const match = PARSE.exec(value);
    if (!el || !match) return undefined;
    if (prefersReducedMotion()) return undefined;
    if (!document.documentElement.classList.contains("js-motion")) return undefined;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    // same Latin digits the rest of the page uses, with the locale's grouping
    const locale = lang === "ar" ? "ar-u-nu-latn" : "en";
    const format = (n) => prefix + n.toLocaleString(locale) + suffix;

    el.textContent = format(0);
    let frame = 0;

    const stop = watch(el, () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out
        el.textContent = t < 1 ? format(Math.round(target * eased)) : value;
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });

    return () => {
      stop?.();
      cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value, lang, duration]);

  return (
    <span aria-live="off">
      <span key={value} ref={ref} className="num tabular-nums" aria-hidden="true">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
