"use client";

import { useSyncExternalStore } from "react";
import { themeStore } from "@/lib/prefs";
import { useI18n } from "./I18n";

const pill =
  "label inline-flex h-8 items-center gap-2 rounded-full border border-rule-strong px-3 text-ink-3 transition-colors hover:border-ink hover:text-ink";

export function ThemeToggle() {
  const { ui } = useI18n();
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );
  const dark = theme === "dark";

  return (
    <button
      type="button"
      className={pill}
      aria-label={ui.theme.label}
      aria-pressed={dark}
      onClick={() => themeStore.set(dark ? "light" : "dark")}
    >
      <span className="size-1.5 rounded-full bg-rose" aria-hidden="true" />
      <span className="text-ink sm:hidden" aria-hidden="true">
        {dark ? ui.theme.dark : ui.theme.light}
      </span>
      <span className="hidden gap-1.5 sm:flex" aria-hidden="true">
        <span className={dark ? "" : "text-ink"}>{ui.theme.light}</span>/
        <span className={dark ? "text-ink" : ""}>{ui.theme.dark}</span>
      </span>
    </button>
  );
}

export function LangToggle() {
  const { lang, setLang, ui } = useI18n();
  const [en, ar] = ui.lang.short;

  return (
    <button
      type="button"
      className={pill}
      aria-label={ui.lang.label}
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
    >
      <span className="flex gap-1.5" aria-hidden="true">
        <span lang="en" dir="ltr" className={lang === "en" ? "text-ink" : ""}>
          {en}
        </span>
        /
        <span lang="ar" className={`font-sans normal-case tracking-normal ${lang === "ar" ? "text-ink" : ""}`}>
          {ar}
        </span>
      </span>
    </button>
  );
}
