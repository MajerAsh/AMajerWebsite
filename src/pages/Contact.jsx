import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`);
    window.location.href = `mailto:you@example.com?subject=Portfolio%20contact&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section className="container grid-2 contact">
      <div className="stack-sm">
        <h2 className="h2 teal-header">Contact</h2>
        <p className="muted">
          Open to freelance, full‑time roles, and interesting collaborations.
        </p>
        <ul className="list-dots">
          <li>
            <a href="mailto:majerash@gmail.com">Send me a email</a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/ashley-majer-8b3978362"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MajerAsh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <form className="card form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
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
