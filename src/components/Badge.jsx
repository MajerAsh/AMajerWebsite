import React from "react";

// Usage: <Badge name="HTML" icon="html" />
// Expects SVGs in public/icons/{icon}.svg
export default function Badge({ name, icon }) {
  return (
    <img
      src={"/icons/" + icon + ".svg"}
      alt={name}
      className="badge__icon badge-icon"
      loading="lazy"
      style={{ display: "block" }}
    />
  );
}
