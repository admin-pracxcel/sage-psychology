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
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] tracking-[0.04em] uppercase font-medium backdrop-blur-md";
  const styles =
    variant === "dark"
      ? "bg-ink/55 text-paper border border-paper/20"
      : "bg-paper/95 text-ink border border-ink/8";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

export default function SectionPositioning() {
  return (
    <section id="approach" className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-7 items-stretch">
          {/* ── COLUMN 1 · Practice image + text below (narrow) ───────── */}
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
              <h3 className="display-sm leading-[1.15]">
                Inside the practice.
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed opacity-80 max-w-[28ch]">
                A calm, private space within Silas Street Specialists —
                designed to feel welcoming from the moment you arrive.
              </p>
            </div>
          </Reveal>

          {/* ── COLUMN 2 · Section heading + signature gradient card ──── */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-7 min-w-0">
            <Reveal delay={80}>
              <h2 className="display-lg leading-[0.98] max-w-[14ch]">
                A different kind of{" "}
                <span className="serif-italic">psychology practice</span>.
              </h2>
              <p className="mt-6 serif-italic text-moss text-[1.15rem] md:text-[1.3rem] leading-snug max-w-[26ch]">
                We are deliberately small. That is the point.
              </p>
            </Reveal>

            <Reveal delay={140} className="flex-1 min-h-[340px]">
              <div
                className="relative h-full overflow-hidden rounded-[10px] flex flex-col justify-between p-6 md:p-7 text-paper"
                style={{
                  background:
                    "radial-gradient(120% 90% at 25% 15%, rgba(201,164,125,0.55), transparent 55%), radial-gradient(120% 90% at 85% 100%, rgba(86,107,87,0.75), transparent 60%), linear-gradient(160deg, #3d5343 0%, #2E3E33 55%, #1e2b21 100%)",
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
                      fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
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

          {/* ── COLUMN 3 · Meet Jacob wide card, text-left / photo-right ─ */}
          <Reveal delay={200} className="md:col-span-5 min-w-0">
            <div className="relative h-full bg-paper-soft rounded-[10px] p-5 md:p-6 border border-ink/6">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-5 md:gap-6 h-full">
                {/* Text side */}
                <div className="flex flex-col justify-between gap-6 py-2 md:py-4 md:pl-3">
                  <div className="flex flex-wrap gap-2">
                    <Chip variant="light">Registered Psychologist</Chip>
                  </div>

                  <div>
                    <h3 className="display-md leading-[1.02] max-w-[12ch]">
                      Meet Jacob.
                    </h3>
                    <p className="mt-4 text-[1.02rem] leading-relaxed opacity-85 max-w-[26ch]">
                      Jacob takes the time to understand not just what you are
                      experiencing, but why — with particular expertise in{" "}
                      CBT and EMDR.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="display-sm leading-none">
                          AHPRA
                        </div>
                        <div className="mt-1 text-[0.78rem] tracking-[0.14em] uppercase opacity-65">
                          Registered
                        </div>
                      </div>
                      <div>
                        <div className="display-sm leading-none">
                          CBT · EMDR
                        </div>
                        <div className="mt-1 text-[0.78rem] tracking-[0.14em] uppercase opacity-65">
                          Trained
                        </div>
                      </div>
                    </div>

                    <Link
                      href="/about"
                      className="mt-2 inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link self-start"
                    >
                      About Jacob <Arrow />
                    </Link>
                  </div>
                </div>

                {/* Photo side (placeholder — swap for Jacob's real portrait) */}
                <div className="relative min-h-[280px] rounded-[7px] overflow-hidden bg-linen">
                  <Image
                    src="/img/window-light.jpg"
                    alt="Afternoon light through a lace curtain in the practice"
                    fill
                    sizes="(min-width: 768px) 28vw, 90vw"
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
