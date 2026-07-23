import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow, Sprig } from "./Icons";

export default function SectionClosing() {
  return (
    <section className="relative text-paper overflow-hidden">
      {/* Background sunrise image */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wa-sunrise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Strong ink overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,22,20,0.75) 0%, rgba(20,22,20,0.55) 45%, rgba(20,22,20,0.85) 100%)",
          }}
        />
        {/* Evergreen wash for warmth */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 100%, rgba(46,62,51,0.55), transparent 60%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[92rem] stack-y flex flex-col items-center text-center gap-12">
        <Reveal className="flex items-center gap-4 text-brass-soft">
          <span className="chapter-mark">N&deg; 06</span>
          <span className="eyebrow" style={{ color: "var(--brass-soft)" }}>
            Taking the first step
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display-xl max-w-[16ch] text-paper">
            When you are <span className="serif-italic">ready</span>,
            <br />
            we are here.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={180}
          className="body-lede max-w-[52ch] text-paper/95 prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          Reaching out is often the hardest part. Booking a session is
          straightforward, and Jacob will guide you through what to expect from
          there. If you would like to understand the process first, our{" "}
          <Link href="/how-therapy-works">what to expect</Link> page walks
          through your first appointment.
        </Reveal>

        <Reveal delay={260} className="flex flex-wrap gap-3 justify-center">
          <Link href="/book" className="btn btn-on-video">
            Book Now <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Get in touch
          </Link>
        </Reveal>

        <Reveal delay={340} className="mt-4 text-brass-soft">
          <Sprig />
        </Reveal>
      </div>
    </section>
  );
}
