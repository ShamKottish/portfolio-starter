// One IntersectionObserver for the whole site. An element is watched until it first
// reaches the viewport; then it gets `is-in` (CSS does the rest) and an optional callback
// (the stat counters use that), and is dropped. Nothing is ever animated twice.

const callbacks = new WeakMap();
let io;

function observer() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          el.classList.add("is-in");
          callbacks.get(el)?.(el);
          callbacks.delete(el);
          io.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
  }
  return io;
}

// Returns a cleanup function. Safe to call on the server (does nothing).
export function watch(el, onIn) {
  if (typeof window === "undefined" || !el) return undefined;

  // tells the inline fallback in layout.js that hydration worked
  window.__motionReady = true;

  if (!("IntersectionObserver" in window)) {
    el.classList.add("is-in");
    onIn?.(el);
    return undefined;
  }

  if (onIn) callbacks.set(el, onIn);
  observer().observe(el);
  return () => {
    io?.unobserve(el);
    callbacks.delete(el);
  };
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
