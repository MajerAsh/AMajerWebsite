import React, { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionIds = ["home", "about", "Projects", "contact"];
  const sectionRefs = useRef({});

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Scrollspy effect and scroll progress
  useEffect(() => {
    function onScroll() {
      // Scrollspy
      const sections = sectionIds.map((id) => document.getElementById(id));
      let current = sectionIds[0];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // If at top, set to home
      if (scrollY === 0) {
        current = "home";
      } else if (scrollY + windowHeight >= docHeight - 2) {
        current = sectionIds[sectionIds.length - 1];
      } else {
        sections.forEach((section, idx) => {
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) {
              current = section.id;
            }
          }
        });
      }
      setActiveSection(current);
      // Scroll progress
      const progress =
        docHeight - windowHeight > 0
          ? Math.min(1, window.scrollY / (docHeight - windowHeight))
          : 0;
      setScrollProgress(progress);
    }
    window.addEventListener("scroll", onScroll);
    // Set initial value
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll for nav links
  function handleNavClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="site">
      {/* Single persistent vertical line with bioluminescent glow segment */}
      <div className="glow-scrollbar" aria-hidden="true">
        <div
          className="glow-scrollbar__glow"
          style={{
            top: `calc(${
              Math.max(0, Math.min(1, scrollProgress)) * 100
            }% - 7vh)`,
            height: "14vh",
          }}
        ></div>
      </div>
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          {/* Removed brand for centered nav */}
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Menu</span>☰
          </button>
          <ul id="nav-menu" className="nav__list" data-collapsed={!menuOpen}>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className={activeSection === "Projects" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "Projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" className="site__main" role="main">
        <section id="home" style={{ scrollMarginTop: "100px" }}>
          <Home />
        </section>
        <section id="about" style={{ scrollMarginTop: "100px" }}>
          <About />
        </section>
        <section id="Projects" style={{ scrollMarginTop: "100px" }}>
          <Projects />
        </section>
        <section id="contact" style={{ scrollMarginTop: "100px" }}>
          <Contact />
        </section>
      </main>

      {/* Floating social sidebar */}
      <aside className="sidebar-social">
        <ul className="sidebar-social__list">
          <li>
            <a
              href="https://github.com/MajerAsh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/AMajerWebsite/icons/github.svg"
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashleymajer/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/AMajerWebsite/icons/linkedin.svg"
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="mailto:majerash@gmail.com" aria-label="Email">
              <img
                src="/AMajerWebsite/icons/mail.svg"
                alt=""
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1NFAYU3ljGOIVwRIo4uyPMuiLllkPI4CwV0QhsUTc5XM/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <img
                src="/AMajerWebsite/icons/resume.svg"
                alt="Resume"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
