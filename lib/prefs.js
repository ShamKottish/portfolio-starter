// Two tiny external stores (theme, language) for useSyncExternalStore.
// The server snapshot is always the default, so hydration never mismatches;
// the real value is picked up right after.

import { flushSync } from "react-dom";

// Soft cross-fade for theme / language changes. Falls back to an instant change when the
// View Transitions API is missing or the visitor prefers reduced motion.
function transition(update) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !document.startViewTransition) {
    update();
    return;
  }
  document.startViewTransition(() => {
    flushSync(update); // React must have painted the new state before the browser snapshots it
  });
}

function makeStore(key, fallback, fromDom, toDom) {
  const listeners = new Set();
  let current;

  return {
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    getSnapshot() {
      if (current === undefined) current = fromDom() || fallback;
      return current;
    },
    getServerSnapshot: () => fallback,
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch {}
      transition(() => {
        current = value;
        toDom(value);
        listeners.forEach((fn) => fn());
      });
    },
  };
}

// The inline script in layout.js has already put the right value on <html>.
export const themeStore = makeStore(
  "theme",
  "light",
  () => document.documentElement.dataset.theme,
  (value) => {
    document.documentElement.dataset.theme = value;
  },
);

export function applyLang(lang) {
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
}

export const langStore = makeStore(
  "lang",
  "en",
  () => {
    try {
      const saved = localStorage.getItem("lang");
      return saved === "ar" || saved === "en" ? saved : null;
    } catch {
      return null;
    }
  },
  applyLang,
);
