import { useRef } from "react";
import "../Timeline.css";

import usePopInOnScroll from "../hooks/usePopInOnScroll";

const timelineData = [
  {
    date: "November 2025",
    title: "KeyPaw (Project)",
    description:
      "Browser puzzle game. React, Vite, Netlify frontend; Node/Express backend, PostgreSQL, JWT, puzzles & auth.",
  },
  {
    date: "September 2025",
    title: "Myco Map (Project)",
    description:
      "Full-stack app for mushroom foragers. React, Node, Express, PostgreSQL, Mapbox. Deployed with Netlify, Supabase and Render.",
  },
  {
    date: "August 2025",
    title: "Page Pal (Project)",
    description:
      "Library reservation app. React, Node, Express, PostgreSQL, JWT, CSS.",
  },
  {
    date: "August 2025",
    title: "Fullstack Academy",
    description:
      "Software Engineering Immersive Certificate, Emory University.",
  },
  {
    date: "2024 - 2025",
    title: "Benefits Outreach Coordinator",
    description:
      "Atlanta Community Food Bank. Guided clients through technical systems.",
  },
  {
    date: "2015 - 2023",
    title: "WIC Nutritionist",
    description:
      "WIC Program - various locations. Nutritional counseling, data entry, medical formula, care plans, software navigation.",
  },
  {
    date: "2013",
    title: "St Catherine University",
    description: "Bachelor of Science in Dietetics.",
  },
];

export default function Timeline() {
  const headerRef = useRef(null);
  usePopInOnScroll(headerRef);
  return (
    <section className="timeline-section">
      <div className="about-header-row about-header-row--left timeline-header">
        <h3 ref={headerRef} className="about-section-header teal-header pop-in">
          Timeline
        </h3>
      </div>
      <div className="timeline timeline--sticky">
        {timelineData.map((event, idx) => (
          <div className="timeline-event timeline-event--sticky" key={idx}>
            {/* Removed timeline bullet point */}
            <div className="timeline-content">
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-title">{event.title}</div>
              <div className="timeline-desc">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
