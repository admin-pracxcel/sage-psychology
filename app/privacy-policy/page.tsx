import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Sage Psychological Services",
  description:
    "How Sage Psychological Services collects, uses, stores and protects your personal and health information, in line with the Australian Privacy Principles.",
};

const SECTIONS = [
  { id: "commitment", label: "Our commitment" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use it" },
  { id: "disclosure", label: "Disclosure" },
  { id: "storage", label: "Storage & security" },
  { id: "website", label: "Website data" },
  { id: "rights", label: "Accessing your information" },
  { id: "complaints", label: "Complaints & contact" },
  { id: "changes", label: "Changes to this policy" },
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
            <span className="text-evergreen">Privacy policy</span>
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
              Privacy <span className="serif-italic">policy</span>.
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

function Body() {
  return (
    <section className="relative bg-paper text-ink pb-24 md:pb-32">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Sticky TOC */}
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
            <section id="commitment" className="scroll-mt-28">
              <SectionHeading kicker="01" heading="Our commitment to your privacy" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  Sage Psychological Services is committed to protecting the
                  privacy and confidentiality of your personal and health
                  information. This policy explains what information we
                  collect, why we collect it, how we use and store it, and the
                  rights you have in relation to it.
                </p>
                <p>
                  As a private health service provider, Sage Psychological
                  Services is bound by the Privacy Act 1988 (Cth) and the
                  Australian Privacy Principles, regardless of the size of the
                  practice. Health information is classified as sensitive
                  information under that Act and is afforded a higher level of
                  protection than ordinary personal information. Jacob Jones
                  is also bound by the confidentiality obligations of the
                  Psychology Board of Australia and the Australian Health
                  Practitioner Regulation Agency.
                </p>
              </div>
            </section>

            <section id="collect" className="scroll-mt-28">
              <SectionHeading kicker="02" heading="Information we collect" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  We collect only the information reasonably necessary to
                  provide safe, effective psychological care. This may
                  include:
                </p>
                <ul className="flex flex-col">
                  {[
                    "Your name, date of birth, contact details, and emergency contact",
                    "Your Medicare number, private health fund details, or third-party funding reference where relevant",
                    "Your GP's details and any referral or Mental Health Care Plan documentation",
                    "Relevant medical and mental health history, including current medications",
                    "Clinical notes recorded during and after sessions",
                    "Correspondence between you and the practice",
                    "Appointment and billing records",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="border-t border-ink/12 py-5 text-[1.05rem] leading-snug last:border-b"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Information is collected directly from you wherever
                  possible. In some circumstances, and generally with your
                  consent, we may receive information from your GP, a
                  referring practitioner, or a third-party funder such as the
                  NDIS, DVA, or an insurer.
                </p>
              </div>
            </section>

            <section id="use" className="scroll-mt-28">
              <SectionHeading kicker="03" heading="How we use your information" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  Your information is used to provide psychological services
                  to you, to maintain accurate clinical records as required by
                  professional standards, to process billing and Medicare or
                  third-party claims, and to communicate with you about
                  appointments. Where you have been referred under a Mental
                  Health Care Plan, Medicare requires that a brief progress
                  letter be provided to your referring GP. These letters
                  summarise progress and treatment direction rather than the
                  detail of session content.
                </p>
                <p>
                  We do not use your personal or health information for
                  marketing purposes, and we do not sell or trade it under any
                  circumstances.
                </p>
              </div>
            </section>

            <section id="disclosure" className="scroll-mt-28">
              <SectionHeading
                kicker="04"
                heading="When information may be disclosed"
              />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  What you discuss in session is confidential. Your
                  information will not be disclosed to any third party without
                  your consent, except in the limited circumstances permitted
                  or required by law:
                </p>
                <ul className="flex flex-col">
                  {[
                    "Where there is a serious and imminent risk to your life, health, or safety, or to that of another person",
                    "Where disclosure is required by law, including a court subpoena or a lawful order",
                    "Where there is a legal obligation to report, including mandatory reporting requirements",
                    "Where information is provided to your referring GP as part of a Mental Health Care Plan, as described above",
                    "Where you have provided express consent for information to be shared with a nominated person or organisation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="border-t border-ink/12 py-5 text-[1.05rem] leading-snug last:border-b"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Jacob will explain these exceptions to you at your first
                  session so that you understand them clearly before therapy
                  begins.
                </p>
              </div>
            </section>

            <section id="storage" className="scroll-mt-28">
              <SectionHeading
                kicker="05"
                heading="How your information is stored"
              />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  Clinical records are held securely in an encrypted practice
                  management system with access restricted to authorised
                  users. Any physical records are stored in locked facilities.
                  Digital information is protected by password controls and
                  secure backup procedures.
                </p>
                <p>
                  In line with professional and legal requirements, adult
                  clinical records are retained for a minimum of seven years
                  from the date of last contact. Once records are no longer
                  required to be retained, they are securely destroyed or
                  de-identified.
                </p>
                <p>
                  Telehealth sessions are conducted over a secure, encrypted
                  platform and are not recorded.
                </p>
              </div>
            </section>

            <section id="website" className="scroll-mt-28">
              <SectionHeading
                kicker="06"
                heading="Information collected through this website"
              />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  When you visit this website, certain technical information
                  may be collected automatically, including your IP address,
                  browser type, device information, the pages you view, and
                  how you arrived at the site. We use this information to
                  understand how the site is used and to improve it.
                </p>
                <p>
                  This site uses cookies and similar technologies, including
                  analytics and advertising tools provided by third parties
                  such as Google and Meta. These may be used to measure
                  website performance and to show relevant information to
                  people who have visited the site. This tracking is not
                  linked to your clinical records, and no health information
                  is ever shared with advertising platforms. You can control
                  or disable cookies through your browser settings, though
                  some parts of the site may not function as intended if you
                  do.
                </p>
                <p>
                  If you submit an enquiry form, the information you provide
                  is used solely to respond to your enquiry.
                </p>
              </div>
            </section>

            <section id="rights" className="scroll-mt-28">
              <SectionHeading
                kicker="07"
                heading="Accessing and correcting your information"
              />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  You have the right to request access to the personal and
                  health information we hold about you, and to request that it
                  be corrected if it is inaccurate, incomplete, or out of
                  date. Requests should be made in writing to the practice.
                  We will respond within a reasonable period, usually within
                  30 days.
                </p>
                <p>
                  In limited circumstances, access may be refused where
                  providing it would pose a serious threat to the life,
                  health, or safety of any person, or where it would
                  unreasonably affect the privacy of others. If access is
                  refused, we will explain why and discuss alternatives with
                  you, such as providing a summary or releasing records to
                  another health practitioner.
                </p>
              </div>
            </section>

            <section id="complaints" className="scroll-mt-28">
              <SectionHeading kicker="08" heading="Questions or concerns" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  If you have a question about this policy, or a concern about
                  how your information has been handled, please contact the
                  practice in the first instance so we can address it
                  directly.
                </p>
                <p>
                  Sage Psychological Services, 7B Silas Street, East Fremantle
                  WA 6158. Phone{" "}
                  <a href="tel:0480425776" className="link" data-phone>
                    0480 425 776
                  </a>
                  .
                </p>
                <p>
                  If you are not satisfied with our response, you may lodge a
                  complaint with the Office of the Australian Information
                  Commissioner at{" "}
                  <a
                    href="https://www.oaic.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    oaic.gov.au
                  </a>{" "}
                  or on 1300 363 992.
                </p>
              </div>
            </section>

            <section id="changes" className="scroll-mt-28">
              <SectionHeading kicker="09" heading="Changes to this policy" />
              <div className="mt-8 flex flex-col gap-6 body-lede max-w-[62rem]">
                <p>
                  This policy may be updated from time to time to reflect
                  changes in our practices or legal obligations. The current
                  version is always available on this page, with the date of
                  the most recent update shown at the top.
                </p>
              </div>
            </section>
          </div>
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

export default function PrivacyPolicyPage() {
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
