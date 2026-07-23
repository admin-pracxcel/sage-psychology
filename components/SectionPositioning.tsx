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
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] tracking-[0.02em] uppercase font-medium backdrop-blur-md";
  const styles =
    variant === "dark"
      ? "bg-ink/60 text-paper border border-paper/25"
      : "bg-paper/95 text-ink border border-ink/10";
  return <span className={`${base} ${styles}`}>{children}</span>;
}

export default function SectionPositioning() {
  return (
    <section
      id="approach"
      className="relative bg-paper text-ink stack-y"
    >
      <div className="edge mx-auto max-w-[92rem]">
        {/* Header block */}
        <div className="max-w-[68rem] mx-auto text-center mb-14 md:mb-20">
          <Reveal>
            <h2 className="display-lg max-w-[18ch] mx-auto leading-[1.02]">
              A different kind of{" "}
              <span className="serif-italic">psychology practice</span>.
            </h2>
          </Reveal>
          <Reveal delay={90} className="mt-6 md:mt-8">
            <p className="display-sm serif-italic max-w-[36ch] mx-auto text-moss leading-[1.25]">
              We are deliberately small. That is the point.
            </p>
          </Reveal>
        </div>

        {/* 3-card bento grid */}
        <div className="grid gap-6 md:gap-7 md:grid-cols-3">
          {/* Card 1 — Inside the practice */}
          <Reveal className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-linen">
              <Image
                src="/img/armchairs.jpg"
                alt="Two chairs facing a curtained window in soft afternoon light"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <Chip variant="dark">The rooms</Chip>
                <Chip variant="dark">East Fremantle</Chip>
              </div>
            </div>
            <div className="pl-1">
              <h3 className="display-sm leading-[1.15]">
                Inside the practice.
              </h3>
              <p className="mt-3 body-lede prose-sage max-w-[36ch] opacity-85">
                A calm, private space within Silas Street Specialists — designed
                to feel welcoming and safe from the moment you arrive.
              </p>
            </div>
          </Reveal>

          {/* Card 2 — Signature pull, warm accent */}
          <Reveal delay={100} className="flex flex-col gap-6">
            <div
              className="relative overflow-hidden rounded-[8px] aspect-[4/5] flex flex-col justify-between p-7 md:p-8 text-paper"
              style={{
                background:
                  "radial-gradient(120% 90% at 30% 20%, rgba(181,138,92,0.55), transparent 55%), radial-gradient(100% 80% at 80% 100%, rgba(86,107,87,0.65), transparent 55%), linear-gradient(160deg, #354a3a 0%, #2E3E33 55%, #1f2c22 100%)",
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
                    fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)",
                  }}
                >
                  Shaped
                  <br />
                  around you.
                </p>
              </div>

              <p className="text-paper/80 text-[0.78rem] tracking-[0.22em] uppercase text-center">
                Considered · Collaborative · Unhurried
              </p>
            </div>
            <div className="pl-1">
              <h3 className="display-sm leading-[1.15]">
                How we work.
              </h3>
              <p className="mt-3 body-lede prose-sage max-w-[36ch] opacity-85">
                One psychologist, every session. No revolving door of
                practitioners, no one-size-fits-all programme.
              </p>
            </div>
          </Reveal>

          {/* Card 3 — Meet Jacob (placeholder until real portrait arrives) */}
          <Reveal delay={200} className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-linen">
              <Image
                src="/img/window-light.jpg"
                alt="Afternoon light through a lace curtain in the practice"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Chip variant="light">Registered Psychologist</Chip>
              </div>
            </div>
            <div className="pl-1">
              <h3 className="display-sm leading-[1.15]">Meet Jacob.</h3>
              <p className="mt-3 body-lede prose-sage max-w-[36ch] opacity-85">
                Jacob Jones takes the time to understand not just what you are
                experiencing, but why — with particular expertise in{" "}
                <Link href="/cbt-therapy-perth">CBT</Link> and{" "}
                <Link href="/emdr-therapy-perth">EMDR</Link>.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-[0.78rem] tracking-[0.12em] uppercase opacity-70">
                  AHPRA PSY0002462461
                </span>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link"
              >
                About Jacob <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
