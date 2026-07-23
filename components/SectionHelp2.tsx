import Reveal from "./Reveal";
import ConditionsSlider, { type ConditionCard } from "./ConditionsSlider";

const CARDS: ConditionCard[] = [
  {
    title: "Anxiety, panic, and chronic worry",
    body:
      "For anxious thinking, panic, and the kind of worry that won't settle on its own.",
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
    title: "Grief, loss, and bereavement",
    body:
      "Room to sit with loss and everything that surrounds it, without a timeline.",
    image: "/img/lone-tree.jpg",
    alt: "A single tree lit by a soft sunrise across a meadow",
  },
  {
    title: "Work-related stress and burnout",
    body:
      "For burnout, chronic work stress, and the moments when nothing seems to recharge you.",
    image: "/img/meadow.jpg",
    alt: "Wildflower meadow at golden hour",
  },
  {
    title: "Confidence, self-esteem, and identity",
    body:
      "For working with self-esteem, identity, and the quieter questions of who you are.",
    image: "/img/forest-path.jpg",
    alt: "A tranquil forest path bathed in warm sunlight",
  },
  {
    title: "Relationship difficulties and interpersonal patterns",
    body:
      "For interpersonal patterns and the same kinds of difficulty that keep showing up.",
    image: "/img/olive-branches.jpg",
    alt: "Olive tree branches lit by warm evening light",
  },
  {
    title: "Anger and emotional regulation",
    body:
      "For emotional regulation and the reactions that get in the way of the life you want.",
    image: "/img/still-lake.jpg",
    alt: "Sunset reflections on a still lake surface",
  },
  {
    title: "Alcohol, substance, and other dependencies",
    body:
      "Support for alcohol, substance, and habits that have grown bigger than they were meant to.",
    image: "/img/dew-grass.jpg",
    alt: "Dew-covered grasses at sunrise",
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
          <ConditionsSlider cards={CARDS} autoIntervalMs={3000} />
        </Reveal>

        {/* Closing */}
        <div className="mt-16 md:mt-20 max-w-[62ch] mx-auto text-center">
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
