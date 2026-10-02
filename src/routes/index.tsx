import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Envelope } from "@/components/quince/Envelope";
import { Countdown } from "@/components/quince/Countdown";
import { Reveal } from "@/components/quince/Reveal";
import { FloatingBalloons } from "@/components/quince/FloatingBalloons";
import { EnvelopeDecor, MiniEnvelope } from "@/components/quince/EnvelopeShower";
import discoballs from "@/assets/discoballs.jpg";
import haze from "@/assets/haze.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mis XV Años — Jimena Espadas · 16 de octubre" },
      {
        name: "description",
        content:
          "Invitación a los XV años de Jimena Espadas: 16 de octubre, 7:00 pm en Salón Le Parisien. Dress code blanco. Confirma tu asistencia.",
      },
      { property: "og:title", content: "Mis XV Años — Jimena Espadas" },
      {
        property: "og:description",
        content:
          "16 de octubre, 7:00 pm · Salón Le Parisien · Dress code blanco. Confirma tu asistencia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdQY9qdzGKpfpQXDZ9qmgbyXdPvt5_Xgid6sXUKLO5ZEEZjSA/viewform";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Salon+Le+Parisien";


function Index() {
  const [opened, setOpened] = useState(true);
  return (
    <main className="relative overflow-x-hidden">
      {!opened && <Envelope onOpen={() => setOpened(true)} />}
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">        <img
        src={discoballs}
        alt="Esferas de disco plateadas colgando sobre un fondo oscuro"
        width={1024}
        height={1536}
        className="img-fade absolute inset-0 h-full w-full object-cover opacity-80"
      />
        <div className="veil-top absolute inset-0" />

        <Reveal className="relative z-10 mx-auto w-full max-w-3xl -mt-12 text-center px-4">          <h1 className="font-script neon mt-4 text-8xl leading-[0.9] sm:text-9xl text-center">Jimena</h1>          <p className="mt-1 font-display text-lg tracking-[0.3em] text-silver/80 uppercase">
          Espadas
        </p>
          <div className="rule-gold shimmer-line mx-auto mt-8 w-40" />
          <p className="mt-6 text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase">
            mis quince años
          </p>
        </Reveal>


      </section>

      {/* MENSAJE */}
      <section className="relative overflow-hidden px-6 py-28">
        <img
          src={haze}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1536}
          loading="lazy"
          className="img-fade absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="img-fade absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
        <div className="relative mx-auto max-w-md">
          <Reveal delay={150}>
            <div className="rule-thin mx-auto w-24" />

            <p className="mt-8 text-center font-display text-xl leading-relaxed text-foreground/90 italic sm:text-2xl">
              En este día tan especial me encantaría que estuvieras presente para compartir
              uno de los momentos más importantes e inolvidables de mi vida.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-12 text-center">
              <p className="text-[0.6rem] tracking-[0.45em] text-gold uppercase">octubre</p>
              <p className="font-display gold-text text-7xl leading-none">16</p>
              <p className="text-[0.6rem] tracking-[0.45em] text-muted-foreground">2 0 2 6</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTADOR */}
      <section className="relative overflow-hidden px-6 py-28 text-primary-foreground">
        <div className="band-fade absolute inset-0 bg-blush/85" />
        <div className="soft-blur absolute top-10 -left-10 h-56 w-56 rounded-full bg-white/70" />
        <div className="soft-blur absolute -right-12 bottom-8 h-48 w-48 rounded-full bg-white/50" />
        <div className="relative mx-auto max-w-md text-center">
          <Reveal>
            <p className="font-display text-5xl text-primary-foreground">Faltan</p>
            <div className="countdown-dark mt-8">
              <Countdown />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVENTO */}
      <section className="relative overflow-hidden px-6 py-24">
        <img
          src={haze}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1536}
          loading="lazy"
          className="img-fade absolute inset-0 h-full w-full scale-y-[-1] object-cover opacity-30"
        />
        <div className="img-fade absolute inset-0 bg-background/70" />
        <div className="relative mx-auto max-w-md space-y-14 text-center">
          <Reveal>
            <p className="text-[0.6rem] tracking-[0.45em] text-gold uppercase">la celebración</p>
            <h2 className="font-script neon mt-4 text-5xl">Salón Le Parisien</h2>
            <p className="mt-5 font-display text-2xl tracking-[0.2em] text-foreground/90">
              7:00 PM
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full border border-gold/70 bg-navy/30 px-8 py-3 text-[0.62rem] tracking-[0.32em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              ver ubicación
            </a>
          </Reveal>

          <Reveal delay={150}>
            <div className="rule-gold mx-auto w-32" />
            <p className="mt-12 text-[0.6rem] tracking-[0.45em] text-muted-foreground uppercase">
              dress code
            </p>
            <h3 className="font-script mt-3 text-5xl text-blush">Blanco</h3>
            <p className="mt-4 font-display text-lg tracking-[0.18em] text-foreground/80 uppercase">
              elegante · no beige
            </p>
          </Reveal>
        </div>
      </section>

      {/* LLUVIA DE SOBRES */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="navy-veil absolute inset-0" />
        <div className="soft-blur absolute top-10 left-1/2 h-56 w-72 -translate-x-1/2 rounded-full bg-navy/70" />
        <EnvelopeDecor />
        <div className="pointer-events-none absolute inset-0">
          {[
            { left: "18%", d: 0, s: 26 },
            { left: "62%", d: 3, s: 22 },
            { left: "78%", d: 6, s: 30 },
          ].map((e, i) => (
            <div
              key={i}
              className="animate-envelope-fall absolute top-0"
              style={{ left: e.left, animationDelay: `${e.d}s` }}
            >
              <MiniEnvelope size={e.s} />
            </div>
          ))}
        </div>

        <div className="relative mx-auto max-w-md">
          <Reveal>
            <div className="navy-panel px-7 py-10 text-center">
              <p className="text-[0.6rem] tracking-[0.45em] text-gold uppercase">nuestro regalo</p>
              <h2 className="font-script gold-text mt-3 text-5xl leading-tight">
                Lluvia de sobres
              </h2>
              <div className="rule-gold mx-auto mt-6 w-28" />
              <p className="mt-7 font-display text-lg leading-relaxed text-foreground/90 italic">
                Como parte de la ceremonia, celebraremos la tradicional lluvia de sobres.
                Tu presente viajará dentro de un sobre cerrado que compartirás con Jimena
                durante ese momento tan especial de la noche.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <MiniEnvelope size={30} />
                <p className="text-[0.6rem] tracking-[0.34em] text-gold uppercase">
                  sobre cerrado indispensable
                </p>
                <MiniEnvelope size={30} />
              </div>
              <p className="mt-6 text-[0.68rem] leading-relaxed tracking-[0.12em] text-silver/80 uppercase">
                Te pedimos con cariño llevarlo contigo; será el detalle que hará brillar
                la ceremonia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONFIRMACIÓN */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20">
        <img
          src={discoballs}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1536}
          loading="lazy"
          className="img-fade absolute inset-0 h-full w-full scale-y-[-1] object-cover opacity-45"
        />
        <div className="img-fade absolute inset-0 bg-background/70 backdrop-blur-[3px]" />
        <div className="relative mx-auto max-w-md">
          <Reveal className="text-center">

            <h2 className="font-script neon text-5xl">Confirmación</h2>
            <p className="mt-5 font-display text-lg text-foreground/80 italic">
              ¡Espero que seas parte de esta gran celebración!
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full border border-gold/70 bg-blush px-10 py-4 text-[0.65rem] tracking-[0.35em] text-primary-foreground uppercase shadow-[0_0_34px_-6px_oklch(0.84_0.11_88/0.7)] transition-transform hover:scale-105"
            >
              confirmar
            </a>
          </Reveal>
          <Reveal delay={250}>
            <div className="rule-thin mx-auto mt-20 w-24" />
            <p className="mt-6 text-center font-script text-3xl text-blush/80">Jimena</p>
            <p className="mt-2 text-center text-[0.55rem] tracking-[0.4em] text-muted-foreground uppercase">
              16 de octubre 2026
            </p>
          </Reveal>
        </div>
      </section>
      {/* SORPRESAS */}
      <section className="relative px-6 py-24 bg-black text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.45em] text-gold uppercase mb-4">
            Una noche para recordar
          </p>

          <h2 className="font-script text-5xl sm:text-6xl text-silver mb-6">
            Sorpresas
          </h2>

          <div className="rule-gold shimmer-line mx-auto mb-8 w-32" />

          <p className="text-sm sm:text-base text-silver/80 leading-relaxed max-w-2xl mx-auto mb-12">
            Por favor, llega puntual; tenemos preparadas muchas sorpresas para ti.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">

            <div className="border border-gold/30 bg-white/[0.03] p-6 rounded-sm">
              <div className="text-2xl mb-3">🌳</div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
                Libro de árbol
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Para que me escribas un lindo mensaje.
              </p>
            </div>

            <div className="border border-gold/30 bg-white/[0.03] p-6 rounded-sm">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
                Pinta caritas y tatuajes
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Un espacio para divertirte y dejar volar tu imaginación.
              </p>
            </div>

            <div className="border border-gold/30 bg-white/[0.03] p-6 rounded-sm">
              <div className="text-2xl mb-3">📸</div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
                Cabina de fotos
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Guarda recuerdos especiales de esta gran noche.
              </p>
            </div>

            <div className="border border-gold/30 bg-white/[0.03] p-6 rounded-sm">
              <div className="text-2xl mb-3">🍿</div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
                Barra de snacks
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Algo delicioso para disfrutar durante la celebración.
              </p>
            </div>

            <div className="border border-gold/30 bg-white/[0.03] p-6 rounded-sm">
              <div className="text-2xl mb-3">🎁</div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
                Piñata
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Prepárate para un momento lleno de diversión.
              </p>
            </div>

            <div className="border border-gold/30 bg-white/[0.03] p-6 rounded-sm">
              <div className="text-2xl mb-3">🎭</div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
                Show con animación
              </h3>
              <p className="text-silver/70 text-sm leading-relaxed">
                Una sorpresa especial para disfrutar juntos.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
