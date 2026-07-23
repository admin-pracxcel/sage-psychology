import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function SectionPositioning() {
  return (
    <section id="approach" className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[68rem]">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            A different kind of{" "}
            <span className="serif-italic">psychology practice</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede prose-sage max-w-full">
          <Reveal as="p" delay={80} className="max-w-full">
            Sage Psychological Services is a private psychology practice in
            East Fremantle, offering thoughtful, individualised care to adults
            across the Fremantle and wider Perth community. We are deliberately
            small. That is the point.
          </Reveal>

          <Reveal as="p" delay={140} className="max-w-full">
            When you come to Sage you work directly with{" "}
            <Link href="/about">Jacob Jones</Link>, a registered psychologist
            who takes the time to understand not just what you are
            experiencing, but why. There is no revolving door of practitioners
            and no one-size-fits-all programme. There is simply a considered,
            collaborative approach shaped around your history, your goals, and
            the pace that feels right for you.
          </Reveal>

          <Reveal as="p" delay={200} className="max-w-full">
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

        <Reveal delay={260} className="mt-12 md:mt-14 flex justify-center">
          <Link href="/book" className="btn btn-primary">
            Book an appointment <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
