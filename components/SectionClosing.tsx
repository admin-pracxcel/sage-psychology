import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow, Sprig } from "./Icons";

export default function SectionClosing() {
  return (
    <section className="relative bg-ink text-paper stack-y overflow-hidden">
      {/* soft evergreen wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(46,62,51,0.7), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative edge mx-auto max-w-[92rem] flex flex-col items-center text-center gap-14">
        <Reveal className="flex items-center gap-4 text-brass-soft">
          <span className="chapter-mark">N&deg; 06</span>
          <span className="eyebrow" style={{ color: "var(--brass-soft)" }}>
            Taking the first step
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="display-xl max-w-[16ch]">
            When you are <span className="serif-italic">ready</span>,
            <br />
            we are here.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={180}
          className="body-lede max-w-[52ch] opacity-85 prose-sage"
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

        <Reveal delay={340} className="mt-6 text-brass-soft">
          <Sprig />
        </Reveal>
      </div>
    </section>
  );
}
