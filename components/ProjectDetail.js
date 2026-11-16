"use client";

import Link from "next/link";
import { useI18n } from "./I18n";
import ProjectArt from "./ProjectArt";
import KhattDemo from "./KhattDemo";
import Arrow from "./Arrow";
import { splitName } from "./ProjectCard";

const ROMAN = ["i", "ii", "iii"];

export default function ProjectDetail({ slug }) {
  const { cv, ui } = useI18n();
  const i = cv.projects.findIndex((p) => p.slug === slug);
  const project = cv.projects[i];
  if (!project) return null;

  const [head, accent] = splitName(project);
  const no = String(i + 1).padStart(2, "0");
  const prev = cv.projects[(i - 1 + cv.projects.length) % cv.projects.length];
  const next = cv.projects[(i + 1) % cv.projects.length];
  const p = ui.project;

  const meta = [
    [p.org, project.org],
    [p.period, project.period],
    [p.role, project.role],
    [p.team, project.team],
  ];

  const story = [
    [p.problem, project.problem],
    [p.action, project.action],
    [p.result, project.result],
  ];

  return (
    <article>
      <header className="wrap pt-10 pb-14 sm:pt-14">
        <Link href="/#projects" className="btn-ghost label !text-ink-2 hover:!text-rose">
          <Arrow className="rotate-180" />
          {p.back}
        </Link>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <p className="label label-rose settle">
              {ui.projects.no} <span className="num">{no}</span> · {project.kind} · <span className="num">{project.years}</span>
            </p>
            <h1 className="t-h1 settle mt-5" style={{ "--d": "0.06s" }}>
              {head}
              {accent && <span className="accent">{accent}</span>}
            </h1>
            <p className="t-lead settle mt-6 max-w-[30ch] !text-[clamp(1.25rem,1rem+1vw,1.6rem)] text-ink-2" style={{ "--d": "0.14s" }}>
              {project.summary}
            </p>
          </div>
          <ProjectArt name={project.art} className="settle aspect-[16/10] border border-rule" />
        </div>

        <dl className="mt-14 grid gap-px border-y border-ink bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label} className="bg-paper py-5 sm:pe-5 lg:px-5 lg:first:ps-0">
              <dt className="label">{label}</dt>
              <dd className="mt-1.5 text-[15px] leading-6">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="section" aria-labelledby="results">
        <div className="wrap">
          <h2 id="results" className="label label-rose">
            {p.results}
          </h2>
          <dl className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end border-t border-ink pt-4">
                <dt className="mt-3 max-w-[18ch] text-[15px] leading-[21px] text-ink-2">{m.label}</dt>
                <dd className="t-numeral !text-[clamp(2.4rem,1.6rem+2.4vw,3.5rem)] !leading-none">
                  <span className="num">{m.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="story">
        <div className="wrap">
          <h2 id="story" className="sr-only">
            {p.story}
          </h2>
          <ol>
            {story.map(([label, text], n) => (
              <li key={label} className="grid gap-3 border-b border-rule py-9 first:pt-0 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-12">
                <div className="flex items-baseline gap-4 md:block">
                  <span className="t-numeral block !text-[2.25rem]">{ROMAN[n]}.</span>
                  <p className="label md:mt-3">{label}</p>
                </div>
                <p className="t-lead max-w-[34ch] !text-[clamp(1.4rem,1.05rem+1.3vw,1.9rem)]">{text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-2" dir="ltr">
            <span className="label me-2">{p.stack}</span>
            {project.tech.map((t) => (
              <span key={t} className="chip chip-rose">
                {t}
              </span>
            ))}
          </div>

          {project.link && (
            <p className="mt-6">
              <a href={project.link.href} className="link" target="_blank" rel="noopener noreferrer">
                {p.repo}: <bdi>{project.link.label}</bdi>
              </a>
            </p>
          )}
        </div>
      </section>

      {project.demo === "khatt" && <KhattDemo />}

      <nav className="section" aria-label="Case studies">
        <div className="wrap grid gap-6 sm:grid-cols-2">
          {[
            [prev, p.prev, true],
            [next, p.next, false],
          ].map(([target, label, back]) => (
            <Link
              key={target.slug}
              href={`/projects/${target.slug}/`}
              className={`card gap-2 p-6 ${back ? "" : "sm:text-end"}`}
            >
              <span className={`label flex items-center gap-2 ${back ? "" : "sm:justify-end"}`}>
                {back && <Arrow className="rotate-180" />}
                {label}
                {!back && <Arrow />}
              </span>
              <span className="t-h3 !text-[1.4rem]">{target.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
