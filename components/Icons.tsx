export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 12"
      width="18"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow ${className}`}
      aria-hidden
    >
      <path d="M0 6h18" />
      <path d="M13 1l5 5-5 5" />
    </svg>
  );
}

export function Sprig({ className = "" }: { className?: string }) {
  // A quiet single-line botanical mark used at section breaks.
  return (
    <svg
      viewBox="0 0 60 24"
      width="60"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M2 12 H58" />
      <path d="M30 12 c -2 -4 -6 -6 -10 -6" />
      <path d="M30 12 c 2 4 6 6 10 6" />
      <circle cx="30" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
