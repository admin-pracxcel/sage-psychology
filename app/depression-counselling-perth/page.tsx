import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, medicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Depression Counselling Perth | Sage Psychological Services",
  description:
    "Support for depression and persistent low mood in East Fremantle. Registered psychologist Jacob Jones offers evidence-based therapy including CBT. Medicare rebates available.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function DepressionHero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span>Services</span>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">Depression Counselling</span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 max-w-[58rem]">
          <Reveal delay={60}>
            <h1
              className="max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6.4vw, 5.75rem)",
                letterSpacing: "-0.025em",
              }}
            >
              Depression Counselling{" "}
              <span className="serif-italic">in Perth</span>.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p
              className="mt-8 serif-italic text-moss max-w-[54ch] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 1.6vw, 1.55rem)",
              }}
            >
              When the days feel heavy and nothing seems to lift, support can
              make a genuine difference. Evidence-based therapy for depression
              in East Fremantle.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book an Appointment <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask a question
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Understanding Depression ──────────────────────────── */

function UnderstandingDepression() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/dew-grass.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.72) 0%, rgba(46,62,51,0.6) 50%, rgba(46,62,51,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[68rem]">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-center text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Understanding <span className="serif-italic">Depression</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Depression is more than a low mood or a difficult week. It is a
            persistent state that can drain the colour from things you once
            enjoyed, make ordinary tasks feel insurmountable, and convince you
            that this is simply how life is now. It can arrive after a clear
            trigger such as loss, illness, or upheaval, or it can settle in
            without any obvious cause at all. Either way, it is not a
            character flaw, and it is not something you should be able to
            simply snap out of.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Depression is also one of the most treatable psychological
            conditions. At Sage Psychological Services, registered
            psychologist{" "}
            <Link
              href="/about"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Jacob Jones
            </Link>{" "}
            works with adults across the Fremantle and Perth area to
            understand what is driving their low mood and to build a
            realistic, sustainable way forward.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · How Depression Can Show Up ────────────────────────── */

const DEPRESSION_SIGNS: string[] = [
  "Persistent sadness, emptiness, or a flat, numb feeling",
  "Loss of interest in things that used to matter to you",
  "Exhaustion that sleep does not seem to fix",
  "Difficulty concentrating, deciding, or remembering",
  "Changes in appetite, weight, or sleeping patterns",
  "Harsh self-criticism, guilt, or a sense of worthlessness",
  "Withdrawing from people, even those you care about",
  "Irritability or a short fuse that feels unlike you",
];

function HowDepressionShowsUp() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="max-w-[62rem] mx-auto text-center">
          <Reveal>
            <h2
              className="max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              How depression can{" "}
              <span className="serif-italic">show up</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full">
            Depression does not look the same in everyone, and it is not
            always obvious from the outside. Many people continue working,
            parenting, and showing up for others while quietly struggling. You
            might recognise some of the following:
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 max-w-[68rem] mx-auto">
          {DEPRESSION_SIGNS.map((sign, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 40}
              className="border-t border-ink/15 py-6 text-[1.05rem] md:text-[1.15rem] leading-snug"
            >
              {sign}
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          delay={80}
          className="mt-14 md:mt-16 body-lede prose-sage max-w-[68ch] mx-auto text-center opacity-85"
        >
          Depression often travels alongside other difficulties, particularly{" "}
          <Link href="/anxiety-therapy-perth">anxiety</Link> or unresolved{" "}
          <Link href="/trauma-therapy-perth">trauma</Link>. Part of the work
          is understanding how these pieces fit together for you specifically.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S3 · How Therapy Helps with Depression ─────────────────── */

function HowTherapyHelpsDepression() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[68rem]">
          <Reveal>
            <h2
              className="max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              How therapy{" "}
              <span className="serif-italic">helps with depression</span>.
            </h2>
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="mt-8 serif-italic text-moss leading-snug max-w-full"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 1.4vw, 1.4rem)",
            }}
          >
            Effective treatment for depression is evidence-based and shaped
            around the individual.
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {/* Card 1 · CBT */}
          <Reveal>
            <div className="h-full flex flex-col gap-6 p-8 md:p-10 rounded-[16px] bg-paper-soft border border-ink/8 hover:border-ink/20 transition-colors">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Primary approach
              </div>
              <h3
                className="max-w-full leading-[1.15]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                Cognitive Behaviour Therapy
              </h3>
              <p className="body-lede prose-sage max-w-full flex-1">
                Jacob most often draws on{" "}
                <Link href="/cbt-therapy-perth">
                  Cognitive Behaviour Therapy (CBT)
                </Link>
                , a first-line treatment that helps you recognise the thought
                patterns and behavioural cycles that keep low mood in place.
                Depression has a way of narrowing life down, and CBT works
                partly by gently widening it again, rebuilding activity,
                connection, and a sense of capability step by step.
              </p>
              <Link
                href="/cbt-therapy-perth"
                className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link self-start"
              >
                CBT therapy in Perth <Arrow />
              </Link>
            </div>
          </Reveal>

          {/* Card 2 · Psychodynamic / Schema */}
          <Reveal delay={120}>
            <div className="h-full flex flex-col gap-6 p-8 md:p-10 rounded-[16px] bg-paper-soft border border-ink/8 hover:border-ink/20 transition-colors">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Where mood runs deeper
              </div>
              <h3
                className="max-w-full leading-[1.15]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                Psychodynamic and Schema Therapy
              </h3>
              <p className="body-lede prose-sage max-w-full flex-1">
                Where low mood is rooted in earlier experiences, unmet needs,
                or long-standing patterns, Jacob also draws on psychodynamic
                therapy and Schema Therapy to explore what sits beneath the
                symptoms.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link self-start"
              >
                About Jacob&rsquo;s approach <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="p"
          delay={80}
          className="mt-14 md:mt-16 body-lede max-w-[74ch] opacity-85"
        >
          His interest has always been in the underlying mechanisms rather
          than surface presentation, and depression in particular often has
          roots worth understanding rather than simply managing.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S4 · What Progress Can Look Like ───────────────────────── */

function ProgressCanLookLike() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <Reveal className="lg:col-span-5 min-w-0 lg:h-full">
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-full overflow-hidden rounded-[16px] bg-linen">
              <Image
                src="/img/forest-path.jpg"
                alt="A tranquil forest path bathed in warm sunlight"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 min-w-0">
            <Reveal>
              <h2
                className="max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 4.2vw, 3.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                What progress{" "}
                <span className="serif-italic">can look like</span>.
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="mt-8 body-lede prose-sage max-w-full"
            >
              Recovery from depression is rarely a straight line, and any
              therapist who promises otherwise is not being straight with you.
              What therapy offers is a structured, supported process:
              understanding what is happening, learning strategies that
              genuinely help, and rebuilding momentum at a pace that is
              sustainable rather than punishing. Many people find that the
              heaviness begins to lift gradually, that small things become
              possible again, and that they develop tools they can rely on if
              low mood returns. Jacob will talk through what is realistic for
              your situation during your first session.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S5 · Crisis Support Block (MANDATORY, visible) ─────────── */

function IconPhone({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 5.5C4 4.7 4.7 4 5.5 4h2.4a1 1 0 0 1 1 .8l.9 3.6a1 1 0 0 1-.3 1L8 10.7a12 12 0 0 0 5.3 5.3l1.3-1.5a1 1 0 0 1 1-.3l3.6.9a1 1 0 0 1 .8 1v2.4c0 .8-.7 1.5-1.5 1.5A15.5 15.5 0 0 1 4 5.5Z" />
    </svg>
  );
}

const CRISIS_RESOURCES: {
  name: string;
  number: string;
  tel: string;
  note?: string;
}[] = [
  { name: "Lifeline", number: "13 11 14", tel: "131114", note: "24 hours" },
  {
    name: "Beyond Blue",
    number: "1300 22 4636",
    tel: "1300224636",
    note: "24 hours",
  },
  { name: "Emergency services", number: "000", tel: "000" },
];

function CrisisSupport() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="mx-auto max-w-[68rem] rounded-[20px] border border-moss/40 bg-paper-soft/70 p-8 md:p-12 lg:p-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-moss" aria-hidden />
              <span className="text-[0.72rem] tracking-[0.24em] uppercase text-moss font-medium">
                Immediate support
              </span>
            </div>

            <h2
              className="max-w-full leading-[1.05]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.6vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              If you need support{" "}
              <span className="serif-italic">right now</span>.
            </h2>

            <p className="mt-6 body-lede prose-sage max-w-[64ch]">
              If you are in immediate distress or having thoughts of harming
              yourself, please reach out now rather than waiting for an
              appointment. Support is available at any hour.
            </p>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CRISIS_RESOURCES.map((r) => (
                <li key={r.tel}>
                  <a
                    href={`tel:${r.tel}`}
                    className="group h-full flex flex-col gap-2 p-5 md:p-6 rounded-[14px] bg-paper border border-ink/10 hover:border-evergreen transition-colors"
                  >
                    <div className="flex items-center gap-2 text-moss">
                      <IconPhone />
                      <span className="text-[0.78rem] tracking-[0.16em] uppercase font-medium">
                        {r.name}
                      </span>
                    </div>
                    <div
                      className="mt-1 text-evergreen"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {r.number}
                    </div>
                    {r.note && (
                      <div className="text-[0.85rem] opacity-70">{r.note}</div>
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 body-lede max-w-[62ch]">
              Or head to your nearest hospital emergency department.
            </p>

            <p className="mt-8 serif-italic text-moss max-w-[62ch] leading-relaxed text-[1.08rem]">
              Reaching out in a crisis is not an overreaction. It is exactly
              what these services exist for.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── S6 · Take the First Step CTA ───────────────────────────── */

function TakeFirstStepDepression() {
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
          <h2
            className="max-w-[22ch] text-paper leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Take the{" "}
            <span className="serif-italic">first step</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[62ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          If depression has been weighing on you, a conversation is a
          reasonable place to start. You can{" "}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book a session
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            get in touch
          </Link>{" "}
          with any questions. If you would like to know what a first
          appointment involves before committing, our{" "}
          <Link
            href="/how-therapy-works"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            what to expect
          </Link>{" "}
          page walks through the process.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
            Book an Appointment <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Ask a question
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function DepressionCounsellingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Depression Counselling", url: "/depression-counselling-perth" },
      ])} />
      <JsonLd
        data={medicalWebPageSchema({
          path: "/depression-counselling-perth",
          name: "Depression Counselling in Perth",
          description:
            "Compassionate psychology for adults living with depression and low mood, in East Fremantle.",
          therapy: "Depression Counselling",
        })}
      />
      <Header alwaysSolid />
      <main>
        <DepressionHero />
        <UnderstandingDepression />
        <HowDepressionShowsUp />
        <HowTherapyHelpsDepression />
        <ProgressCanLookLike />
        <CrisisSupport />
        <TakeFirstStepDepression />
      </main>
      <Footer />
    </>
  );
}
