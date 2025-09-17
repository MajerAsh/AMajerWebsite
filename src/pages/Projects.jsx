import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "MycoMap",
    description:
      "MycoMap is a full-stack web app that lets foragers log and share mushroom finds on an interactive map, balancing community knowledge-sharing with habitat protection through privacy controls and gamified badges.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Postgres",
      "Mapbox",
      "JWT Auth",
      "Multer",
    ],
    image: "/assets/MycoMap.png",
    href: "#",
  },
  
  {
    title: "Page Pal Library App",
    description:
      "Page Pal is a full-stack library app built with React, Node.js, Express, and PostgreSQL. Features include secure authentication, book reservation timeline, responsive UI, and robust error handling. Sole developer responsible for design, implementation, and deployment.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
      "CSS",
      "GitHub Pages",
    ],
    image: "/assets/PagePal.png",
    href: "https://majerash.github.io/PagePal",
  },

  {
    title: "Whack-A-Mole Game",
    description:
      "A fast-paced browser game where players race against the clock to whack as many moles as possible across multiple levels. Features custom SVG graphics, playful sound effects, animated UI, and persistent high scores. Built solo with React, Context API, and custom hooks for state and timing logic.",
    tags: [
      "React",
      "JavaScript",
      "Context API",
      "Custom Hooks",
      "CSS",
      "Vite",
      "GitHub Pages",
      "Procreate",
    ],
    image: "/assets/whackAmole.png",
    href: "https://majerash.github.io/whackAmole/",
  },
];

export default function Projects() {
  return (
    <section className="container stack-lg">
      <header className="stack-sm">
        <h2 className="h2">Projects</h2>
        <p className="muted">A curated selection. Quality over quantity.</p>
      </header>
      <div className="grid-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
