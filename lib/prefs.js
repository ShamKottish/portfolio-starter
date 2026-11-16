// Two tiny external stores (theme, language) for useSyncExternalStore.
// The server snapshot is always the default, so hydration never mismatches;
// the real value is picked up right after.

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
      current = value;
      try {
        localStorage.setItem(key, value);
      } catch {}
      toDom(value);
      listeners.forEach((fn) => fn());
    },
  };
}

// The inline script in layout.js has already put the right value on <html>.
export const themeStore = makeStore(
  "theme",
  "light",
  () => document.documentElement.dataset.theme,
  (value) => {
    const root = document.documentElement;
    root.classList.add("theme-fade");
    root.dataset.theme = value;
    setTimeout(() => root.classList.remove("theme-fade"), 350);
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
