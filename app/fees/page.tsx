import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Fees & Medicare Rebates | Sage Psychological Services",
  description:
    "Transparent psychology fees in East Fremantle. Just $78.45 out-of-pocket per session with a Mental Health Care Plan. Medicare, DVA, NDIS and private options explained.",
};

/* ── Hero ───────────────────────────────────────────────────── */

function FeesHero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-24 md:pb-28">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">Fees & Rebates</span>
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
              Fees & <span className="serif-italic">Rebates</span>.
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
              Quality psychological care should be accessible. Here is exactly
              what a session costs, and how Medicare and other rebates can help.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book Now <Arrow />
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

/* ── S1 · Fee summary ledger ────────────────────────────────── */

function FeeLedger() {
  return (
    <section className="relative bg-evergreen text-paper stack-y overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/img/eucalyptus.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(46,62,51,0.82) 0%, rgba(46,62,51,0.68) 45%, rgba(46,62,51,0.88) 100%)",
          }}
        />
      </div>

      <div className="relative edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-paper/70">
              Our session fees
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="mt-6 max-w-full leading-[1.02] text-paper"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              What a <span className="serif-italic">session costs</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div className="pb-8 border-b border-paper/20">
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-paper/60">
                    Standard consultation
                  </div>
                  <div
                    className="mt-3 leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    $180
                  </div>
                </div>

                <div className="pb-8 border-b border-paper/20">
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-paper/60">
                    Medicare rebate
                  </div>
                  <div
                    className="mt-3 leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    –$101.55
                  </div>
                  <div className="mt-3 text-paper/70 text-[0.95rem]">
                    Effective 1 July 2026, with a Mental Health Care Plan.
                  </div>
                </div>

                <div>
                  <div className="text-[0.72rem] tracking-[0.24em] uppercase text-brass-soft">
                    Your out-of-pocket
                  </div>
                  <div
                    className="mt-3 leading-none text-brass-soft"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3.6rem, 6vw, 5.5rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    $78.45
                  </div>
                  <div className="mt-3 text-paper/70 text-[0.95rem]">
                    per session, with a Mental Health Care Plan.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-7 body-lede text-paper max-w-full">
            <Reveal
              as="p"
              className="max-w-full"
              style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
            >
              Sage Psychological Services is a private billing practice
              committed to affordable, holistic mental health support. Our
              standard consultation fee is $180 per session. For clients
              accessing therapy through a Mental Health Care Plan from their
              GP, Medicare provides a rebate of $101.55 per session (effective
              1 July 2026), which brings your out-of-pocket cost to just $78.45
              per session.
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="max-w-full"
              style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
            >
              We keep the gap fee deliberately low so that consistent,
              high-quality psychological support remains within reach,
              particularly when compared with the Australian Psychological
              Society&rsquo;s recommended fee of $300 per session. Clients who
              commenced with Sage at a different rate will continue to be
              billed at their originally agreed fee.
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="serif-italic text-paper/85 max-w-full leading-snug"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem, 1.3vw, 1.3rem)",
              }}
            >
              Fees may differ when accessing services through third-party
              funders such as the NDIS, DVA, the Insurance Commission of
              Western Australia, or Workers&rsquo; Compensation, as these are
              set according to each organisation&rsquo;s current schedule. We
              will always confirm the applicable fee with you before your first
              session.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── S2 · Medicare rebate explainer ─────────────────────────── */

const MEDICARE_STEPS: { n: string; heading: string; body: string }[] = [
  {
    n: "01",
    heading: "Visit your GP",
    body: "Book a longer consultation, explain your mental health concerns, and ask about a Mental Health Care Plan. The longer appointment gives your GP adequate time to develop the plan with you.",
  },
  {
    n: "02",
    heading: "Get your plan and referral",
    body: "Your GP will complete a Mental Health Care Plan and provide a letter of referral. Please bring both documents to your first session at Sage.",
  },
  {
    n: "03",
    heading: "Attend your first six sessions",
    body: "Your GP will typically refer you for an initial six sessions with Jacob. After those six, you return to your GP for a review to access the remaining four.",
  },
  {
    n: "04",
    heading: "Receive your rebate",
    body: "Following each appointment, Sage processes the fee and lodges the Medicare claim on your behalf, with the rebate usually arriving in your nominated account within 48 hours.",
  },
];

function MedicareExplainer() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              Medicare rebates
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="mt-6 max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              How Medicare <span className="serif-italic">rebates work</span>.
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={140}
            className="mt-8 body-lede max-w-full"
          >
            Medicare offers rebates for up to 10 individual sessions per
            calendar year for eligible clients. Access begins with a
            conversation with your GP, and Sage handles the rest.
          </Reveal>
        </div>

        <ol className="mt-14 md:mt-20 flex flex-col">
          {MEDICARE_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 60}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-ink/12 py-10 md:py-14"
            >
              <div className="md:col-span-2">
                <div
                  className="leading-none text-moss"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 3vw, 2.75rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {step.n}
                </div>
              </div>
              <div className="md:col-span-4">
                <h3
                  className="max-w-full leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2vw, 1.9rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {step.heading}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="body-lede max-w-full">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── S3 · Other funding pathways ────────────────────────────── */

const PATHWAYS: { kicker: string; heading: string; body: string }[] = [
  {
    kicker: "Health fund cover",
    heading: "Private Health Insurance",
    body: "Rebates may be available through your private health fund, with the amount varying by provider and level of cover. If you would like to know your rebate before your first session, contact your health fund directly.",
  },
  {
    kicker: "Self-funded",
    heading: "Paying Privately (No Referral Needed)",
    body: "You are welcome to access our services without a Mental Health Care Plan. If you have used your rebated sessions for the year, or simply prefer to pay independently, an invoice will be generated and emailed to you after each session.",
  },
  {
    kicker: "Veterans",
    heading: "Department of Veterans' Affairs (DVA)",
    body: "We are proud to support veterans through the Department of Veterans' Affairs. If you hold a White or Gold Card, you may be eligible for psychological care at no out-of-pocket cost. With a referral from your GP, you can access up to 12 sessions initially, bulk billed to DVA at the rate outlined by DVA at the time of your appointment.",
  },
  {
    kicker: "Third-party funders",
    heading: "NDIS, Workers' Compensation, and ICWA",
    body: "If you are accessing services through the NDIS, Workers' Compensation, or the Insurance Commission of Western Australia, fees are set according to each scheme's current schedule and may differ from our private fee. Please let us know before your initial appointment so we can confirm the applicable rate and any additional details.",
  },
];

function OtherPathways() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="max-w-[62rem]">
          <Reveal>
            <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
              Other ways to access care
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2
              className="mt-6 max-w-full leading-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Beyond <span className="serif-italic">Medicare</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {PATHWAYS.map((p, i) => (
            <Reveal key={p.heading} delay={i * 60}>
              <div className="h-full flex flex-col gap-5 p-8 md:p-10 rounded-[16px] bg-paper border border-ink/8 hover:border-ink/20 transition-colors">
                <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                  {p.kicker}
                </div>
                <h3
                  className="max-w-full leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {p.heading}
                </h3>
                <p className="body-lede max-w-full flex-1">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── S4 · Cancellation policy ───────────────────────────────── */

function Cancellation() {
  return (
    <section className="relative bg-paper text-ink stack-y">
      <div className="edge mx-auto max-w-[86rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Cancellations & missed appointments
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="mt-6 max-w-full leading-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                48 hours&rsquo; <span className="serif-italic">notice</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal as="p" className="body-lede max-w-full">
              We are a busy practice, and to provide a quality service we ask
              for at least 48 hours&rsquo; notice if you need to cancel or
              postpone. With less than 48 hours&rsquo; notice and no reasonable
              explanation, a fee of 50% of the consultation applies. If you do
              not attend and provide no notice, the full consultation fee
              applies unless there is a reasonable explanation. Please note
              that third-party funders, including Medicare, do not cover late
              cancellation or missed appointment fees, so these remain your
              responsibility. We send reminder emails as a courtesy, though
              managing your appointment times remains your responsibility.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Closing CTA ────────────────────────────────────────────── */

function ReadyToBegin() {
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
            Ready to <span className="serif-italic">begin</span>.
          </h2>
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          className="mt-8 body-lede prose-sage text-paper/90 max-w-[62ch] mx-auto"
          style={{ textShadow: "0 1px 20px rgba(0,0,0,0.35)" }}
        >
          If you have your Mental Health Care Plan ready, or you would simply
          like to ask a question about fees or rebates, we are happy to help.
          You can{" "}
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
          at any time.
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer" className="btn btn-on-video">
              Book Now <Arrow />
            </Link>
            <Link href="/contact" className="btn btn-on-video-ghost">
              Ask a Question
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function FeesPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <FeesHero />
        <FeeLedger />
        <MedicareExplainer />
        <OtherPathways />
        <Cancellation />
        <ReadyToBegin />
      </main>
      <Footer />
    </>
  );
}
