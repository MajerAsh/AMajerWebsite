import React, { useState, useEffect, useRef } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = ["home", "about", "projects", "contact"];
  const sectionRefs = useRef({});

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  // Scrollspy effect
  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 120; // offset for sticky nav
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll);
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
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          <a
            className="brand"
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
          >
            Ashley Majer
          </a>
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
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
                href="#projects"
                className={activeSection === "projects" ? "active" : undefined}
                onClick={(e) => handleNavClick(e, "projects")}
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
        <section id="projects" style={{ scrollMarginTop: "100px" }}>
          <Projects />
        </section>
        <section id="contact" style={{ scrollMarginTop: "100px" }}>
          <Contact />
        </section>
      </main>

      <footer className="site__footer" role="contentinfo">
        <p>© {new Date().getFullYear()} Ashley Majer. All rights reserved.</p>
        <ul className="social" role="list">
          <li>
            <a
              href="https://github.com/MajerAsh"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img src="/icons/github.svg" alt="" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashley-majer-8b3978362"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="mailto:majerash@gmail.com" aria-label="Email">
              <img src="/icons/mail.svg" alt="" aria-hidden="true" />
              <span className="sr-only">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
