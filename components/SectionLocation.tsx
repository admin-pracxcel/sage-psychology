import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function SectionLocation() {
  return (
    <section className="relative bg-paper-soft text-ink overflow-hidden">
      <Reveal className="relative w-full aspect-[16/8] md:aspect-[21/8] overflow-hidden">
        <Image
          src="/img/fremantle-coast.jpg"
          alt="Coastal path at South Fremantle at dusk"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(233,225,203,0.75) 100%)",
          }}
        />
      </Reveal>

      <div className="edge mx-auto max-w-[86rem] stack-y">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-y-12 md:gap-x-20 items-stretch">
          {/* Left · content */}
          <div className="flex flex-col">
            <Reveal>
              <h2 className="display-lg max-w-[16ch]">
                Serving East Fremantle{" "}
                <span className="serif-italic">and</span> greater Perth.
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={80}
              className="mt-8 body-lede max-w-[52ch] prose-sage"
            >
              Sage is located at 7B Silas Street, East Fremantle, WA 6158,
              within easy reach of Fremantle, Melville, Cockburn, and the
              surrounding suburbs. For clients further afield or those who
              prefer the comfort of home, Jacob also offers{" "}
              <Link href="/telehealth-psychologist-perth">
                telehealth psychology sessions
              </Link>{" "}
              across Western Australia.
            </Reveal>

            <Reveal
              delay={140}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="tel:0480425776" className="btn btn-primary">
                Call 0480 425 776 <Arrow />
              </a>
              <Link
                href="/telehealth-psychologist-perth"
                className="btn btn-ghost"
              >
                Telehealth in WA
              </Link>
            </Reveal>
          </div>

          {/* Right · Map, matches left column height */}
          <Reveal delay={140} className="md:h-full min-h-[360px]">
            <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-linen border border-ink/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3511752519075!2d115.7639976!3d-32.04207529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a3f56b6e453d%3A0x8d1b1ffa8b307549!2sSage%20Psychological%20Services!5e0!3m2!1sen!2sin!4v1786587009169!5m2!1sen!2sin"
                title="Map: Sage Psychological Services, 7B Silas Street, East Fremantle WA 6158"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
