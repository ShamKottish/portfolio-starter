"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "./I18n";
import { LangToggle, ThemeToggle } from "./Toggles";

const SECTIONS = ["about", "experience", "projects", "skills", "recognition", "contact"];

export function Monogram({ letter }) {
  return (
    <span
      className="relative grid size-9 shrink-0 place-items-center rounded-full border border-rose font-serif text-lg italic text-rose"
      aria-hidden="true"
    >
      <span className="absolute inset-[3px] rounded-full border border-dashed border-rose/40" />
      <span className="relative -translate-y-px">{letter}</span>
    </span>
  );
}

export default function Navbar() {
  const { ui, cv, lang } = useI18n();
  const pathname = usePathname();
  const onHome = pathname === "/" || pathname === "";
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // which section is under the reading line
  useEffect(() => {
    if (!onHome) return;
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.isIntersecting);
        const current = SECTIONS.find((id) => seen.get(id));
        setActive(current || "");
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [onHome, lang]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const letter = lang === "ar" ? "ي" : "Y";

  return (
    <>
    <a
      href="#main"
      className="label fixed start-4 top-3 z-50 -translate-y-20 rounded-sm bg-ink px-3 py-2 !text-paper focus:translate-y-0"
    >
      {ui.skip}
    </a>
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram letter={letter} />
          <span className="hidden font-serif text-[1.0625rem] font-[450] sm:inline">{cv.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {SECTIONS.map((id, i) => {
            const isActive = active === id;
            return (
              <Link
                key={id}
                href={`/#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group relative py-1 text-[15px] transition-colors hover:text-rose ${isActive ? "text-ink" : "text-ink-2"}`}
              >
                <sup className="label label-rose me-1 align-super text-[9px] tracking-normal">
                  {String(i + 1).padStart(2, "0")}
                </sup>
                {ui.nav[id]}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-rose transition-transform duration-200 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"}`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="label inline-flex h-8 items-center rounded-full border border-ink px-3 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? ui.nav.close : ui.nav.menu}
          </button>
        </div>
      </div>

      <div className="progress pointer-events-none absolute inset-x-0 -bottom-px h-px bg-rose" aria-hidden="true" />

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 overflow-y-auto border-t border-rule bg-paper lg:hidden"
        >
          <nav aria-label="Mobile" className="wrap flex flex-col py-6">
            {SECTIONS.map((id, i) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 border-b border-rule py-5"
              >
                <span className="t-numeral !text-[1.5rem]">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h2">{ui.nav[id]}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
    </>
  );
}
