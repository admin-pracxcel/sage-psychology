import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Anxiety Therapy Perth | Anxiety Psychologist | Sage",
  description:
    "Struggling with anxiety or panic? Registered psychologist Jacob Jones offers evidence-based anxiety therapy in East Fremantle, including CBT. Medicare rebates available.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function AnxietyHero() {
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
            <span className="text-evergreen">Anxiety Therapy</span>
          </div>
        </Reveal>

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
              Anxiety Therapy{" "}
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
              When worry takes over, it can feel impossible to switch off.
              Effective, evidence-based support for anxiety and panic is
              available, close to home in East Fremantle.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary">
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

/* ── S1 · Understanding Anxiety ─────────────────────────────── */

function UnderstandingAnxiety() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/meadow.jpg"
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
            Understanding <span className="serif-italic">Anxiety</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Anxiety is one of the most common reasons people seek psychological
            support, and one of the most treatable. In its everyday form,
            anxiety is a normal and even useful response that keeps us alert
            to genuine threats. It becomes a problem when it lingers,
            intensifies, and begins to intrude on daily life, when worry
            becomes constant, when the body stays braced for danger that never
            comes, or when panic strikes seemingly out of nowhere.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            If any of that sounds familiar, you are not alone, and you are not
            overreacting. Anxiety can be understood, and it can be managed. At
            Sage Psychological Services, registered psychologist{" "}
            <Link
              href="/about"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Jacob Jones
            </Link>{" "}
            works with adults to make sense of anxiety and to build practical,
            lasting ways of managing it.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · How Anxiety Can Show Up ───────────────────────────── */

const ANXIETY_SIGNS: string[] = [
  "Persistent, hard-to-control worry about everyday things",
  "A racing heart, tight chest, shortness of breath, or restlessness",
  "Panic attacks that arrive suddenly and feel overwhelming",
  "Trouble sleeping because your mind will not settle",
  "Avoiding situations, places, or people that trigger unease",
  "A constant sense of dread or feeling permanently on edge",
  "Difficulty concentrating or a mind that feels perpetually busy",
];

function HowAnxietyShowsUp() {
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
              How anxiety can{" "}
              <span className="serif-italic">show up</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full">
            Anxiety looks different from person to person. You might recognise
            some of the following:
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 max-w-[68rem] mx-auto">
          {ANXIETY_SIGNS.map((sign, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 50}
              className="border-t border-ink/15 py-6 text-[1.05rem] md:text-[1.15rem] leading-snug"
            >
              {sign}
            </Reveal>
          ))}
        </ul>

        <Reveal
          as="p"
          delay={80}
          className="mt-8 md:mt-16 body-lede max-w-[62ch] mx-auto text-center opacity-85"
        >
          Anxiety also takes more specific forms, including generalised
          anxiety, social anxiety, panic disorder, and health anxiety. Whatever
          shape yours takes, therapy can help you understand what is driving
          it and what will help.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S3 · How Therapy Helps with Anxiety ────────────────────── */

function HowTherapyHelpsAnxiety() {
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
              How therapy{" "}
              <span className="serif-italic">helps with anxiety</span>.
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-12 flex flex-col gap-7 body-lede prose-sage max-w-full">
            <Reveal as="p" delay={80} className="max-w-full">
              The most effective anxiety treatment is evidence-based and
              tailored to the individual. Jacob most often draws on{" "}
              <Link href="/cbt-therapy-perth">
                Cognitive Behaviour Therapy (CBT)
              </Link>
              , which is considered a first-line treatment for anxiety. CBT
              helps you identify the thoughts and behaviours that fuel
              anxiety, gently test the fears driving it, and build practical
              strategies for calming both mind and body.
            </Reveal>

            <Reveal as="p" delay={140} className="max-w-full">
              Where anxiety is rooted in past experiences or trauma, Jacob may
              also incorporate <Link href="/emdr-therapy-perth">EMDR</Link> or
              psychodynamic approaches to address the underlying causes rather
              than the symptoms alone. As always, the approach is shaped
              around you, and Jacob will explain what is likely to help during
              your first session.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S4 · A Calmer Relationship (image + reassurance) ───────── */

function CalmerRelationship() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <Reveal className="lg:col-span-5 min-w-0 lg:h-full">
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-full overflow-hidden rounded-[16px] bg-linen">
              <Image
                src="/img/window-light.jpg"
                alt="Warm sunlight through a lace curtain in the practice"
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
                A calmer relationship{" "}
                <span className="serif-italic">with your thoughts</span>.
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="mt-8 body-lede prose-sage max-w-full"
            >
              Therapy for anxiety is not about eliminating every worry, which
              no one can promise. It is about changing your relationship with
              anxiety so that it no longer runs the show. Many clients find
              that, with the right support, they can quieten the noise, face
              the situations they had been avoiding, and move through daily
              life with far more ease and confidence. The work is
              collaborative, paced to suit you, and grounded in approaches
              with strong evidence behind them.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S5 · First step CTA ────────────────────────────────────── */

function FirstStepAnxiety() {
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
            Take the first step{" "}
            <span className="serif-italic">toward relief</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[58ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          You do not have to keep managing anxiety on your own. When you are
          ready, Jacob is here to help. You can{" "}
          <Link
            href="/book"
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
          to ask whether therapy is right for you. If you would like to know
          what a first session involves, our{" "}
          <Link
            href="/how-therapy-works"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            what to expect
          </Link>{" "}
          page explains everything.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="/book" className="btn btn-on-video">
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

export default function AnxietyTherapyPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <AnxietyHero />
        <UnderstandingAnxiety />
        <HowAnxietyShowsUp />
        <HowTherapyHelpsAnxiety />
        <CalmerRelationship />
        <FirstStepAnxiety />
      </main>
      <Footer />
    </>
  );
}
