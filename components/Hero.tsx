import Link from "next/link";
import { Arrow } from "./Icons";

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

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,22,20,0.45) 0%, rgba(20,22,20,0.12) 22%, rgba(20,22,20,0.08) 42%, rgba(20,22,20,0.55) 72%, rgba(20,22,20,0.82) 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,22,20,0.28) 0%, rgba(20,22,20,0.04) 55%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 edge mx-auto max-w-[92rem] flex flex-col justify-end h-full pb-[9vh] md:pb-[8vh] pt-[110px]">
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
    </section>
  );
}
