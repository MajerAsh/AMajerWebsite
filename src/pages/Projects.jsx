import { useRef } from "react";

import "../Projects.css";
import "../About.css";
import ProjectCard from "../components/ProjectCard.jsx";
import usePopInOnScroll from "../hooks/usePopInOnScroll";

const projects = [
  {
    title: "KeyPaw (In Development)",
    description:
      "KeyPaw is an interactive, full-stack puzzle app that simulates real-world lock mechanisms—including pin tumbler and rotary dial systems—using custom graphics and dynamic sprite alignment. Users can solve puzzles with secure authentication and real-time validation. Built solo with React (Vite), Node.js, Express, and PostgreSQL. Highlights include JWT auth, a reusable apiFetch client, fully seeded database, Postman-tested REST API, pixel-accurate UI rendering, and responsive layout logic. Currently developing animation and sound feedback systems.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
      "REST API",
      "CSS",
      "Vite",
      "Netlify",
      "Render",
      "Railway",
      "Supabase",
      "Postman",
    ],
    youtubeId: "-yhfembvhFA",
    href: "https://keypaw.netlify.app/",
    github: "https://github.com/MajerAsh/FEKeyMaster",
  },
  {
    title: "Myco Map",
    description:
      "Full-stack app for mushroom foragers to log, map, and share their finds. Features secure authentication, Multer data uploads, interactive Mapbox maps, and advanced search. Role-based marker visibility: public users see all finds (no usernames), logged-in users see usernames, and secret locations are protected. Built solo with React, Node.js, Express, PostgreSQL, and Mapbox. Highlights: RESTful API, robust validation, JWT auth, Multer file uploads, automated backend tests, and responsive, accessible UI.",
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
    youtubeId: "Oz8_jBsJ-SQ",
    href: "https://mycomap.netlify.app/",
    github: "https://github.com/MajerAsh/mycomap-server",
  },

  {
    title: "Page Pal Library App",
    description:
      "Page Pal is a mobile-first, full-stack library app with a 100% accessibility rating in Lighthouse. Features include secure authentication, book reservation timeline, responsive UI, and robust error handling. Sole developer responsible for design, implementation, and deployment.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT Auth",
      "CSS",
      "GitHub Pages",
    ],
    youtubeId: "VRnEz8XUdWI",
    href: "https://majerash.github.io/Page-Pal",
    github: "https://github.com/MajerAsh/Page-Pal",
  },
];

export default function Projects() {
  const projectsHeaderRef = useRef(null);
  usePopInOnScroll(projectsHeaderRef);
  return (
    <section className="container stack-lg">
      <header className="stack-sm">
        <h1
          ref={projectsHeaderRef}
          className="about-section-header teal-header pop-in"
        >
          Projects
        </h1>
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
