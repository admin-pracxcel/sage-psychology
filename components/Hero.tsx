import Link from "next/link";
import { Arrow } from "./Icons";

// Non-breaking space, guaranteed not to collapse inside inline-block.
const NBSP = " ";

const HEADLINE_LINES: string[][] = [
  ["Psychology", "in", "East"],
  ["Fremantle,"],
  ["built", "around", "you."],
];

export default function Hero() {
  let idx = 0;
  return (
    <section
      id="top"
      className="relative w-full h-[100svh] max-h-[100svh] overflow-hidden bg-ink"
    >
      {/* Video */}
      <div className="absolute inset-0 hero-video-in">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
      </div>

      {/* Overlays — stronger scrim so cream text sits crisply. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,22,20,0.55) 0%, rgba(20,22,20,0.15) 22%, rgba(20,22,20,0.10) 42%, rgba(20,22,20,0.55) 72%, rgba(20,22,20,0.82) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,22,20,0.35) 0%, rgba(20,22,20,0.05) 55%, transparent 100%)",
        }}
        aria-hidden
      />

      {/* Top row: eyebrow */}
      <div className="relative z-10 edge mx-auto max-w-[92rem] pt-[96px] md:pt-[110px]">
        <div
          className="flex items-center gap-4 text-paper fade-in"
          style={{ ["--fade-delay" as string]: "200ms" } as React.CSSProperties}
        >
          <span className="inline-block h-px w-8 bg-paper/70" />
          <span className="eyebrow" style={{ color: "var(--paper)" }}>
            Registered Psychologist{NBSP}·{NBSP}Est. 2023
          </span>
        </div>
      </div>

      {/* Headline block */}
      <div className="relative z-10 edge mx-auto max-w-[92rem] flex flex-col justify-end h-[calc(100svh-110px)] pb-[8vh] md:pb-[7vh]">
        <h1 className="display-xl text-paper max-w-[19ch]">
          {HEADLINE_LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => {
                const i = idx++;
                const suffix = wi < line.length - 1 ? NBSP : "";
                return (
                  <span
                    key={`${li}-${wi}`}
                    className="stagger-word"
                    style={{ ["--i" as string]: i } as React.CSSProperties}
                  >
                    {word + suffix}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <div className="mt-8 md:mt-12 grid gap-8 md:gap-14 md:grid-cols-[1fr_auto] md:items-end">
          <p
            className="max-w-[46ch] text-paper body-lede fade-in"
            style={
              {
                ["--fade-delay" as string]: "1100ms",
                textShadow: "0 1px 24px rgba(0,0,0,0.55)",
              } as React.CSSProperties
            }
          >
            Evidence-based, individualised therapy for adults navigating
            anxiety, trauma, and life&rsquo;s harder chapters. A calm, private
            space in the heart of East Fremantle.
          </p>

          <div
            className="flex flex-wrap gap-3 fade-in"
            style={
              { ["--fade-delay" as string]: "1300ms" } as React.CSSProperties
            }
          >
            <Link href="/book" className="btn btn-on-video">
              Book Now <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-on-video-ghost">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Corner meta — bottom right */}
      <div
        className="absolute bottom-5 right-[var(--edge)] z-10 hidden md:flex items-center gap-4 text-paper/90 text-[0.7rem] tracking-[0.24em] uppercase fade-in"
        style={{ ["--fade-delay" as string]: "1500ms" } as React.CSSProperties}
      >
        <span>Silas St · East Fremantle</span>
        <span className="h-px w-8 bg-paper/50" />
        <span>WA</span>
      </div>
    </section>
  );
}
