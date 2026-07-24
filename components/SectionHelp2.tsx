import Reveal from "./Reveal";
import ConditionsSlider, { type ConditionCard } from "./ConditionsSlider";

const CARDS: ConditionCard[] = [
  {
    title: "Anxiety, panic, and chronic worry",
    body:
      "For anxious thinking, panic, and the kind of worry that won't settle on its own.",
    image: "/img/anxiety-woman-back-step-morning-coffee.webp",
    alt: "A person sitting on their back step with a coffee in the morning",
    href: "/anxiety-therapy-perth",
  },
  {
    title: "Trauma and post-traumatic stress",
    body:
      "Working through post-traumatic stress and difficult past experiences at your pace.",
    image: "/img/trauma-man-walking-coastal-path-morning.webp",
    alt: "A person walking a coastal path near Fremantle in the morning",
    href: "/trauma-therapy-perth",
  },
  {
    title: "Depression and persistent low mood",
    body:
      "Space for persistent low mood, lost motivation, and the quieter kinds of unwell.",
    image: "/img/depression-hands-opening-curtains-morning.webp",
    alt: "Someone opening the curtains onto a bright morning",
    href: "/depression-counselling-perth",
  },
  {
    title: "Grief, loss, and bereavement",
    body:
      "Room to sit with loss and everything that surrounds it, without a timeline.",
    image: "/img/grief-two-people-garden-chairs-afternoon.webp",
    alt: "Two people sitting together in a backyard in the late afternoon",
  },
  {
    title: "Work-related stress and burnout",
    body:
      "For burnout, chronic work stress, and the moments when nothing seems to recharge you.",
    image: "/img/burnout-person-closing-laptop-desk.webp",
    alt: "Closing a laptop at the end of the working day",
  },
  {
    title: "Confidence, self-esteem, and identity",
    body:
      "For working with self-esteem, identity, and the quieter questions of who you are.",
    image: "/img/self-esteem-woman-leaving-house-doorway.webp",
    alt: "Stepping out the front door on a clear morning",
  },
  {
    title: "Relationship difficulties and interpersonal patterns",
    body:
      "For interpersonal patterns and the same kinds of difficulty that keep showing up.",
    image: "/img/relationships-two-people-kitchen-talking.webp",
    alt: "Two people talking in a kitchen in the evening",
  },
  {
    title: "Anger and emotional regulation",
    body:
      "For emotional regulation and the reactions that get in the way of the life you want.",
    image: "/img/anger-man-walking-dog-street-evening.webp",
    alt: "Walking the dog on a suburban street in the evening",
  },
  {
    title: "Alcohol, substance, and other dependencies",
    body:
      "Support for alcohol, substance, and habits that have grown bigger than they were meant to.",
    image: "/img/dependency-kitchen-bench-morning-tea.webp",
    alt: "A kitchen bench in the morning with tea and the day ahead",
  },
];

export default function SectionHelp2() {
  return (
    <section className="relative bg-paper-soft text-ink stack-y">
      <div className="edge mx-auto max-w-[92rem]">
        {/* Header */}
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

        {/* Slider */}
        <Reveal className="mt-16 md:mt-20">
          <ConditionsSlider
            cards={CARDS}
            autoIntervalMs={3000}
            arrowPosition="sides"
          />
        </Reveal>

        {/* Closing */}
        <div className="mt-8 md:mt-20 max-w-[62ch] mx-auto text-center">
          <Reveal>
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
