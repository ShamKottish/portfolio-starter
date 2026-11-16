import { notFound } from "next/navigation";
import { cv } from "@/data/cv";
import ProjectDetail from "@/components/ProjectDetail";

// A static site has to know every project page at build time.
export function generateStaticParams() {
  return cv.projects.map((p) => ({ slug: p.slug }));
}

// Anything that is not in cv.js gets the 404 page.
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = cv.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} · ${cv.name}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params; // params is a Promise in Next.js 15+
  if (!cv.projects.some((p) => p.slug === slug)) notFound();
  return <ProjectDetail slug={slug} />;
}
