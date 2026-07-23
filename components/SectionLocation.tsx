import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const SUBURBS = [
  "Fremantle",
  "Melville",
  "Cockburn",
  "Palmyra",
  "Bicton",
  "Attadale",
  "Applecross",
  "Perth CBD",
];

export default function SectionLocation() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y overflow-hidden">
      <div className="edge mx-auto max-w-[92rem]">
        <div className="grid md:grid-cols-[220px_1fr] gap-y-10 md:gap-x-16 mb-14 md:mb-24">
          <Reveal className="flex md:flex-col items-baseline md:items-start gap-4">
            <span className="chapter-mark">N&deg; 05</span>
            <span className="eyebrow">Location & catchment</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg max-w-[24ch]">
              Serving East Fremantle{" "}
              <span className="serif-italic">and</span> greater Perth.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-y-14 md:gap-x-16 items-start">
          {/* Left: address block */}
          <Reveal className="border-t hairline pt-10">
            <div className="chapter-mark mb-6">The rooms</div>
            <address className="not-italic display-md max-w-[20ch] leading-[1.1]">
              7B Silas Street,
              <br />
              East Fremantle
              <br />
              <span className="serif-italic opacity-80">WA 6158</span>
            </address>
            <p className="mt-8 body-lede body-quiet max-w-[42ch] prose-sage">
              Within{" "}
              <span className="serif-italic">Silas Street Specialists</span>,
              easy reach of Fremantle, Melville, Cockburn and the surrounding
              suburbs. For clients further afield or those who prefer the
              comfort of home, Jacob also offers{" "}
              <Link href="/telehealth-psychologist-perth">
                telehealth psychology sessions
              </Link>{" "}
              across Western Australia.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
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
            </div>
          </Reveal>

          {/* Right: catchment list */}
          <Reveal delay={120} className="border-t hairline pt-10">
            <div className="chapter-mark mb-6">Catchment</div>
            <ul className="grid grid-cols-2 gap-x-8">
              {SUBURBS.map((s, i) => (
                <li
                  key={s}
                  className="py-4 border-b hairline-lite text-[1.05rem] flex items-baseline gap-3"
                >
                  <span className="chapter-mark text-[0.8rem] opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 body-quiet text-[0.95rem]">
              Fifty-minute sessions. AWST. By appointment only.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
