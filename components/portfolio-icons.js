const wrap = (color, path) => ({
  color,
  icon: (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke={color} strokeWidth="1.7">
      {path}
    </svg>
  ),
});

export const portfolioIcons = {
  booking: wrap(
    "#3B82F6",
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" />
      <circle cx="9" cy="15" r="1.4" fill="#3B82F6" stroke="none" />
    </>,
  ),
  insurance: wrap(
    "#2DD4BF",
    <path
      d="M12 3 19 6v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ),
  construction: wrap(
    "#94A3B8",
    <path
      d="M4 21V7l8-4 8 4v14M9 21v-6h6v6M9 10h.01M15 10h.01M9 14h.01M15 14h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ),
  event: wrap(
    "#C084FC",
    <path
      d="M20 8h-2.17a3 3 0 1 0-5.66-2 3 3 0 1 0-5.66 2H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM12 8V21"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
  ),
  fullstack: wrap(
    "#22D3EE",
    <path d="M9.5 8 6 12l3.5 4M14.5 8 18 12l-3.5 4M13 5l-2 14" strokeLinecap="round" strokeLinejoin="round" />,
  ),
};

export function getPortfolioIcon(key) {
  return portfolioIcons[key];
}
