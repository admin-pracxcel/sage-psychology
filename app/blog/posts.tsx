import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import FaqAccordion from "@/components/FaqAccordion";

export type PostMeta = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  categoryHref: string;
  readTime: string;
  publishedAt: string;
  publishedLabel: string;
  image: string;
  imageAlt: string;
  ctaImage: string;
  ctaAlt: string;
  excerpt: string;
  linksUp: { label: string; href: string }[];
  ctaHeading: ReactNode;
  ctaBody: ReactNode;
};

/* ── Prose primitives ───────────────────────────────────────── */

export function P({ children }: { children: ReactNode }) {
  return <p className="body-lede prose-sage max-w-full">{children}</p>;
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 mt-16 md:mt-20 max-w-full leading-[1.1]"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.9rem, 2.8vw, 2.6rem)",
        letterSpacing: "-0.015em",
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3
      className="mt-10 max-w-full leading-[1.2]"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.35rem, 1.7vw, 1.6rem)",
        letterSpacing: "-0.01em",
      }}
    >
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-6 flex flex-col gap-3 pl-6 list-disc marker:text-moss body-lede">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return <li className="max-w-full">{children}</li>;
}

export function Callout({
  children,
  kicker,
}: {
  children: ReactNode;
  kicker?: string;
}) {
  return (
    <aside className="mt-10 rounded-[14px] border border-moss/30 bg-paper-soft p-7 md:p-8">
      {kicker && (
        <div className="text-[0.72rem] tracking-[0.24em] uppercase text-moss">
          {kicker}
        </div>
      )}
      <div className={`${kicker ? "mt-3" : ""} body-lede prose-sage`}>
        {children}
      </div>
    </aside>
  );
}

export function CrisisFootnote() {
  return (
    <Callout kicker="If you need support right now">
      <p>
        Please contact Lifeline on{" "}
        <a href="tel:131114" className="link">
          13 11 14
        </a>
        , Beyond Blue on{" "}
        <a href="tel:1300224636" className="link">
          1300 22 4636
        </a>
        , or emergency services on{" "}
        <a href="tel:000" className="link">
          000
        </a>
        .
      </p>
    </Callout>
  );
}

export function ComparisonTable({
  left,
  right,
  rows,
}: {
  left: string;
  right: string;
  rows: [string, string][];
}) {
  return (
    <div className="mt-10 rounded-[14px] border border-ink/12 overflow-hidden">
      <div className="grid grid-cols-2 bg-paper-soft">
        <div className="p-5 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
          {left}
        </div>
        <div className="p-5 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss">
          {right}
        </div>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-2 border-t border-ink/12 bg-paper"
        >
          <div className="p-5 md:p-6 border-r border-ink/12 text-[0.98rem] leading-snug">
            {row[0]}
          </div>
          <div className="p-5 md:p-6 text-[0.98rem] leading-snug">{row[1]}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Metadata for all 11 posts ──────────────────────────────── */

export const POSTS: PostMeta[] = [
  {
    slug: "anxiety-cycle-how-to-break-it",
    title: "The Anxiety Cycle and How to Break It",
    metaTitle: "The Anxiety Cycle Explained: 5 Stages and How to Break It",
    metaDescription:
      "The anxiety cycle can feel endless, but it's a pattern that can be changed. See the 5 stages, why avoidance keeps it going, and how to get support in Perth.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "9 min read",
    publishedAt: "2026-09-04",
    publishedLabel: "4 September 2026",
    image: "/img/anxiety-cycle-coastal-dawn-hero.webp",
    imageAlt:
      "Misty eucalyptus coastline at dawn, calm ocean and native trees",
    ctaImage: "/img/cbt-anxiety-cta-walking-fremantle-morning.webp",
    ctaAlt: "Walking a quiet Fremantle street on a clear morning",
    excerpt:
      "Anxiety often follows a repeating pattern of trigger, worry, and avoidance that brings short-term relief but keeps the cycle going. This article explains the five stages behind it, why avoidance makes anxiety harder to shake, and what evidence-based approaches can help you gradually break the pattern.",
    linksUp: [
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
    ],
    ctaHeading: (
      <>
        When the loop starts <span className="serif-italic">running your day</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety therapy
        </Link>{" "}
        in East Fremantle and by telehealth across Western Australia. A
        first session is simply a conversation about what has been going on
        and what kind of support might suit you.
      </>
    ),
  },
  {
    slug: "worry-vs-anxiety",
    title: "Worry vs Anxiety: Is There Actually a Difference?",
    metaTitle: "Worry vs Anxiety: How to Tell the Difference and What to Do",
    metaDescription:
      "Struggling to tell worry vs anxiety apart? Compare the key signs and durations, then find out when it's time to talk to a psychologist in Australia today.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "8 min read",
    publishedAt: "2026-09-02",
    publishedLabel: "2 September 2026",
    image: "/img/worry-vs-anxiety-hero-coastal-dawn.webp",
    imageAlt:
      "Misty eucalyptus coastline at dawn with soft golden light and still water",
    ctaImage: "/img/cbt-anxiety-cta-walking-fremantle-morning.webp",
    ctaAlt: "Walking a quiet Fremantle street on a clear morning",
    excerpt:
      "Worry and anxiety can feel similar, but they're not the same. This article explains the key differences, when ordinary worry may have become an anxiety disorder, and what support looks like in Australia, including Medicare rebates and how to get a referral to a psychologist.",
    linksUp: [
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
    ],
    ctaHeading: (
      <>
        When worry starts to <span className="serif-italic">feel like more</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety therapy
        </Link>{" "}
        in East Fremantle and by telehealth across Western Australia. A
        first session is simply a conversation about what has been going on
        and what kind of support might suit you.
      </>
    ),
  },
  {
    slug: "how-cbt-rewires-thinking",
    title: "How CBT Rewires Anxious Thinking, Explained Simply",
    metaTitle: "How Does CBT Work? A Perth Psychologist Explains Simply",
    metaDescription:
      "How does CBT work? See how it rewires anxious thinking step by step, what a typical course looks like, and how Medicare rebates can help cover the cost in 2026.",
    category: "Anxiety & CBT",
    categoryHref: "/cbt-therapy-perth",
    readTime: "10 min read",
    publishedAt: "2026-08-28",
    publishedLabel: "28 August 2026",
    image: "/img/how-does-cbt-work-anxious-thinking.webp",
    imageAlt: "Native Australian eucalyptus leaves in soft morning light",
    ctaImage: "/img/cbt-anxiety-cta-walking-fremantle-morning.webp",
    ctaAlt: "Walking a quiet Fremantle street on a clear morning",
    excerpt:
      "Anxious thinking can feel automatic and hard to shift. This guide explains how CBT works in plain English, what a typical course looks like, and how Medicare can help cover the cost for people across Australia.",
    linksUp: [
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
    ],
    ctaHeading: (
      <>
        When you&rsquo;re ready to <span className="serif-italic">talk it through</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/cbt-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          CBT for anxiety
        </Link>{" "}
        in East Fremantle and by telehealth across Western Australia. A
        first session is simply a conversation about what has been going on
        and whether CBT is likely to suit your situation.
      </>
    ),
  },
  {
    slug: "physical-symptoms-of-anxiety-guide",
    title: "Physical Symptoms of Anxiety You Might Not Recognise",
    metaTitle:
      "Physical Symptoms of Anxiety You Might Not Recognise Today",
    metaDescription:
      "Racing heart, jaw pain, or gut trouble? Discover the physical symptoms of anxiety many people miss, plus when to see a GP and how therapy can help you.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "8 min read",
    publishedAt: "2026-08-24",
    publishedLabel: "24 August 2026",
    image: "/img/physical-symptoms-of-anxiety-hero.webp",
    imageAlt:
      "Soft morning light through eucalyptus leaves in Australian bushland",
    ctaImage: "/img/physical-symptoms-of-anxiety-calm-notebook.webp",
    ctaAlt: "Cup of tea and open notebook on a linen surface",
    excerpt:
      "Racing heart, jaw pain, or a stomach that never settles. The physical symptoms of anxiety often go unrecognised until they are connected to the mind. Here is how to spot them, and what to do next.",
    linksUp: [
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
      { label: "Fees & Rebates", href: "/fees" },
    ],
    ctaHeading: (
      <>
        When the body <span className="serif-italic">signals first</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety therapy
        </Link>{" "}
        in East Fremantle and by telehealth across Western Australia. If
        physical symptoms have been part of what you&rsquo;re carrying, a
        first session is simply a conversation about what has been going on.
      </>
    ),
  },
  {
    slug: "generalised-anxiety-disorder-symptoms-wa",
    title: "Generalised Anxiety Disorder: When Worry Never Switches Off",
    metaTitle: "Generalised Anxiety Disorder: 7 Signs and What Helps in WA",
    metaDescription:
      "Generalised anxiety disorder makes worry impossible to switch off. See the real symptoms, treatment options, and Medicare rebate costs for support in WA today.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "9 min read",
    publishedAt: "2026-08-19",
    publishedLabel: "19 August 2026",
    image: "/img/generalised-anxiety-disorder-coastal-dawn.webp",
    imageAlt:
      "Misty coastal path at dawn evoking calm for generalised anxiety disorder",
    ctaImage: "/img/anxiety-woman-back-step-morning-coffee.webp",
    ctaAlt: "Sitting on the back step with a morning coffee",
    excerpt:
      "Persistent, hard-to-control worry that won't switch off could be generalised anxiety disorder. Here's how to tell the difference from everyday stress, what treatment involves, and how Medicare rebates work for psychology support in Perth and WA.",
    linksUp: [
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
      { label: "Fees & Rebates", href: "/fees" },
    ],
    ctaHeading: (
      <>
        When worry <span className="serif-italic">won&rsquo;t switch off</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety therapy
        </Link>{" "}
        in East Fremantle and by telehealth across Western Australia. If GAD
        might be part of the picture, a first session is simply a
        conversation about what has been going on.
      </>
    ),
  },
  {
    slug: "what-is-cbt-anxiety",
    title: "What Is CBT and How Does It Help Anxiety?",
    metaTitle: "What Is CBT and How Does It Help Anxiety? | Sage",
    metaDescription:
      "A plain-English explanation of Cognitive Behaviour Therapy, how it works for anxiety, and what actually happens in a CBT session.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "7 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/cbt-anxiety-hero-worksheet-hands-desk.webp",
    imageAlt: "Working through a CBT thought record at a desk",
    ctaImage: "/img/cbt-anxiety-cta-walking-fremantle-morning.webp",
    ctaAlt: "Walking a quiet Fremantle street on a clear morning",
    excerpt:
      "A plain-English explanation of Cognitive Behaviour Therapy: the anxiety cycle, what happens in a session, and why it is so widely recommended.",
    linksUp: [
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
    ],
    ctaHeading: (
      <>
        Is CBT right <span className="serif-italic">for you</span>?
      </>
    ),
    ctaBody: (
      <>
        At Sage Psychological Services in East Fremantle,{" "}
        <Link
          href="/cbt-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          CBT
        </Link>{" "}
        is one of the core approaches offered for{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety
        </Link>
        . If you would like to talk about whether it might suit you, you can
        book a session or get in touch with a question first.
      </>
    ),
  },
  {
    slug: "signs-see-psychologist-anxiety",
    title: "5 Signs It Might Be Time to See a Psychologist for Anxiety",
    metaTitle:
      "5 Signs It Might Be Time to See a Psychologist for Anxiety | Sage",
    metaDescription:
      "Wondering whether your anxiety warrants professional support? Five signs worth paying attention to, from a registered psychologist in East Fremantle.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "5 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/signs-anxiety-hero-declining-invitation-phone.webp",
    imageAlt: "Looking at a phone at the kitchen table in the evening",
    ctaImage: "/img/signs-anxiety-cta-front-door-stepping-out.webp",
    ctaAlt: "Stepping out the front door into the morning",
    excerpt:
      "There is no severity threshold for therapy. Five signs worth taking seriously, and the one thought that keeps most people waiting too long.",
    linksUp: [
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
      { label: "What to Expect", href: "/how-therapy-works" },
    ],
    ctaHeading: (
      <>
        When you are <span className="serif-italic">ready</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety therapy
        </Link>{" "}
        in East Fremantle and by telehealth across Western Australia. You can
        book a session, or get in touch with a question first.
      </>
    ),
  },
  {
    slug: "cbt-vs-medication-anxiety",
    title: "Therapy, Medication, or Both? Understanding Your Options for Anxiety",
    metaTitle: "Therapy, Medication, or Both for Anxiety? | Sage Psychological",
    metaDescription:
      "What the evidence says about therapy and medication for anxiety, and why the decision belongs with you and your GP. A balanced overview from a registered psychologist.",
    category: "Anxiety & CBT",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "6 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/therapy-medication-hero-writing-questions-gp.webp",
    imageAlt: "Writing down questions before a GP appointment",
    ctaImage: "/img/therapy-medication-cta-waiting-room-chairs-daylight.webp",
    ctaAlt: "Chairs in a quiet waiting area by a window",
    excerpt:
      "A balanced overview of what the research shows, so you can have a better-informed conversation with your GP. Not a recommendation either way.",
    linksUp: [
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
    ],
    ctaHeading: (
      <>
        Where therapy <span className="serif-italic">fits</span>.
      </>
    ),
    ctaBody: (
      <>
        Whatever you and your doctor decide about the medical side, the
        psychological work remains available. Jacob works alongside GPs
        regularly and is comfortable coordinating care where that is useful.
      </>
    ),
  },
  {
    slug: "how-many-therapy-sessions",
    title: "How Many Therapy Sessions Do You Actually Need?",
    metaTitle: "How Many Therapy Sessions Do You Actually Need? | Sage",
    metaDescription:
      "An honest answer to how long therapy takes, what the research suggests, and how Medicare's ten rebated sessions fit in. From a registered psychologist in Perth.",
    category: "Therapy & Getting Started",
    categoryHref: "/how-therapy-works",
    readTime: "6 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/how-many-sessions-hero-diary-one-appointment.webp",
    imageAlt: "Writing an appointment into a paper diary",
    ctaImage: "/img/how-many-sessions-cta-single-chair-window.webp",
    ctaAlt: "A chair by a window in the consulting room",
    excerpt:
      "The honest answer: it depends. Here is what it depends on, what the research suggests, and how Medicare's ten rebated sessions fit in.",
    linksUp: [
      { label: "What to Expect", href: "/how-therapy-works" },
      { label: "Fees & Rebates", href: "/fees" },
    ],
    ctaHeading: (
      <>
        Starting without <span className="serif-italic">committing</span>.
      </>
    ),
    ctaBody: (
      <>
        You do not need to decide in advance how long you will attend. Most
        people start with a first session, get a sense of the fit, and decide
        from there.
      </>
    ),
  },
  {
    slug: "what-is-emdr-therapy",
    title: "What Is EMDR Therapy and How Does It Work?",
    metaTitle: "What Is EMDR Therapy and How Does It Work? | Sage",
    metaDescription:
      "A clear explanation of EMDR therapy: what it is, the eight phases, what a session actually feels like, and what it treats.",
    category: "Trauma & EMDR",
    categoryHref: "/emdr-therapy-perth",
    readTime: "8 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/emdr-blog-cta-swan-river-morning.webp",
    imageAlt: "The Swan River from a jetty on a clear morning",
    ctaImage: "/img/wa-sunrise.jpg",
    ctaAlt: "Warm sunrise over the Western Australian coast",
    excerpt:
      "A therapy that sounds implausible until you understand the mechanism. The eight phases explained, what a session feels like, and what it treats.",
    linksUp: [
      { label: "EMDR Therapy Perth", href: "/emdr-therapy-perth" },
      { label: "Trauma Therapy Perth", href: "/trauma-therapy-perth" },
    ],
    ctaHeading: (
      <>
        Considering <span className="serif-italic">EMDR</span>.
      </>
    ),
    ctaBody: (
      <>
        If you have been carrying something that still feels present rather
        than past,{" "}
        <Link
          href="/emdr-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          EMDR
        </Link>{" "}
        is worth a conversation. Jacob works with adults on{" "}
        <Link
          href="/trauma-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          trauma
        </Link>{" "}
        in East Fremantle.
      </>
    ),
  },
  {
    slug: "signs-unresolved-trauma-adults",
    title: "Signs of Unresolved Trauma in Adults",
    metaTitle: "Signs of Unresolved Trauma in Adults | Sage Psychological",
    metaDescription:
      "Unresolved trauma does not always look like flashbacks. Common signs in adults, why they persist, and what helps. From a registered psychologist in East Fremantle.",
    category: "Trauma & EMDR",
    categoryHref: "/trauma-therapy-perth",
    readTime: "7 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/unresolved-trauma-hero-window-open-morning.webp",
    imageAlt: "A window standing open onto the morning",
    ctaImage: "/img/sage-psychology-practice.webp",
    ctaAlt: "The Sage Psychological Services consulting room in East Fremantle",
    excerpt:
      "Unresolved trauma does not always look like flashbacks. A careful, non-diagnostic look at how it can quietly shape adult life.",
    linksUp: [
      { label: "Trauma Therapy Perth", href: "/trauma-therapy-perth" },
      { label: "EMDR Therapy Perth", href: "/emdr-therapy-perth" },
    ],
    ctaHeading: (
      <>
        If this sounds <span className="serif-italic">familiar</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/trauma-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          trauma therapy
        </Link>{" "}
        for adults in East Fremantle and by telehealth across Western
        Australia, at a pace you set.
      </>
    ),
  },
  {
    slug: "emdr-vs-talk-therapy-trauma",
    title: "EMDR vs Talk Therapy for Trauma: Which Is Right for You?",
    metaTitle: "EMDR vs Talk Therapy for Trauma: Which Is Right for You?",
    metaDescription:
      "How EMDR and talk therapy differ for treating trauma, what each does well, and why they are often combined. A balanced comparison from a registered psychologist.",
    category: "Trauma & EMDR",
    categoryHref: "/trauma-therapy-perth",
    readTime: "6 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/emdr-vs-talk-cta-two-chairs-daylight.webp",
    imageAlt: "Two chairs turned toward each other by a window",
    ctaImage: "/img/wa-sunrise.jpg",
    ctaAlt: "Warm sunrise over the Western Australian coast",
    excerpt:
      "How they differ, what each does well, and why the choice is less either-or than it appears. Most trauma work draws on both.",
    linksUp: [
      { label: "EMDR Therapy Perth", href: "/emdr-therapy-perth" },
      { label: "Trauma Therapy Perth", href: "/trauma-therapy-perth" },
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
    ],
    ctaHeading: (
      <>
        Talking it <span className="serif-italic">through</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services offers{" "}
        <Link
          href="/trauma-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          trauma therapy
        </Link>{" "}
        for adults, drawing on EMDR, psychodynamic therapy, and CBT as the
        situation calls for.
      </>
    ),
  },
  {
    slug: "trauma-vs-anxiety",
    title: "Is It Trauma or Anxiety? Understanding the Difference",
    metaTitle: "Is It Trauma or Anxiety? Understanding the Difference | Sage",
    metaDescription:
      "Trauma and anxiety overlap considerably but respond to different treatment. How they differ, how they interact, and why the distinction matters.",
    category: "Trauma & Anxiety",
    categoryHref: "/anxiety-therapy-perth",
    readTime: "6 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/trauma-vs-anxiety-hero-hands-mug-window.webp",
    imageAlt: "Holding a warm mug by a window in the morning",
    ctaImage: "/img/trauma-vs-anxiety-cta-notepad-chair-arm.webp",
    ctaAlt: "A notepad resting on the arm of a chair in the consulting room",
    excerpt:
      "From the inside they can feel identical, but the treatments differ. Where each is pointing, and why the distinction changes what helps.",
    linksUp: [
      { label: "Anxiety Therapy Perth", href: "/anxiety-therapy-perth" },
      { label: "Trauma Therapy Perth", href: "/trauma-therapy-perth" },
      { label: "EMDR Therapy Perth", href: "/emdr-therapy-perth" },
      { label: "CBT Therapy Perth", href: "/cbt-therapy-perth" },
    ],
    ctaHeading: (
      <>
        Working out which{" "}
        <span className="serif-italic">it is</span>.
      </>
    ),
    ctaBody: (
      <>
        Sage Psychological Services works with both{" "}
        <Link
          href="/anxiety-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          anxiety
        </Link>{" "}
        and{" "}
        <Link
          href="/trauma-therapy-perth"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          trauma
        </Link>{" "}
        in adults. If you are unsure which you are facing, that is a
        perfectly reasonable thing to bring to a first session.
      </>
    ),
  },
  {
    slug: "finding-psychologist-fremantle",
    title: "Finding the Right Psychologist in Fremantle: A Practical Guide",
    metaTitle: "Finding the Right Psychologist in Fremantle: A Guide | Sage",
    metaDescription:
      "How to choose a psychologist in Fremantle: checking registration, understanding approaches, what fees to expect, and the questions worth asking before you book.",
    category: "Therapy & Getting Started",
    categoryHref: "/how-therapy-works",
    readTime: "6 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/finding-psychologist-hero-east-fremantle-street.webp",
    imageAlt: "A quiet street in East Fremantle on a clear morning",
    ctaImage: "/img/sage-psychology-practice.webp",
    ctaAlt: "The Sage Psychological Services consulting room in East Fremantle",
    excerpt:
      "How to choose a psychologist in Fremantle: checking registration, matching the approach to the problem, the questions worth asking, and the one factor that matters most.",
    linksUp: [
      { label: "About Jacob", href: "/about" },
      { label: "Fees & Rebates", href: "/fees" },
    ],
    ctaHeading: (
      <>
        Psychology in East{" "}
        <span className="serif-italic">Fremantle</span>.
      </>
    ),
    ctaBody: (
      <>
        <Link
          href="/"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          Sage Psychological Services
        </Link>{" "}
        is a small private practice in East Fremantle. You see{" "}
        <Link
          href="/about"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          Jacob Jones
        </Link>{" "}
        throughout rather than a rotating team.
      </>
    ),
  },
  {
    slug: "medicare-mental-health-care-plan",
    title: "How Medicare Mental Health Care Plans Work",
    metaTitle: "How Medicare Mental Health Care Plans Work | Sage",
    metaDescription:
      "How to get a Mental Health Care Plan, what the Medicare rebate covers, how the ten sessions work, and what it does not cover. Clear answers for Australians.",
    category: "Therapy & Getting Started",
    categoryHref: "/how-therapy-works",
    readTime: "6 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/medicare-plan-hero-paperwork-kitchen-table.webp",
    imageAlt: "Paperwork and a diary on the kitchen table",
    ctaImage: "/img/medicare-plan-cta-desk-diary-daylight.webp",
    ctaAlt: "A diary and phone on a desk by a window",
    excerpt:
      "The main way Australians access subsidised psychology. How to get a plan, how the six-plus-four sessions structure catches people out, and what you will actually pay.",
    linksUp: [
      { label: "Fees & Rebates", href: "/fees" },
      { label: "Book an Appointment", href: "https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" },
    ],
    ctaHeading: (
      <>
        Getting <span className="serif-italic">started</span>.
      </>
    ),
    ctaBody: (
      <>
        If you already have a plan and referral, you can book an appointment
        straight away. If you do not, your GP is the place to start.
      </>
    ),
  },
  {
    slug: "first-psychology-session",
    title: "What Your First Psychology Session Actually Feels Like",
    metaTitle: "What Your First Psychology Session Actually Feels Like | Sage",
    metaDescription:
      "The honest version: what a first therapy session feels like, the fears people rarely admit to, and what actually happens if you go blank or cry.",
    category: "Therapy & Getting Started",
    categoryHref: "/how-therapy-works",
    readTime: "5 min read",
    publishedAt: "2026-07-23",
    publishedLabel: "23 July 2026",
    image: "/img/sage-psychology-practice.webp",
    imageAlt: "The Sage Psychological Services consulting room in East Fremantle",
    ctaImage: "/img/first-session-cta-walking-toward-entrance.webp",
    ctaAlt: "Walking up the path toward the practice entrance",
    excerpt:
      "The honest version: the ten minutes before, the fears people rarely mention, what the hour actually feels like, and how you might feel afterwards.",
    linksUp: [
      { label: "What to Expect", href: "/how-therapy-works" },
      { label: "Book an Appointment", href: "https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" },
    ],
    ctaHeading: (
      <>
        When you are <span className="serif-italic">ready</span>.
      </>
    ),
    ctaBody: (
      <>
        For the practical side (what to bring, how long sessions run, fees
        and confidentiality),{" "}
        <Link
          href="/how-therapy-works"
          style={{ color: "var(--paper)" }}
          className="font-medium"
        >
          what to expect
        </Link>{" "}
        covers it in detail. When you feel ready, you can book with Jacob.
      </>
    ),
  },
];

export function getPost(slug: string): PostMeta | null {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function getRelated(slug: string, count = 3): PostMeta[] {
  const current = getPost(slug);
  if (!current) return POSTS.slice(0, count);
  const sameSilo = POSTS.filter(
    (p) => p.slug !== slug && p.categoryHref === current.categoryHref,
  );
  const others = POSTS.filter(
    (p) => p.slug !== slug && p.categoryHref !== current.categoryHref,
  );
  return [...sameSilo, ...others].slice(0, count);
}

/* ── Bodies for each post ───────────────────────────────────── */

export const POST_BODIES: Record<string, () => ReactNode> = {
  "anxiety-cycle-how-to-break-it": () => (
    <>
      <P>
        Something sets off a wave of worry, you find a way around it, and
        for a while you feel fine. Then the same trigger comes back, only
        this time it feels a little harder to face. This looping pattern is
        what psychologists call the anxiety cycle, and understanding how it
        works is the first real step toward changing it.
      </P>
      <P>
        Below, this article covers what the cycle looks like stage by
        stage, why avoidance keeps it running, and what actually helps
        reverse it, based on a model used across Western Australia&rsquo;s
        public mental health system.
      </P>

      <Callout kicker="Quick answer">
        <p>
          This pattern is a repeating loop of trigger, anxious thought,
          physical symptom, avoidance, and short-term relief, which then
          feeds back into more anxiety over time. It can usually be
          reversed, most often by gradually facing avoided situations and
          dropping the small habits that keep the loop going. Results vary
          between individuals, so it&rsquo;s worth talking to a registered
          psychologist or your GP about what fits your own situation.
        </p>
      </Callout>

      <H2>What this pattern actually means</H2>
      <P>
        This pattern is a repeating loop where anxious thoughts, physical
        symptoms, and avoidance keep reinforcing each other, so the anxiety
        never really gets the chance to settle.
      </P>
      <P>
        Western Australia&rsquo;s own{" "}
        <a
          href="https://www.healthywa.wa.gov.au/Articles/A_E/Anxiety-reversing-the-vicious-cycle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anxiety reversing the vicious cycle
        </a>{" "}
        resource describes this loop clearly.
      </P>
      <P>
        CCI is a specialist statewide public program that treats adults
        with complex anxiety, mood, and eating difficulties, and its model
        underpins much of the evidence-based anxiety treatment used across
        Australia today.
      </P>
      <P>
        The short version is this. Anxiety itself isn&rsquo;t the problem.
        It&rsquo;s a normal response that keeps you alert to real threats.
        It becomes a problem when avoidance becomes the main way you manage
        it, because avoidance quietly teaches your brain that the feared
        situation was dangerous after all, even when it wasn&rsquo;t.
      </P>

      <H2>The 5-stage anxiety cycle, step by step</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/anxiety-cycle-five-stage-diagram.webp"
            alt="Illustrated diagram of the five-stage anxiety cycle from trigger to relief"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        The anxiety cycle generally moves through five stages: a trigger,
        an anxious thought, a physical symptom, an avoidance behaviour, and
        a short period of relief that resets the whole pattern.
      </P>
      <P>
        Here&rsquo;s how it tends to play out, using a general, everyday
        example rather than any one person&rsquo;s story.
      </P>
      <ol className="mt-6 flex flex-col gap-3 pl-6 list-decimal marker:text-moss body-lede">
        <LI>
          <strong>Trigger.</strong> Something happens, such as being asked
          to speak up in a meeting, that sets off an anxious reaction.
        </LI>
        <LI>
          <strong>Anxious appraisal.</strong> Your mind jumps to the
          worst-case version of events. &ldquo;I&rsquo;ll freeze. Everyone
          will notice.&rdquo;
        </LI>
        <LI>
          <strong>Physical symptoms.</strong> Your body responds as if the
          threat were real. Your heart rate climbs, your chest tightens,
          your palms sweat.
        </LI>
        <LI>
          <strong>Avoidance or safety behaviour.</strong> You find a way to
          escape or soften the moment. You stay quiet, leave the room, or
          over-prepare to the point of exhaustion.
        </LI>
        <LI>
          <strong>Short-term relief, then reset.</strong> The anxiety drops
          for a while. But your brain has just learned that avoidance kept
          you safe, so the same trigger feels even more threatening next
          time.
        </LI>
      </ol>
      <P>
        None of these stages is unusual on its own. It&rsquo;s the way
        they feed into each other, again and again, that turns a normal
        stress response into something that starts running your day.
      </P>

      <H2>Why avoidance feels like the fix (and isn&rsquo;t)</H2>
      <P>
        Avoidance feels like it works because it does, in the short term.
        That relief is real, which is exactly why this pattern is so hard
        to break on your own.
      </P>
      <P>
        The trouble is that relief comes at a cost. Every time you avoid
        something out of anxiety, your brain quietly files that situation
        under &ldquo;dangerous,&rdquo; even if nothing bad would have
        actually happened. Over time, the list of things you avoid tends to
        grow, not shrink.
      </P>
      <P>
        This mechanism, sometimes called negative reinforcement, is also
        central to how CBT works and why it targets avoidance directly
        rather than just the anxious thoughts themselves. If you&rsquo;d
        like to understand that process in more depth, our article on{" "}
        <Link href="/blog/how-cbt-rewires-thinking">
          how CBT reshapes anxious thinking
        </Link>{" "}
        goes through it step by step.
      </P>

      <H2>Reversing the cycle: what can help break it</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/anxiety-cycle-reflection-notebook-tea.webp"
            alt="Notebook, pen, and tea on linen, a quiet reflective still-life scene"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        This loop is reversed largely the same way it was built, through
        repeated experience, just running in the other direction. Instead
        of avoiding a feared situation, you face it gradually, in a way
        that lets your body and mind learn it can cope.
      </P>
      <P>
        CCI&rsquo;s own model calls this &ldquo;reversing the vicious
        cycle,&rdquo; and it centres on two things: gradually confronting
        feared situations without leaning on safety behaviours, and
        building a bit more confidence each time you get through one.
      </P>
      <P>
        This lines up closely with cognitive behaviour therapy (CBT), which
        is commonly recommended in Australia for managing anxiety, often as
        part of a GP Mental Health Treatment Plan.
      </P>
      <P>CBT for the anxiety cycle usually works through two main techniques.</P>
      <UL>
        <LI>
          <strong>Cognitive restructuring.</strong> You learn to notice an
          anxious thought, write it down, and honestly weigh up the
          evidence for and against it, rather than assuming it&rsquo;s true
          just because it feels true.
        </LI>
        <LI>
          <strong>Graded exposure.</strong> Instead of avoiding a trigger
          altogether, you face it in small, manageable steps, at a pace
          that suits you, rather than all at once.
        </LI>
      </UL>
      <P>
        Use this checklist to get a sense of whether this pattern might
        apply to you. This isn&rsquo;t a diagnostic checklist, just a
        general guide to reflect on.
      </P>
      <UL>
        <LI>You avoid situations you used to manage without a second thought</LI>
        <LI>Small worries seem to snowball into much bigger ones</LI>
        <LI>Relief after avoiding something never quite lasts</LI>
        <LI>You&rsquo;ve noticed yourself avoiding more things over time, not fewer</LI>
        <LI>
          Physical symptoms like a racing heart or tight chest show up
          before you&rsquo;ve registered feeling anxious
        </LI>
      </UL>
      <P>
        None of this means something is wrong with you. It means the
        pattern has become familiar to your brain, and familiar patterns
        can be worked with. Results vary between individuals, and how long
        this takes depends on your own circumstances, so it&rsquo;s worth
        discussing timeframes with your own psychologist rather than
        assuming a general figure applies to you.
      </P>

      <H2>When the cycle runs deeper: trauma and EMDR</H2>
      <P>
        Sometimes this pattern is tied less to a specific, current trigger
        and more to something further back, such as a difficult or
        distressing past experience.
      </P>
      <P>
        In those cases, a psychologist may draw on approaches such as Eye
        Movement Desensitisation and Reprocessing, known as EMDR, or
        psychodynamic work, sometimes alongside Acceptance and Commitment
        Therapy (ACT), depending on what&rsquo;s driving the pattern
        underneath the surface symptoms.
      </P>
      <P>
        You can read more about{" "}
        <Link href="/emdr-therapy-perth">EMDR therapy in Perth</Link> and
        how it&rsquo;s used alongside other evidence-based approaches for
        anxiety and trauma. As with any approach, what helps depends on
        your own history and goals, and a first conversation with a
        registered psychologist is the best way to work out what&rsquo;s
        likely to suit you.
      </P>

      <H2>Why this matters beyond how you feel day to day</H2>
      <P>
        This pattern isn&rsquo;t just an individual experience. It sits
        inside a much larger picture of mental health in Australia, and
        the scale of that picture is worth naming.
      </P>
      <P>
        The{" "}
        <a
          href="https://www.pc.gov.au/media-speeches/speeches/mental-health/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Productivity Commission&rsquo;s 2020 Mental Health Inquiry
        </a>{" "}
        estimated that mental ill-health and suicide cost Australia
        somewhere between $200 and $220 billion a year, once healthcare,
        lost productivity, and broader social costs are counted. This
        remains the most recent estimate of its kind, since no newer
        Australian inquiry has re-quantified the figure since.
      </P>
      <P>
        That number isn&rsquo;t meant to be alarming. It&rsquo;s a
        reminder that these patterns, multiplied across millions of
        people, add up to something the whole country has an interest in
        addressing properly, not just something to manage quietly on your
        own.
      </P>

      <H2>Getting support in Perth: what it actually costs</H2>
      <P>
        Getting support usually starts with a conversation with your GP,
        and from there follows a fairly predictable path, one that most GP
        Mental Health Treatment Plans are built around.
      </P>
      <ol className="mt-6 flex flex-col gap-3 pl-6 list-decimal marker:text-moss body-lede">
        <LI>
          <strong>Book a longer GP appointment</strong> and explain
          what&rsquo;s been going on, including any physical symptoms.
        </LI>
        <LI>
          <strong>Ask about a Mental Health Care Plan.</strong> If
          appropriate, your GP will prepare this and refer you to a
          psychologist, usually for an initial six sessions.
        </LI>
        <LI>
          <strong>Attend your sessions with a registered psychologist.</strong>{" "}
          After the first six, you return to your GP for a review before
          accessing further sessions.
        </LI>
        <LI>
          <strong>Claim your Medicare rebate</strong>, which is usually
          processed automatically after each appointment.
        </LI>
      </ol>
      <P>
        Cost is often the deciding factor in whether people reach out at
        all, so here&rsquo;s how it breaks down at Sage Psychological
        Services.
      </P>

      <div className="mt-10 rounded-[14px] border border-ink/12 overflow-hidden">
        <div className="grid grid-cols-3 bg-paper-soft">
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            Pathway
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            What you need
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            Approximate cost
          </div>
        </div>
        {[
          [
            "Medicare (Mental Health Care Plan)",
            "GP referral, up to 10 sessions per calendar year",
            "$180 standard fee, $101.55 rebate, $78.45 out-of-pocket",
          ],
          [
            "Private health insurance",
            "Check your fund and level of cover",
            "Rebate varies by provider",
          ],
          [
            "DVA (White or Gold Card)",
            "GP referral, up to 12 initial sessions",
            "No out-of-pocket cost for eligible veterans",
          ],
          [
            "NDIS, Workers' Compensation, or ICWA",
            "Confirm eligibility with the relevant scheme",
            "Set by each scheme's current fee schedule",
          ],
          [
            "Self-funded, no referral needed",
            "Book directly",
            "Standard session fee, invoiced after each appointment",
          ],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-t border-ink/12 bg-paper"
          >
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug font-medium">
              {row[0]}
            </div>
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug">
              {row[1]}
            </div>
            <div className="p-4 md:p-6 text-[0.95rem] leading-snug">
              {row[2]}
            </div>
          </div>
        ))}
      </div>

      <P>
        The gap fee at Sage is kept deliberately low, well below the
        Australian Psychological Society&rsquo;s recommended fee, so
        consistent support stays within reach. You can see{" "}
        <Link href="/fees">current fees and Medicare rebate details</Link>{" "}
        for the most up-to-date figures.
      </P>
      <P>
        Access is also worth thinking about earlier rather than later.{" "}
        <a
          href="https://www.aihw.gov.au/mental-health/topic-areas/facilities-resources/workforce"
          target="_blank"
          rel="noopener noreferrer"
        >
          AIHW&rsquo;s 2024 mental health workforce data
        </a>{" "}
        shows that, unlike most other states, Western Australia has
        proportionally more mental health nurses than psychologists
        relative to its overall mental health workforce.
      </P>
      <P>
        That&rsquo;s not a reason to worry, but it&rsquo;s a reasonable
        argument for starting the GP conversation sooner rather than
        waiting until things feel unmanageable.
      </P>
      <P>
        If you would like to talk through your situation with a registered
        psychologist in East Fremantle, the team at Sage Psychological
        Services is happy to help.
      </P>
      <P>
        Jacob works with adults across Fremantle, Melville, Cockburn, and
        the wider Perth area, as well as by telehealth for clients
        elsewhere in WA. You&rsquo;re welcome to{" "}
        <Link href="/contact">book a session with Jacob</Link> when it
        suits you.
      </P>

      <Callout kicker="If you're in crisis right now">
        <p>
          Please contact Lifeline on{" "}
          <a href="tel:131114" className="link">
            13 11 14
          </a>
          , available 24 hours a day, Beyond Blue on{" "}
          <a href="tel:1300224636" className="link">
            1300 22 4636
          </a>
          , or emergency services on{" "}
          <a href="tel:000" className="link">
            000
          </a>
          .
        </p>
      </Callout>

      <H2>Frequently asked questions</H2>
      <FaqAccordion
        items={[
          {
            q: "What are the stages of the anxiety cycle?",
            aText:
              "It generally moves through five stages: a trigger, an anxious thought, a physical symptom such as a racing heart, an avoidance or safety behaviour, and a period of short-term relief that then resets the pattern. Knowing which stage you tend to get stuck in can help you work out where to start making changes.",
            a: (
              <p>
                It generally moves through five stages: a trigger, an
                anxious thought, a physical symptom such as a racing heart,
                an avoidance or safety behaviour, and a period of
                short-term relief that then resets the pattern. Knowing
                which stage you tend to get stuck in can help you work out
                where to start making changes.
              </p>
            ),
          },
          {
            q: "Why does avoiding anxiety make it feel worse, not better?",
            aText:
              "Avoidance brings short-term relief, but it also teaches your brain that the avoided situation was genuinely dangerous, even when it wasn't. Over time, this tends to grow the list of things that feel threatening, rather than shrinking it, which keeps the pattern going.",
            a: (
              <p>
                Avoidance brings short-term relief, but it also teaches
                your brain that the avoided situation was genuinely
                dangerous, even when it wasn&rsquo;t. Over time, this
                tends to grow the list of things that feel threatening,
                rather than shrinking it, which keeps the pattern going.
              </p>
            ),
          },
          {
            q: "Is this the same as a panic cycle?",
            aText:
              "They're closely related. A panic cycle is essentially the same loop playing out more intensely and quickly, often with sudden, strong physical symptoms. The same underlying pattern of trigger, symptom, avoidance, and relief applies to both, and similar approaches are used to address them.",
            a: (
              <p>
                They&rsquo;re closely related. A panic cycle is
                essentially the same loop playing out more intensely and
                quickly, often with sudden, strong physical symptoms. The
                same underlying pattern of trigger, symptom, avoidance,
                and relief applies to both, and similar approaches are
                used to address them.
              </p>
            ),
          },
          {
            q: "How is this different from generalised anxiety disorder?",
            aText:
              "This pattern can show up with any type of anxiety, including generalised anxiety disorder (GAD). GAD refers to a specific, ongoing pattern of hard-to-control worry across many areas of life, most days, for six months or more.",
            a: (
              <p>
                This pattern can show up with any type of anxiety,
                including generalised anxiety disorder (GAD). GAD refers
                to a specific, ongoing pattern of hard-to-control worry
                across many areas of life, most days, for six months or
                more.
              </p>
            ),
          },
          {
            q: "Can you break the cycle without medication?",
            aText:
              "Many people work through this pattern using psychological therapy alone, such as CBT, without medication. For some people, a GP or psychiatrist may also discuss medication as part of a broader plan, but that decision sits with them, not with a psychologist, since psychologists in Australia don't prescribe.",
            a: (
              <p>
                Many people work through this pattern using psychological
                therapy alone, such as CBT, without medication. For some
                people, a GP or psychiatrist may also discuss medication
                as part of a broader plan, but that decision sits with
                them, not with a psychologist, since psychologists in
                Australia don&rsquo;t prescribe.
              </p>
            ),
          },
          {
            q: "How long does it usually take to notice a change?",
            aText:
              "There's no fixed timeframe that applies to everyone, and results vary between individuals depending on their own circumstances. Many people notice small shifts within a handful of sessions, though for others it takes longer. A registered psychologist can talk you through what's realistic for your own situation.",
            a: (
              <p>
                There&rsquo;s no fixed timeframe that applies to everyone,
                and results vary between individuals depending on their
                own circumstances. Many people notice small shifts within
                a handful of sessions, though for others it takes longer.
                A registered psychologist can talk you through what&rsquo;s
                realistic for your own situation.
              </p>
            ),
          },
        ]}
      />

      <CrisisFootnote />
    </>
  ),

  "worry-vs-anxiety": () => (
    <>
      <P>
        Something has been sitting heavy in your chest for weeks now, and
        you can&rsquo;t quite work out if it&rsquo;s just a busy patch or
        something more. Late at night your mind won&rsquo;t switch off, and
        by morning you&rsquo;re already dreading the day ahead.
      </P>
      <P>
        If you&rsquo;ve been searching worry vs anxiety, trying to work out
        where one ends and the other begins, this article will help you
        tell the two apart and work out what to do next.
      </P>

      <Callout kicker="Quick answer">
        <p>
          Worry usually has a specific trigger and settles once the
          situation resolves. Anxiety tends to be broader, harder to
          control, and can stick around for months even when nothing
          specific is wrong. If it&rsquo;s affecting your sleep, work, or
          relationships for more than six months, it&rsquo;s worth talking
          to someone.
        </p>
      </Callout>

      <H2>When &ldquo;just worrying&rdquo; starts to feel like something more</H2>
      <P>
        Most people worry. You worry about a work deadline, a family
        member&rsquo;s health, or whether you left the stove on. That kind
        of worry usually fades once the situation is sorted out.
      </P>
      <P>
        But sometimes the worry doesn&rsquo;t fade. It follows you into the
        shower, into meetings, into bed at 2am. You start avoiding things
        that never used to bother you, and you&rsquo;re left wondering
        whether this is still just worry, or whether it has tipped into
        something else.
      </P>
      <P>
        That question, worry vs anxiety, is worth taking seriously. Knowing
        the difference can help you work out what kind of support might
        actually help.
      </P>

      <H2>What worry actually is</H2>
      <P>
        Worry is a normal mental process. It&rsquo;s your brain trying to
        solve a problem by turning it over and over.
      </P>
      <P>
        Worry is usually tied to something specific: an upcoming exam, a
        bill that&rsquo;s due, a difficult conversation you need to have.
        Once that specific thing is dealt with, the worry tends to settle
        down on its own.
      </P>
      <P>
        In small doses, worry can even be useful. It nudges you to prepare,
        plan, and take action. The trouble starts when worry stops being
        useful and starts taking over instead.
      </P>

      <H2>What anxiety actually is</H2>
      <P>
        Anxiety is broader and harder to switch off than ordinary worry.
        Rather than being tied to one clear trigger, it can show up as a
        general sense of dread that doesn&rsquo;t have an obvious cause.
      </P>
      <P>
        Clinically, anxiety is generally considered a disorder when
        it&rsquo;s persistent, difficult to control, and gets in the way of
        daily life for six months or more. It often comes with physical
        symptoms too, things like a racing heart, a tight chest,
        restlessness, or trouble sleeping, alongside the mental load.
      </P>
      <P>
        Anxiety disorders carry a significant health impact in Australia.
        Anxiety disorders caused the greatest burden of any single
        condition within the mental and substance use disorder group,
        according to{" "}
        <a
          href="https://www.aihw.gov.au/mental-health/topic-areas/health-wellbeing/burden-of-disease"
          target="_blank"
          rel="noopener noreferrer"
        >
          AIHW&rsquo;s 2024 Burden of Disease data
        </a>
        . That&rsquo;s a strong signal that this isn&rsquo;t a minor issue.
        It&rsquo;s one of the more significant health concerns tracked in
        the country.
      </P>

      <H2>Worry vs anxiety at a glance</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/worry-vs-anxiety-comparison-illustration.webp"
            alt="Simple illustrated comparison of two contrasting emotional states in muted colours"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        Here&rsquo;s a simple side-by-side comparison to help you place
        what you&rsquo;re experiencing.
      </P>

      <div className="mt-10 rounded-[14px] border border-ink/12 overflow-hidden">
        <div className="grid grid-cols-3 bg-paper-soft">
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            &nbsp;
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            Worry
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            Anxiety
          </div>
        </div>
        {[
          [
            "Trigger",
            "Usually a specific situation",
            "Often no single clear cause",
          ],
          [
            "Duration",
            "Settles once the situation resolves",
            "Can persist for six months or more",
          ],
          [
            "Physical symptoms",
            "Mild, if any",
            "Racing heart, tight chest, restlessness, poor sleep",
          ],
          [
            "Effect on daily life",
            "Manageable, doesn't usually stop you doing things",
            "Can interfere with work, sleep, or relationships",
          ],
          [
            "What helps",
            "Problem-solving, time",
            "Often needs a structured approach such as therapy",
          ],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-t border-ink/12 bg-paper"
          >
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug font-medium">
              {row[0]}
            </div>
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug">
              {row[1]}
            </div>
            <div className="p-4 md:p-6 text-[0.95rem] leading-snug">
              {row[2]}
            </div>
          </div>
        ))}
      </div>

      <P>
        If more of the anxiety column matches your day-to-day experience,
        it may be worth exploring further.
      </P>

      <H2>Signs it may be more than everyday worry</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/worry-vs-anxiety-notebook-tea-stilllife.webp"
            alt="Notebook, pen and tea cup on linen, a quiet reflective still-life scene"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        A few signs can help you tell worry vs anxiety apart in your own
        experience.
      </P>
      <UL>
        <LI>It&rsquo;s been going on for six months or longer</LI>
        <LI>You find it hard to control or switch off, even when you try</LI>
        <LI>It&rsquo;s affecting your sleep, concentration, or energy</LI>
        <LI>It&rsquo;s getting in the way of work, study, or relationships</LI>
        <LI>
          You&rsquo;ve started avoiding situations because of how anxious
          they make you feel
        </LI>
        <LI>
          You notice physical symptoms like a racing heart, tight chest, or
          restlessness alongside the worry
        </LI>
      </UL>
      <P>
        None of this means something is wrong with you. Anxiety is common,
        and support for it is widely used. About 2.8 million Australians,
        10% of the population, received 13.0 million Medicare-subsidised
        mental health services in 2024 to 2025, a 7% increase since 2015 to
        2016. Reaching out is a normal, well-used part of how Australians
        look after their mental health.
      </P>

      <Callout kicker="If you're in crisis right now">
        <p>
          If you&rsquo;re in immediate distress or thinking about harming
          yourself, please contact Lifeline on{" "}
          <a href="tel:131114" className="link">
            13 11 14
          </a>
          , available 24 hours a day, or call{" "}
          <a href="tel:000" className="link">
            000
          </a>{" "}
          in an emergency.
        </p>
      </Callout>

      <H2>Why the distinction matters for treatment</H2>
      <P>
        Working out whether you&rsquo;re dealing with worry vs anxiety
        matters because it shapes what kind of support is likely to help.
      </P>

      <H3>Talking therapy, usually first</H3>
      <P>
        For anxiety, Cognitive Behaviour Therapy (CBT) is generally
        considered a first-line approach. It works by helping you identify
        unhelpful thought patterns and gradually change how you respond to
        them.
      </P>
      <P>
        Where anxiety is connected to a past difficult experience, a
        psychologist may also use Eye Movement Desensitisation and
        Reprocessing (EMDR) alongside CBT. You can read more about{" "}
        <Link href="/anxiety-therapy-perth">
          Sage&rsquo;s approach to anxiety therapy
        </Link>{" "}
        and{" "}
        <Link href="/cbt-therapy-perth">how CBT works at Sage</Link>{" "}
        elsewhere on this site.
      </P>
      <P>
        Results vary from person to person, and what helps one person may
        take longer for another. A registered psychologist can help you
        work out an approach suited to your own circumstances.
      </P>

      <H3>Where medication fits</H3>
      <P>
        For some people, a GP or psychiatrist may also discuss medication,
        such as an SSRI or SNRI, as part of managing anxiety. This decision
        sits with your GP or psychiatrist, not with a psychologist, since
        psychologists in Australia aren&rsquo;t able to prescribe.
      </P>
      <P>
        If medication comes up as an option worth considering for you, that
        conversation is best had with your GP, who can refer you on further
        if needed.
      </P>

      <H2>How to get support in Australia (and what it costs)</H2>
      <P>
        Getting support for anxiety in Australia usually follows a fairly
        straightforward path.
      </P>
      <ol className="mt-6 flex flex-col gap-3 pl-6 list-decimal marker:text-moss body-lede">
        <LI>
          <strong>Book a GP appointment.</strong> Let your GP know how
          things have been going. They may use a screening tool such as the
          GAD-7 questionnaire to help understand how significant your
          symptoms are.
        </LI>
        <LI>
          <strong>Ask about a Mental Health Treatment Plan.</strong> If
          appropriate, your GP can prepare this plan and refer you to a
          psychologist. From 1 November 2025, this generally needs to be
          done through your registered MyMedicare practice or your usual
          GP.
        </LI>
        <LI>
          <strong>Book with a registered psychologist.</strong> With a
          referral in place, you can book your first session.
        </LI>
        <LI>
          <strong>Claim your Medicare rebate.</strong> Under{" "}
          <a
            href="https://www.health.gov.au/our-work/better-access-initiative"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Medicare&rsquo;s Better Access initiative
          </a>
          , eligible people can claim up to 10 individual psychology
          sessions per calendar year, generally released in two blocks, an
          initial block followed by a GP review before the remaining
          sessions are available.
        </LI>
      </ol>
      <P>
        Demand for psychology support in Australia currently outpaces
        supply. The Australian Government&rsquo;s Psychology Supply and
        Demand Study estimates a current national shortfall of around
        10,000 psychologists, projected to grow to over 24,000 within 12
        years without intervention.
      </P>
      <P>
        This is part of why booking early, rather than waiting until things
        feel unmanageable, tends to make the process smoother.
      </P>
      <P>
        At Sage Psychological Services, the standard consultation fee is
        $180 per session. With a Medicare rebate of $101.55 under a valid
        Mental Health Care Plan, the out-of-pocket cost is $78.45 per
        session. You can find{" "}
        <Link href="/fees">current fees and rebate details</Link> on the
        fees page.
      </P>

      <H2>What working with a psychologist at Sage looks like</H2>
      <P>
        Sage Psychological Services is a small psychology practice in East
        Fremantle, working with adults across Fremantle, Melville,
        Cockburn, and the wider Perth area, as well as by telehealth across
        Western Australia.
      </P>
      <P>
        You work directly with Jacob Jones, a registered psychologist,
        throughout your therapy. There&rsquo;s no rotating list of
        practitioners. Jacob draws on CBT, EMDR, and other evidence-based
        approaches, adjusting the approach to suit your history and goals
        rather than working through a fixed method.
      </P>
      <P>
        If you would like to talk through your situation with a registered
        psychologist in East Fremantle, Jacob at Sage Psychological
        Services is happy to help. You can{" "}
        <Link href="/contact">book a time to talk with Jacob</Link> when
        you&rsquo;re ready. More detail on Jacob&rsquo;s training and
        background is on the <Link href="/about">about page</Link>.
      </P>

      <H2>Frequently asked questions</H2>
      <FaqAccordion
        items={[
          {
            q: "Is worrying a lot the same as having anxiety?",
            aText:
              "Not necessarily. Worry is usually tied to a specific situation and settles once that situation is resolved. Anxiety tends to be broader, harder to control, and can persist for six months or longer, often with physical symptoms attached. If your worry feels constant and hard to switch off, it's worth discussing with a GP or psychologist.",
            a: (
              <p>
                Not necessarily. Worry is usually tied to a specific
                situation and settles once that situation is resolved.
                Anxiety tends to be broader, harder to control, and can
                persist for six months or longer, often with physical
                symptoms attached. If your worry feels constant and hard to
                switch off, it&rsquo;s worth discussing with a GP or
                psychologist.
              </p>
            ),
          },
          {
            q: "How long does worry have to last before it's considered anxiety?",
            aText:
              "Clinically, anxiety is generally considered a disorder when symptoms persist for six months or more and interfere with daily life. This isn't a strict cut-off to self-diagnose against. It's a general guide a GP or psychologist would use as part of a broader assessment of your situation.",
            a: (
              <p>
                Clinically, anxiety is generally considered a disorder when
                symptoms persist for six months or more and interfere with
                daily life. This isn&rsquo;t a strict cut-off to
                self-diagnose against. It&rsquo;s a general guide a GP or
                psychologist would use as part of a broader assessment of
                your situation.
              </p>
            ),
          },
          {
            q: "Can you have anxiety without constant worrying?",
            aText:
              "Yes. Anxiety can show up mainly as physical symptoms, such as a racing heart, a tight chest, or trouble sleeping, without constant conscious worrying. Some people notice the physical symptoms first and only realise later that anxiety is behind them, especially if they haven't connected the two before.",
            a: (
              <p>
                Yes. Anxiety can show up mainly as physical symptoms, such
                as a racing heart, a tight chest, or trouble sleeping,
                without constant conscious worrying. Some people notice
                the physical symptoms first and only realise later that
                anxiety is behind them, especially if they haven&rsquo;t
                connected the two before.
              </p>
            ),
          },
          {
            q: "Do I need a diagnosis before I see a psychologist?",
            aText:
              "No. You can see a psychologist without a formal diagnosis. Many people book an initial session simply because things haven't felt right for a while, and a psychologist can help you understand what's going on and what support might help from there.",
            a: (
              <p>
                No. You can see a psychologist without a formal diagnosis.
                Many people book an initial session simply because things
                haven&rsquo;t felt right for a while, and a psychologist
                can help you understand what&rsquo;s going on and what
                support might help from there.
              </p>
            ),
          },
          {
            q: "How much does it cost to see a psychologist in Australia with a Medicare rebate?",
            aText:
              "At Sage Psychological Services, the standard consultation fee is $180 per session. With a Medicare rebate of $101.55 under a valid Mental Health Care Plan (effective 1 July 2026), the out-of-pocket cost is $78.45 per session. Fees vary between practices, so it's worth checking directly with your chosen psychologist.",
            a: (
              <p>
                At Sage Psychological Services, the standard consultation
                fee is $180 per session. With a Medicare rebate of $101.55
                under a valid Mental Health Care Plan (effective 1 July
                2026), the out-of-pocket cost is $78.45 per session. Fees
                vary between practices, so it&rsquo;s worth checking
                directly with your chosen psychologist.
              </p>
            ),
          },
          {
            q: "What's the difference between a psychologist and a GP for anxiety?",
            aText:
              "A GP can assess your symptoms, prepare a Mental Health Treatment Plan, and discuss medication if appropriate. A psychologist provides structured talking therapy, such as CBT, to help you manage anxiety day to day. Many people work with both as part of their care, with the GP coordinating the referral and the psychologist providing the ongoing therapy itself.",
            a: (
              <p>
                A GP can assess your symptoms, prepare a Mental Health
                Treatment Plan, and discuss medication if appropriate. A
                psychologist provides structured talking therapy, such as
                CBT, to help you manage anxiety day to day. Many people
                work with both as part of their care, with the GP
                coordinating the referral and the psychologist providing
                the ongoing therapy itself.
              </p>
            ),
          },
          {
            q: "Is it normal to feel anxious without knowing why?",
            aText:
              "Yes, this is common. Anxiety doesn't always have a clear, identifiable cause, particularly when it's persistent, and that lack of a clear reason is often part of what makes it confusing to deal with. If this is happening regularly, a GP or psychologist can help you explore what might be contributing to it, even when nothing specific stands out to you.",
            a: (
              <p>
                Yes, this is common. Anxiety doesn&rsquo;t always have a
                clear, identifiable cause, particularly when it&rsquo;s
                persistent, and that lack of a clear reason is often part
                of what makes it confusing to deal with. If this is
                happening regularly, a GP or psychologist can help you
                explore what might be contributing to it, even when
                nothing specific stands out to you.
              </p>
            ),
          },
        ]}
      />

      <CrisisFootnote />
    </>
  ),

  "how-cbt-rewires-thinking": () => (
    <>
      <P>
        If your mind won&rsquo;t switch off, or worry has started running
        your day instead of the other way around, you have probably already
        asked yourself one question: how does CBT work, and could it help
        someone like you?
      </P>
      <P>
        Cognitive Behaviour Therapy (CBT) is one of the most studied forms
        of psychological treatment available, and it is often the first
        approach a GP or psychologist suggests for anxiety. This article
        walks through what CBT actually does, why anxious thinking feels so
        automatic in the first place, what a course of therapy looks like
        session by session, and what it costs in Australia. By the end, you
        should have a clear, honest picture of what actually helps, not
        just a list of buzzwords.
      </P>

      <Callout kicker="Quick answer">
        <p>
          Here is how CBT works, in short. It helps you notice the thoughts,
          feelings and behaviours that keep anxiety going, then gives you
          practical tools to interrupt that pattern. It is structured,
          skills-based, and considered a first-line treatment for anxiety
          in Australia.
        </p>
      </Callout>

      <H2>What is CBT, really?</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/cbt-reflection-notebook-tea-stilllife.webp"
            alt="Open notebook and pen beside a cup of tea on linen"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        CBT is a structured, practical form of talk therapy based on one
        simple idea: your thoughts, feelings and behaviours are all
        connected, and changing one can change the others.
      </P>
      <P>
        Rather than spending months unpacking your entire life history, CBT
        tends to focus on what is happening for you right now. You and your
        psychologist work together to identify the specific thought
        patterns and behaviours that are keeping a problem in place, then
        build practical strategies to shift them.
      </P>
      <P>
        Once you understand how CBT works at this basic level, the rest of
        therapy tends to make a lot more sense.
      </P>
      <P>
        The Australian Association for Cognitive and Behaviour Therapy
        describes CBT as a well-planned therapy that is focused on
        outcomes, with clear goals and regular check-ins on progress. That
        structure is part of why it suits anxiety so well. Anxious thinking
        often feels vague and overwhelming, and CBT gives it a shape you
        can actually work with.
      </P>

      <H2>Why anxious thinking feels so automatic</H2>
      <P>
        Anxious thoughts feel automatic because they are, in a sense,
        well-practised. The more often your mind takes a particular path,
        such as assuming the worst will happen, the more familiar and
        effortless that path becomes.
      </P>
      <P>
        This is sometimes called a cognitive distortion, a pattern of
        thinking that skews how you interpret a situation. Common examples
        include catastrophising, all-or-nothing thinking, and assuming you
        know what other people are thinking without any real evidence.
      </P>
      <P>
        Avoidance plays a role too. When you avoid something that makes you
        anxious, you get a rush of relief. That relief feels rewarding, so
        your brain learns that avoidance works, even though it usually
        makes the anxiety bigger over time. Understanding this cycle is
        the first step toward changing it, and it is exactly where CBT
        begins.
      </P>

      <H2>How does CBT work to change anxious patterns?</H2>
      <P>
        CBT works by teaching you to notice unhelpful thought patterns as
        they happen, test how accurate they really are, and gradually build
        new, more balanced ways of responding. Two techniques do most of
        the work: cognitive restructuring and gradual exposure.
      </P>
      <P>
        Cognitive restructuring means taking a distressing thought, writing
        it down, and honestly weighing up the evidence for and against it.
        Instead of assuming a thought is true simply because it feels true,
        you learn to ask what else might explain the situation. Over time,
        this becomes a habit rather than a conscious effort.
      </P>
      <P>
        Gradual exposure works alongside this. Rather than avoiding the
        situations that trigger anxiety, you face them in small, manageable
        steps, at a pace that suits you. Each time you get through a step
        without the feared outcome happening, your mind collects a bit of
        evidence that the situation is more manageable than it felt.
      </P>
      <P>
        Research using brain imaging has looked at how psychological
        therapies like CBT relate to changes in activity in areas of the
        brain involved in threat response and emotional regulation. This is
        a genuinely interesting area of study, but it is also still
        developing, and results vary between individuals.
      </P>
      <P>
        The honest, practical takeaway is simpler: repetition and practice
        are what make new patterns stick, in much the same way that
        practising any skill makes it feel more natural over time.
      </P>

      <H2>What a typical course of CBT looks like</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/cbt-five-step-process-illustration.webp"
            alt="Numbered illustration of the five-step CBT therapy process"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        CBT usually follows a similar shape from person to person, even
        though the details are shaped around your own situation. A typical
        course involves:
      </P>
      <UL>
        <LI>
          Understanding the link between your thoughts, feelings and
          behaviours, and how they interact for you specifically.
        </LI>
        <LI>
          Identifying the patterns that are keeping the difficulty in
          place, such as avoidance, rumination or particular cognitive
          distortions.
        </LI>
        <LI>
          Learning practical strategies, such as a thought diary or
          relaxation techniques, and practising them between sessions.
        </LI>
        <LI>
          Gradually facing avoided situations in a structured, paced way,
          rather than all at once.
        </LI>
        <LI>
          Building lasting skills so you can manage setbacks on your own
          after therapy ends.
        </LI>
      </UL>
      <P>
        Many people work within Medicare&rsquo;s funded allocation of up to
        10 sessions in a calendar year, though some need more support and
        others feel ready to finish sooner. Results vary and individual
        circumstances differ, so it is worth discussing likely timeframes
        with your own psychologist rather than assuming a fixed number
        applies to you.
      </P>

      <H2>Is CBT backed by evidence in Australia?</H2>
      <P>
        Yes. CBT is recognised as a first-line treatment for anxiety
        disorders in Australia, and it underpins the approach used in most
        GP Mental Health Treatment Plans. So how does CBT work within
        Australia&rsquo;s actual mental health system, not just in theory?
      </P>
      <P>
        Anxiety is, by some distance, the most common mental health concern
        in the country. An estimated 3.4 million Australians, around 17 per
        cent of the population, experience an anxiety disorder.
      </P>
      <P>
        Anxiety disorder prevalence has also risen over time, from 13.8 per
        cent in 2007 to 17.2 per cent in the 2020 to 2022 period, the
        largest increase of any disorder group measured. It tends to affect
        younger adults most, with prevalence around 22 per cent in people
        aged 15 to 34, compared with 15 per cent in those aged 55 and over.
      </P>
      <P>
        The system built to respond to this is well used. In 2023 to 2024,
        around 2.7 million Australians accessed 12.6 million
        Medicare-subsidised mental health services, with psychologists
        delivering the largest share under{" "}
        <a
          href="https://www.aihw.gov.au/mental-health/topic-areas/community-based-services/medicare-mental-health"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medicare&rsquo;s Better Access initiative
        </a>
        .
      </P>
      <P>
        <a
          href="https://www.mindspot.org.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MindSpot
        </a>
        , a course of online CBT delivered by Macquarie University and
        funded by the Department of Health, reports an average 50 per cent
        reduction in symptoms among people who complete it. This is a
        program-wide average, not a prediction for any individual.
      </P>

      <H2>How much does CBT cost, and does Medicare help?</H2>
      <P>
        Medicare can reduce the cost of CBT if you have a GP Mental Health
        Treatment Plan, though it usually does not make sessions free. The
        rebate amount depends on which type of psychologist you see.
      </P>

      <div className="mt-10 rounded-[14px] border border-ink/12 overflow-hidden">
        <div className="grid grid-cols-3 bg-paper-soft">
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            Practitioner type
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            2026 Medicare rebate (per session)
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            Sessions available per calendar year
          </div>
        </div>
        {[
          [
            "Registered psychologist (MBS item 80110)",
            "$101.55",
            "Up to 10, referred in blocks of up to 6",
          ],
          [
            "Clinical psychologist (MBS item 80010)",
            "$149.05",
            "Up to 10, referred in blocks of up to 6",
          ],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-t border-ink/12 bg-paper"
          >
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug font-medium">
              {row[0]}
            </div>
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug">
              {row[1]}
            </div>
            <div className="p-4 md:p-6 text-[0.95rem] leading-snug">
              {row[2]}
            </div>
          </div>
        ))}
      </div>

      <P>
        Your GP refers you for up to 6 sessions at a time. Once those are
        used, a review with your GP can extend the referral, up to the
        yearly cap of 10 rebated sessions. After that, further sessions in
        the same calendar year are billed at the practice&rsquo;s private
        fee until the new year begins.
      </P>

      <H3>Getting a GP Mental Health Treatment Plan</H3>
      <P>
        To access these rebates, you first need a Mental Health Treatment
        Plan from your GP, sometimes called a Mental Health Care Plan or
        MHCP. Book a longer GP appointment and mention that you would like
        to discuss your mental health.
      </P>
      <P>
        Your GP will talk through what you are experiencing, prepare the
        plan, and provide a referral, usually addressed to a specific
        psychologist or left open if you have not chosen one yet. You will
        need both the plan and the referral before a psychologist can
        process your Medicare rebate.
      </P>

      <H2>Signs it might be worth talking to someone</H2>
      <P>
        You do not need to be in crisis to see a psychologist, but a few
        common signs suggest it is worth having the conversation. You might
        recognise:
      </P>
      <UL>
        <LI>Persistent, hard-to-control worry about everyday things</LI>
        <LI>
          A racing heart, tight chest or restlessness that shows up without
          an obvious cause
        </LI>
        <LI>Trouble sleeping because your mind will not settle</LI>
        <LI>
          Avoiding places, people or situations that trigger unease
        </LI>
        <LI>
          A constant sense of being on edge, or difficulty concentrating
        </LI>
      </UL>
      <P>
        If any of this sounds familiar, it does not mean something is
        wrong with you. It means it might help to talk it through with
        someone qualified.
      </P>

      <Callout kicker="If you are in crisis">
        <p>
          If you are having thoughts of harming yourself, or you feel
          unsafe right now, contact Lifeline on{" "}
          <a href="tel:131114" className="link">
            13 11 14
          </a>
          , available 24 hours a day, or Beyond Blue on{" "}
          <a href="tel:1300224636" className="link">
            1300 22 4636
          </a>
          .
        </p>
      </Callout>

      <H2>CBT at Sage Psychological Services in East Fremantle</H2>
      <P>
        Jacob Jones is a registered psychologist working with adults across
        Fremantle, Melville, Cockburn and the wider Perth area. CBT is one
        of two core approaches used at the practice, alongside EMDR for
        trauma, and sessions are delivered one to one rather than through
        a fixed course.
      </P>
      <P>
        You see the same psychologist at every appointment, which means
        your therapy builds on a consistent, ongoing relationship rather
        than starting over each time. Sessions are available in person in
        East Fremantle or through{" "}
        <Link href="/telehealth-psychologist-perth">
          telehealth psychology sessions
        </Link>{" "}
        for clients elsewhere in WA, with fee details set out on the{" "}
        <Link href="/fees">fees and rebates page</Link>. If you are still
        working out how CBT works for your own situation, that is exactly
        the kind of question a first session is for.
      </P>
      <P>
        If you would like to talk through your situation with a registered
        psychologist in East Fremantle, the team at Sage Psychological
        Services is happy to help. You can read more about{" "}
        <Link href="/cbt-therapy-perth">CBT therapy in Perth</Link> or{" "}
        <Link href="/contact">book a session with Jacob</Link> directly.
      </P>

      <H2>Frequently asked questions</H2>
      <FaqAccordion
        items={[
          {
            q: "How many CBT sessions do I need to see results?",
            aText:
              "There is no fixed number that applies to everyone. Many people work within Medicare's allocation of up to 10 sessions a year, though some need more support and others feel ready to finish sooner. Results vary and individual circumstances differ, so it is worth discussing what is likely to suit you with your own psychologist during an early session.",
            a: (
              <p>
                There is no fixed number that applies to everyone. Many
                people work within Medicare&rsquo;s allocation of up to 10
                sessions a year, though some need more support and others
                feel ready to finish sooner. Results vary and individual
                circumstances differ, so it is worth discussing what is
                likely to suit you with your own psychologist during an
                early session.
              </p>
            ),
          },
          {
            q: "Does CBT really change your brain, or is that an exaggeration?",
            aText:
              "Research suggests that psychological therapies including CBT are associated with changes in brain activity related to emotional regulation, though this is an evolving area of study. This is part of the broader picture, even though brain research in this area is still developing. The more grounded way to think about it is that repeated practice builds new habits of thinking, in the same way that practising any skill changes how automatic it feels over time.",
            a: (
              <p>
                Research suggests that psychological therapies including
                CBT are associated with changes in brain activity related
                to emotional regulation, though this is an evolving area
                of study. This is part of the broader picture, even though
                brain research in this area is still developing. The more
                grounded way to think about it is that repeated practice
                builds new habits of thinking, in the same way that
                practising any skill changes how automatic it feels over
                time.
              </p>
            ),
          },
          {
            q: "What's the difference between CBT and other types of therapy?",
            aText:
              "CBT is structured and focused on current thoughts, feelings and behaviours, using specific techniques like cognitive restructuring and exposure. Other approaches, such as EMDR or psychodynamic therapy, may look further into past experiences or use different techniques. Many psychologists, including at Sage, draw on more than one approach depending on what suits you.",
            a: (
              <p>
                CBT is structured and focused on current thoughts, feelings
                and behaviours, using specific techniques like cognitive
                restructuring and exposure. Other approaches, such as EMDR
                or psychodynamic therapy, may look further into past
                experiences or use different techniques. Many
                psychologists, including at Sage, draw on more than one
                approach depending on what suits you.
              </p>
            ),
          },
          {
            q: "Can I do CBT via telehealth?",
            aText:
              "Yes, CBT is commonly delivered through telehealth in Australia, and it can be just as accessible as an in-person session for many people. Sage Psychological Services offers telehealth appointments for clients across Western Australia who cannot attend the East Fremantle practice in person.",
            a: (
              <p>
                Yes, CBT is commonly delivered through telehealth in
                Australia, and it can be just as accessible as an in-person
                session for many people. Sage Psychological Services offers
                telehealth appointments for clients across Western
                Australia who cannot attend the East Fremantle practice in
                person.
              </p>
            ),
          },
          {
            q: "Do I need a GP referral to start CBT?",
            aText:
              "You do not need a referral to see a psychologist privately, but you do need a GP Mental Health Treatment Plan and referral if you want to claim a Medicare rebate. Speak with your GP about a mental health-focused appointment to arrange this.",
            a: (
              <p>
                You do not need a referral to see a psychologist privately,
                but you do need a GP Mental Health Treatment Plan and
                referral if you want to claim a Medicare rebate. Speak with
                your GP about a mental health-focused appointment to
                arrange this.
              </p>
            ),
          },
          {
            q: "What if CBT doesn't work for me?",
            aText:
              "CBT helps many people, but it does not suit everyone equally, and results vary between individuals. If progress feels slow, your psychologist may adjust the approach or draw on another evidence-based method, such as EMDR or Acceptance and Commitment Therapy, depending on what is driving your anxiety.",
            a: (
              <p>
                CBT helps many people, but it does not suit everyone
                equally, and results vary between individuals. If progress
                feels slow, your psychologist may adjust the approach or
                draw on another evidence-based method, such as EMDR or
                Acceptance and Commitment Therapy, depending on what is
                driving your anxiety.
              </p>
            ),
          },
        ]}
      />

      <CrisisFootnote />
    </>
  ),

  "physical-symptoms-of-anxiety-guide": () => (
    <>
      <P>
        You&rsquo;ve had headaches for weeks, an unsettled stomach most
        mornings, and a jaw that aches the moment you wake up. Sleep never
        feels complete, and none of this feels like the &ldquo;worry&rdquo;
        that anxiety is supposed to cause.
      </P>
      <P>
        That disconnect is common, because the physical symptoms of anxiety
        often show up long before any conscious worry does. This article walks
        through how those symptoms show up in the body, why the body reacts
        this way, when to see a GP first, and how anxiety is understood and
        treated in Australia.
      </P>

      <Callout kicker="Quick answer">
        <p>
          Yes, anxiety can cause physical symptoms without you feeling
          consciously worried or afraid. Common examples include a racing
          heart, muscle tension, jaw clenching, digestive upset, and disrupted
          sleep. If a symptom is sudden or severe, such as crushing chest
          pain, treat it as a medical emergency first.
        </p>
      </Callout>

      <H2>When Anxiety Doesn&rsquo;t Feel Like Worry</H2>
      <P>
        Anxiety doesn&rsquo;t always feel like worry. It can show up first as
        physical sensations in the body, with no obvious sense of fear behind
        them.
      </P>
      <P>
        Anxiety is your body&rsquo;s stress response doing its job a little
        too often. It&rsquo;s meant to prepare you for danger: heart rate
        rises, muscles tighten, breathing quickens. That&rsquo;s useful when
        you need to react fast.
      </P>
      <P>
        The problem is this response can switch on with no clear threat
        nearby. If it stays switched on, you notice the physical effects long
        before you notice any conscious worry. You just feel unwell, tired, or
        on edge, without knowing why.
      </P>
      <P>
        This is sometimes called health anxiety, where the physical symptoms
        become the main source of concern and create a loop: worry about the
        symptoms makes the symptoms worse.
      </P>

      <H2>How the Physical Symptoms of Anxiety Show Up in the Body</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/physical-symptoms-of-anxiety-body-diagram.webp"
            alt="Illustrated body outline showing common areas affected by physical anxiety symptoms"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        Physical symptoms of anxiety can affect nearly every system in the
        body, not just the heart and hands. They often turn up in ways people
        never connect to anxiety at all.
      </P>
      <P>Physical symptoms of anxiety at a glance:</P>
      <UL>
        <LI>Racing, pounding, or fluttering heartbeat</LI>
        <LI>Tightness or pressure in the chest</LI>
        <LI>Nausea, cramping, or a change in appetite</LI>
        <LI>Frequent headaches or a tight band feeling around the head</LI>
        <LI>Jaw clenching or teeth grinding, especially overnight</LI>
        <LI>Shoulder, neck, or back tension</LI>
        <LI>Shortness of breath or trouble getting a full breath</LI>
        <LI>Dizziness or lightheadedness</LI>
        <LI>Trouble falling asleep, waking often, or waking tired</LI>
        <LI>Ongoing fatigue with no clear physical cause</LI>
        <LI>Sweating or hot flushes unrelated to heat or exercise</LI>
        <LI>Restlessness or a constant sense of being on edge</LI>
      </UL>

      <H3>Heart and Chest</H3>
      <P>
        A racing or pounding heart is one of the more alarming physical
        symptoms of anxiety, mainly because it can feel like something is
        seriously wrong. Chest tightness often comes from the same stress
        response, combined with shallow or rapid breathing.
      </P>

      <H3>Digestion and Gut</H3>
      <P>
        Anxiety and digestion are closely linked through the connection
        between the gut and the nervous system. This can show up as nausea,
        cramping, or a stomach that never quite settles, particularly in the
        mornings.
      </P>

      <H3>Muscles, Jaw, and Headaches</H3>
      <P>
        Constant low-level muscle tension is common with anxiety, especially
        through the shoulders, neck, and jaw. Many people only find out
        they&rsquo;ve been clenching their jaw overnight when a dentist or GP
        mentions it.
      </P>

      <H3>Sleep and Energy</H3>
      <P>
        Anxiety can disrupt sleep even without racing thoughts to point to.
        You might fall asleep fine and then wake repeatedly, or sleep the full
        night and still feel drained the next day.
      </P>

      <H2>Why the Body Reacts Before the Mind Catches Up</H2>
      <P>
        Anxiety symptoms often appear in the body before you consciously
        register feeling anxious. That&rsquo;s because the stress response
        starts in a part of the brain that reacts faster than conscious
        thought does.
      </P>
      <P>
        When your brain perceives a threat, real or not, it triggers the
        sympathetic nervous system. This releases stress hormones such as
        adrenaline and cortisol, which raise your heart rate, tense your
        muscles, and sharpen your senses. It&rsquo;s designed to help you
        respond to danger quickly, without waiting for you to think it
        through.
      </P>
      <P>
        That&rsquo;s useful in a genuine emergency. The trouble is the same
        system can activate in response to ongoing stress or unresolved worry,
        long after any real trigger has passed. Your body stays braced for
        something that never arrives, and the physical symptoms are often the
        clearest sign of it.
      </P>

      <H2>Anxiety Symptoms vs a Medical Cause: When to See a GP First</H2>
      <P>
        If you&rsquo;re experiencing new or ongoing physical symptoms, see
        your GP before assuming they&rsquo;re caused by anxiety. Some symptoms
        anxiety produces can also signal something else, so a proper check
        rules that out first.
      </P>

      <div className="mt-10 rounded-[14px] border border-ink/12 overflow-hidden">
        <div className="grid grid-cols-3 bg-paper-soft">
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            Symptom
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            What it can feel like
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            What to do
          </div>
        </div>
        {[
          [
            "Racing heart or palpitations",
            "Fluttering, pounding, or skipped beats",
            "Mention it to your GP, especially if new or frequent",
          ],
          [
            "Chest tightness",
            "Pressure or a heavy feeling in the chest",
            "See your GP; treat sudden, severe, or crushing chest pain as a medical emergency",
          ],
          [
            "Shortness of breath",
            "Feeling like you can't get a full breath",
            "Raise it with your GP, particularly if it happens at rest",
          ],
          [
            "Dizziness",
            "Lightheadedness or unsteadiness",
            "Get it checked, especially if frequent or severe",
          ],
          [
            "Persistent stomach upset",
            "Nausea, cramping, changed appetite",
            "See your GP to rule out other digestive causes",
          ],
          [
            "Ongoing fatigue",
            "Tiredness with no clear physical cause",
            "Worth a GP check, particularly if new or worsening",
          ],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-t border-ink/12 bg-paper"
          >
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug font-medium">
              {row[0]}
            </div>
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug">
              {row[1]}
            </div>
            <div className="p-4 md:p-6 text-[0.95rem] leading-snug">
              {row[2]}
            </div>
          </div>
        ))}
      </div>

      <Callout kicker="Red flag">
        <p>
          Sudden, severe, or crushing chest pain, pain spreading to the arm
          or jaw, or severe shortness of breath needs urgent medical
          attention. Call{" "}
          <a href="tel:000" className="link">
            000
          </a>{" "}
          or go to your nearest emergency department. Don&rsquo;t wait to see
          if it settles on its own.
        </p>
      </Callout>

      <H2>Why These Symptoms Often Go Unrecognised</H2>
      <P>
        These symptoms often go unrecognised because anxiety is common, yet
        Australians are far less confident recognising its physical signs than
        they are recognising depression.
      </P>
      <P>
        Anxiety disorders affected 17.2% of Australians aged 16 to 85 in the
        12 months to 2022, the most common mental disorder group in the
        country. Lifetime prevalence is higher again, at 28.8%. Around 3.4
        million Australians live with an anxiety disorder at any given time.
      </P>
      <P>
        The rise has been sharpest among younger adults. Among 16 to 24 year
        olds, the proportion experiencing a mental disorder in the past year
        climbed from 26% in 2007 to almost 39% in 2020&ndash;2022, with
        anxiety the most common condition in that age group. Women report
        roughly double the 12-month anxiety prevalence of men.
      </P>
      <P>
        With numbers like these, someone in your workplace, family, or
        friendship group is likely dealing with exactly the symptoms described
        here. Many won&rsquo;t connect them to anxiety until later, often
        after tests that come back clear.
      </P>

      <H2>How Anxiety Is Understood and Treated in Australia</H2>
      <P>
        Anxiety is generally treated with evidence-based psychological
        therapy, sometimes alongside support from a GP or psychiatrist
        depending on what a person needs.
      </P>
      <P>
        <a
          href="https://www.racgp.org.au/clinical-resources/clinical-guidelines/handi/handi-interventions/cogntive-and-behavioural-therapies/cbt-for-panic-disorder"
          target="_blank"
          rel="noopener noreferrer"
        >
          CBT is identified as a first-line treatment for anxiety
        </a>{" "}
        in Australasian clinical guidelines, including for panic disorder and
        agoraphobia. It works by helping you identify the thought and
        behaviour patterns that keep the stress response switched on, and
        building practical strategies to settle both mind and body.
      </P>
      <P>
        Where anxiety is connected to past experiences or trauma, a
        psychologist such as{" "}
        <Link href="/about">Jacob Jones, registered psychologist</Link> may
        also draw on approaches such as Eye Movement Desensitisation and
        Reprocessing, known as EMDR, or psychodynamic work that looks at
        underlying drivers rather than symptoms alone. You can read more
        about{" "}
        <Link href="/anxiety-therapy-perth">
          anxiety therapy approaches in Perth
        </Link>
        .
      </P>
      <P>
        If medication is relevant to your situation, that&rsquo;s a
        conversation for your GP or a psychiatrist, not something a
        psychologist can prescribe or a blog post can advise on.
      </P>
      <P>
        Results vary and individual circumstances differ. Therapy isn&rsquo;t
        about eliminating every worry, since no one can promise that.
        It&rsquo;s about changing your relationship with anxiety so it has
        less hold over your day. If you&rsquo;re unsure what would help, a
        registered psychologist or your GP is the right person to ask.
      </P>

      <H2>Getting Started: GP Referral, Medicare, and What Therapy Involves</H2>
      <P>
        In Australia, most people access subsidised psychology sessions
        through a GP-prepared Mental Health Treatment Plan under
        Medicare&rsquo;s Better Access initiative.
      </P>
      <UL>
        <LI>
          <strong>See your GP.</strong> Book a longer appointment and explain
          what you&rsquo;ve been experiencing, physical symptoms included.
        </LI>
        <LI>
          <strong>Get your Mental Health Treatment Plan and referral.</strong>{" "}
          Your GP assesses your needs and refers you to a psychologist,
          usually for an initial six sessions.
        </LI>
        <LI>
          <strong>Attend your sessions.</strong> Medicare provides a rebate
          for each session with a registered psychologist under a current
          Mental Health Treatment Plan. The exact rebate amount is set by the{" "}
          <a
            href="https://www.mbsonline.gov.au/internet/mbsonline/publishing.nsf/Content/news-260701"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Medicare Benefits Schedule
          </a>{" "}
          and is worth checking directly, as rates are reviewed periodically.
        </LI>
        <LI>
          <strong>Return to your GP for a review.</strong> After your initial
          sessions, a review can lead to further sessions, up to 10
          individual sessions per calendar year in total.
        </LI>
      </UL>
      <P>
        Fees and rebates vary between practices, so it&rsquo;s worth checking{" "}
        <Link href="/fees">current fees and Medicare rebate details</Link>{" "}
        before your first session. Private health cover, DVA, and NDIS
        funding may also apply depending on your circumstances. Clients
        outside East Fremantle can also{" "}
        <Link href="/contact">book an appointment</Link> for a telehealth
        session, or find out more about{" "}
        <Link href="/telehealth-psychologist-perth">
          telehealth psychology across WA
        </Link>
        .
      </P>
      <P>
        If you would like to talk through your situation with a registered
        psychologist in East Fremantle, the team at Sage Psychological
        Services is happy to help.
      </P>

      <H2>Frequently Asked Questions</H2>
      <FaqAccordion
        items={[
          {
            q: "Can you have physical anxiety symptoms without feeling worried?",
            aText:
              "Yes. The stress response that drives anxiety can activate without a clear emotional trigger you notice. Your body may show signs such as a racing heart, muscle tension, or stomach upset before your mind registers any worry at all. This is common and doesn't mean something is wrong with you. If it happens often, it's worth discussing with your GP or a registered psychologist.",
            a: (
              <p>
                Yes. The stress response that drives anxiety can activate
                without a clear emotional trigger you notice. Your body may
                show signs such as a racing heart, muscle tension, or stomach
                upset before your mind registers any worry at all. This is
                common and doesn&rsquo;t mean something is wrong with you. If
                it happens often, it&rsquo;s worth discussing with your GP or
                a registered psychologist.
              </p>
            ),
          },
          {
            q: "Can anxiety cause chest pain or feel like a heart attack?",
            aText:
              "Anxiety can cause chest tightness or pain that feels alarming, often linked to muscle tension and rapid, shallow breathing. Because this can resemble a cardiac event, always get sudden or severe chest pain checked urgently. Once a medical cause has been ruled out, ongoing chest tightness linked to stress can be addressed through psychological support.",
            a: (
              <p>
                Anxiety can cause chest tightness or pain that feels
                alarming, often linked to muscle tension and rapid, shallow
                breathing. Because this can resemble a cardiac event, always
                get sudden or severe chest pain checked urgently. Once a
                medical cause has been ruled out, ongoing chest tightness
                linked to stress can be addressed through psychological
                support.
              </p>
            ),
          },
          {
            q: "What are the physical signs of anxiety?",
            aText:
              "Common physical signs include a racing or pounding heart, chest tightness, muscle tension, jaw clenching, headaches, digestive upset, dizziness, and disrupted sleep. Symptoms differ from person to person, and not everyone experiences all of them. Persistent or unexplained symptoms are worth raising with your GP.",
            a: (
              <p>
                Common physical signs include a racing or pounding heart,
                chest tightness, muscle tension, jaw clenching, headaches,
                digestive upset, dizziness, and disrupted sleep. Symptoms
                differ from person to person, and not everyone experiences
                all of them. Persistent or unexplained symptoms are worth
                raising with your GP.
              </p>
            ),
          },
          {
            q: "Why do I feel anxious but don't know why?",
            aText:
              "Anxiety doesn't always have an obvious trigger. It can build gradually from ongoing stress or unresolved worry that accumulates over time rather than one single event. A GP or psychologist can help you unpack what might be contributing, even when the cause isn't immediately clear.",
            a: (
              <p>
                Anxiety doesn&rsquo;t always have an obvious trigger. It can
                build gradually from ongoing stress or unresolved worry that
                accumulates over time rather than one single event. A GP or
                psychologist can help you unpack what might be contributing,
                even when the cause isn&rsquo;t immediately clear.
              </p>
            ),
          },
          {
            q: "Can anxiety cause digestive problems?",
            aText:
              "Yes. The gut and nervous system are closely connected, so anxiety can affect digestion through nausea, cramping, or appetite changes. This connection is well recognised in general practice. If digestive symptoms are persistent, your GP can check for other causes alongside considering anxiety.",
            a: (
              <p>
                Yes. The gut and nervous system are closely connected, so
                anxiety can affect digestion through nausea, cramping, or
                appetite changes. This connection is well recognised in
                general practice. If digestive symptoms are persistent, your
                GP can check for other causes alongside considering anxiety.
              </p>
            ),
          },
          {
            q: "How many psychology sessions does Medicare cover?",
            aText:
              "Under Medicare's Better Access initiative, eligible people can access up to 10 individual psychology sessions per calendar year with a Mental Health Treatment Plan from their GP. Sessions are usually released in an initial block of six, followed by a GP review before further sessions are approved.",
            a: (
              <p>
                Under Medicare&rsquo;s Better Access initiative, eligible
                people can access up to 10 individual psychology sessions per
                calendar year with a Mental Health Treatment Plan from their
                GP. Sessions are usually released in an initial block of six,
                followed by a GP review before further sessions are
                approved.
              </p>
            ),
          },
          {
            q: "Do I need a GP referral to see a psychologist at Sage?",
            aText:
              "A GP referral and Mental Health Treatment Plan are needed to access the Medicare rebate for your sessions. You're also welcome to see a psychologist privately without a referral, whether you'd simply prefer to pay independently or you've already used your rebated sessions for the calendar year.",
            a: (
              <p>
                A GP referral and Mental Health Treatment Plan are needed to
                access the Medicare rebate for your sessions. You&rsquo;re
                also welcome to see a psychologist privately without a
                referral, whether you&rsquo;d simply prefer to pay
                independently or you&rsquo;ve already used your rebated
                sessions for the calendar year.
              </p>
            ),
          },
        ]}
      />

      <CrisisFootnote />
    </>
  ),

  "generalised-anxiety-disorder-symptoms-wa": () => (
    <>
      <P>
        Your mind won&rsquo;t settle, even when nothing is actually wrong
        right now. You lie awake running through tomorrow&rsquo;s problems,
        then next week&rsquo;s, then ones that may never happen at all.
      </P>
      <P>
        If that sounds familiar, you might be dealing with generalised anxiety
        disorder, a common and treatable mental health condition that affects
        how your mind and body respond to everyday life.
      </P>
      <P>
        This article explains what GAD is, how it differs from ordinary
        stress, what it can look like day to day, and what support is actually
        available here in Western Australia, including how Medicare rebates
        work.
      </P>

      <H2>What is generalised anxiety disorder?</H2>
      <Callout kicker="Quick answer">
        <p>
          Generalised anxiety disorder (GAD) is persistent, hard-to-control
          worry across several areas of life, occurring on most days for six
          months or more, along with physical symptoms like muscle tension or
          poor sleep.
        </p>
      </Callout>
      <P>
        Most people worry sometimes. A work deadline, a medical test, a big
        decision. That kind of worry usually passes once the situation
        resolves.
      </P>
      <P>
        GAD is different. The worry doesn&rsquo;t stay tied to one problem.
        It moves from your finances to your health to your relationships to
        things that haven&rsquo;t happened yet and probably won&rsquo;t. It
        sticks around most days, often for months at a time.
      </P>
      <P>
        Around 2.7% of Australians experience GAD in any given year, based on{" "}
        <a
          href="https://www.racgp.org.au/getattachment/3d88b156-b93f-40ad-98d1-24ea2b0e63d2/Anxiety-disorders.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          RACGP anxiety management guidance
        </a>
        . Anxiety disorders as a group,
        which include GAD, social anxiety, and panic disorder, affect an
        estimated 14.4% of the population over a 12-month period, making them
        the most common mental health concern in the country.
      </P>

      <H2>What GAD isn&rsquo;t</H2>
      <P>
        Generalised anxiety disorder isn&rsquo;t the same as feeling stressed
        during a hard week or being naturally cautious. It also isn&rsquo;t a
        personality flaw or a sign you&rsquo;re overreacting.
      </P>
      <P>
        A tough patch at work, a difficult breakup, or nerves before an exam
        are situational. Once the situation changes, the worry usually eases.
        With GAD, the worry doesn&rsquo;t need a trigger. It can turn up on
        an ordinary Tuesday for no clear reason at all.
      </P>

      <H2>How GAD shows up: symptoms and a quick self-check</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/gad-symptoms-reflection-notebook.webp"
            alt="Notebook and tea evoking quiet reflection on anxiety symptoms"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        GAD involves both mental and physical symptoms. You might notice a
        mind that won&rsquo;t switch off alongside a body that feels tense or
        worn out, even when you haven&rsquo;t done anything strenuous.
      </P>
      <P>Common signs include:</P>
      <UL>
        <LI>Worry that feels excessive and difficult to control</LI>
        <LI>Restlessness or a constant sense of being on edge</LI>
        <LI>Muscle tension, headaches, or an upset stomach</LI>
        <LI>Trouble falling or staying asleep because your thoughts keep going</LI>
        <LI>Feeling tired even after a full night&rsquo;s sleep</LI>
        <LI>Difficulty concentrating, or your mind going blank</LI>
        <LI>Irritability that feels out of proportion to what&rsquo;s happening</LI>
      </UL>
      <P>
        Clinicians sometimes use a short screening questionnaire, known as
        the GAD-7, to help understand how severe someone&rsquo;s symptoms
        are. That kind of assessment should be done with a GP or
        psychologist, since it forms part of a proper clinical picture
        rather than a standalone test.
      </P>

      <H3>Worry vs GAD: a quick self-check</H3>
      <UL>
        <LI>My worry has been present most days for six months or more</LI>
        <LI>I find it hard to control the worry once it starts</LI>
        <LI>The worry jumps between different topics, rather than staying on one issue</LI>
        <LI>I notice physical symptoms too, like muscle tension, fatigue, or poor sleep</LI>
        <LI>The worry is getting in the way of work, study, relationships, or daily tasks</LI>
      </UL>
      <P>
        If several of these sound like you, it&rsquo;s worth raising with
        your GP. This checklist is a general guide only. It isn&rsquo;t a
        diagnosis, and only a registered health practitioner can assess
        whether what you&rsquo;re experiencing meets the criteria for GAD.
      </P>

      <H2>Why it happens (and why it isn&rsquo;t a personal failing)</H2>
      <P>
        There&rsquo;s no single cause of generalised anxiety disorder. Most
        researchers point to a mix of biological, psychological, and social
        factors working together.
      </P>
      <P>
        Genetics can play a role, as can temperament. Some people who were
        more reserved or easily worried as children go on to develop GAD as
        adults. Ongoing life stress, past difficult experiences, and a
        tendency to feel uncertain about the future can all contribute as
        well.
      </P>
      <P>
        None of this means the worry is your fault, or something you should
        be able to think your way out of on your own.
      </P>

      <H2>How common is GAD in Australia?</H2>
      <P>
        GAD is common, and it&rsquo;s a meaningful part of the country&rsquo;s
        overall mental health picture. Mental and substance use disorders
        together account for around 15% of the total disease burden in
        Australia, ranking second only to cancer.
      </P>
      <P>
        Lifetime prevalence of GAD in Australia has been estimated at around
        8%, somewhat higher than international estimates of roughly 3.7%.
        Rates also appear to be rising among younger Australians.
      </P>
      <P>
        Among 15 to 17 year olds, 19% were estimated to have a diagnosed
        mental illness in 2021, up from 6% in 2009, with anxiety disorders
        reported by 25% of female adolescents compared with 9% of male
        adolescents.
      </P>
      <P>
        Despite how common it is, treatment-seeking hasn&rsquo;t kept pace.
        Between 2006 and 2016, the rate at which Australian GPs managed
        anxiety in consultations rose only from 2.3% to 3.2%, well below what
        prevalence figures would suggest. Many people live with GAD for years
        before getting support.
      </P>

      <H2>How GAD is treated</H2>
      <P>
        GAD responds well to evidence-based psychological treatment. Most
        people are supported through a combination of talking therapy and
        practical strategies, sometimes alongside a conversation with their
        GP about medication if needed.
      </P>

      <H3>Cognitive Behaviour Therapy</H3>
      <P>
        Cognitive Behaviour Therapy (CBT) is one of the treatment options
        recommended for GAD in Australia, according to{" "}
        <a
          href="https://www.healthdirect.gov.au/generalised-anxiety-disorder-gad"
          target="_blank"
          rel="noopener noreferrer"
        >
          healthdirect&rsquo;s guide to treating GAD
        </a>
        . CBT helps you notice the thought patterns and behaviours that keep
        worry going, then build practical, workable ways to respond
        differently.
      </P>

      <H3>EMDR and psychodynamic approaches</H3>
      <P>
        Where anxiety seems connected to past experiences, some psychologists
        also draw on Eye Movement Desensitisation and Reprocessing (EMDR) or
        psychodynamic approaches, alongside other methods such as Exposure
        and Response Prevention (ERP), to look at what may be driving the
        worry underneath the surface symptoms.
      </P>
      <P>
        Results vary between individuals, and how someone responds to
        therapy depends on their own circumstances. A registered psychologist
        can talk you through which approach is likely to suit your situation,
        and outcomes aren&rsquo;t promised in advance for any single method.
      </P>
      <P>
        If medication is relevant to your situation, that&rsquo;s a
        conversation to have with your GP or a psychiatrist, since
        psychologists in Australia don&rsquo;t prescribe.
      </P>

      <H2>Getting support in Perth and WA: what it actually costs</H2>
      <figure className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[14px]">
          <Image
            src="/img/accessing-psychology-support-wa-steps.webp"
            alt="Simple icon diagram showing the steps to access psychology support"
            fill
            sizes="(max-width: 768px) 100vw, 52rem"
            className="object-cover"
          />
        </div>
      </figure>
      <P>
        Cost and access are often the biggest barriers to getting help, so
        here&rsquo;s how the main pathways compare.
      </P>

      <div className="mt-10 rounded-[14px] border border-ink/12 overflow-hidden">
        <div className="grid grid-cols-3 bg-paper-soft">
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            Pathway
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss border-r border-ink/12">
            What you need
          </div>
          <div className="p-4 md:p-6 text-[0.72rem] tracking-[0.24em] uppercase text-moss">
            Approximate cost
          </div>
        </div>
        {[
          [
            "Medicare (Mental Health Care Plan)",
            "GP referral and a Mental Health Care Plan, up to 10 sessions per calendar year",
            "Standard fee around $180 per session, with a Medicare rebate of $101.55, bringing the out-of-pocket cost down",
          ],
          [
            "Private health insurance",
            "Rebate amount depends on your fund and level of cover",
            "Check directly with your health fund",
          ],
          [
            "DVA (White or Gold Card)",
            "GP referral, up to 12 initial sessions",
            "No out-of-pocket cost for eligible veterans",
          ],
          [
            "NDIS, Workers' Compensation, or ICWA",
            "Confirm eligibility with the relevant scheme",
            "Set according to each scheme's current fee schedule",
          ],
          [
            "Self-funded, no referral needed",
            "Book directly",
            "Standard session fee, invoiced after each appointment",
          ],
        ].map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-t border-ink/12 bg-paper"
          >
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug font-medium">
              {row[0]}
            </div>
            <div className="p-4 md:p-6 border-r border-ink/12 text-[0.95rem] leading-snug">
              {row[1]}
            </div>
            <div className="p-4 md:p-6 text-[0.95rem] leading-snug">
              {row[2]}
            </div>
          </div>
        ))}
      </div>

      <P>If you&rsquo;re going through Medicare, the process usually looks like this:</P>
      <UL>
        <LI>Book a longer appointment with your GP and explain what you&rsquo;ve been experiencing.</LI>
        <LI>Get your Mental Health Care Plan and referral letter. Your GP will typically issue this for an initial six sessions.</LI>
        <LI>Attend your sessions with a registered psychologist. After six sessions, you&rsquo;ll return to your GP for a review before accessing the remaining four.</LI>
        <LI>Receive your rebate, which is usually processed within a couple of days of each appointment.</LI>
      </UL>

      <H2>When to reach out</H2>
      <P>
        You don&rsquo;t need to wait until things feel unbearable before
        getting support. If worry has been affecting your sleep, work, or
        relationships for a while, that&rsquo;s already a reasonable reason
        to talk to someone.
      </P>
      <P>
        If you&rsquo;re in crisis or need to talk to someone urgently, you
        can contact Lifeline on{" "}
        <a href="tel:131114" className="link">
          13 11 14
        </a>
        , available 24 hours a day.
      </P>
      <P>
        For non-urgent support, a good starting point is a conversation with
        your GP about a Mental Health Care Plan, or reaching out directly to
        a registered psychologist to ask whether therapy is a fit for what
        you&rsquo;re going through. You can find more detail on{" "}
        <Link href="/fees">Medicare rebates and fees</Link> and{" "}
        <Link href="/blog/first-psychology-session">
          what a first session actually feels like
        </Link>{" "}
        before you book.
      </P>
      <P>
        If you would like to talk through your situation with a registered
        psychologist in East Fremantle, the team at Sage Psychological
        Services is happy to help. You can read more about{" "}
        <Link href="/anxiety-therapy-perth">anxiety therapy in Perth</Link>,
        learn about <Link href="/emdr-therapy-perth">EMDR therapy</Link>,
        check{" "}
        <Link href="/telehealth-psychologist-perth">
          telehealth across WA
        </Link>
        , or{" "}
        <Link href="/contact">book a session with Jacob</Link> when
        you&rsquo;re ready.
      </P>

      <H2>Frequently asked questions</H2>
      <FaqAccordion
        items={[
          {
            q: "What is the difference between normal worry and generalised anxiety disorder?",
            aText:
              "Normal worry is usually tied to a specific situation and eases once that situation passes. GAD involves persistent, hard-to-control worry across several areas of life, most days, for six months or more, often alongside physical symptoms like muscle tension or poor sleep.",
            a: (
              <p>
                Normal worry is usually tied to a specific situation and
                eases once that situation passes. GAD involves persistent,
                hard-to-control worry across several areas of life, most
                days, for six months or more, often alongside physical
                symptoms like muscle tension or poor sleep.
              </p>
            ),
          },
          {
            q: "What are the main symptoms of GAD?",
            aText:
              "Common symptoms include excessive worry, restlessness, muscle tension, fatigue, trouble concentrating, irritability, and sleep difficulties. It's usually the combination of several symptoms together, along with how long they've lasted, that matters most. Symptoms vary from person to person, and a registered health practitioner can help you understand whether what you're experiencing fits a clinical picture.",
            a: (
              <p>
                Common symptoms include excessive worry, restlessness,
                muscle tension, fatigue, trouble concentrating,
                irritability, and sleep difficulties. It&rsquo;s usually the
                combination of several symptoms together, along with how
                long they&rsquo;ve lasted, that matters most. Symptoms vary
                from person to person, and a registered health practitioner
                can help you understand whether what you&rsquo;re
                experiencing fits a clinical picture.
              </p>
            ),
          },
          {
            q: "Can generalised anxiety disorder be cured?",
            aText:
              "GAD responds well to evidence-based psychological treatment, though results vary between individuals and outcomes can't be promised in advance. Many people find that with the right support, worry becomes far more manageable, though occasional anxiety is a normal part of life for everyone. Speak with a registered practitioner about what to expect in your situation.",
            a: (
              <p>
                GAD responds well to evidence-based psychological treatment,
                though results vary between individuals and outcomes
                can&rsquo;t be promised in advance. Many people find that
                with the right support, worry becomes far more manageable,
                though occasional anxiety is a normal part of life for
                everyone. Speak with a registered practitioner about what
                to expect in your situation.
              </p>
            ),
          },
          {
            q: "Do I need a GP referral to see a psychologist for anxiety?",
            aText:
              "You don't need a referral to see a psychologist privately, but a referral and Mental Health Care Plan from your GP are required to access Medicare rebates. Without a plan, you can still book and pay privately, with an invoice provided after each session.",
            a: (
              <p>
                You don&rsquo;t need a referral to see a psychologist
                privately, but a referral and Mental Health Care Plan from
                your GP are required to access Medicare rebates. Without a
                plan, you can still book and pay privately, with an invoice
                provided after each session.
              </p>
            ),
          },
          {
            q: "How much does psychology cost with a Medicare rebate?",
            aText:
              "Standard psychology sessions are often around $180, with a Medicare rebate of $101.55 available under a Mental Health Care Plan. The same rebate applies whether your session is in person or via telehealth. Eligible clients can access up to 10 subsidised sessions per calendar year, with a GP review after the first six. Exact fees vary by practice.",
            a: (
              <p>
                Standard psychology sessions are often around $180, with a
                Medicare rebate of $101.55 available under a Mental Health
                Care Plan. The same rebate applies whether your session is
                in person or via telehealth. Eligible clients can access up
                to 10 subsidised sessions per calendar year, with a GP
                review after the first six. Exact fees vary by practice.
              </p>
            ),
          },
          {
            q: "How is GAD different from panic disorder or social anxiety?",
            aText:
              "GAD involves ongoing worry across many areas of life, while panic disorder centres on sudden, intense panic attacks, and social anxiety focuses specifically on fear of social or performance situations. These conditions can overlap, and a registered practitioner can help clarify what's happening for you.",
            a: (
              <p>
                GAD involves ongoing worry across many areas of life, while
                panic disorder centres on sudden, intense panic attacks, and
                social anxiety focuses specifically on fear of social or
                performance situations. These conditions can overlap, and a
                registered practitioner can help clarify what&rsquo;s
                happening for you.
              </p>
            ),
          },
          {
            q: "Can I access anxiety therapy via telehealth in WA?",
            aText:
              "Yes. Telehealth psychology sessions are available across Western Australia for people who can't attend in person or prefer the comfort of home, using the same evidence-based approaches offered in-clinic. Sessions are usually held by secure video call, and the same Medicare rebate applies as for an in-person appointment if you have a valid Mental Health Care Plan.",
            a: (
              <p>
                Yes. Telehealth psychology sessions are available across
                Western Australia for people who can&rsquo;t attend in
                person or prefer the comfort of home, using the same
                evidence-based approaches offered in-clinic. Sessions are
                usually held by secure video call, and the same Medicare
                rebate applies as for an in-person appointment if you have
                a valid Mental Health Care Plan.
              </p>
            ),
          },
        ]}
      />

      <CrisisFootnote />
    </>
  ),

  "what-is-cbt-anxiety": () => (
    <>
      <P>
        If you have looked into therapy for anxiety, you have almost certainly
        come across the letters CBT. It is the approach most often recommended
        by GPs, the one with the largest body of research behind it, and the
        one most likely to be mentioned in any article about managing worry.
        What is rarely explained is what it actually involves, or why it
        works.
      </P>
      <P>
        Cognitive Behaviour Therapy is a structured, practical form of
        psychological therapy based on the idea that our thoughts, feelings,
        and behaviours are interconnected. By learning to notice and adjust
        unhelpful patterns of thinking and the behaviours that follow from
        them, people can change how they feel. Rather than focusing primarily
        on the past, CBT concentrates on the difficulties you are experiencing
        now and builds practical skills you can apply immediately.
      </P>

      <H2>The anxiety cycle, and why it is so hard to break</H2>
      <P>
        Anxiety tends to run in a loop. Something triggers a thought, often a
        prediction that something bad is about to happen. That thought
        produces a physical response: a racing heart, tight chest, shallow
        breathing. The physical response feels like confirmation that the
        danger is real, which intensifies the thought. And then,
        understandably, you do something to make the discomfort stop, usually
        by avoiding whatever triggered it.
      </P>
      <P>
        Avoidance is the part that quietly keeps anxiety going. It works
        brilliantly in the short term because the relief is immediate. But
        every time you avoid something, you also lose the opportunity to
        discover that you could have coped, and the fear grows slightly
        larger for next time. Over months and years, this is how a manageable
        worry becomes a life that has narrowed considerably.
      </P>
      <P>
        CBT targets this cycle at both points, addressing the thoughts that
        fuel the anxiety and the behaviours that maintain it.
      </P>

      <H2>How CBT works in practice</H2>
      <P>
        CBT is collaborative and structured, though it should never feel
        mechanical in the hands of a good practitioner. The work generally
        moves through several overlapping stages.
      </P>

      <H3>Understanding your particular pattern</H3>
      <P>
        Early sessions focus on mapping how anxiety operates for you
        specifically. What situations trigger it, what goes through your
        mind, what happens in your body, and what you do in response. This
        sounds simple, but seeing the pattern laid out clearly is often the
        first moment of genuine relief, because a problem with a shape is a
        problem that can be worked with.
      </P>

      <H3>Examining the thoughts</H3>
      <P>
        Anxious thinking has recognisable habits: predicting catastrophe,
        overestimating how likely a bad outcome is, underestimating your
        ability to cope, and reading other people&rsquo;s minds unfavourably.
        CBT does not ask you to think positively, which rarely works and
        often feels patronising. It asks you to think accurately, testing
        anxious predictions against what actually tends to happen.
      </P>

      <H3>Changing what you do</H3>
      <P>
        This is where the real shift happens. Working at a pace you set, you
        begin gradually re-entering the situations anxiety has been steering
        you away from. Each time you do, and the feared outcome does not
        arrive, your brain updates its estimate of the threat. This is called
        graded exposure, and it is one of the most reliably effective
        components of anxiety treatment.
      </P>

      <H3>Building skills you keep</H3>
      <P>
        Alongside this, you learn practical strategies for managing physical
        arousal, interrupting rumination, and responding differently when
        anxiety spikes. These are portable. Most people finish therapy with a
        set of tools they continue drawing on for years.
      </P>

      <H2>Why CBT is so widely recommended</H2>
      <P>
        CBT has been studied more extensively than any other psychological
        treatment, and the evidence for its effectiveness in anxiety
        disorders is substantial and consistent. It is recommended as a
        first-line treatment in clinical guidelines internationally,
        including in Australia, for generalised anxiety, panic disorder,
        social anxiety, and specific phobias.
      </P>
      <P>
        Part of its appeal is that the gains tend to hold. Because CBT
        teaches you to become your own therapist, many people maintain their
        improvement well after sessions end, and they have something to
        reach for if difficulties resurface.
      </P>

      <H2>What CBT is not</H2>
      <P>
        It is worth being clear about a few misconceptions. CBT is not simply
        positive thinking, and it does not ask you to dismiss genuine
        concerns. It is not a matter of being told what to think. And while
        it is more structured than some approaches, good CBT is not a rigid
        protocol applied identically to everyone. A skilled psychologist
        adapts it to the person in front of them, and often integrates it
        with other approaches where the picture calls for it.
      </P>
      <P>
        It is also not always the whole answer. Where anxiety is rooted in
        earlier experiences or unresolved{" "}
        <Link href="/trauma-therapy-perth">trauma</Link>, approaches such as{" "}
        <Link href="/emdr-therapy-perth">EMDR</Link> or schema-focused work
        may be needed alongside it.
      </P>

      <H2>Is CBT right for you?</H2>
      <P>
        If anxiety has been shaping your decisions, shrinking what you are
        willing to do, or simply exhausting you, CBT is a well-evidenced
        place to start. It suits people who like structure, who want
        practical strategies, and who are willing to do some of the work
        between sessions. That said, the right approach is best decided in
        conversation rather than in advance.
      </P>
      <P>
        At Sage Psychological Services in East Fremantle,{" "}
        <Link href="/cbt-therapy-perth">CBT</Link> is one of the core
        approaches offered for{" "}
        <Link href="/anxiety-therapy-perth">anxiety</Link>. If you would like
        to talk about whether it might suit you, you can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book a session</Link> or{" "}
        <Link href="/contact">get in touch</Link> with a question first.
      </P>
    </>
  ),

  "signs-see-psychologist-anxiety": () => (
    <>
      <P>
        One of the most common things people say in a first session is some
        version of: I probably should have come sooner. Often followed by: I
        wasn&rsquo;t sure my problem was big enough.
      </P>
      <P>
        There is no severity threshold you need to reach before therapy is
        appropriate. Anxiety does not have to be debilitating to be worth
        addressing, and waiting until it is tends to make the work longer
        and harder. If you are wondering whether it is time, here are five
        signs that are worth taking seriously.
      </P>

      <H2>1. Your world has quietly become smaller</H2>
      <P>
        This is the sign people most often miss, because it happens
        gradually. You stop putting your hand up at work. You decline the
        invitation, again. You take the longer route to avoid the freeway,
        or you order in rather than face the restaurant. None of these
        decisions feel dramatic in isolation, and each one comes with a
        reasonable-sounding justification.
      </P>
      <P>
        Look at the pattern rather than the individual choices. If the list
        of things you no longer do has been growing, anxiety is making
        decisions on your behalf, and that is worth interrupting.
      </P>

      <H2>2. The worry does not switch off</H2>
      <P>
        Everyone worries. The difference with anxiety is that the worry
        becomes untethered from any particular problem and keeps running
        regardless. You resolve one concern and another immediately takes
        its place. You lie awake mentally rehearsing conversations. You
        wake already braced for the day.
      </P>
      <P>
        When the mind will not stand down even in genuinely safe
        circumstances, that is not a personality trait to be endured. It is
        a pattern that responds well to treatment.
      </P>

      <H2>3. Your body is carrying it</H2>
      <P>
        Anxiety is physical as much as mental. Persistent tension through
        the shoulders and jaw, digestive problems, headaches, disrupted
        sleep, a heart that races without cause, or a constant low-grade
        restlessness are all common. Many people see their GP about these
        symptoms without connecting them to anxiety at all.
      </P>
      <P>
        If medical causes have been ruled out and the symptoms persist, the
        nervous system may simply be stuck in a state of alert.
      </P>

      <H2>4. It is affecting the people around you</H2>
      <P>
        Anxiety rarely stays contained. It can show up as irritability with
        the people closest to you, withdrawal from friendships that used to
        matter, difficulty being present with your children or partner, or
        a short fuse that does not feel like you. Sometimes the people
        around you notice the change before you do.
      </P>
      <P>
        If someone who cares about you has gently raised it, that is worth
        weighing rather than dismissing.
      </P>

      <H2>5. What used to work has stopped working</H2>
      <P>
        Most people manage anxiety with their own strategies for a long
        time before seeking help: exercise, distraction, keeping busy, a
        glass of wine in the evening, avoiding the trigger. These often
        work well enough for years.
      </P>
      <P>
        The signal worth acting on is when they stop being sufficient, or
        when the strategy itself starts creating problems. Needing
        progressively more of something to get the same relief is a pattern
        that tends to compound rather than resolve on its own.
      </P>

      <H2>The thought that keeps people waiting</H2>
      <P>
        Beneath most delays is a version of the same thought: other people
        have it worse. It is a decent instinct and a poor decision rule.
        Psychologists are not a scarce emergency resource to be rationed.
        Seeking support early usually means fewer sessions, faster
        progress, and less accumulated damage to work, relationships, and
        confidence in the meantime.
      </P>
      <P>
        You are also allowed to attend therapy simply because something is
        harder than you would like it to be. That is a sufficient reason.
      </P>

      <H2>What to do next</H2>
      <P>
        If several of these felt familiar, a conversation is a reasonable
        next step. You can see a psychologist directly without a referral,
        or you can visit your GP to discuss a Mental Health Care Plan,
        which provides Medicare rebates for up to ten sessions per year.
      </P>
      <P>
        If the unknown is what is holding you back, our{" "}
        <Link href="/how-therapy-works">what to expect</Link> page walks
        through exactly what happens in a first appointment. Sage
        Psychological Services offers{" "}
        <Link href="/anxiety-therapy-perth">anxiety therapy</Link> in East
        Fremantle and by telehealth across Western Australia. You can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book a session</Link> when you are ready, or{" "}
        <Link href="/contact">get in touch</Link> with a question first.
      </P>
      <CrisisFootnote />
    </>
  ),

  "cbt-vs-medication-anxiety": () => (
    <>
      <P>
        It is one of the first questions people ask when they decide to do
        something about anxiety: should I be having therapy, taking
        medication, or both?
      </P>
      <P>
        It is worth saying clearly at the outset that decisions about
        medication sit with your GP or a psychiatrist, not with a
        psychologist. What follows is an overview of what the research
        broadly shows, offered so that you can have a better-informed
        conversation with your doctor. It is not a recommendation in either
        direction, and it is certainly not a reason to change anything you
        are currently taking.
      </P>

      <H2>What the evidence broadly shows</H2>
      <P>
        For most anxiety disorders, both psychological therapy and medication
        have good evidence behind them, and clinical guidelines in Australia
        and internationally recognise both as legitimate first-line options.
      </P>
      <P>
        Cognitive Behaviour Therapy has the strongest research base among the
        psychological treatments. Medication, prescribed and monitored by a
        doctor, is also well established and can be particularly useful where
        symptoms are severe enough that engaging with therapy is difficult in
        the first place.
      </P>
      <P>
        Research comparing the two tends to find broadly comparable outcomes
        in the shorter term for many presentations, with one notable
        difference: gains from therapy often persist after treatment ends,
        because the skills remain with you. This is not an argument against
        medication. It is simply one factor among several that your doctor
        will weigh with you.
      </P>

      <H2>Different tools, different strengths</H2>
      <ComparisonTable
        left="Psychological therapy"
        right="Medication (prescribed by a doctor)"
        rows={[
          [
            "Builds skills you keep after treatment ends",
            "Can reduce symptom intensity relatively quickly",
          ],
          [
            "Addresses the patterns maintaining anxiety",
            "Can make therapy more accessible when symptoms are severe",
          ],
          [
            "Takes time and active participation",
            "Requires medical assessment, monitoring, and review",
          ],
          [
            "No physical side effects",
            "Side effects vary and should be discussed with your doctor",
          ],
          [
            "Medicare rebates available with a GP referral",
            "Prescribed and reviewed by your GP or psychiatrist",
          ],
        ]}
      />
      <P>
        Presented this way it can look like a choice between two columns. In
        practice, for many people it is not a choice at all.
      </P>

      <H2>Why the answer is often both</H2>
      <P>
        A common and entirely sensible arrangement is for someone to work
        with their GP on the medical side while seeing a psychologist for the
        therapeutic side. The two are not in competition, and combining them
        is standard practice rather than a sign that something has gone
        wrong.
      </P>
      <P>
        Where symptoms are intense, medication can sometimes reduce them
        enough that the work of therapy becomes possible. Where therapy is
        progressing well, some people and their doctors later consider
        reducing medication, always gradually and always under medical
        supervision. Neither path is a failure of the other.
      </P>

      <H2>Having the conversation with your GP</H2>
      <P>
        Your GP is the right person to raise this with, and it helps to
        arrive prepared. It is worth being able to describe how long symptoms
        have been present, how much they are affecting your daily life,
        sleep, and work, what you have already tried, and any concerns you
        have about medication so they can be discussed openly.
      </P>
      <P>
        The same appointment is also where you can ask about a Mental Health
        Care Plan, which provides Medicare rebates for up to ten psychology
        sessions per calendar year. Many people leave that consultation with
        both a referral and a plan for the medical side.
      </P>
      <Callout kicker="A note on medication changes">
        <p>
          If you are already taking medication, please do not stop or adjust
          it based on anything you read online, including this article.
          Changes should always be made with your prescribing doctor.
        </p>
      </Callout>

      <H2>Where therapy fits</H2>
      <P>
        Whatever you and your doctor decide about the medical side, the
        psychological work remains available and worthwhile. At Sage
        Psychological Services,{" "}
        <Link href="/cbt-therapy-perth">CBT</Link> and related approaches are
        used to treat <Link href="/anxiety-therapy-perth">anxiety</Link> in
        adults, in East Fremantle and by telehealth across Western Australia.
      </P>
      <P>
        Jacob works alongside GPs regularly and is comfortable coordinating
        care where that is useful. You can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book a session</Link> or{" "}
        <Link href="/contact">get in touch</Link> to discuss whether therapy
        would suit your situation.
      </P>
    </>
  ),

  "how-many-therapy-sessions": () => (
    <>
      <P>
        It is a fair question, and one people often feel slightly awkward
        asking. You are committing time and money to something open-ended,
        and you would reasonably like to know what you are signing up for.
      </P>
      <P>
        The honest answer is that it depends, which is unsatisfying on its
        own. So here is what it depends on, what the research suggests, and
        how Medicare&rsquo;s rebated sessions fit into the picture.
      </P>

      <H2>What the research suggests</H2>
      <P>
        Studies of psychological treatment consistently find that a
        meaningful proportion of people experience noticeable improvement
        within roughly six to twelve sessions, with many showing measurable
        change earlier than that. For focused difficulties addressed with a
        structured approach such as Cognitive Behaviour Therapy, shorter
        courses are common. For more complex or long-standing patterns,
        particularly those involving trauma or difficulties rooted in early
        experience, therapy tends to take longer.
      </P>
      <P>
        Averages are useful for setting expectations and useless for
        predicting any individual. Some people arrive with a clearly defined
        problem and resolve it in a handful of sessions. Others find that
        what brought them in turns out to sit on top of something larger.
      </P>

      <H2>What affects the length of therapy</H2>

      <H3>How long the difficulty has been present</H3>
      <P>
        A pattern that has been running for six months generally has less
        momentum behind it than one that has been running for twenty years.
        Long-standing difficulties are entirely treatable, but they usually
        take longer to shift.
      </P>

      <H3>How focused the issue is</H3>
      <P>
        A specific phobia or a discrete recent stressor tends to be quicker
        work than generalised difficulties affecting many areas of life at
        once.
      </P>

      <H3>Whether other things are going on</H3>
      <P>
        Anxiety alongside{" "}
        <Link href="/depression-counselling-perth">depression</Link>, or
        difficulties layered over unresolved{" "}
        <Link href="/trauma-therapy-perth">trauma</Link>, generally require
        more time than a single presenting concern.
      </P>

      <H3>What you do between sessions</H3>
      <P>
        This one is genuinely within your control and makes a substantial
        difference. Approaches like CBT involve practising strategies in
        daily life, and the people who engage with that consistently tend
        to progress faster.
      </P>

      <H3>Your goals</H3>
      <P>
        There is a real difference between wanting relief from a specific
        symptom and wanting to understand a lifelong pattern. Both are
        legitimate, and they take different amounts of time.
      </P>

      <H2>How Medicare&rsquo;s ten sessions fit</H2>
      <P>
        In Australia, a Mental Health Care Plan from your GP provides
        Medicare rebates for up to ten individual psychology sessions per
        calendar year. Your GP typically refers you for six initially, after
        which you return for a brief review to access the remaining four.
      </P>
      <P>
        Ten is a policy figure rather than a clinical one, and it is worth
        not treating it as a prescription. Many people find that ten
        sessions is more than enough. Others use their ten and choose to
        continue privately, or take a break and resume the following
        calendar year when the allocation resets. Some pay privately from
        the outset because they would rather not involve a referral at all.
        Details of both pathways are on our{" "}
        <Link href="/fees">fees and rebates</Link> page.
      </P>

      <H2>How to tell whether it is working</H2>
      <P>
        Rather than counting sessions, it is more useful to watch for
        change. Progress in therapy often shows up first in small,
        unglamorous ways: sleeping a little better, noticing a thought
        pattern as it happens rather than an hour later, doing something
        you had been avoiding, or recovering from a bad day more quickly
        than you used to.
      </P>
      <P>
        A good psychologist will review progress with you openly rather
        than leaving you to guess, and that includes being straightforward
        about whether the approach is working and what should change if it
        is not.
      </P>

      <H2>Starting without committing to a number</H2>
      <P>
        You do not need to decide in advance how long you will attend. Most
        people start with a first session, get a sense of the fit, and
        decide from there. Jacob will usually offer an initial view on what
        the work might involve by the end of that first appointment.
      </P>
      <P>
        Our <Link href="/how-therapy-works">what to expect</Link> page
        explains how sessions run and how therapy typically progresses.
        When you are ready you can <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book an appointment</Link>{" "}
        or <Link href="/contact">get in touch</Link> with a question.
      </P>
    </>
  ),

  "what-is-emdr-therapy": () => (
    <>
      <P>
        EMDR is one of those therapies that sounds implausible when you first
        hear it described. A treatment for trauma that involves moving your
        eyes from side to side? Understandable scepticism. And yet it has
        become one of the most well-evidenced treatments for post-traumatic
        stress available, recommended in clinical guidelines around the
        world.
      </P>
      <P>
        Eye Movement Desensitisation and Reprocessing, usually shortened to
        EMDR, is a structured psychological therapy developed specifically to
        help people recover from trauma and distressing life experiences. It
        uses sets of bilateral stimulation, most commonly guided side-to-side
        eye movements, while a person briefly holds a difficult memory in
        mind. The aim is to help the brain finish processing a memory that
        became stuck, so that recalling it no longer produces the same
        intensity of distress.
      </P>

      <H2>Why some memories get stuck</H2>
      <P>
        Most experiences are processed by the brain without any conscious
        effort. The event happens, the brain files it, and over time it
        becomes an ordinary memory. You can recall it, and it feels like
        something that happened in the past.
      </P>
      <P>
        When something is overwhelming, that filing process can fail. The
        memory is stored in a raw, unprocessed state, still carrying the
        original sensations, emotions, and beliefs. This is why trauma
        memories behave so differently to ordinary ones. They intrude without
        invitation. They arrive with the physical sensations attached. And
        they do not feel like the past, they feel like now.
      </P>
      <P>
        EMDR is designed to restart that stalled processing. The theory is
        that bilateral stimulation occupies part of the brain&rsquo;s working
        memory while the difficult material is held in mind, which appears to
        allow the memory to be reprocessed and integrated properly. The
        memory does not disappear. It becomes an ordinary memory, one you can
        recall without being pulled back into it.
      </P>

      <H2>The eight phases of EMDR</H2>
      <P>
        EMDR follows a standardised eight-phase protocol. That structure
        matters, because it is what keeps the work safe and paced. The
        reprocessing that most people picture when they think of EMDR does
        not begin until several phases in.
      </P>

      <H3>Phase 1 · History and treatment planning</H3>
      <P>
        Your psychologist takes a thorough history and identifies which
        experiences are contributing to your current difficulties. Nothing is
        processed at this stage.
      </P>

      <H3>Phase 2 · Preparation</H3>
      <P>
        This is the foundation, and it is not rushed. You learn techniques
        for managing distress and returning yourself to a settled state. You
        will not move forward until you have these in place and feel steady
        using them.
      </P>

      <H3>Phase 3 · Assessment</H3>
      <P>
        A specific memory is identified along with the image, belief,
        emotion, and physical sensation attached to it, and a baseline level
        of distress is recorded so change can be tracked.
      </P>

      <H3>Phase 4 · Desensitisation</H3>
      <P>
        The reprocessing itself. You hold the memory in mind briefly while
        following sets of bilateral stimulation, pausing regularly to notice
        whatever has shifted. This continues until the memory no longer
        carries significant distress.
      </P>

      <H3>Phase 5 · Installation</H3>
      <P>
        A more accurate and helpful belief is strengthened in place of the
        old one, moving from something like I am powerless toward something
        like I survived and I am safe now.
      </P>

      <H3>Phase 6 · Body scan</H3>
      <P>
        Trauma is held physically as well as mentally, so any remaining
        tension connected to the memory is identified and processed.
      </P>

      <H3>Phase 7 · Closure</H3>
      <P>
        Every session ends with you settled and grounded, regardless of
        where the processing has reached. You do not leave mid-way through
        something distressing.
      </P>

      <H3>Phase 8 · Re-evaluation</H3>
      <P>
        The following session begins by checking what has held, and
        treatment planning is adjusted from there.
      </P>

      <H2>What a session actually feels like</H2>
      <P>
        People are often surprised by how undramatic it is. You are awake,
        alert, and in control throughout. EMDR is not hypnosis, and you
        cannot be made to do or recall anything against your will.
      </P>
      <P>
        You are also not required to describe the memory in detail. This is
        one of the meaningful differences between EMDR and talking therapies,
        and it is a relief for many people who have found the prospect of
        recounting an experience out loud unbearable. Much of the processing
        happens internally, with only brief check-ins about what you are
        noticing.
      </P>
      <P>
        Sessions can be emotionally tiring, and it is common to feel
        somewhat drained afterwards or to notice further processing over the
        following day or two. Your psychologist will discuss this with you
        and make sure you have strategies for managing it.
      </P>

      <H2>What EMDR is used for</H2>
      <P>
        EMDR was developed for post-traumatic stress and remains best
        established there, recommended in international clinical guidelines
        for PTSD. Its application has since broadened considerably, and it
        is now commonly used for:
      </P>
      <UL>
        <LI>Single-incident trauma such as an accident, assault, or medical event</LI>
        <LI>Complex or repeated trauma, including experiences from childhood</LI>
        <LI>Distressing or intrusive memories that intrude on daily life</LI>
        <LI>
          Anxiety and panic where the roots lie in earlier experience, see{" "}
          <Link href="/anxiety-therapy-perth">anxiety therapy</Link>
        </LI>
        <LI>Grief and loss</LI>
        <LI>Phobias and specific fears</LI>
      </UL>

      <H2>Is EMDR suitable for everyone?</H2>
      <P>
        No, and any practitioner who says otherwise is overselling it. EMDR
        requires a degree of stability before reprocessing begins, which is
        precisely why the preparation phase exists. For some people,
        particularly where distress is currently severe or where there is
        significant dissociation, a longer period of stabilisation is needed
        first, and occasionally a different approach is more appropriate
        altogether.
      </P>
      <P>
        It is also not the only effective trauma treatment. Trauma-focused{" "}
        <Link href="/cbt-therapy-perth">CBT</Link> is well evidenced, and
        psychodynamic approaches can be valuable for understanding how
        earlier experience shapes present patterns. In practice these are
        often combined rather than chosen between.
      </P>

      <H2>Considering EMDR</H2>
      <P>
        If you have been carrying something that still feels present rather
        than past, EMDR is worth a conversation. Jacob trained in
        trauma-focused therapy during his postgraduate research and has made{" "}
        <Link href="/emdr-therapy-perth">EMDR</Link> a central part of his
        practice since, working with adults on{" "}
        <Link href="/trauma-therapy-perth">trauma</Link> in East Fremantle.
      </P>
      <P>
        A first session is simply a conversation about what has been
        happening and whether this approach suits. You can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book a consultation</Link> or{" "}
        <Link href="/contact">get in touch</Link> with questions first.
      </P>
      <CrisisFootnote />
    </>
  ),

  "signs-unresolved-trauma-adults": () => (
    <>
      <P>
        When people picture trauma, they tend to picture flashbacks and
        nightmares. Those do occur, but a great many people carrying
        unresolved trauma experience nothing so recognisable. They simply
        find that certain things are harder than they seem to be for other
        people, and they have usually concluded that this is just who they
        are.
      </P>
      <P>
        Trauma is not defined by the size of the event. It is defined by how
        overwhelming it was at the time and whether it was ever properly
        processed afterwards. Something that looks manageable from the
        outside can leave a lasting mark, particularly if it happened when
        you were young or if you went through it alone.
      </P>

      <H2>How unresolved trauma can show up</H2>
      <P>
        The signs below are common. Recognising several does not mean you
        have been traumatised, and recognising none does not mean you have
        not. This is a starting point for reflection, not a checklist for
        self-diagnosis.
      </P>

      <H3>Reactions that feel out of proportion</H3>
      <P>
        A comment, a tone of voice, a particular situation, and suddenly the
        response arriving is far larger than the moment warrants. Afterwards
        you might think, why did that hit me so hard? Often it is because
        the present situation has touched something older that has not been
        resolved.
      </P>

      <H3>A body that will not stand down</H3>
      <P>
        Persistent tension, being easily startled, difficulty relaxing even
        when nothing is wrong, disrupted sleep, or unexplained physical
        symptoms. Trauma is held in the nervous system, and a system that
        learned the world was dangerous can stay on alert long after the
        danger has passed.
      </P>

      <H3>Avoidance that has become a pattern</H3>
      <P>
        Steering around particular places, people, conversations, or
        topics. This is often so well-established that it no longer registers
        as avoidance at all, just preference.
      </P>

      <H3>Feeling disconnected or unreal</H3>
      <P>
        Going through the motions, watching yourself from a distance,
        losing chunks of time, or feeling numb where you expect to feel
        something. Dissociation is a protective response, and it can persist
        long after the thing it was protecting against.
      </P>

      <H3>Difficulty with closeness and trust</H3>
      <P>
        Struggling to let people in, expecting to be let down, sabotaging
        relationships that are going well, or finding yourself repeatedly
        drawn to dynamics that echo something familiar. Where trauma
        occurred in a relationship, relationships are often where its
        effects surface.
      </P>

      <H3>A harsh internal voice</H3>
      <P>
        Persistent shame, self-blame, or a conviction that you are
        fundamentally flawed. Children in particular tend to conclude that a
        bad situation means something is wrong with them, because that is
        more tolerable than concluding the adults around them were unsafe.
        That belief often survives into adulthood unexamined.
      </P>

      <H3>Gaps in memory</H3>
      <P>
        Periods you cannot recall clearly, or memories that surface as
        fragments rather than a coherent narrative. This is characteristic
        of how traumatic memory is stored.
      </P>

      <H2>Why it does not simply fade</H2>
      <P>
        Time heals a great deal, but it does not reliably heal trauma, and
        understanding why is genuinely useful. An unprocessed memory is not
        stored like an ordinary one. It sits outside the normal filing
        system, still carrying its original charge. Because it was never
        integrated, there is nothing for time to erode.
      </P>
      <P>
        This is also why insight alone is often insufficient. Many people
        understand exactly what happened to them and why it affected them,
        and still find the reactions unchanged. Understanding a memory
        intellectually is different from the brain having finished
        processing it, which is precisely what trauma-focused therapy
        addresses.
      </P>

      <H2>What helps</H2>
      <P>
        Trauma responds well to treatment, and often more readily than
        people expect after years of assuming it was permanent.
        Trauma-focused therapies work by helping the brain complete the
        processing that stalled.
      </P>
      <P>
        <Link href="/emdr-therapy-perth">EMDR</Link> is among the most
        established, using bilateral stimulation to help stuck memories
        reprocess, and notably it does not require you to describe the
        experience in detail. Trauma-focused{" "}
        <Link href="/cbt-therapy-perth">CBT</Link> addresses the beliefs and
        avoidance patterns that trauma leaves behind. Psychodynamic
        approaches explore how earlier experience continues to shape
        present patterns.
      </P>
      <P>
        Whichever approach is used, good trauma therapy begins with
        stability rather than with the trauma itself. Safety comes first,
        always.
      </P>

      <H2>If this sounds familiar</H2>
      <P>
        You do not need a diagnosis, a dramatic story, or certainty about
        what happened to you in order to talk to someone. Plenty of people
        begin with nothing more than a sense that something has been sitting
        there for a long time.
      </P>
      <P>
        Sage Psychological Services offers{" "}
        <Link href="/trauma-therapy-perth">trauma therapy</Link> for adults
        in East Fremantle and by telehealth across Western Australia, at a
        pace you set. You can <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book a session</Link> or{" "}
        <Link href="/contact">get in touch</Link> to ask whether it might
        help.
      </P>
      <CrisisFootnote />
    </>
  ),

  "emdr-vs-talk-therapy-trauma": () => (
    <>
      <P>
        If you have started researching trauma therapy, you have probably
        encountered a slightly confusing picture. EMDR is described as
        remarkably effective. Talking therapies are described as the
        foundation of psychological treatment. Both claims are true, which
        is not especially helpful when you are trying to decide what to do.
      </P>
      <P>
        Here is how they differ, what each does well, and why the choice is
        less either-or than it appears.
      </P>

      <H2>How each approach works</H2>

      <H3>Talk therapy</H3>
      <P>
        A broad category covering approaches including{" "}
        <Link href="/cbt-therapy-perth">Cognitive Behaviour Therapy</Link>,
        psychodynamic psychotherapy, and schema-focused work. The common
        thread is that change happens through conversation: articulating
        experience, examining the beliefs and patterns it produced, and
        working through them verbally with a therapist.
      </P>

      <H3>EMDR</H3>
      <P>
        <Link href="/emdr-therapy-perth">EMDR</Link> takes a different
        route. Rather than working primarily through discussion, it uses
        bilateral stimulation while a memory is briefly held in mind,
        helping the brain reprocess material that became stuck. Talking is
        part of it, but the processing itself is largely internal, and you
        are not required to narrate the experience in detail.
      </P>

      <H2>The practical differences</H2>
      <ComparisonTable
        left="EMDR"
        right="Talk therapy"
        rows={[
          [
            "You do not need to describe the memory in detail",
            "Working through the experience verbally is central",
          ],
          [
            "Structured eight-phase protocol",
            "Varies by approach, often more open-ended",
          ],
          [
            "Often works relatively quickly for single-incident trauma",
            "May take longer, particularly for complex patterns",
          ],
          [
            "Targets the stored memory directly",
            "Targets beliefs, meanings, and behaviour patterns",
          ],
          [
            "Requires a stabilisation phase before processing",
            "Can usually begin more immediately",
          ],
          [
            "Sessions can feel emotionally intense but brief",
            "Generally steadier, more conversational",
          ],
        ]}
      />

      <H2>When each tends to suit</H2>
      <P>
        EMDR is often a strong fit where there is a clearly identifiable
        event or set of events, where intrusive memories or physical
        reactions are prominent, or where the prospect of describing what
        happened out loud is itself a barrier. That last point matters more
        than it might sound. For some people, the requirement to narrate an
        experience has kept them out of therapy entirely.
      </P>
      <P>
        Talk therapy often suits better where the difficulty is more
        diffuse, where the issue is less a specific memory than a
        long-standing pattern in relationships or self-perception, where
        present-day circumstances need working through alongside the past,
        or where someone simply wants to understand themselves more fully.
        It is also usually the better starting point where current distress
        is high and stability needs building first.
      </P>

      <H2>Why it is usually both</H2>
      <P>
        In practice, most trauma work does not sit neatly in one column. A
        typical course might begin with talking-based work to establish
        safety and understanding, move into EMDR to process specific
        memories once that foundation is in place, and return to talking
        work to make sense of what has shifted and to address the patterns
        the trauma left behind.
      </P>
      <P>
        This is how Jacob generally works, integrating EMDR with
        psychodynamic and CBT-based approaches rather than treating them as
        competing options. The question is rarely which therapy, and more
        often which approach for which part of the work, and in what order.
      </P>

      <H2>How to decide</H2>
      <P>
        The honest answer is that you do not need to decide before you
        start. A first session is largely about understanding what you are
        bringing, and any competent trauma therapist will recommend an
        approach based on that rather than on what they happen to prefer.
      </P>
      <P>
        What matters more than the modality is the fit with the
        practitioner. Trauma work depends on trust, and the strength of the
        therapeutic relationship is one of the more reliable predictors of
        outcome across every approach studied.
      </P>

      <H2>Talking it through</H2>
      <P>
        Sage Psychological Services offers{" "}
        <Link href="/trauma-therapy-perth">trauma therapy</Link> for adults,
        drawing on <Link href="/emdr-therapy-perth">EMDR</Link>,
        psychodynamic therapy, and{" "}
        <Link href="/cbt-therapy-perth">CBT</Link> as the situation calls
        for. You can <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book a session</Link> or{" "}
        <Link href="/contact">get in touch</Link> to discuss which approach
        might suit.
      </P>
    </>
  ),

  "trauma-vs-anxiety": () => (
    <>
      <P>
        From the inside, trauma and anxiety can feel almost identical. Both
        produce a body braced for danger, a mind that will not settle, and a
        strong pull toward avoiding whatever sets them off. It is entirely
        reasonable to be unsure which one you are dealing with.
      </P>
      <P>
        The distinction matters because the treatments differ. Working on
        anxiety when the underlying driver is unresolved trauma tends to
        produce limited, temporary relief. Understanding which is which is
        usually the difference between managing something indefinitely and
        actually resolving it.
      </P>

      <H2>The core difference</H2>
      <P>
        Put simply, anxiety is oriented toward the future while trauma is
        oriented toward the past. Anxiety anticipates a threat that has not
        happened yet, running predictions about what might go wrong. Trauma
        responds to a threat that has already happened but was never fully
        processed, so the nervous system continues reacting as though it is
        ongoing.
      </P>
      <P>
        Both produce fear. The difference lies in where the fear is
        pointing.
      </P>

      <H2>What tends to distinguish them</H2>

      <H3>What sets it off</H3>
      <P>
        Anxiety typically attaches to identifiable stressors: performance,
        health, money, social situations, uncertainty. Trauma responses are
        often triggered by sensory reminders that make little logical
        sense, a smell, a tone of voice, a particular quality of light.
        People frequently cannot explain why the reaction arrived.
      </P>

      <H3>How it feels in time</H3>
      <P>
        Anxiety generally feels like worrying about something. Trauma
        responses can feel like the past intruding on the present, whether
        as intrusive memories, flashbacks, or a bodily reaction that
        arrives before any conscious thought.
      </P>

      <H3>The internal narrative</H3>
      <P>
        Anxious thinking tends toward what if. Trauma-related thinking
        often carries a settled, present-tense conviction: I am not safe, I
        am damaged, it was my fault. These beliefs feel like established
        facts rather than worries.
      </P>

      <H3>Memory</H3>
      <P>
        Anxiety does not usually affect memory. Trauma frequently does,
        producing gaps, fragmented recollection, or memories that arrive
        out of order.
      </P>

      <H2>Why it is often both</H2>
      <P>
        Here is the complication: trauma very commonly produces anxiety. A
        nervous system that learned the world was dangerous will generate
        anticipatory fear as a matter of course. A great many people
        diagnosed with an anxiety disorder are experiencing the downstream
        effects of something unprocessed further back.
      </P>
      <P>
        This is part of why some people find that anxiety treatment helps
        to a point and then stalls. The strategies are sound and they do
        provide relief, but if the engine driving the anxiety is unresolved
        trauma, managing the symptoms will only take you so far.
      </P>
      <P>
        It also runs the other way. Long-standing anxiety is genuinely
        depleting, and living in a state of chronic alertness has its own
        effects on wellbeing regardless of what started it.
      </P>

      <H2>Why the distinction changes the treatment</H2>
      <P>
        For anxiety without a significant trauma component,{" "}
        <Link href="/cbt-therapy-perth">CBT</Link> is generally the
        first-line approach, working directly on the thought patterns and
        avoidance behaviours maintaining the cycle. It is well evidenced
        and often works efficiently.
      </P>
      <P>
        Where unresolved trauma is driving the picture, trauma-focused
        work is usually needed. <Link href="/emdr-therapy-perth">EMDR</Link>{" "}
        and related approaches target the stored memory itself rather than
        the anxious thinking that follows from it. When the underlying
        material is processed, the anxiety it was generating often reduces
        without needing to be treated separately.
      </P>
      <P>
        In practice, treatment frequently addresses both, in an order
        determined by what is most pressing and what is most stable to work
        with first.
      </P>

      <H2>Working out which it is</H2>
      <P>
        You are not expected to diagnose yourself, and the distinction is
        not always obvious even to a clinician in a first session. Part of
        early therapy is precisely this: understanding what is driving
        what, so that the treatment matches the problem rather than the
        presentation.
      </P>
      <P>
        Sage Psychological Services works with both{" "}
        <Link href="/anxiety-therapy-perth">anxiety</Link> and{" "}
        <Link href="/trauma-therapy-perth">trauma</Link> in adults, in East
        Fremantle and by telehealth across Western Australia. If you are
        unsure which you are facing, that is a perfectly reasonable thing
        to bring to a first session. You can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book an appointment</Link> or{" "}
        <Link href="/contact">get in touch</Link>.
      </P>
      <CrisisFootnote />
    </>
  ),

  "finding-psychologist-fremantle": () => (
    <>
      <P>
        Searching for a psychologist in Fremantle produces a long list, a
        great deal of similar-sounding language, and very little to help you
        distinguish between one practitioner and another. Given that the
        working relationship matters more than almost any other factor in
        whether therapy helps, that is a frustrating place to start.
      </P>
      <P>
        Here is what is genuinely worth paying attention to, and what
        matters less than the search results might suggest.
      </P>

      <H2>Start with registration</H2>
      <P>
        Anyone practising as a psychologist in Australia must be registered
        with the Psychology Board of Australia through AHPRA. The titles
        psychologist and registered psychologist are legally protected.
        Counsellor and therapist are not, and while there are excellent
        practitioners using those titles, the training and regulatory
        requirements differ substantially.
      </P>
      <P>
        You can verify any practitioner&rsquo;s registration free of charge
        on the AHPRA public register at{" "}
        <a
          href="https://www.ahpra.gov.au"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          ahpra.gov.au
        </a>
        . It takes under a minute and shows current registration status and
        any conditions on their practice. It is a reasonable thing to check
        and no practitioner should mind you doing it.
      </P>

      <H2>General and clinical registration</H2>
      <P>
        You will see both general registration and clinical endorsement
        mentioned. The practical difference is largely in the Medicare
        rebate: sessions with a clinically endorsed psychologist attract a
        higher rebate than those with a generally registered psychologist,
        though the fee charged by the practice may differ too, so the
        actual out-of-pocket cost varies and is worth comparing directly
        rather than assuming.
      </P>
      <P>
        Endorsement reflects a particular postgraduate training pathway. It
        is not a straightforward measure of skill, and it says nothing
        about whether a given practitioner will be a good fit for you.
        Plenty of generally registered psychologists have extensive
        training in specific modalities and years of experience with
        particular presentations.
      </P>

      <H2>Matching the approach to the problem</H2>
      <P>
        Psychologists work in different ways, and some approaches suit some
        difficulties better than others. It is worth a quick look at what a
        practitioner actually offers rather than assuming all therapy is
        broadly the same.
      </P>
      <UL>
        <LI>
          For anxiety, depression, and stress,{" "}
          <Link href="/cbt-therapy-perth">
            Cognitive Behaviour Therapy
          </Link>{" "}
          is the most established first-line approach
        </LI>
        <LI>
          For trauma and post-traumatic stress,{" "}
          <Link href="/emdr-therapy-perth">EMDR</Link> and trauma-focused
          approaches are generally indicated
        </LI>
        <LI>
          For long-standing relational or self-worth patterns, psychodynamic
          and schema-based approaches tend to go deeper
        </LI>
        <LI>
          For emotional regulation difficulties, DBT-informed work is often
          useful
        </LI>
      </UL>
      <P>
        Most experienced practitioners integrate several approaches rather
        than applying one exclusively, which is generally a good sign. What
        matters is that they can explain why they would take a particular
        direction with you.
      </P>

      <H2>The practical factors people underestimate</H2>

      <H3>Location and consistency</H3>
      <P>
        Therapy works through regular attendance, and a practice that is
        genuinely convenient is a practice you will keep attending. A
        psychologist forty minutes away in traffic tends to become a
        psychologist you see fortnightly, then monthly, then not at all.
        Many practitioners now offer telehealth, which removes this problem
        entirely for a lot of people.
      </P>

      <H3>Fees and what you will actually pay</H3>
      <P>
        Fees vary considerably across Fremantle and Perth. The Australian
        Psychological Society&rsquo;s recommended fee is around $300 per
        session, and many practices charge somewhat below that. What
        matters is the gap: the difference between the fee and the Medicare
        rebate, which is what leaves your account each session. Ask for
        that figure directly rather than the headline fee.
      </P>

      <H3>Availability</H3>
      <P>
        A practitioner with a three-month waiting list may be excellent and
        still not be the right choice if you need support now. It is worth
        asking about current availability and typical appointment frequency
        before committing.
      </P>

      <H2>Questions worth asking before you book</H2>
      <P>
        Most practices are happy to answer a few questions before a first
        appointment. Reasonable ones include:
      </P>
      <UL>
        <LI>Do you have experience working with what I am bringing?</LI>
        <LI>What approach would you likely take, and why?</LI>
        <LI>
          What is the out-of-pocket cost per session with a Mental Health
          Care Plan?
        </LI>
        <LI>How soon could I be seen, and how often would we meet?</LI>
        <LI>Do you offer telehealth if I cannot attend in person?</LI>
      </UL>
      <P>
        How these questions are answered tells you something in itself. A
        practitioner who responds clearly and without defensiveness is
        showing you how they are likely to work.
      </P>

      <H2>The factor that matters most</H2>
      <P>
        Across decades of research into what makes therapy effective, one
        finding is remarkably consistent: the quality of the relationship
        between client and therapist predicts outcome more reliably than
        the specific modality used. Credentials and approach matter, but
        they matter considerably less than whether you feel able to be
        honest with this particular person.
      </P>
      <P>
        You will usually have a reasonable sense of this within one or two
        sessions. If it does not feel right, saying so and trying someone
        else is entirely legitimate and happens regularly. It is not a
        failure on anyone&rsquo;s part.
      </P>

      <H2>Psychology in East Fremantle</H2>
      <P>
        <Link href="/">Sage Psychological Services</Link> is a small
        private practice in East Fremantle working with adults aged 18 and
        over. You see <Link href="/about">Jacob Jones</Link> throughout
        rather than a rotating team, with a low out-of-pocket fee of $78.45
        per session under a Mental Health Care Plan. Full details are on
        the <Link href="/fees">fees and rebates</Link> page.
      </P>
      <P>
        If you would like to ask any of the questions above,{" "}
        <Link href="/contact">get in touch</Link> and Jacob will answer
        them directly. When you are ready, you can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book an appointment</Link>.
      </P>
    </>
  ),

  "medicare-mental-health-care-plan": () => (
    <>
      <P>
        The Mental Health Care Plan is the main way Australians access
        subsidised psychological treatment, and the process is more
        straightforward than it sounds. Here is what it is, how to get one,
        and what it does and does not cover.
      </P>

      <H2>What a Mental Health Care Plan is</H2>
      <P>
        A Mental Health Care Plan is a document prepared by your GP that
        sets out your mental health concerns, your treatment goals, and the
        support recommended. Once it is in place, it entitles you to
        Medicare rebates for a set number of sessions with a registered
        psychologist or other eligible mental health professional each
        calendar year.
      </P>
      <P>
        It is not a diagnosis in itself, and it is not a permanent record of
        anything alarming. It is an administrative mechanism for accessing
        subsidised care.
      </P>

      <H2>How to get one</H2>
      <P>
        Book an appointment with your GP and ask specifically for a mental
        health care plan appointment. This matters, because a standard
        consultation does not allow enough time. These plans take somewhere
        between twenty and forty minutes to complete properly, so a long
        appointment is needed.
      </P>
      <P>
        During the appointment your GP will ask about what you have been
        experiencing, how long it has been going on, and how it is
        affecting your life. They will typically use a short standardised
        questionnaire. Together you will identify goals and agree on the
        recommended treatment.
      </P>
      <P>
        You will leave with the plan itself and a referral letter, and
        both need to be provided to your psychologist before your first
        session for the rebate to be processed. Your GP may recommend a
        particular psychologist, but you are free to choose your own, and
        you can ask for the referral to be addressed accordingly.
      </P>

      <H2>How the sessions work</H2>
      <P>
        A Mental Health Care Plan provides rebates for up to ten individual
        sessions per calendar year. The structure catches people out, so it
        is worth being clear:
      </P>
      <UL>
        <LI>Your GP initially refers you for six sessions</LI>
        <LI>After those six, you return to your GP for a brief review appointment</LI>
        <LI>The GP can then refer you for a further four sessions, up to ten in total</LI>
        <LI>
          The allocation resets on 1 January each calendar year, not on the
          anniversary of your plan
        </LI>
      </UL>
      <P>
        The review appointment is not a formality to resent. It is a
        genuine opportunity for your GP to check how things are going and
        to adjust the plan if needed. Missing it is the most common reason
        people find their rebates unexpectedly stop.
      </P>

      <H2>What you will actually pay</H2>
      <P>
        Medicare pays a set rebate per session. As of 1 July 2026, the
        rebate for a session with a generally registered psychologist is
        $101.55, with a higher rebate for clinically endorsed psychologists.
      </P>
      <P>
        The rebate is fixed, but practice fees are not, so your
        out-of-pocket cost is simply the difference between the two. This
        gap varies considerably between practices. At Sage Psychological
        Services the standard fee is $180, which leaves a gap of $78.45 per
        session. Full detail is on our{" "}
        <Link href="/fees">fees and rebates</Link> page.
      </P>
      <P>
        Most practices process the Medicare claim on your behalf after each
        session, with the rebate arriving in your nominated account within
        a couple of days. You pay the full fee at the time and receive the
        rebate back, rather than paying only the gap.
      </P>

      <H2>Questions people commonly ask</H2>

      <H3>Does it go on my permanent medical record?</H3>
      <P>
        It becomes part of your GP records, as any consultation does. It is
        not shared with employers, insurers, or anyone else without your
        consent. If you have specific concerns about disclosure,
        particularly around income protection or life insurance, it is
        worth raising them directly with your GP before the plan is
        prepared.
      </P>

      <H3>Can I use it for telehealth?</H3>
      <P>
        Yes. Telehealth sessions attract the same rebates as in-person
        appointments, which makes consistent therapy considerably more
        accessible for people outside metropolitan areas.
      </P>

      <H3>What happens after ten sessions?</H3>
      <P>
        You can continue privately, pause until the following calendar year
        when the allocation resets, or discuss other options with your GP.
        Ten sessions is a funding limit rather than a clinical
        recommendation, and many people need fewer while some need more.
      </P>

      <H3>Do I have to have one?</H3>
      <P>
        No. You can see a psychologist privately without any referral at
        all, paying the full fee. Some people prefer this for privacy
        reasons or simply to avoid the extra GP appointment.
      </P>

      <H3>Can I claim Medicare and private health insurance for the same session?</H3>
      <P>
        No. You can use one or the other for a given session, but not both.
        It is worth comparing which leaves you better off based on your
        level of cover.
      </P>

      <H2>Getting started</H2>
      <P>
        If you already have a plan and referral, you can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book an appointment</Link> straight away. If you
        do not, your GP is the place to start, and you are welcome to{" "}
        <Link href="/contact">get in touch</Link> first with any questions
        about how it works at Sage.
      </P>
      <Callout>
        <p>
          <em>
            Rebate amounts are current as of 1 July 2026 and are reviewed
            by the Australian Government annually.
          </em>
        </p>
      </Callout>
    </>
  ),

  "first-psychology-session": () => (
    <>
      <P>
        Plenty has been written about what happens in a first therapy
        session: the paperwork, the questions, the length of the
        appointment. Much less is written about what it feels like, which
        is usually the part people are actually worried about.
      </P>
      <P>
        So here is the honest version, including the fears people tend not
        to say out loud.
      </P>

      <H2>The ten minutes before</H2>
      <P>
        Most people feel some version of nervous beforehand, and a fair
        number seriously consider not going. If you find yourself sitting
        in the car park talking yourself out of it, that is an extremely
        common experience rather than a sign that this is not for you.
      </P>
      <P>
        It usually settles faster than expected. The first few minutes are
        ordinary and administrative, and the anticipation is almost always
        worse than the reality.
      </P>

      <H2>The fears people rarely mention</H2>

      <H3>What if I go blank?</H3>
      <P>
        Very common, and entirely fine. You are not expected to arrive with
        a coherent account of your difficulties. A psychologist&rsquo;s job
        includes asking useful questions when you do not know where to
        begin. Saying I don&rsquo;t really know where to start is a
        perfectly good opening, and it is one Jacob hears regularly.
      </P>

      <H3>What if I cry?</H3>
      <P>
        Then you cry, and it is completely unremarkable in that room. There
        are tissues within reach for a reason. Nobody will be
        uncomfortable, nothing will be made of it, and you will not have
        done anything wrong. Many people are surprised by how quickly
        emotion surfaces when they finally have permission to speak
        honestly.
      </P>

      <H3>What if my problem isn&rsquo;t serious enough?</H3>
      <P>
        There is no threshold. People come with acute crises and with
        difficulties that have simply gone on long enough, and both are
        valid reasons to be there. Comparing your situation to someone
        else&rsquo;s is not a useful measure, and it keeps a great many
        people waiting far longer than they needed to.
      </P>

      <H3>What if I&rsquo;m judged?</H3>
      <P>
        You will have to take this partly on trust until you experience it,
        but psychologists are genuinely difficult to shock. Whatever you
        are carrying, it is almost certainly something that has been heard
        before, and the response you get will be curiosity about how it
        has affected you rather than judgement about it.
      </P>

      <H3>Will I have to talk about my childhood?</H3>
      <P>
        Only if it is relevant, and only when you are ready. Some
        approaches look at earlier experience because present patterns
        often have roots there. But you are never obliged to discuss
        anything before you want to. You can say I would rather not go
        into that yet, and a good therapist will simply move on.
      </P>

      <H2>What the hour is actually like</H2>
      <P>
        Most people describe it as less intense and more conversational
        than they expected. It is not an interrogation, and there is no
        couch. It is a conversation in which one person is genuinely
        paying attention, which turns out to be a fairly unusual
        experience.
      </P>
      <P>
        You will do most of the talking, but not all of it. Jacob will ask
        questions to understand the picture, and towards the end will
        usually offer some initial reflections on what he is hearing and
        how the work might proceed. Many people find this part
        unexpectedly settling, because a difficulty that has felt formless
        starts to acquire a shape.
      </P>
      <P>The hour tends to go quickly.</P>

      <H2>How you might feel afterwards</H2>
      <P>
        Reactions vary. Some people leave lighter, having finally said
        something out loud that they had been carrying alone. Others feel
        tired or a bit raw, particularly if more surfaced than they
        intended. Some feel slightly deflated because nothing was fixed,
        which is worth naming: a first session is about understanding, not
        resolution.
      </P>
      <P>
        All of these are normal. It is worth not scheduling anything
        demanding straight afterwards if you can avoid it.
      </P>

      <H2>If it does not feel right</H2>
      <P>
        Fit matters enormously in therapy, and you will usually have some
        sense of it by the end of the first session. If it does not feel
        right, you are under no obligation to return. Trying a different
        psychologist is common, entirely reasonable, and not something
        anyone takes personally.
      </P>
      <P>
        Equally, one slightly awkward session is not necessarily a bad
        sign. First conversations with anyone can be stilted, and the
        relationship generally settles by the second or third appointment.
      </P>

      <H2>When you are ready</H2>
      <P>
        If the unknown has been the main thing holding you back, hopefully
        this makes it feel more manageable. For the practical side, what
        to bring, how long sessions run, how fees and confidentiality
        work, our <Link href="/how-therapy-works">what to expect</Link>{" "}
        page covers it in detail.
      </P>
      <P>
        When you feel ready, you can{" "}
        <Link href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices" target="_blank" rel="noopener noreferrer">book an appointment</Link> with Jacob, or{" "}
        <Link href="/contact">get in touch</Link> with a question first.
        There is no pressure either way.
      </P>
    </>
  ),
};
