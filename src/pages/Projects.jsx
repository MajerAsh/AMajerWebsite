import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Project One",
    description: "One-liner about what it does and the impact.",
    tags: ["React", "Node", "Postgres"],
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Project Two",
    description: "Crisp summary focused on outcome.",
    tags: ["Next.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    href: "#",
  },
  {
    title: "Project Three",
    description: "Why it matters and what you built.",
    tags: ["Python", "FastAPI", "Docker"],
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    href: "#",
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
