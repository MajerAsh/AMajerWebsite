import React, { useRef, useEffect } from "react";
import "../About.css";
import Badge from "../components/Badge";
import GitHubCalendar from "react-github-calendar";
import Timeline from "../components/Timeline";

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
                <Badge icon={item.icon} />
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
                  <Badge icon={item.icon} />
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
            My career began in nutrition and human services, where I developed
            strong communication, problem-solving, and data management skills
            while guiding diverse clients through complex systems. Over time, I
            discovered that what I loved most—breaking down problems, finding
            efficient solutions, and learning new tools—aligned closely with
            software engineering.
          </p>
          <p className="muted">
            This led me to complete a Software Engineering Immersive at Emory
            University, powered by Fullstack Academy, where I gained expertise
            in modern web technologies like React, Node, Express, and
            PostgreSQL. Now, I bring a unique perspective to engineering: the
            empathy and adaptability gained from serving people, combined with
            the technical skills to design and deliver user-focused
            applications.
          </p>
          <p className="muted">
            Outside of tech, I love hiking mossy creeks, researching local fungi
            and reading historic fiction. I strive to fill my life with
            curiosity, education and growth. I’m energized by learning,
            creating, and building things that bring clarity and value to
            others.
          </p>
        </article>
      </div>

      <Timeline />
      <div style={{ height: "10rem" }} />
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
      {/* Responsive spacer between GitHub Activity and Contact */}
      <div className="spacer-gh-contact" style={{ minHeight: "70vh" }} />
    </section>
  );
}
