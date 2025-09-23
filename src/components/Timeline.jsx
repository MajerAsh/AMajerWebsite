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
    date: `${new Date().getFullYear()} — Present`,
    title: "Building & Learning",
    description:
      "Building portfolio projects, exploring TypeScript, and contributing to open source.",
  },
  {
    date: `August ${new Date().getFullYear()}`,
    title: "Fullstack Academy",
    description:
      "Completed Fullstack Academy’s Software Engineering Immersive, specializing in full-stack web development.",
  },
  {
    date: "Prior Career",
    title: "Nutrition & Outreach",
    description:
      "Nutritionist, outreach coordinator, and educator—focused on solving problems, guiding clients, and implementing digital systems.",
  },
];

export default function Timeline() {
  const headerRef = useRef(null);
  usePopInOnScroll(headerRef);
  return (
    <section className="timeline-section">
      <div className="about-header-row about-header-row--left">
        <h3 ref={headerRef} className="about-section-header teal-header pop-in">
          Timeline
        </h3>
      </div>
      <div className="timeline">
        {timelineData.map((event, idx) => (
          <div className="timeline-event" key={idx}>
            <div className="timeline-dot" />
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
