import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Jacob Jones | Registered Psychologist, East Fremantle",
  description:
    "Meet Jacob Jones, registered psychologist and founder of Sage Psychological Services in East Fremantle. Murdoch-trained, with expertise in EMDR, trauma and psychodynamic therapy.",
};

/* ── HERO ───────────────────────────────────────────────────── */

function AboutHero() {
  return (
    <section className="relative bg-paper text-ink pt-[110px] md:pt-[128px] pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      <div className="edge mx-auto max-w-[92rem]">
        {/* Breadcrumb */}
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span>About</span>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">Jacob Jones</span>
          </div>
        </Reveal>

        {/* Editorial banner headline — spans full width */}
        <div className="mt-10 md:mt-12">
          <Reveal delay={60}>
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block h-px w-10 md:w-16 bg-moss/60" />
              <span
                className="serif-italic text-moss"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(0.95rem, 1.05vw, 1.1rem)",
                }}
              >
                About the psychologist
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="leading-[0.94] max-w-full"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.25rem, 8.4vw, 8.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Meet Jacob{" "}
              <span className="serif-italic">Jones</span>.
            </h1>
          </Reveal>

          {/* Credentials line — sits directly under the banner headline */}
          <Reveal delay={160}>
            <p
              className="mt-8 md:mt-10 serif-italic text-ink max-w-full leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 1.7vw, 1.75rem)",
              }}
            >
              Registered Psychologist &nbsp;·&nbsp; BA (Psych), GradDip
              (Psych) &nbsp;·&nbsp; Founder of Sage Psychological Services
            </p>
          </Reveal>
        </div>

        {/* Editorial split: photo left, collaborative intro + CTAs right */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          {/* Left · Photo */}
          <Reveal delay={200} className="lg:col-span-5 min-w-0">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-linen shadow-[0_24px_60px_-24px_rgba(20,22,20,0.28)]">
                <Image
                  src="/img/jacob.webp"
                  alt="Jacob Jones, registered psychologist and founder of Sage Psychological Services"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </figure>
          </Reveal>

          {/* Right · Collaborative approach + CTAs */}
          <div className="lg:col-span-7 min-w-0 lg:pt-4">
            <Reveal delay={240}>
              <h2
                className="max-w-full leading-[1.05]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                A collaborative,{" "}
                <span className="serif-italic">non-judgemental</span> approach.
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={300}
              className="mt-8 body-lede prose-sage max-w-full"
            >
              My name is Jacob, and I am a registered psychologist working with
              adults across a wide range of psychological concerns, including
              anxiety, depression, trauma, addiction, and grief. My approach is
              compassionate, non-judgemental, and empathetic, and it centres on
              collaboration. I see my role not as telling you what to do, but
              as working alongside you to understand what is happening and to
              help you get the most out of our sessions together. Every person
              arrives with a unique history, and I believe therapy should
              honour that rather than force it into a fixed template.
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 h-px w-16 bg-ink/25" />
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book a Session with Jacob <Arrow />
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S1 · Collaborative, non-judgemental approach ───────────── */

function CollaborativeApproach() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[68rem]">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            A collaborative,{" "}
            <span className="serif-italic">non-judgemental</span> approach.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={80}
          className="mt-10 md:mt-12 body-lede prose-sage max-w-full"
        >
          My name is Jacob, and I am a registered psychologist working with
          adults across a wide range of psychological concerns, including
          anxiety, depression, trauma, addiction, and grief. My approach is
          compassionate, non-judgemental, and empathetic, and it centres on
          collaboration. I see my role not as telling you what to do, but as
          working alongside you to understand what is happening and to help
          you get the most out of our sessions together. Every person arrives
          with a unique history, and I believe therapy should honour that
          rather than force it into a fixed template.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S2 · Training and Experience ───────────────────────────── */

function TrainingExperience() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left · Prose */}
          <div className="lg:col-span-7 min-w-0">
            <Reveal>
              <h2
                className="max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Training and{" "}
                <span className="serif-italic">experience</span>.
              </h2>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6 body-lede prose-sage max-w-full">
              <Reveal as="p" delay={80} className="max-w-full">
                I graduated from Murdoch University in 2018 with a
                bachelor&rsquo;s degree spanning Cognitive Neuroscience and
                Health Psychology alongside Social and Developmental
                Psychology. I went on to complete a Postgraduate Diploma in
                Psychology in 2019. Since then, my work has taken me across
                several settings that continue to shape how I practise today.
              </Reveal>

              <Reveal as="p" delay={140} className="max-w-full">
                I have extensive experience as a support worker for clients
                with neurodivergence and traumatic brain injuries, work that
                taught me patience, adaptability, and the value of meeting
                people exactly where they are. During my provisional
                registration I completed two years of therapeutic counselling
                before moving into the occupational rehabilitation and
                unemployment sectors. There I assessed and supported clients
                experiencing workplace injury, both physical and
                psychological, as well as the many psychosocial barriers that
                can stand between a person and a stable, meaningful life.
              </Reveal>
            </div>
          </div>

          {/* Right · Credentials card */}
          <Reveal delay={160} className="lg:col-span-5 min-w-0 lg:sticky lg:top-28">
            <div className="rounded-[20px] bg-paper border border-ink/8 p-7 md:p-8">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss mb-6">
                Credentials at a glance
              </div>

              <ul className="flex flex-col">
                <li className="py-5 border-t border-ink/10">
                  <div className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60 mb-2">
                    Registration
                  </div>
                  <div
                    className="leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                    }}
                  >
                    Registered Psychologist
                  </div>
                  <div className="mt-1 text-[0.92rem] opacity-75">
                    AHPRA PSY0002462461
                  </div>
                </li>

                <li className="py-5 border-t border-ink/10">
                  <div className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60 mb-2">
                    Education
                  </div>
                  <div
                    className="leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                    }}
                  >
                    BA (Psychology) &nbsp;·&nbsp; GradDip (Psychology)
                  </div>
                  <div className="mt-1 text-[0.92rem] opacity-75">
                    Murdoch University &nbsp;·&nbsp; 2018 &amp; 2019
                  </div>
                </li>

                <li className="py-5 border-t border-ink/10">
                  <div className="text-[0.72rem] tracking-[0.18em] uppercase opacity-60 mb-2">
                    Practice
                  </div>
                  <div
                    className="leading-tight"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                    }}
                  >
                    Sage Psychological Services
                  </div>
                  <div className="mt-1 text-[0.92rem] opacity-75">
                    Founded 2023 &nbsp;·&nbsp; East Fremantle, WA
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── S3 · Finding my focus (evergreen + image bg) ───────────── */

function FindingMyFocus() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/still-lake.jpg"
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
            Finding my focus.{" "}
            <span className="serif-italic">Trauma and the deeper picture</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 flex flex-col gap-7 body-lede text-paper max-w-full">
          <Reveal
            as="p"
            delay={80}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            During my postgraduate thesis I was introduced to trauma-focused
            therapy, and to{" "}
            <Link
              href="/emdr-therapy-perth"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Eye Movement Desensitisation and Reprocessing (EMDR)
            </Link>{" "}
            in particular. Under the mentorship of my supervisor, I developed
            a lasting passion for psychodynamic therapy and for looking beyond
            a client&rsquo;s presenting issue to the underlying mechanisms
            that drive it. I came to believe that lasting change rarely comes
            from addressing symptoms alone. It comes from understanding why
            those symptoms took hold in the first place.
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="max-w-full"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
          >
            That conviction still guides my work. While I have particular
            expertise in psychodynamic approaches, including EMDR and Schema
            Therapy, I draw on a range of evidence-based therapies to meet
            each client&rsquo;s needs, among them{" "}
            <Link
              href="/cbt-therapy-perth"
              style={{ color: "var(--paper)" }}
              className="font-medium"
            >
              Cognitive Behaviour Therapy (CBT)
            </Link>
            , Dialectical Behaviour Therapy (DBT), and Exposure and Response
            Prevention (ERP).
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/* ── S4 · Why Sage (triptych) ───────────────────────────────── */

const SAGE_MEANINGS: { title: string; body: string }[] = [
  {
    title: "A protective herb",
    body:
      "Sage is a protective herb, long associated with cleansing, healing, and purification.",
  },
  {
    title: "A word for wisdom",
    body: "Sage is a word for wisdom, insight, and experience.",
  },
  {
    title: "A colour of peace and growth",
    body: "Sage, as a colour, communicates peace and growth.",
  },
];

function WhySage() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
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
              Why{" "}
              <span className="serif-italic">&ldquo;Sage&rdquo;</span>.
            </h2>
          </Reveal>

          <Reveal
            as="p"
            delay={80}
            className="mt-8 body-lede prose-sage max-w-full"
          >
            I founded Sage Psychological Services in 2023. I wanted to create
            a space that felt welcoming and comfortable, where clients could
            feel safe and at ease, and I wanted a name that reflected that
            vision. I chose Sage because it carries several meanings, each of
            which speaks to what therapy is meant to be.
          </Reveal>
        </div>

        {/* Triptych — constrained to intro paragraph width */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 max-w-[68rem] mx-auto">
          {SAGE_MEANINGS.map((m, i) => (
            <Reveal key={m.title} delay={i * 120}>
              <div className="h-full flex flex-col gap-4 p-8 md:p-9 rounded-[16px] bg-paper-soft border border-ink/8">
                <h3
                  className="max-w-full leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.1vw, 2rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {m.title}
                </h3>
                <p className="text-[1rem] leading-relaxed opacity-85">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          delay={80}
          className="mt-14 md:mt-16 body-lede max-w-[68ch] mx-auto text-center prose-sage"
        >
          Those are all essential pillars of good therapy, which made Sage the
          natural name for a practice built around holistic, individualised
          care. At Sage there is no one-size-fits-all approach. Every person
          brings a unique history, set of challenges, and set of goals, and
          therapy is tailored accordingly.
        </Reveal>
      </div>
    </section>
  );
}

/* ── S5 · Work With Jacob CTA ───────────────────────────────── */

function WorkWithJacob() {
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
            Work with{" "}
            <span className="serif-italic">Jacob</span>.
          </h2>
        </Reveal>

        <Reveal
          as="p"
          delay={140}
          className="body-lede max-w-[60ch] text-paper prose-sage"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
        >
          If my approach resonates with you, I would be glad to hear from you.
          You can{" "}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book a session
          </Link>{" "}
          directly, or{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            get in touch
          </Link>{" "}
          with any questions first. If you would like to know how sessions
          work and what to expect, the{" "}
          <Link
            href="/how-therapy-works"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            what to expect
          </Link>{" "}
          page explains the process in full.
        </Reveal>

        <Reveal delay={220} className="flex flex-wrap gap-3 justify-center">
          <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
            Book a Session with Jacob <Arrow />
          </Link>
          <Link href="/contact" className="btn btn-on-video-ghost">
            Get in touch
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── PAGE ───────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <AboutHero />
        <TrainingExperience />
        <FindingMyFocus />
        <WhySage />
        <WorkWithJacob />
      </main>
      <Footer />
    </>
  );
}
