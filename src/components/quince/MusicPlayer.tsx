import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function MusicPlayer({ start }: { start: boolean }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [src, setSrc] = useState("/music/MUSIC.MP3");

  const handleError = () => {
    if (src !== "/music.mp3") {
      console.warn("Retrying with /music.mp3 fallback");
      setSrc("/music.mp3");
    }
  };

  // Intenta reproducir de inmediato; si el navegador lo bloquea,
  // arranca en silencio y activa el sonido con la primera interacción.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.volume = 0.5;

    let cleanup = () => {};

    const tryPlay = async () => {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        el.muted = true;
        try {
          await el.play();
          setPlaying(true);
        } catch {
          setPlaying(false);
        }
        const unmute = () => {
          el.muted = false;
          el.volume = 0.5;
          void el.play().then(
            () => setPlaying(true),
            () => setPlaying(false),
          );
          cleanup();
        };
        const events = ["pointerdown", "touchstart", "keydown", "scroll"] as const;
        events.forEach((e) => window.addEventListener(e, unmute, { once: true, passive: true }));
        cleanup = () => events.forEach((e) => window.removeEventListener(e, unmute));
      }
    };

    void tryPlay();
    return () => cleanup();
  }, [src]);

  useEffect(() => {
    if (!start) return;
    const el = ref.current;
    if (!el) return;
    el.muted = false;
    el.volume = 0.5;
    void el.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [start, src]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused || el.muted) {
      el.muted = false;
      void el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={ref}
        src={src}
        onError={handleError}
        loop
        autoPlay
        playsInline
        preload="auto"
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar la música" : "Reproducir la música"}
        className="fixed right-4 bottom-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-background/70 text-gold shadow-[0_0_26px_-8px_oklch(0.82_0.11_88/0.85)] backdrop-blur-md transition-transform hover:scale-110"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
      </button>
    </>
  );
}
