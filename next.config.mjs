// GitHub Pages serves your site from https://<username>.github.io/<repo-name>/
// so every link needs the "/<repo-name>" prefix. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH for you. Locally it is empty, so the site runs at "/".
import path from "node:path";
import { fileURLToPath } from "node:url";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // build a static site into the "out" folder
  basePath,
  trailingSlash: true, // /projects/x -> /projects/x/index.html (works on GitHub Pages)
  images: {
    unoptimized: true, // GitHub Pages has no server to optimize images
  },
  turbopack: {
    // pin the project root so a stray lockfile in a parent folder is ignored
    root: path.dirname(fileURLToPath(import.meta.url)),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
