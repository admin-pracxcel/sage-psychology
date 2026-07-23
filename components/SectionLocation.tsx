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
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-y-12 md:gap-x-20 items-start">
          <div>
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
              <Link
                href="https://maps.apple.com/?q=7B+Silas+Street+East+Fremantle+WA+6158"
                className="btn btn-ghost"
                target="_blank"
                rel="noreferrer"
              >
                Get directions <Arrow />
              </Link>
              <Link
                href="/telehealth-psychologist-perth"
                className="btn btn-ghost"
              >
                Telehealth in WA
              </Link>
            </Reveal>
          </div>

          <Reveal delay={140} className="md:mt-3">
            <address className="not-italic display-md leading-[1.15] max-w-[18ch]">
              7B Silas Street
              <br />
              East Fremantle
              <br />
              <span className="serif-italic opacity-75">WA 6158</span>
            </address>
            <div className="mt-8 flex flex-col gap-1 body-lede">
              <a href="tel:0480425776" className="link font-medium">
                0480 425 776
              </a>
              <span className="opacity-75 text-[0.95rem]">
                By appointment only
              </span>
            </div>

            {/* Google Maps embed */}
            <div className="mt-10 relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-linen border border-ink/10">
              <iframe
                src="https://www.google.com/maps?q=7B+Silas+Street+East+Fremantle+WA+6158&output=embed"
                title="Map: Sage Psychological Services, 7B Silas Street, East Fremantle WA 6158"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
