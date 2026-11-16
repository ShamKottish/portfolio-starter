"use client";

import { watch } from "@/lib/reveal";

// Ref callback that registers an element with the shared observer (React 19 cleanup form).
const attach = (el) => (el ? watch(el) : undefined);

// Use on any element of your own: <div ref={useReveal()} data-reveal />
export function useReveal() {
  return attach;
}

// <Reveal as="p" delay={80}>…</Reveal>
//   delay  extra ms before it starts
//   i      list position; adds 40ms per step, capped at 10 steps (400ms total)
//   group  only toggles `is-in` on this element, so CSS can animate its children (chart bars)
export default function Reveal({ as: Tag = "div", delay = 0, i, group = false, style, children, ...rest }) {
  const vars = { ...style };
  if (delay) vars["--d"] = `${delay}ms`;
  if (i !== undefined) vars["--i"] = Math.min(i, 10);

  return (
    <Tag ref={attach} data-reveal={group ? "group" : ""} style={vars} {...rest}>
      {children}
    </Tag>
  );
}
