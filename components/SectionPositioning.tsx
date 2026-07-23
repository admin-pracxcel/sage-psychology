import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Sprig } from "./Icons";

export default function SectionPositioning() {
  return (
    <section id="approach" className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        {/* chapter marker + headline */}
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16 mb-14 md:mb-24">
          <Reveal className="flex md:flex-col items-baseline md:items-start gap-4">
            <span className="chapter-mark">N&deg; 01</span>
            <span className="eyebrow">Positioning</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-lg max-w-[20ch]">
              A different kind of{" "}
              <span className="serif-italic">psychology practice</span>.
            </h2>
          </Reveal>
        </div>

        {/* Body + image */}
        <div className="grid md:grid-cols-[220px_1fr_1fr] gap-y-14 md:gap-x-16 items-start">
          <div className="hidden md:block" aria-hidden />

          <div className="prose-sage flex flex-col gap-8 body-lede">
            <Reveal as="p">
              Sage Psychological Services is a private psychology practice in
              East Fremantle, offering thoughtful, individualised care to adults
              across the Fremantle and wider Perth community. We are
              deliberately small.{" "}
              <span className="serif-italic">That is the point.</span>
            </Reveal>

            <Reveal as="p" delay={80}>
              When you come to Sage you work directly with{" "}
              <Link href="/about">Jacob Jones</Link>, a registered psychologist
              who takes the time to understand not just what you are
              experiencing, but why. There is no revolving door of practitioners
              and no one-size-fits-all programme. There is simply a considered,
              collaborative approach shaped around{" "}
              <span className="serif-italic">your history</span>,{" "}
              <span className="serif-italic">your goals</span>, and the pace
              that feels right for you.
            </Reveal>

            <Reveal as="p" delay={160}>
              Our approach draws on evidence-based treatments including{" "}
              <Link href="/cbt-therapy-perth">Cognitive Behaviour Therapy</Link>{" "}
              and{" "}
              <Link href="/emdr-therapy-perth">
                Eye Movement Desensitisation and Reprocessing (EMDR)
              </Link>
              , integrated with psychodynamic and schema-based work where it
              helps. Whether you are seeking support for the first time or
              returning to therapy after a break, you will find a space here
              that is safe, unhurried, and genuinely tailored to you.
            </Reveal>
          </div>

          {/* Image column */}
          <Reveal delay={200} className="relative">
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-linen">
              <Image
                src="/img/armchairs.jpg"
                alt="Two chairs facing a curtained window, soft afternoon light"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(20,22,20,0.35) 100%)",
                }}
              />
            </figure>
            <figcaption className="mt-4 flex items-baseline gap-3 chapter-mark">
              <span>Fig. 01</span>
              <span className="eyebrow" style={{ color: "var(--moss)" }}>
                The Silas Street rooms
              </span>
            </figcaption>
          </Reveal>
        </div>

        <Reveal className="mt-24 md:mt-32 flex items-center gap-6 text-moss">
          <Sprig />
          <span className="eyebrow" style={{ color: "var(--moss)" }}>
            One practitioner &nbsp;·&nbsp; One conversation at a time
          </span>
        </Reveal>
      </div>
    </section>
  );
}
