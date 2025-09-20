import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Myco Map",
    description:
      "Full-stack app for mushroom foragers to log, map, and share their finds. Features secure authentication, image uploads, interactive Mapbox maps, and advanced search. Role-based marker visibility: public users see all finds (no usernames), logged-in users see usernames, and secret locations are protected. Built solo with React, Node.js, Express, PostgreSQL, and Mapbox. Highlights: RESTful API, robust validation, JWT auth, Multer file uploads, automated backend tests, and responsive, accessible UI.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Mapbox",
      "JWT Auth",
      "Multer",
      "CSS",
      "Vite",
      "Automated Testing",
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
        <h2 className="h2 teal-header">Projects</h2>
        <p className="muted"></p>
      </header>
      <div className="projects-vertical-list">
        {projects.map((p, i) => (
          <div
            className={`project-outer ${
              i % 2 === 0 ? "project-outer--left" : "project-outer--right"
            }`}
            key={p.title}
          >
            <ProjectCard {...p} imageAlign={i % 2 === 0 ? "left" : "right"} />
          </div>
        ))}
      </div>
    </section>
  );
}
