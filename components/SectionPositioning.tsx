import Link from "next/link";
import Reveal from "./Reveal";

export default function SectionPositioning() {
  return (
    <section
      id="approach"
      className="relative bg-paper text-ink stack-y"
    >
      <div className="edge mx-auto max-w-[68rem] flex flex-col items-center text-center">
        <Reveal>
          <h2 className="display-lg max-w-[18ch] mx-auto leading-[1.02]">
            A different kind of{" "}
            <span className="serif-italic">psychology practice</span>.
          </h2>
        </Reveal>

        <Reveal delay={90} className="mt-10 md:mt-12">
          <p className="display-sm serif-italic max-w-[28ch] mx-auto text-moss leading-[1.25]">
            We are deliberately small. That is the point.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede prose-sage max-w-[60ch] text-left md:text-center">
          <Reveal as="p" delay={140}>
            Sage Psychological Services is a private psychology practice in
            East Fremantle, offering thoughtful, individualised care to adults
            across the Fremantle and wider Perth community.
          </Reveal>

          <Reveal as="p" delay={200}>
            When you come to Sage you work directly with{" "}
            <Link href="/about">Jacob Jones</Link>, a registered psychologist
            who takes the time to understand not just what you are
            experiencing, but why. There is no revolving door of practitioners
            and no one-size-fits-all programme. There is simply a considered,
            collaborative approach shaped around your history, your goals, and
            the pace that feels right for you.
          </Reveal>

          <Reveal as="p" delay={260}>
            Our approach draws on evidence-based treatments including{" "}
            <Link href="/cbt-therapy-perth">Cognitive Behaviour Therapy</Link>{" "}
            and{" "}
            <Link href="/emdr-therapy-perth">
              Eye Movement Desensitisation and Reprocessing (EMDR)
            </Link>
            , integrated with psychodynamic and schema-based work where it
            helps. Whether you are seeking support for the first time or
            returning to therapy after a break, you will find a space here that
            is safe, unhurried, and genuinely tailored to you.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
