import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trauma Therapy Perth | Trauma Counselling | Sage",
  description:
    "Compassionate, evidence-based trauma therapy in East Fremantle with registered psychologist Jacob Jones, including EMDR. Support for PTSD and distressing experiences.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function TraumaHero() {
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
            <span className="text-evergreen">Trauma Therapy</span>
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
              Trauma Therapy{" "}
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
              Difficult experiences can leave a lasting mark, but they do not
              have to define your future. Gentle, evidence-based trauma
              support in East Fremantle.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book an Appointment <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask about trauma therapy
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Understanding Trauma ──────────────────────────────── */

function UnderstandingTrauma() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/autumn-leaves.jpg"
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
            Understanding <span className="serif-italic">Trauma</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Trauma is the mind and body&rsquo;s response to an experience that
            felt overwhelming, frightening, or deeply distressing. It can
            follow a single event, such as an accident, assault, or sudden
            loss, or it can build over time through prolonged or repeated
            experiences. Trauma is not a sign of weakness, and its effects are
            not something you should simply be able to move past. They are a
            natural response to something profoundly difficult.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            Sometimes the effects of trauma are obvious. Often they are not.
            You might notice intrusive memories or flashbacks, disturbed
            sleep, a persistent sense of being on guard, emotional numbness,
            or a tendency to avoid anything that brings the experience to
            mind. These responses can surface long after the event itself. At
            Sage Psychological Services, registered psychologist{" "}
            <Link
              href="/about"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Jacob Jones
            </Link>{" "}
            offers a safe, unhurried space to work through trauma at a pace
            that feels manageable for you.
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · Signs Trauma May Be Affecting You ─────────────────── */

const TRAUMA_SIGNS: string[] = [
  "Intrusive memories, flashbacks, or distressing dreams",
  "Feeling constantly alert, tense, or easily startled",
  "Avoiding people, places, or conversations that are reminders",
  "Emotional numbness or feeling disconnected from others",
  "Difficulty trusting, or feeling unsafe even when you are not in danger",
  "Anxiety, low mood, or anger that feels difficult to explain",
  "A sense that a past experience is still shaping your present",
];

function SignsTraumaAffecting() {
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
              Signs trauma may be{" "}
              <span className="serif-italic">affecting you</span>.
            </h2>
          </Reveal>

          <Reveal as="p" delay={80} className="mt-8 body-lede max-w-full">
            The effects of unresolved trauma can be wide-ranging. You might
            recognise some of these:
          </Reveal>
        </div>

        <ul className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 max-w-[68rem] mx-auto">
          {TRAUMA_SIGNS.map((sign, i) => (
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
      </div>
    </section>
  );
}

/* ── S3 · How Trauma Therapy Helps ──────────────────────────── */

function HowTraumaTherapyHelps() {
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
              How trauma therapy{" "}
              <span className="serif-italic">helps</span>.
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
            Effective trauma therapy is careful, evidence-based, and always
            paced to the individual.
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {/* Card 1 · EMDR */}
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
                Eye Movement Desensitisation and Reprocessing (EMDR)
              </h3>
              <p className="body-lede prose-sage max-w-full flex-1">
                One of the most well-researched treatments for trauma is{" "}
                <Link href="/emdr-therapy-perth">
                  Eye Movement Desensitisation and Reprocessing (EMDR)
                </Link>
                , a therapy Jacob trained in during his postgraduate research
                and uses regularly in his practice. EMDR helps the brain
                reprocess distressing memories so they lose their intensity
                and settle into the past.
              </p>
              <Link
                href="/emdr-therapy-perth"
                className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link self-start"
              >
                EMDR therapy in Perth <Arrow />
              </Link>
            </div>
          </Reveal>

          {/* Card 2 · Psychodynamic / CBT */}
          <Reveal delay={120}>
            <div className="h-full flex flex-col gap-6 p-8 md:p-10 rounded-[16px] bg-paper-soft border border-ink/8 hover:border-ink/20 transition-colors">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Alongside, where helpful
              </div>
              <h3
                className="max-w-full leading-[1.15]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)",
                  letterSpacing: "-0.015em",
                }}
              >
                Psychodynamic and CBT-based approaches
              </h3>
              <p className="body-lede prose-sage max-w-full flex-1">
                Jacob also draws on psychodynamic therapy and, where helpful,{" "}
                <Link href="/cbt-therapy-perth">CBT-based</Link> approaches,
                always beginning with safety and stability before any deeper
                processing work.
              </p>
              <Link
                href="/cbt-therapy-perth"
                className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-evergreen link self-start"
              >
                CBT therapy in Perth <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="p"
          delay={80}
          className="mt-14 md:mt-16 body-lede max-w-[68ch] opacity-85"
        >
          His focus is not only on your presenting symptoms but on the
          underlying mechanisms beneath them, which is where lasting change
          tends to come from.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S4 · Support at Your Own Pace ──────────────────────────── */

function SupportAtYourPace() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <Reveal className="lg:col-span-5 min-w-0 lg:h-full">
            <div className="relative w-full h-[300px] lg:h-full lg:min-h-full overflow-hidden rounded-[16px] bg-linen">
              <Image
                src="/img/armchairs.jpg"
                alt="Two chairs facing a curtained window in soft afternoon light"
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
                Support at{" "}
                <span className="serif-italic">your own pace</span>.
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="mt-8 body-lede prose-sage max-w-full"
            >
              Beginning trauma therapy can feel daunting, and Jacob understands
              that completely. You will never be pushed to revisit anything
              before you are ready. The early work focuses on building trust
              and a sense of safety, so that when you do begin to process
              difficult experiences, you do so from stable ground. This is
              collaborative work, led by you, in a private and supportive
              setting. For clients who find attending in person difficult,
              Jacob also offers{" "}
              <Link href="/telehealth-psychologist-perth">
                telehealth sessions
              </Link>{" "}
              across Western Australia.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S5 · Begin Trauma Therapy CTA ──────────────────────────── */

function BeginTrauma() {
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
            className="max-w-[24ch] text-paper leading-[1.02]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Begin trauma therapy{" "}
            <span className="serif-italic">in East Fremantle</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[58ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          Healing from trauma is possible, and you do not have to face it
          alone. When you feel ready, Jacob is here to help. You can{" "}
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
          to talk through whether trauma therapy is right for you.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
            Book an Appointment <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Ask about trauma therapy
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function TraumaTherapyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Trauma Therapy", url: "/trauma-therapy-perth" },
      ])} />
      <Header alwaysSolid />
      <main>
        <TraumaHero />
        <UnderstandingTrauma />
        <SignsTraumaAffecting />
        <HowTraumaTherapyHelps />
        <SupportAtYourPace />
        <BeginTrauma />
      </main>
      <Footer />
    </>
  );
}
