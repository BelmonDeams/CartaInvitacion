import globos from "@/assets/globos15.png";

const BALLOONS = [
  { left: "6%", size: 92, delay: 0, duration: 26, drift: "-18px" },
  { left: "24%", size: 62, delay: 6, duration: 32, drift: "22px" },
  { left: "48%", size: 110, delay: 12, duration: 29, drift: "-26px" },
  { left: "70%", size: 70, delay: 3, duration: 35, drift: "18px" },
  { left: "88%", size: 96, delay: 17, duration: 24, drift: "-14px" },
];

export function FloatingBalloons() {
  return (
    <div aria-hidden="true" className="balloon-field">
      {BALLOONS.map((b, i) => (
        <img
          key={i}
          src={globos}
          alt=""
          loading="lazy"
          className="balloon-fly"
          style={{
            left: b.left,
            width: `${b.size}px`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            ["--drift" as string]: b.drift,
          }}
        />
      ))}
    </div>
  );
}
