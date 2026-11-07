// Line icons — 1.25px strokes on a 24px grid, drawn in currentColor.
const paths = {
  cloud: <path d="M7 18.5h10.25a4.25 4.25 0 0 0 .6-8.46A6 6 0 0 0 6.2 11.2 3.65 3.65 0 0 0 7 18.5Z" />,
  bolt: <path d="M13.5 2.75 5.75 13.5h6l-1.25 7.75 7.75-10.75h-6l1.25-7.75Z" />,
  laptop: (
    <>
      <rect x="4.25" y="5.25" width="15.5" height="10.5" rx="1.25" />
      <path d="M2.25 18.75h19.5" />
    </>
  ),
  chip: (
    <>
      <rect x="6.25" y="6.25" width="11.5" height="11.5" rx="1.5" />
      <rect x="9.25" y="9.25" width="5.5" height="5.5" rx="0.75" />
      <path d="M9.5 3.5v2.75M14.5 3.5v2.75M9.5 17.75v2.75M14.5 17.75v2.75M3.5 9.5h2.75M3.5 14.5h2.75M17.75 9.5h2.75M17.75 14.5h2.75" />
    </>
  ),
  terminal: (
    <>
      <rect x="3.25" y="4.75" width="17.5" height="14.5" rx="1.75" />
      <path d="m7 10 2.75 2.25L7 14.5M12 15h5" />
    </>
  ),
  code: <path d="m8.5 7.5-4.5 4.5 4.5 4.5M15.5 7.5l4.5 4.5-4.5 4.5M13.25 5.5l-2.5 13" />,
  film: (
    <>
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="1.75" />
      <path d="m10.25 9.25 4.5 2.75-4.5 2.75v-5.5Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.25 5.25 5.75v5.5c0 4.25 2.85 7.6 6.75 9.5 3.9-1.9 6.75-5.25 6.75-9.5v-5.5L12 3.25Z" />
      <path d="m9.25 12 2 2 3.5-3.75" />
    </>
  ),
  arrow: <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, className = "icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
