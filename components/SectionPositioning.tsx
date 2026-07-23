import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

function Chip({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  const base =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] tracking-[0.06em] uppercase font-medium backdrop-blur-md whitespace-nowrap";
  const styles =
    variant === "dark"
      ? "bg-ink/50 text-paper border border-paper/25"
      : "bg-paper/90 text-ink border border-ink/10";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

export default function SectionPositioning() {
  return (
    <section id="approach" className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        {/* Bottom-aligned bento row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-7 items-end">
          {/* ── COLUMN 1 · Practice image + text below ─────────────── */}
          <Reveal className="md:col-span-3 flex flex-col gap-5 min-w-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-linen">
              <Image
                src="/img/armchairs.jpg"
                alt="Two chairs facing a curtained window in soft afternoon light"
                fill
                sizes="(min-width: 768px) 22vw, 90vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <Chip variant="dark">The rooms</Chip>
                <Chip variant="dark">East Fremantle</Chip>
              </div>
            </div>
            <div>
              <h3
                className="leading-[1.1]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.35rem, 1.7vw, 1.75rem)",
                }}
              >
                Inside the practice.
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed opacity-80 max-w-[30ch]">
                A calm, private space within Silas Street Specialists. Designed
                to feel welcoming from the moment you arrive.
              </p>
            </div>
          </Reveal>

          {/* ── COLUMN 2 · Heading + tall gradient card (row anchor) ── */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-7 min-w-0">
            <Reveal delay={80}>
              <h2
                className="leading-[1] max-w-[16ch]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 3.8vw, 3.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                A different kind of{" "}
                <span className="serif-italic">psychology practice</span>.
              </h2>
              <p
                className="mt-5 serif-italic text-moss leading-snug max-w-[30ch]"
                style={{
                  fontSize: "clamp(1.05rem, 1.2vw, 1.25rem)",
                }}
              >
                We are deliberately small. That is the point.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div
                className="relative overflow-hidden rounded-[10px] flex flex-col justify-between p-7 md:p-8 text-paper aspect-[4/5] md:aspect-[5/6]"
                style={{
                  background:
                    "radial-gradient(120% 90% at 25% 15%, rgba(201,164,125,0.5), transparent 55%), radial-gradient(120% 90% at 85% 100%, rgba(86,107,87,0.7), transparent 60%), linear-gradient(160deg, #3d5343 0%, #2E3E33 55%, #1e2b21 100%)",
                }}
              >
                <div className="flex justify-end">
                  <Chip variant="dark">How we work</Chip>
                </div>

                <div className="flex-1 flex items-center justify-center text-center">
                  <p
                    className="serif-italic leading-[0.98] text-paper"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.6rem, 4.4vw, 3.9rem)",
                    }}
                  >
                    Shaped
                    <br />
                    around <span className="not-italic">you.</span>
                  </p>
                </div>

                <p className="text-paper/85 text-[0.72rem] tracking-[0.24em] uppercase text-center">
                  Considered · Collaborative · Unhurried
                </p>
              </div>
            </Reveal>
          </div>

          {/* ── COLUMN 3 · Meet Jacob wide card, text left / photo right ─ */}
          <Reveal delay={200} className="md:col-span-5 min-w-0">
            <div className="relative bg-paper-soft rounded-[10px] p-5 md:p-6 border border-ink/8">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.15fr] gap-5 md:gap-6">
                {/* Text side */}
                <div className="flex flex-col justify-between gap-6 py-2 md:py-3 md:pl-3">
                  <div className="flex flex-wrap gap-2">
                    <Chip variant="light">Registered Psychologist</Chip>
                  </div>

                  <div>
                    <h3
                      className="leading-[1.02] max-w-[10ch]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.2rem, 3.4vw, 3.25rem)",
                        letterSpacing: "-0.015em",
                      }}
                    >
                      Meet Jacob.
                    </h3>
                    <p className="mt-4 text-[1rem] leading-relaxed opacity-85 max-w-[26ch]">
                      Jacob takes the time to understand not just what you are
                      experiencing, but why. Particular expertise in CBT and
                      EMDR.
                    </p>
                  </div>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link self-start"
                  >
                    About Jacob <Arrow />
                  </Link>
                </div>

                {/* Photo side — placeholder until Jacob's real portrait arrives */}
                <div className="relative aspect-[4/5] rounded-[7px] overflow-hidden bg-linen">
                  <Image
                    src="/img/window-light.jpg"
                    alt="Afternoon light through a lace curtain in the practice"
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
