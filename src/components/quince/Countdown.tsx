import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-16T19:00:00-05:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    dias: Math.floor(ms / 86400000),
    horas: Math.floor((ms / 3600000) % 24),
    min: Math.floor((ms / 60000) % 60),
    seg: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(() => ({ dias: 0, horas: 0, min: 0, seg: 0 }));

  useEffect(() => {
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items: [string, number][] = [
    ["días", t.dias],
    ["horas", t.horas],
    ["min", t.min],
    ["seg", t.seg],
  ];

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-4">
      {items.map(([label, value]) => (
        <div key={label} className="glass-card min-w-[68px] px-3 py-4 sm:min-w-[86px]">
          <div className="font-display text-3xl leading-none text-foreground sm:text-4xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-2 text-[0.6rem] tracking-[0.32em] text-muted-foreground uppercase">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
