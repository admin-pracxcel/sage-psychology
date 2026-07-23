import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const APPROACHES = [
  {
    name: "Cognitive Behaviour Therapy (CBT)",
    href: "/cbt-therapy-perth",
    linkLabel: "CBT therapy in Perth",
    body: (
      <>
        A structured, practical, and well-researched approach that helps you
        recognise and shift the thought and behaviour patterns keeping you
        stuck. CBT is a first-line treatment for anxiety and depression.
      </>
    ),
  },
  {
    name: "Eye Movement Desensitisation and Reprocessing (EMDR)",
    href: "/emdr-therapy-perth",
    linkLabel: "EMDR therapy in Perth",
    body: (
      <>
        A specialised, evidence-based therapy for trauma that helps the brain
        reprocess distressing memories so they lose their grip. EMDR is one of
        Jacob&rsquo;s core areas of training.
      </>
    ),
  },
];

export default function SectionApproaches() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      {/* Ambient botanical wash, low opacity */}
      <div
        className="absolute inset-y-0 right-0 w-[42vw] md:w-[36vw] max-w-[520px] pointer-events-none"
        aria-hidden
      >
        <Image
          src="/img/eucalyptus.jpg"
          alt=""
          fill
          sizes="40vw"
          className="object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(46,62,51,1) 0%, rgba(46,62,51,0.65) 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[86rem]">
        <div className="max-w-full">
          <Reveal as="h2" className="display-lg max-w-full">
            Our therapeutic{" "}
            <span className="serif-italic">approaches</span>.
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="mt-8 body-lede max-w-full text-paper"
          >
            At Sage we believe therapy is not a one-size-fits-all solution. We
            take a personalised approach that draws on several evidence-based
            modalities to create the right programme for you. Our two areas of
            particular focus are:
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-y-14 md:gap-x-16">
          {APPROACHES.map((a, i) => (
            <Reveal
              key={a.href}
              delay={i * 120}
              className="flex flex-col gap-7 border-t border-paper/25 pt-10"
            >
              <h3
                className="max-w-full text-paper leading-[1.15] text-[28px] md:text-[36px]"
                style={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-0.015em",
                }}
              >
                {a.name}
              </h3>
              <p className="body-lede text-paper max-w-full">{a.body}</p>
              <div>
                <Link href={a.href} className="btn btn-on-video-ghost">
                  {a.linkLabel} <Arrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          delay={200}
          className="mt-20 md:mt-28 body-lede max-w-full text-paper opacity-90"
        >
          Alongside these, Jacob draws on Schema Therapy, Dialectical Behaviour
          Therapy (DBT), Acceptance and Commitment Therapy (ACT),
          Solution-Focused Brief Therapy, and psychodynamic psychotherapy,
          selecting and blending approaches to suit your needs rather than
          fitting you to a method.
        </Reveal>
      </div>
    </section>
  );
}
