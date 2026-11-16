"use client";

import Link from "next/link";
import { useI18n } from "./I18n";
import Arrow from "./Arrow";

export default function NotFoundView() {
  const { ui } = useI18n();
  return (
    <section className="wrap py-28 sm:py-36">
      <p className="label label-rose">404</p>
      <h1 className="t-h1 mt-5 max-w-[14ch]">{ui.notFound.title}</h1>
      <p className="mt-6 max-w-[44ch] text-ink-2">{ui.notFound.body}</p>
      <Link href="/" className="btn btn-secondary mt-10">
        <Arrow className="rotate-180" />
        {ui.notFound.home}
      </Link>
    </section>
  );
}
