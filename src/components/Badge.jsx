const base = import.meta.env.BASE_URL;

export default function Badge({ name, icon }) {
  return (
    <img
      src={`${base}icons/${icon}.svg`}
      alt={name ? `${name} logo` : ""}
      aria-hidden={!name}
      className="badge__icon badge-icon"
      loading="lazy"
      style={{ display: "block" }}
    />
  );
}
