import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import ConditionsSlider, {
  type ConditionCard,
} from "@/components/ConditionsSlider";

export const metadata: Metadata = {
  title: "CBT Therapy Perth | Cognitive Behaviour Therapy | Sage",
  description:
    "Evidence-based CBT in East Fremantle with registered psychologist Jacob Jones. A practical, structured therapy for anxiety, depression and more. Medicare rebates available.",
};

/* ─────────────────────────────────────────────────────────────
   HERO
────────────────────────────────────────────────────────────── */

function CbtHero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        {/* Breadcrumb */}
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span>Services</span>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">CBT Therapy</span>
          </div>
        </Reveal>

        {/* H1 + subhead + CTAs */}
        <div className="mt-10 md:mt-14 max-w-[56rem]">
          <Reveal delay={60}>
            <h1
              className="max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.75rem, 6.4vw, 5.75rem)",
                letterSpacing: "-0.025em",
              }}
            >
              CBT Therapy{" "}
              <span className="serif-italic">in Perth</span>.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p
              className="mt-8 serif-italic text-moss max-w-[52ch] leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.2rem, 1.6vw, 1.55rem)",
              }}
            >
              A practical, structured, and proven approach to changing the
              thoughts and behaviours that keep you stuck. Delivered
              one-to-one in East Fremantle.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book a CBT Session <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask about CBT
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 1 · What is CBT
────────────────────────────────────────────────────────────── */

function WhatIsCbt() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      {/* Background image + evergreen wash for readability */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/mist-forest.jpg"
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
            What is{" "}
            <span className="serif-italic">Cognitive Behaviour Therapy</span>?
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Cognitive Behaviour Therapy, or CBT, is one of the most extensively
            researched forms of psychological treatment in the world. It rests
            on a simple but powerful idea: our thoughts, feelings, and
            behaviours are connected, and by learning to recognise and reshape
            unhelpful patterns of thinking, we can change how we feel and how
            we act. Rather than dwelling indefinitely on the past, CBT focuses
            on the difficulties you are facing now and equips you with
            practical strategies you can use for the rest of your life.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            At Sage Psychological Services, CBT is delivered one-to-one by
            registered psychologist{" "}
            <Link
              href="/about"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Jacob Jones
            </Link>
            , who tailors each session to your circumstances rather than
            working through a rigid manual. The result is a structured yet
            genuinely personal course of therapy.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 · What CBT helps with
────────────────────────────────────────────────────────────── */

const CBT_HELPS_CARDS: ConditionCard[] = [
  {
    title: "Anxiety, panic, and excessive worry",
    body:
      "A first-line CBT approach for panic, chronic worry, and anxious thinking that will not switch off.",
    image: "/img/dew-grass.jpg",
    alt: "Dew-covered grasses lit by warm morning sun",
    href: "/anxiety-therapy-perth",
  },
  {
    title: "Depression and persistent low mood",
    body:
      "Working with the thought and behaviour patterns that keep low mood in place.",
    image: "/img/sunset-ocean.jpg",
    alt: "Ocean surface catching warm evening light",
    href: "/depression-counselling-perth",
  },
  {
    title: "Stress and burnout, including work-related stress",
    body:
      "Practical strategies for chronic stress, exhaustion, and the moments when nothing seems to recharge you.",
    image: "/img/meadow.jpg",
    alt: "Wildflower meadow at golden hour",
  },
  {
    title: "Low self-esteem and unhelpful core beliefs",
    body:
      "Identifying and gently reshaping the beliefs about yourself that keep you stuck.",
    image: "/img/forest-path.jpg",
    alt: "A tranquil forest path bathed in warm sunlight",
  },
  {
    title: "Sleep difficulties and rumination",
    body:
      "For nights lost to the same thoughts on repeat, and the sleep that follows.",
    image: "/img/still-lake.jpg",
    alt: "Sunset reflections on a still lake surface",
  },
  {
    title: "Phobias and avoidance patterns",
    body:
      "Structured, gradual exposure that helps you face what you have been avoiding.",
    image: "/img/autumn-leaves.jpg",
    alt: "Golden autumn leaves illuminated by soft sunlight",
  },
];

function WhatCbtHelpsWith() {
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
              What CBT can{" "}
              <span className="serif-italic">help with</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full">
            CBT is considered a first-line treatment for a number of common
            psychological concerns, and it is flexible enough to support many
            others. Jacob uses CBT, often alongside other approaches, to help
            clients experiencing:
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-20">
          <ConditionsSlider
            cards={CBT_HELPS_CARDS}
            autoIntervalMs={3000}
            arrowPosition="sides"
          />
        </Reveal>

        <Reveal
          as="p"
          delay={80}
          className="mt-8 md:mt-16 body-lede max-w-[62ch] mx-auto text-center opacity-85"
        >
          Because CBT is practical and skills-based, many clients find they
          leave therapy with a toolkit they continue to draw on long after
          their sessions end.
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 · How CBT Works at Sage
────────────────────────────────────────────────────────────── */

const PROCESS: string[] = [
  "Understanding the link between your thoughts, emotions, and behaviours.",
  "Identifying the specific patterns keeping difficulties in place.",
  "Learning and practising practical strategies between sessions.",
  "Gradually facing avoided situations in a safe, structured way.",
  "Building lasting skills to manage setbacks independently.",
];

function HowCbtWorks() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[68rem] mx-auto">
          <Reveal>
            <h2
              className="max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              How CBT{" "}
              <span className="serif-italic">works at Sage</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full prose-sage">
            CBT is a collaborative process. In your early sessions, Jacob will
            work with you to understand the challenges you are facing and to
            identify the patterns of thought and behaviour that may be
            maintaining them. From there, you will begin to test and gently
            challenge those patterns, building more balanced and helpful ways
            of thinking and responding.
          </Reveal>

          <Reveal delay={140} className="mt-14 md:mt-16">
            <p
              className="serif-italic text-moss"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.15rem, 1.4vw, 1.35rem)",
              }}
            >
              A typical course of CBT might involve:
            </p>
          </Reveal>

          <ol className="mt-8 grid gap-0">
            {PROCESS.map((step, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 80}
                className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10 py-7 md:py-8 border-t border-ink/15"
              >
                <span
                  className="text-moss"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2vw, 2.25rem)",
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.05rem] md:text-[1.15rem] leading-snug self-center max-w-full">
                  {step}
                </span>
              </Reveal>
            ))}
          </ol>

          <Reveal as="p" delay={80} className="mt-14 md:mt-16 body-lede max-w-full prose-sage">
            The pace is always set with you. Some clients find meaningful
            change within a handful of sessions, while others prefer a longer,
            deeper course of work. Jacob will discuss what is likely to suit
            you during your first appointment.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 · Why Sage for CBT
────────────────────────────────────────────────────────────── */

function WhySageCbt() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          {/* Left · Image */}
          <Reveal className="lg:col-span-5 min-w-0 lg:h-full">
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-full overflow-hidden rounded-[16px] bg-linen">
              <Image
                src="/img/sage-psychology-practice.webp"
                alt="The Sage Psychological Services consulting room in East Fremantle"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Right · Content */}
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
                Why choose Sage{" "}
                <span className="serif-italic">for CBT</span>.
              </h2>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6 body-lede prose-sage max-w-full">
              <Reveal as="p" delay={80} className="max-w-full">
                CBT is most effective in the hands of a skilled, attentive
                practitioner who can adapt it to the person in the room. At
                Sage you work directly with Jacob throughout, so your therapy
                builds on a consistent, trusting relationship. Jacob integrates
                CBT with other evidence-based approaches where it helps,
                including Schema Therapy and, for trauma,{" "}
                <Link href="/emdr-therapy-perth">EMDR</Link>, ensuring your
                treatment reflects the full picture rather than a single
                technique.
              </Reveal>

              <Reveal as="p" delay={140} className="max-w-full">
                Sessions are held in a calm, private setting in East Fremantle,
                with a low out-of-pocket fee under a Mental Health Care Plan.
                See our <Link href="/fees">fees and rebates</Link> page for
                details.
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 · Begin CBT (CTA)
────────────────────────────────────────────────────────────── */

function BeginCbt() {
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
            className="max-w-[20ch] text-paper leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Begin CBT{" "}
            <span className="serif-italic">in East Fremantle</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[54ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          If a practical, evidence-based approach sounds like the right fit,
          Jacob would be glad to help. You can{" "}
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
          with any questions about whether CBT is right for you.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
            Book a CBT Session <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Ask about CBT
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
────────────────────────────────────────────────────────────── */

export default function CbtTherapyPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <CbtHero />
        <WhatIsCbt />
        <WhatCbtHelpsWith />
        <HowCbtWorks />
        <WhySageCbt />
        <BeginCbt />
      </main>
      <Footer />
    </>
  );
}
