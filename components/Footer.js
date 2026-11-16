"use client";

import { useI18n } from "./I18n";

export default function Footer() {
  const { ui } = useI18n();
  return (
    <footer className="border-t border-ink">
      <div className="wrap flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:justify-between">
        <span className="font-serif text-xl italic text-rose">{ui.footer.sign}</span>
        <p className="label">
          © {new Date().getFullYear()} · {ui.footer.colophon}
        </p>
      </div>
    </footer>
  );
}
