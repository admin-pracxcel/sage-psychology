import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service | Sage Psychological Services",
  description:
    "Terms governing appointments, fees, cancellations and use of the Sage Psychological Services website.",
  robots: { index: false, follow: true },
};

const SECTIONS = [
  { id: "scope", label: "About these terms" },
  { id: "services", label: "The services we provide" },
  { id: "appointments", label: "Appointments, fees & cancellations" },
  { id: "responsibilities", label: "Your part in the work" },
  { id: "website", label: "Use of this website" },
  { id: "privacy", label: "Privacy & updates" },
];

function Hero() {
  return (
    <section className="relative bg-paper text-ink pt-[124px] md:pt-[140px] pb-16 md:pb-20">
      <div className="edge mx-auto max-w-[92rem]">
        <Reveal>
          <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            <Link href="/" className="opacity-80 hover:opacity-100">
              Sage
            </Link>
            <span className="opacity-40 mx-2">/</span>
            <span className="text-evergreen">Terms of service</span>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 max-w-[58rem]">
          <Reveal delay={60}>
            <h1
              className="max-w-full leading-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5.6vw, 5rem)",
                letterSpacing: "-0.025em",
              }}
            >
              Terms of <span className="serif-italic">service</span>.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-moss text-[0.95rem]">
              Last updated: to be inserted at publication.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  kicker,
  heading,
}: {
  kicker: string;
  heading: string;
}) {
  return (
    <div>
      <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
        {kicker}
      </div>
      <h2
        className="mt-4 max-w-full leading-[1.1]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 2.6vw, 2.4rem)",
          letterSpacing: "-0.015em",
        }}
      >
        {heading}
      </h2>
    </div>
  );
}

function Body() {
  return (
    <section className="relative bg-paper text-ink pb-24 md:pb-32">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
                Contents
              </div>
              <nav className="mt-6 flex flex-col gap-3">
                {SECTIONS.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-[0.95rem] leading-snug text-ink/70 hover:text-evergreen transition-colors"
                  >
                    {String(i + 1).padStart(2, "0")} · {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-9 flex flex-col gap-16 md:gap-20">
            <section id="scope" className="scroll-mt-28">
              <SectionHeading kicker="01" heading="About these terms" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  These terms apply to your use of this website and to
                  psychological services provided by Sage Psychological
                  Services. By booking an appointment or using this site, you
                  agree to them. If anything here is unclear, please raise it
                  with us before your first session.
                </p>
              </div>
            </section>

            <section id="services" className="scroll-mt-28">
              <SectionHeading kicker="02" heading="The services we provide" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  Sage Psychological Services provides individual
                  psychological therapy to adults aged 18 and over, delivered
                  in person at East Fremantle and by secure telehealth across
                  Western Australia. Services are provided by Jacob Jones, a
                  psychologist registered with the Psychology Board of
                  Australia.
                </p>
                <p>
                  We do not provide emergency or crisis services. If you are
                  experiencing a mental health emergency, contact Lifeline on{" "}
                  <a href="tel:131114" className="link">
                    13 11 14
                  </a>
                  , Beyond Blue on{" "}
                  <a href="tel:1300224636" className="link">
                    1300 22 4636
                  </a>
                  , emergency services on{" "}
                  <a href="tel:000" className="link">
                    000
                  </a>
                  , or attend your nearest hospital emergency department.
                </p>
              </div>
            </section>

            <section id="appointments" className="scroll-mt-28">
              <SectionHeading
                kicker="03"
                heading="Appointments, fees, and cancellations"
              />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  Sessions run for approximately 50 minutes. Fees are payable
                  at the time of the appointment. Current fees, Medicare
                  rebate arrangements, and third-party funding pathways are
                  set out on our <Link href="/fees">fees and rebates</Link>{" "}
                  page and may be updated from time to time.
                </p>
                <p>
                  We ask for at least 48 hours&rsquo; notice to cancel or
                  reschedule an appointment. With less than 48 hours&rsquo;
                  notice and no reasonable explanation, a fee of 50% of the
                  consultation applies. Where an appointment is missed without
                  notice, the full consultation fee applies unless there is a
                  reasonable explanation. Third-party funders, including
                  Medicare, do not cover cancellation or non-attendance fees,
                  so these remain your responsibility. Reminder messages are
                  sent as a courtesy, and managing your appointment times
                  remains your responsibility.
                </p>
                <p>
                  If you arrive late, your session may be shortened. The full
                  fee still applies, and any rebate may be reduced
                  accordingly.
                </p>
              </div>
            </section>

            <section id="responsibilities" className="scroll-mt-28">
              <SectionHeading kicker="04" heading="Your part in the work" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  Therapy works best when it is a genuine collaboration. We
                  ask that you provide accurate information about your health
                  and circumstances, let us know about any changes to your
                  medical situation or medications, and raise any concerns
                  about your treatment so they can be addressed. You are free
                  to end therapy at any time, and we would encourage a final
                  session to close the work well where that is possible.
                </p>
              </div>
            </section>

            <section id="website" className="scroll-mt-28">
              <SectionHeading kicker="05" heading="Use of this website" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  The content on this website is provided for general
                  information only. It is not psychological advice, it is not
                  a diagnosis, and it should not be relied upon as a
                  substitute for individual professional assessment or
                  treatment. Reading this website does not create a
                  therapeutic relationship.
                </p>
                <p>
                  All content on this site, including text, images, and
                  design, remains the property of Sage Psychological Services
                  and may not be reproduced without permission. This site may
                  contain links to external resources, and we are not
                  responsible for the content or practices of third-party
                  websites.
                </p>
              </div>
            </section>

            <section id="privacy" className="scroll-mt-28">
              <SectionHeading
                kicker="06"
                heading="Privacy and updates to these terms"
              />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  How we handle your personal and health information is set
                  out in our <Link href="/privacy-policy">privacy policy</Link>
                  . These terms may be updated from time to time, with the
                  current version always available on this page and the date
                  of the most recent update shown at the top.
                </p>
                <p>
                  If you have any questions about these terms, please{" "}
                  <Link href="/contact">get in touch</Link>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <Header alwaysSolid />
      <main>
        <Hero />
        <Body />
      </main>
      <Footer />
    </>
  );
}
