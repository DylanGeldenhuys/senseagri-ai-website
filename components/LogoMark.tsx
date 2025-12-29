export default function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? ""}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="amberGrad" x1="0" y1="0" x2="48" y2="0">
          <stop offset="0%" stopColor="#E06A2D" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E06A2D" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0" y1="0" x2="48" y2="0">
          <stop offset="0%" stopColor="#6F8F73" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#355A3A" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="darkGrad" x1="0" y1="0" x2="48" y2="0">
          <stop offset="0%" stopColor="#2F4A2F" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1F2933" stopOpacity="0.75" />
        </linearGradient>
      </defs>
      <rect x="13" y="6" width="22" height="8" rx="4" fill="url(#amberGrad)" />
      <rect x="9" y="18" width="30" height="9" rx="4.5" fill="url(#greenGrad)" />
      <rect x="5" y="31" width="38" height="10" rx="5" fill="url(#darkGrad)" />
    </svg>
  );
}
