"use client";

import Link from "next/link";
import { useI18n } from "./I18n";
import ProjectArt from "./ProjectArt";
import Arrow from "./Arrow";

// "Mizan Design System" -> ["Mizan Design ", "System"]; falls back to the whole name
export function splitName(project) {
  const { name, accent } = project;
  if (accent && name.endsWith(accent)) return [name.slice(0, name.length - accent.length), accent];
  return [name, ""];
}

export default function ProjectCard({ project, index }) {
  const { ui } = useI18n();
  const [head, accent] = splitName(project);
  const no = String(index + 1).padStart(2, "0");

  return (
    <article className="card">
      <ProjectArt name={project.art} className="aspect-[16/9] border-b border-rule" />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="label">
          {ui.projects.no} <span className="num">{no}</span> · {project.kind} · <span className="num">{project.years}</span>
        </p>
        <h3 className="t-h3 mt-3 !text-[1.5rem]">
          <Link
            href={`/projects/${project.slug}/`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {head}
            {accent && <span className="accent">{accent}</span>}
          </Link>{" "}
          <span className="go" aria-hidden="true">
            <Arrow className="inline" />
          </span>
        </h3>
        <p className="t-small mt-2 flex-1">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" dir="ltr">
          {project.tech.slice(0, 3).map((t) => (
            <li key={t} className="chip !text-[12.5px]">
              {t}
            </li>
          ))}
          {project.tech.length > 3 && <li className="chip chip-sage !text-[12.5px]">+{project.tech.length - 3}</li>}
        </ul>
        <p className="btn-ghost mt-5 !text-[14px]" aria-hidden="true">
          {ui.projects.case}
          <Arrow />
        </p>
      </div>
    </article>
  );
}
