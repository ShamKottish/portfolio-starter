// Plain arrow that mirrors itself in RTL. Use dir="up" for the diagonal external-link one.
export default function Arrow({ dir = "right", className = "" }) {
  if (dir === "up") {
    return (
      <svg className={className} width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path d="M2 9 9 2M3.5 2H9v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (dir === "down") {
    return (
      <svg className={className} width="11" height="12" viewBox="0 0 11 12" fill="none" aria-hidden="true">
        <path d="M5.5 1.5v8.2M2 6.5l3.5 3.4L9 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg
      className={`arrow rtl:-scale-x-100 ${className}`}
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 5.5h12.2M9 1.4l4.2 4.1L9 9.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
