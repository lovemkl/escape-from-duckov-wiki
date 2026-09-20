export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="#0c0a08" />
      <circle
        cx="16"
        cy="17"
        r="8"
        fill="none"
        stroke="hsl(38 92% 55%)"
        strokeWidth="1.5"
      />
      <ellipse
        cx="16"
        cy="15"
        rx="5.5"
        ry="4.2"
        fill="none"
        stroke="hsl(14 78% 48%)"
        strokeWidth="1.4"
      />
      <circle cx="14" cy="14" r="1.2" fill="hsl(38 92% 55%)" />
      <path
        d="M20 15h4"
        fill="none"
        stroke="hsl(38 92% 55%)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
