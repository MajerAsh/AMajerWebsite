import { useRef } from "react";
import GitHubCalendar from "react-github-calendar";

import "../About.css";
import Badge from "../components/Badge";
import Timeline from "../components/Timeline";
import usePopInOnScroll from "../hooks/usePopInOnScroll";

export default function About() {
  const snapshotRef = useRef(null);
  const skillsRef = useRef(null);
  const storyRef = useRef(null);
  const githubHeaderRef = useRef(null);
  usePopInOnScroll(snapshotRef);
  usePopInOnScroll(skillsRef);
  usePopInOnScroll(storyRef);
  usePopInOnScroll(githubHeaderRef);
  return (
    <section className="container stack-lg" style={{ marginBottom: "6rem" }}>
      <header className="stack-sm">{/*<h2 className="h2">About</h2>*/}</header>

      <div className="about-cards-vertical">
        <header className="about-header-row about-header-row--left">
          <h3
            ref={storyRef}
            className="about-section-header teal-header pop-in"
          >
            My Story
          </h3>
        </header>
        <article className="card about-card about-card--left">
          <p className="muted">
            I am a software developer with a background in full-stack web
            development and a prior career in nutrition and human services.
            Before transitioning into engineering, I spent years working in
            public benefit programs that required careful data handling, clear
            communication, and practical problem-solving for real people.
          </p>
          <p className="muted">
            That experience continues to shape how I build software. I care
            about structure, clarity and reliability, and I am especially
            interested in projects where usability and thoughtful design are as
            important as functionality.
          </p>
          <p className="muted">
            My technical work focuses on JavaScript, React, Node.js, Express,
            and PostgreSQL. I enjoy building interfaces that are visually
            considered and logically sound, and I’m drawn to systems where small
            improvements can meaningfully improve the user experience.
          </p>
          <p className="muted">
            Outside of development, I spend much of my time outdoors hiking,
            identifying fungi, and observing the wildlife around my home. I
            bring that same curiosity into my work — I like understanding how
            things function, improving what already exists, and building tools
            that feel purposeful and well considered.
          </p>
        </article>
        {/* space after My Story */}
        <div className="v-spacer" />

        <section
          className="github-activity container"
          style={{ marginTop: "0", marginBottom: "6rem", textAlign: "center" }}
        >
          <div className="about-header-row about-header-row--left">
            <h2
              ref={githubHeaderRef}
              className="about-section-header teal-header pop-in"
              style={{ marginBottom: "1.5rem" }}
            >
              GitHub Activity
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GitHubCalendar
              username="majerash"
              blockSize={16}
              blockMargin={4}
              color="#4f7de9"
              fontSize={14}
              transformData={(contributions) => {
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
                return contributions.filter(
                  (day) => new Date(day.date) >= sixMonthsAgo
                );
              }}
            />
          </div>
        </section>
        {/* spacer after GitHub Activity */}
        <div className="v-spacer" />

        <header className="about-header-row about-header-row--right">
          <h2
            ref={skillsRef}
            className="about-section-header teal-header pop-in"
            style={{ fontSize: "3.2rem", textAlign: "center", width: "100%" }}
          >
            Technologies I Love to Use
          </h2>
        </header>
        <div className="skills-row">
          <strong className="skills-section-header">
            Languages &amp; Tools:
          </strong>
          <div className="skills-icon-list" aria-label="Languages and Tools">
            {[
              { name: "HTML", icon: "html" },
              { name: "CSS", icon: "css" },
              { name: "JavaScript", icon: "javascript" },
              { name: "PostgreSQL", icon: "sql" },
              { name: "Git", icon: "git" },
              { name: "Vite", icon: "vite" },
            ].map((item) => (
              <div className="skills-icon-card" key={item.name}>
                <Badge name={item.name} icon={item.icon} />
                <span className="skills-tooltip">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <strong
              className="skills-section-header"
              style={{ textAlign: "right", width: "100%" }}
            >
              Frameworks &amp; Libraries:
            </strong>
            <div
              className="skills-icon-list"
              aria-label="Frameworks and Libraries"
              style={{ justifyContent: "flex-end", width: "100%" }}
            >
              {[
                { name: "React", icon: "react" },
                { name: "Node.js", icon: "nodejs" },
                { name: "Express", icon: "express" },
                { name: "Mapbox", icon: "mapbox" },
                { name: "Multer", icon: "multer" },
                { name: "Jest", icon: "jest" },
                { name: "Postman", icon: "postman" },
              ].map((item) => (
                <div className="skills-icon-card" key={item.name}>
                  <Badge name={item.name} icon={item.icon} />
                  <span className="skills-tooltip">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2.5rem" }}>
          <strong
            className="skills-section-header"
            style={{ textAlign: "left", width: "100%" }}
          >
            Core Concepts:
          </strong>
          <div className="chips" aria-label="Core Concepts">
            {[
              "REST APIs",
              "JWT Auth",
              "Accessibility",
              "Responsive Design",
              "Testing",
              "Automated Tests",
            ].map((concept) => (
              <span className="core-concept-card" key={concept}>
                {concept}
              </span>
            ))}
          </div>
        </div>
        {/* spacer after Technologies/Core Concepts */}
        <div className="v-spacer" />
      </div>

      <Timeline />
      <div className="v-spacer--sm" />
      {/* Responsive spacer between About/GitHub area and Contact section to restore negative space */}
      <div className="v-spacer--lg" />
    </section>
  );
}
