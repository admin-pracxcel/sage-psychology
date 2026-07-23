import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function SectionClosing() {
  return (
    <section className="relative text-paper overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wa-sunrise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,22,20,0.72) 0%, rgba(20,22,20,0.55) 45%, rgba(20,22,20,0.85) 100%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[86rem] stack-y flex flex-col items-center text-center gap-10">
        <Reveal>
          <h2 className="display-xl max-w-[18ch] text-paper">
            Taking the <span className="serif-italic">first step</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[54ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          Reaching out is often the hardest part. When you are ready, booking a
          session is straightforward, and Jacob will guide you through what to
          expect from there. If you would like to understand the process first,
          our{" "}
          <Link
            href="/how-therapy-works"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            what to expect
          </Link>{" "}
          page walks
          through your first appointment.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="/book" className="btn btn-on-video">
            Book Now <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Get in touch
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
