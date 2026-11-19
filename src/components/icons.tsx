export type IconName =
  | "grid"
  | "book"
  | "monitor"
  | "chat"
  | "compass"
  | "library"
  | "user"
  | "logout"
  | "spark"
  | "clock"
  | "check"
  | "target"
  | "flame"
  | "trophy";

const paths: Record<IconName, string> = {
  grid: "M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z",
  book: "M4 4.5A1.5 1.5 0 015.5 3H17a1 1 0 011 1v13H5.5A1.5 1.5 0 014 15.5v-11zM4 16.5A1.5 1.5 0 015.5 15H18M8 7h6",
  monitor: "M3 4h14v9H3V4zm5 14h4m-2-5v5",
  chat: "M4 5h12v8H9l-4 3v-3H4V5z",
  compass: "M10 2a8 8 0 100 16 8 8 0 000-16zm2.5 5.5l-1.6 4-4 1.6 1.6-4 4-1.6z",
  library: "M3 4h5v13H3V4zm5 0h4v13H8V4zm4 1l4-1 2 12-4 1-2-12z",
  user: "M10 3a3 3 0 100 6 3 3 0 000-6zM4 17c0-3 2.7-5 6-5s6 2 6 5",
  logout: "M8 3H4v14h4M12 6l4 4-4 4M16 10H8",
  spark: "M10 2l1.8 5.2L17 9l-5.2 1.8L10 16l-1.8-5.2L3 9l5.2-1.8L10 2z",
  clock: "M10 3a7 7 0 100 14 7 7 0 000-14zm0 3v4l3 2",
  check: "M4 10.5l4 4L16 6",
  target: "M10 3a7 7 0 100 14 7 7 0 000-14zm0 3a4 4 0 100 8 4 4 0 000-8zm0 3a1 1 0 100 2 1 1 0 000-2z",
  flame: "M10 2c3 4 5 5 5 8a5 5 0 11-10 0c0-2 1-3 2-4 .5 1.5 1.5 2 2.5 2C9 6 9 4 10 2z",
  trophy: "M6 3h8v5a4 4 0 11-8 0V3zM6 5H3v2a3 3 0 003 3m8-5h3v2a3 3 0 01-3 3m-4 3v3m-3 1h6",
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
