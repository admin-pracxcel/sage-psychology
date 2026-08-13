import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import FaqAccordion, { type FaqItem } from "./FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Fees, Referrals & Appointments | Sage Psychological",
  description:
    "Common questions about seeing a psychologist at Sage in East Fremantle: referrals, Medicare rebates, session length, confidentiality and cancellations. Answered plainly.",
};

/* ── Data ───────────────────────────────────────────────────── */

const GETTING_STARTED: FaqItem[] = [
  {
    q: "Do I need a referral to see a psychologist?",
    aText:
      "No. You are welcome to book directly without a referral and pay privately. However, if you would like to access Medicare rebates, you will need a Mental Health Care Plan and a referral letter from your GP. Booking a longer GP consultation gives them adequate time to prepare the plan with you.",
    a: (
      <p>
        No. You are welcome to book directly without a referral and pay
        privately. However, if you would like to access Medicare rebates, you
        will need a Mental Health Care Plan and a referral letter from your
        GP. Booking a longer GP consultation gives them adequate time to
        prepare the plan with you.
      </p>
    ),
  },
  {
    q: "How do I get a Mental Health Care Plan?",
    aText:
      "Make an appointment with your GP and explain what you have been experiencing. If they consider it appropriate, they will complete a Mental Health Care Plan with you and provide a referral letter. Please bring both documents to your first session at Sage so the rebate can be processed correctly. Full detail is on our fees and rebates page.",
    a: (
      <p>
        Make an appointment with your GP and explain what you have been
        experiencing. If they consider it appropriate, they will complete a
        Mental Health Care Plan with you and provide a referral letter. Please
        bring both documents to your first session at Sage so the rebate can
        be processed correctly. Full detail is on our{" "}
        <Link href="/fees">fees and rebates</Link> page.
      </p>
    ),
  },
  {
    q: "Are my concerns serious enough for therapy?",
    aText:
      "There is no threshold you need to reach. People come to therapy for acute crises and for persistent low-level difficulties that have simply gone on long enough. If something is affecting your wellbeing, your relationships, or your ability to get on with life, that is reason enough.",
    a: (
      <p>
        There is no threshold you need to reach. People come to therapy for
        acute crises and for persistent low-level difficulties that have
        simply gone on long enough. If something is affecting your wellbeing,
        your relationships, or your ability to get on with life, that is
        reason enough.
      </p>
    ),
  },
  {
    q: "Do you see children or adolescents?",
    aText:
      "Sage works exclusively with adults aged 18 and over. If you are seeking support for a young person, your GP can refer you to a psychologist who specialises in that age group.",
    a: (
      <p>
        Sage works exclusively with adults aged 18 and over. If you are
        seeking support for a young person, your GP can refer you to a
        psychologist who specialises in that age group.
      </p>
    ),
  },
];

const FEES: FaqItem[] = [
  {
    q: "How much does a session cost?",
    aText:
      "The standard consultation fee is $180. With a Mental Health Care Plan, Medicare rebates $101.55 per session, bringing your out-of-pocket cost to $78.45. This gap is deliberately kept low, well below the Australian Psychological Society's recommended fee of $300 per session.",
    a: (
      <p>
        The standard consultation fee is $180. With a Mental Health Care
        Plan, Medicare rebates $101.55 per session, bringing your
        out-of-pocket cost to $78.45. This gap is deliberately kept low, well
        below the Australian Psychological Society&rsquo;s recommended fee of
        $300 per session.
      </p>
    ),
  },
  {
    q: "How many sessions does Medicare cover?",
    aText:
      "Medicare covers up to ten individual sessions per calendar year for eligible clients. Your GP will typically refer you for six sessions initially. After those six, you return to your GP for a review to access the remaining four.",
    a: (
      <p>
        Medicare covers up to ten individual sessions per calendar year for
        eligible clients. Your GP will typically refer you for six sessions
        initially. After those six, you return to your GP for a review to
        access the remaining four.
      </p>
    ),
  },
  {
    q: "When do I receive my rebate?",
    aText:
      "Sage processes your fee and lodges the Medicare claim on your behalf after each appointment. The rebate usually appears in your nominated account within 48 hours.",
    a: (
      <p>
        Sage processes your fee and lodges the Medicare claim on your behalf
        after each appointment. The rebate usually appears in your nominated
        account within 48 hours.
      </p>
    ),
  },
  {
    q: "Can I claim through private health insurance?",
    aText:
      "Rebates may be available depending on your fund and level of cover. Amounts vary considerably between providers, so it is worth contacting your health fund directly before your first session to confirm what you can claim. Note that you cannot claim both a Medicare rebate and a private health rebate for the same session.",
    a: (
      <p>
        Rebates may be available depending on your fund and level of cover.
        Amounts vary considerably between providers, so it is worth
        contacting your health fund directly before your first session to
        confirm what you can claim. Note that you cannot claim both a
        Medicare rebate and a private health rebate for the same session.
      </p>
    ),
  },
  {
    q: "What if I am accessing services through NDIS, DVA, Workers' Compensation, or ICWA?",
    aText:
      "Fees for these pathways are set according to each organisation's current schedule and may differ from the private fee. Veterans holding a White or Gold Card can access up to twelve sessions initially with no out-of-pocket cost, bulk billed to DVA. Please let us know which pathway applies before your first appointment so we can confirm the details.",
    a: (
      <p>
        Fees for these pathways are set according to each organisation&rsquo;s
        current schedule and may differ from the private fee. Veterans
        holding a White or Gold Card can access up to twelve sessions
        initially with no out-of-pocket cost, bulk billed to DVA. Please let
        us know which pathway applies before your first appointment so we can
        confirm the details.
      </p>
    ),
  },
];

const APPOINTMENTS: FaqItem[] = [
  {
    q: "How long is a session?",
    aText:
      "Sessions run for approximately 50 minutes. If you arrive late, your session may be shorter, and the full fee still applies, with any rebate potentially reduced.",
    a: (
      <p>
        Sessions run for approximately 50 minutes. If you arrive late, your
        session may be shorter, and the full fee still applies, with any
        rebate potentially reduced.
      </p>
    ),
  },
  {
    q: "How often will I need to attend?",
    aText:
      "Most people begin weekly or fortnightly, then space appointments out as things improve. There is no fixed schedule, and Jacob will discuss what is likely to suit you at your first session. Our what to expect page explains how therapy typically progresses.",
    a: (
      <p>
        Most people begin weekly or fortnightly, then space appointments out
        as things improve. There is no fixed schedule, and Jacob will discuss
        what is likely to suit you at your first session. Our{" "}
        <Link href="/how-therapy-works">what to expect</Link> page explains
        how therapy typically progresses.
      </p>
    ),
  },
  {
    q: "What is your cancellation policy?",
    aText:
      "We ask for at least 48 hours' notice to cancel or reschedule. With less than 48 hours' notice and no reasonable explanation, 50% of the consultation fee applies. If you do not attend and give no notice, the full fee applies. Please note that Medicare and other third-party funders do not cover cancellation fees, so these remain your responsibility.",
    a: (
      <p>
        We ask for at least 48 hours&rsquo; notice to cancel or reschedule.
        With less than 48 hours&rsquo; notice and no reasonable explanation,
        50% of the consultation fee applies. If you do not attend and give no
        notice, the full fee applies. Please note that Medicare and other
        third-party funders do not cover cancellation fees, so these remain
        your responsibility.
      </p>
    ),
  },
  {
    q: "Do you offer online appointments?",
    aText:
      "Yes. Jacob offers telehealth sessions by secure video across Western Australia, and Medicare rebates apply exactly as they do for in-person appointments.",
    a: (
      <p>
        Yes. Jacob offers{" "}
        <Link href="/telehealth-psychologist-perth">telehealth sessions</Link>{" "}
        by secure video across Western Australia, and Medicare rebates apply
        exactly as they do for in-person appointments.
      </p>
    ),
  },
];

const THERAPY: FaqItem[] = [
  {
    q: "What kind of therapy do you offer?",
    aText:
      "Jacob draws on a range of evidence-based approaches, with particular focus on Cognitive Behaviour Therapy and EMDR, alongside Schema Therapy, psychodynamic psychotherapy, DBT, and ACT. Rather than applying a single method, he selects and blends approaches to suit what you are working through. Common areas of work include anxiety, trauma, depression, grief, stress, and difficulties with confidence or relationships.",
    a: (
      <>
        <p>
          Jacob draws on a range of evidence-based approaches, with particular
          focus on{" "}
          <Link href="/cbt-therapy-perth">Cognitive Behaviour Therapy</Link>{" "}
          and <Link href="/emdr-therapy-perth">EMDR</Link>, alongside Schema
          Therapy, psychodynamic psychotherapy, DBT, and ACT. Rather than
          applying a single method, he selects and blends approaches to suit
          what you are working through.
        </p>
        <p className="mt-4">
          Common areas of work include{" "}
          <Link href="/anxiety-therapy-perth">anxiety</Link>,{" "}
          <Link href="/trauma-therapy-perth">trauma</Link>,{" "}
          <Link href="/depression-counselling-perth">depression</Link>, grief,
          stress, and difficulties with confidence or relationships.
        </p>
      </>
    ),
  },
  {
    q: "Is what I say confidential?",
    aText:
      "Yes. As a registered psychologist, Jacob is bound by strict professional and legal obligations regarding your information. There are narrow legal exceptions, principally where there is a serious and imminent risk to safety, or where records are subpoenaed by a court. These will be explained clearly at your first session.",
    a: (
      <p>
        Yes. As a registered psychologist, Jacob is bound by strict
        professional and legal obligations regarding your information. There
        are narrow legal exceptions, principally where there is a serious and
        imminent risk to safety, or where records are subpoenaed by a court.
        These will be explained clearly at your first session.
      </p>
    ),
  },
  {
    q: "Will my GP be told what we discuss?",
    aText:
      "If you were referred under a Mental Health Care Plan, Jacob provides your GP with a brief progress letter after the initial sessions, as Medicare requires. These letters summarise progress and treatment direction rather than the detail of what you have discussed.",
    a: (
      <p>
        If you were referred under a Mental Health Care Plan, Jacob provides
        your GP with a brief progress letter after the initial sessions, as
        Medicare requires. These letters summarise progress and treatment
        direction rather than the detail of what you have discussed.
      </p>
    ),
  },
];

const CATEGORIES: { kicker: string; heading: string; items: FaqItem[] }[] = [
  {
    kicker: "01 · Getting started",
    heading: "Getting started",
    items: GETTING_STARTED,
  },
  { kicker: "02 · Fees & rebates", heading: "Fees and rebates", items: FEES },
  { kicker: "03 · Appointments", heading: "Appointments", items: APPOINTMENTS },
  {
    kicker: "04 · Therapy & confidentiality",
    heading: "Therapy and confidentiality",
    items: THERAPY,
  },
];

/* ── Hero ───────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">FAQ</span>
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
              Frequently asked{" "}
              <span className="serif-italic">questions</span>.
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
              Practical answers to the questions we are asked most often,
              about referrals, rebates, appointments, and what therapy
              actually involves.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book an appointment <Arrow />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Ask something else
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Categories with sticky sidebar nav ─────────────────────── */

function Categories() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky sidebar nav */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                On this page
              </div>
              <nav className="mt-6 flex flex-col gap-4">
                {CATEGORIES.map((c, i) => (
                  <a
                    key={i}
                    href={`#cat-${i}`}
                    className="text-[1rem] leading-snug text-ink/75 hover:text-evergreen transition-colors"
                  >
                    {c.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9 flex flex-col gap-20 md:gap-28">
            {CATEGORIES.map((c, i) => (
              <div key={i} id={`cat-${i}`} className="scroll-mt-28">
                <Reveal>
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                    {c.kicker}
                  </div>
                </Reveal>
                <Reveal delay={60}>
                  <h2
                    className="mt-6 max-w-full leading-[1.02]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {c.heading}
                  </h2>
                </Reveal>
                <div className="mt-10">
                  <FaqAccordion items={c.items} startIndex={-1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────────── */

function StillHaveQuestion() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/wa-sunrise.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.7) 0%, rgba(46,62,51,0.55) 50%, rgba(46,62,51,0.82) 100%)",
          }}
        />
      </div>
      <div className="relative edge mx-auto max-w-[68rem] text-center">
        <Reveal>
          <h2
            className="max-w-full leading-[1.02] text-paper"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 4.6vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Still have a <span className="serif-italic">question</span>.
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          If your question is not answered here, we are happy to help.{" "}
          <Link
            href="/contact"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            Get in touch
          </Link>{" "}
          and we will respond as soon as we can, usually within one business
          day. When you are ready, you can{" "}
          <Link
            href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--paper)" }}
            className="font-medium"
          >
            book an appointment
          </Link>{" "}
          online.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
              Book an appointment <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-on-video-ghost">
              Ask something else
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Schema markup ──────────────────────────────────────────── */

function FaqSchema() {
  const all = [...GETTING_STARTED, ...FEES, ...APPOINTMENTS, ...THERAPY];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq/#faqpage`,
    url: `${SITE_URL}/faq/`,
    mainEntity: all.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.aText },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "FAQ", url: "/faq" },
      ])} />
      <FaqSchema />
      <Header alwaysSolid />
      <main>
        <Hero />
        <Categories />
        <StillHaveQuestion />
      </main>
      <Footer />
    </>
  );
}
