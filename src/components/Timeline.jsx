import React, { useRef, useEffect } from "react";
import "../Timeline.css";

function usePopInOnScroll(ref) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        node.classList.add("visible");
      } else {
        node.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}

const timelineData = [
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
    date: "2024",
    title: "Cultivation Technician",
    description:
      "Southern Cap Mushrooms. Monitored growth cycles, process-driven tasks.",
  },
  {
    date: "2015 - 2023",
    title: "WIC Nutritionist",
    description:
      "WIC Program - various locations. Nutritional counseling, data entry, medical formula, care plans, software navigation.",
  },
  {
    date: "2014",
    title: "English Teacher",
    description:
      "Golden Gate Academia, Ecuador. Lesson planning, teaching all ages.",
  },
  {
    date: "2013",
    title: "Saint Catherine University",
    description: "Bachelor of Science in Dietetics.",
  },
];

export default function Timeline() {
  const headerRef = useRef(null);
  usePopInOnScroll(headerRef);
  return (
    <section className="timeline-section">
      <div
        className="about-header-row about-header-row--left"
        style={{
          marginBottom: "8rem",
          position: "sticky",
          top: "64px",
          zIndex: 100,
          background: "none",
          boxShadow: "none",
        }}
      >
        <h3 ref={headerRef} className="about-section-header teal-header pop-in">
          Timeline
        </h3>
      </div>
      <div
        className="timeline"
        style={{
          minHeight: `${timelineData.length * 320}px`, // more space for last sticky card
          position: "relative",
        }}
      >
        {timelineData.map((event, idx) => (
          <div
            className="timeline-event"
            key={idx}
            style={{
              position: "sticky",
              top: `calc(${idx} * 40px + 144px)`, // 64px = nav bar + 80px header height
              zIndex: 10 + idx,
              marginBottom:
                idx === timelineData.length
                  ? "40px" // last card gets small margin to stick at end
                  : "200px",
              boxShadow: "0 2px 12px #8c9eff33",
              borderRadius: "0.7rem",
              background: "rgba(18,20,26,0.96)",
              transition: "box-shadow 0.2s",
            }}
          >
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
