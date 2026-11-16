"use client";

import { useState } from "react";
import { useI18n } from "./I18n";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

const FILTERS = ["all", "product", "startup", "research"];

export default function Projects() {
  const { cv, ui } = useI18n();
  const [filter, setFilter] = useState("all");
  const shown = cv.projects.filter((p) => filter === "all" || p.group === filter);

  return (
    <Section id="projects" num="03" title={ui.projects.title} kicker={ui.projects.kicker}>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label={ui.projects.title}>
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className="chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {ui.projects.filters[f]}
            </button>
          ))}
        </div>
        <p className="label" aria-live="polite">
          {ui.projects.entries(shown.length)}
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} index={cv.projects.indexOf(p)} />
        ))}
      </div>
    </Section>
  );
}
