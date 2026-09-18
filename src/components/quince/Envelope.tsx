import { useState } from "react";
import discoballs from "@/assets/discoballs.jpg";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  const handle = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => setGone(true), 2100);
    window.setTimeout(onOpen, 2600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-background transition-opacity duration-500 ${
        gone ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={discoballs}
        alt="Esferas de disco plateadas colgando"
        width={1024}
        height={1536}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="veil-top absolute inset-0" />
      <div className="soft-blur absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blush/40" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 pt-24 pb-14 text-center">
        <div className="mt-auto">
          <h1 className="font-script neon animate-glow-pulse text-6xl leading-[0.9] sm:text-7xl">
            Jimena
          </h1>
          <p className="mt-4 text-[0.65rem] tracking-[0.42em] text-muted-foreground uppercase">
            mis quince años
          </p>
        </div>

        <button
          onClick={handle}
          aria-label="Abrir la invitación"
          className="group relative mt-10 mb-auto block w-[78%] max-w-[340px] cursor-pointer"
        >
          <div className={`envelope-stage ${opening ? "is-open" : ""}`}>
            <div className="env-glow" />
            <div className="env-card">
              <span className="font-script text-3xl text-[oklch(0.28_0.04_330)]">Jimena</span>
              <span className="mt-1 text-[0.5rem] tracking-[0.35em] text-[oklch(0.42_0.03_330)] uppercase">
                xv años
              </span>
            </div>
            <div className="envelope relative aspect-[7/5] w-full rounded-[6px]">
              <div className="envelope-flap" />
              <div className="env-half env-half-left" />
              <div className="env-half env-half-right" />
              <div className="envelope-seal" />
            </div>
            <div className="env-sparkles">
              {Array.from({ length: 14 }).map((_, i) => (
                <span key={i} style={{ ["--i" as string]: i }} />
              ))}
            </div>
          </div>
        </button>

        <p className="animate-pulse-soft text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
          presiona el sobre para abrirlo
        </p>
      </div>
    </div>
  );
}
