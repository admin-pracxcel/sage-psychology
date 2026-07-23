import Link from "next/link";
import { Arrow } from "./Icons";

const HEADLINE_LINES = [
  ["Psychology", "in", "East"],
  ["Fremantle,"],
  ["built", "around", "you."],
];

export default function Hero() {
  // flatten but keep line breaks
  let i = 0;
  return (
    <section
      id="top"
      className="relative w-full min-h-[100dvh] overflow-hidden bg-ink"
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
          poster=""
          aria-hidden
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
      </div>

      {/* Overlays: warm top film, evergreen darkening at foot, side vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(27,30,27,0.32) 0%, rgba(27,30,27,0.02) 22%, rgba(27,30,27,0.02) 55%, rgba(27,30,27,0.55) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-30"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(46,62,51,0.7), transparent 60%)",
        }}
        aria-hidden
      />

      {/* Top row: eyebrow */}
      <div className="relative z-10 edge mx-auto max-w-[92rem] pt-[110px] md:pt-[130px]">
        <div className="flex items-center gap-4 text-paper/85 fade-in" style={{ ["--fade-delay" as string]: "200ms" } as React.CSSProperties}>
          <span className="inline-block h-px w-8 bg-paper/60" />
          <span className="eyebrow" style={{ color: "var(--paper)" }}>
            Registered Psychologist &nbsp;·&nbsp; Est. 2023
          </span>
        </div>
      </div>

      {/* Headline block, bottom-heavy */}
      <div className="relative z-10 edge mx-auto max-w-[92rem] flex flex-col justify-end min-h-[calc(100dvh-130px)] pb-[9vh] md:pb-[7vh]">
        <h1 className="display-xl text-paper max-w-[19ch]">
          {HEADLINE_LINES.map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => {
                const delay = i++;
                return (
                  <span
                    key={`${li}-${wi}`}
                    className="stagger-word"
                    style={{ ["--i" as string]: delay } as React.CSSProperties}
                  >
                    {word}
                    {wi < line.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-14 grid gap-10 md:gap-14 md:grid-cols-[1fr_auto] md:items-end">
          <p
            className="max-w-[46ch] text-paper/90 body-lede serif-italic fade-in"
            style={{ fontFamily: "var(--font-display)", ["--fade-delay" as string]: "1100ms" } as React.CSSProperties}
          >
            Evidence-based, individualised therapy for adults navigating
            anxiety, trauma, and life&rsquo;s harder chapters. A calm, private
            space in the heart of East Fremantle.
          </p>

          <div
            className="flex flex-wrap gap-3 fade-in"
            style={{ ["--fade-delay" as string]: "1300ms" } as React.CSSProperties}
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
        className="absolute bottom-6 right-[var(--edge)] z-10 hidden md:flex items-center gap-4 text-paper/70 text-[0.72rem] tracking-[0.24em] uppercase fade-in"
        style={{ ["--fade-delay" as string]: "1500ms" } as React.CSSProperties}
      >
        <span className="opacity-90">Silas St · East Fremantle</span>
        <span className="h-px w-8 bg-paper/40" />
        <span className="opacity-90">WA</span>
      </div>
    </section>
  );
}
