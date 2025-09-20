import React from "react";

// Usage: <Badge name="HTML" icon="html" />
// Expects SVGs in public/icons/{icon}.svg
export default function Badge({ name, icon }) {
  return (
    <span className="badge">
      <img
        src={"/icons/" + icon + ".svg"}
        alt=""
        className="badge__icon"
        width={32}
        height={32}
        loading="lazy"
        aria-hidden="true"
        style={{ marginRight: 8 }}
      />
      <span className="badge__label">{name}</span>
    </span>
  );
}
