import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className="site">
      <header className="site__header" role="banner">
        <nav className="nav" aria-label="Primary">
          <a className="brand" href="/">
            Ashley Majer
          </a>
          {/*<NavLink to="/" className="brand">
            Ashley Majer
          </NavLink> ...tried in place of <a> but it didn't work */}

          {/* Mobile nav toggle */}
          <button
            className="nav__toggle"
            aria-controls="nav-menu"
            aria-expanded="false" /*={menuOpen}*/
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>☰
          </button>
          {/* Nav menu */}
          <ul id="nav-menu" className="nav__list" data-collapsed={!menuOpen}>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" className="site__main" role="main">
        <Outlet />
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
