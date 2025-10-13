import React, { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import AtAGlance from "./pages/AtAGlance";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionIds = ["home", "ataglance", "Projects", "about", "contact"];
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
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Use stricter bounds: highlight only when section is mostly in view
            if (
              scrollY + windowHeight / 2 >= sectionTop &&
              scrollY + windowHeight / 2 < sectionTop + sectionHeight
            ) {
              current = section.id;
              break;
            }
          }
        }
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
                href="#Projects"
                className={activeSection === "Projects" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "Projects")}
              >
                Projects
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
          <Home showCharacter={activeSection === "home"} />
        </section>
        {/* AtAGlance sits between Home and Projects, not in nav */}
        <section id="ataglance" style={{ scrollMarginTop: "100px" }}>
          <AtAGlance />
        </section>
        <section id="Projects" style={{ scrollMarginTop: "100px" }}>
          <Projects />
        </section>
        <section id="about" style={{ scrollMarginTop: "100px" }}>
          <About />
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
              href="https://docs.google.com/document/d/11YKz9bPIxjuucCJu3K-GDEri7xVFniPtqDfNjT_a00s/edit?usp=sharing"
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
