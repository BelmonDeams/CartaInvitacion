const DECOR = [
  { left: "4%", top: "12%", size: 46, rotate: -14, delay: 0 },
  { left: "84%", top: "8%", size: 38, rotate: 12, delay: 1.2 },
  { left: "10%", top: "72%", size: 34, rotate: 8, delay: 2.1 },
  { left: "88%", top: "66%", size: 44, rotate: -10, delay: 0.7 },
  { left: "46%", top: "3%", size: 28, rotate: 6, delay: 1.7 },
];

function MiniEnvelope({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size * 0.72}
      viewBox="0 0 50 36"
      fill="none"
      aria-hidden="true"
      className="mini-envelope"
    >
      <rect x="1" y="1" width="48" height="34" rx="3" className="mini-body" />
      <path d="M1 3.5 25 22 49 3.5" className="mini-fold" />
      <circle cx="25" cy="21" r="3.4" className="mini-seal" />
    </svg>
  );
}

export function EnvelopeDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {DECOR.map((d, i) => (
        <div
          key={i}
          className="animate-drift absolute"
          style={{
            left: d.left,
            top: d.top,
            transform: `rotate(${d.rotate}deg)`,
            animationDelay: `${d.delay}s`,
          }}
        >
          <MiniEnvelope size={d.size} />
        </div>
      ))}
    </div>
  );
}

export { MiniEnvelope };
