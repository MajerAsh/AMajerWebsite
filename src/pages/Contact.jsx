import React, { useState, useRef, useEffect } from "react";
import "../Contact.css";
import "../About.css";

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

export default function Contact() {
  const [status, setStatus] = useState("");
  const contactHeaderRef = useRef(null);
  usePopInOnScroll(contactHeaderRef);

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = encodeURIComponent(`Name: ${name}
  Email: ${email}

  ${message}`);
    // Open user's email client with prefilled recipient, subject and body.
    const recipient = "MajerCoding@gmail.com";
    window.location.href = `mailto:${recipient}?subject=Portfolio%20contact&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section className="container grid-2 contact">
      <div className="stack-sm">
        <h1
          ref={contactHeaderRef}
          className="about-section-header teal-header pop-in"
          style={{ marginBottom: "2rem" }}
        >
          Contact
        </h1>
        <p className="muted">
          Open to freelance, full‑time roles, and interesting collaborations.
        </p>
        <div className="contact-links" aria-hidden={false}>
          <a
            href="mailto:MajerCoding@gmail.com"
            aria-label="Email"
            title="Email"
            className="contact-link"
          >
            <img
              src="/AMajerWebsite/icons/email.svg"
              alt=""
              aria-hidden="true"
              className="contact-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ashleymajer/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="contact-link"
          >
            <img
              src="/AMajerWebsite/icons/linkIn.svg"
              alt=""
              aria-hidden="true"
              className="contact-icon"
            />
          </a>
          <a
            href="https://github.com/MajerAsh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="contact-link"
          >
            <img
              src="/AMajerWebsite/icons/githb.svg"
              alt=""
              aria-hidden="true"
              className="contact-icon"
            />
          </a>
        </div>
      </div>

      <form className="card form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="muted"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="muted"
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="muted"
          ></textarea>
        </div>
        <button className="btn" type="submit">
          Send
        </button>
        <p role="status" aria-live="polite" className="muted status">
          {status}
        </p>
      </form>
    </section>
  );
}
