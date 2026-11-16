"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { cv } from "@/data/cv";
import { cvAr } from "@/data/cv.ar";
import { ui } from "@/data/ui";
import { applyLang, langStore } from "@/lib/prefs";

const Ctx = createContext(null);

export function I18nProvider({ children }) {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot,
  );

  // keep <html lang dir> in step (also covers the first load with a saved choice)
  useEffect(() => applyLang(lang), [lang]);

  const value = useMemo(
    () => ({
      lang,
      rtl: lang === "ar",
      cv: lang === "ar" ? cvAr : cv,
      ui: ui[lang],
      setLang: langStore.set,
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
