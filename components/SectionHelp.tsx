import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

type Card = {
  title: string;
  body: string;
  image: string;
  alt: string;
  href?: string;
};

const CARDS: Card[] = [
  {
    title: "Anxiety, panic, and chronic worry",
    body:
      "Support for anxious thinking, panic, and the kind of worry that won't settle on its own.",
    image: "/img/mist-forest.jpg",
    alt: "Warm morning light through misty forest trees",
    href: "/anxiety-therapy-perth",
  },
  {
    title: "Trauma and post-traumatic stress",
    body:
      "Working through post-traumatic stress and difficult past experiences at your pace.",
    image: "/img/autumn-leaves.jpg",
    alt: "Golden autumn leaves illuminated by soft sunlight",
    href: "/trauma-therapy-perth",
  },
  {
    title: "Depression and persistent low mood",
    body:
      "Space for persistent low mood, lost motivation, and the quieter kinds of unwell.",
    image: "/img/sunset-ocean.jpg",
    alt: "Ocean surface catching warm evening light",
    href: "/depression-counselling-perth",
  },
  {
    title: "Work-related stress and burnout",
    body:
      "For burnout, chronic work stress, and the moments when nothing seems to recharge you.",
    image: "/img/meadow.jpg",
    alt: "Wildflower meadow at golden hour",
  },
];

export default function SectionHelp() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        {/* Header block, centered, Holistic-style */}
        <div className="max-w-[52rem] mx-auto text-center">
          <Reveal>
            <div
              className="text-[0.72rem] tracking-[0.24em] uppercase text-moss mb-6"
              style={{ fontWeight: 500 }}
            >
              Support
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h2
              className="leading-[1]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              What we help{" "}
              <span className="serif-italic">with</span>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-[1.05rem] md:text-[1.12rem] leading-relaxed max-w-[58ch] mx-auto opacity-80">
              People come to Sage for many reasons, and rarely for a single,
              tidy issue. Below are some of the areas Jacob works with most
              often. If what brings you here is not listed, it is still worth
              a conversation.
            </p>
          </Reveal>
        </div>

        {/* 4-card row */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CARDS.map((card, i) => {
            const inner = (
              <>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-linen">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5">
                  <h3
                    className="leading-[1.15]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.25rem, 1.5vw, 1.55rem)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[0.98rem] leading-relaxed opacity-75 max-w-[32ch]">
                    {card.body}
                  </p>
                  {card.href && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-evergreen opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <Arrow />
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal key={i} delay={i * 90}>
                {card.href ? (
                  <Link href={card.href} className="group block">
                    {inner}
                  </Link>
                ) : (
                  <div className="group">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Remaining 5 conditions as a compact list */}
        <div className="mt-14 md:mt-18">
          <Reveal>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-3 max-w-[80rem] mx-auto">
              {[
                "Grief, loss, and bereavement",
                "Confidence, self-esteem, and identity",
                "Relationship difficulties and interpersonal patterns",
                "Anger and emotional regulation",
                "Alcohol, substance, and other dependencies",
              ].map((c) => (
                <li
                  key={c}
                  className="text-[0.95rem] leading-snug border-t border-ink/15 pt-3 opacity-85"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Closing */}
        <div className="mt-16 md:mt-20 max-w-[62ch] mx-auto text-center">
          <Reveal delay={80}>
            <p className="serif-italic text-moss text-[1.15rem] md:text-[1.3rem] leading-snug max-w-[46ch] mx-auto">
              Each of these is met with the same principle: therapy is tailored
              to the individual, drawing on the treatment approaches best
              suited to what you are working through.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
