import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
        Around 2.7% of Australians experience GAD in any given year, based on
        RACGP anxiety management guidance. Anxiety disorders as a group,
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
        <Link href="/cbt-therapy-perth">Cognitive Behaviour Therapy</Link>{" "}
        (CBT) is one of the treatment options recommended for GAD in
        Australia, according to healthdirect&rsquo;s guide to treating GAD.
        CBT helps you notice the thought patterns and behaviours that keep
        worry going, then build practical, workable ways to respond
        differently.
      </P>

      <H3>EMDR and psychodynamic approaches</H3>
      <P>
        Where anxiety seems connected to past experiences, some psychologists
        also draw on{" "}
        <Link href="/emdr-therapy-perth">
          Eye Movement Desensitisation and Reprocessing
        </Link>{" "}
        (EMDR) or psychodynamic approaches, alongside other methods such as
        Exposure and Response Prevention (ERP), to look at what may be
        driving the worry underneath the surface symptoms.
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
        <Link
          href="https://clientportal.zandahealth.com/clientportal/sagepsychologicalservices"
          target="_blank"
          rel="noopener noreferrer"
        >
          book a session
        </Link>{" "}
        with Jacob when you&rsquo;re ready.
      </P>

      <H2>Frequently asked questions</H2>

      <H3>What is the difference between normal worry and generalised anxiety disorder?</H3>
      <P>
        Normal worry is usually tied to a specific situation and eases once
        that situation passes. GAD involves persistent, hard-to-control
        worry across several areas of life, most days, for six months or
        more, often alongside physical symptoms like muscle tension or poor
        sleep.
      </P>

      <H3>What are the main symptoms of GAD?</H3>
      <P>
        Common symptoms include excessive worry, restlessness, muscle
        tension, fatigue, trouble concentrating, irritability, and sleep
        difficulties. It&rsquo;s usually the combination of several symptoms
        together, along with how long they&rsquo;ve lasted, that matters
        most. Symptoms vary from person to person, and a registered health
        practitioner can help you understand whether what you&rsquo;re
        experiencing fits a clinical picture.
      </P>

      <H3>Can generalised anxiety disorder be cured?</H3>
      <P>
        GAD responds well to evidence-based psychological treatment, though
        results vary between individuals and outcomes can&rsquo;t be promised
        in advance. Many people find that with the right support, worry
        becomes far more manageable, though occasional anxiety is a normal
        part of life for everyone. Speak with a registered practitioner
        about what to expect in your situation.
      </P>

      <H3>Do I need a GP referral to see a psychologist for anxiety?</H3>
      <P>
        You don&rsquo;t need a referral to see a psychologist privately, but
        a referral and Mental Health Care Plan from your GP are required to
        access Medicare rebates. Without a plan, you can still book and pay
        privately, with an invoice provided after each session.
      </P>

      <H3>How much does psychology cost with a Medicare rebate?</H3>
      <P>
        Standard psychology sessions are often around $180, with a Medicare
        rebate of $101.55 available under a Mental Health Care Plan. The
        same rebate applies whether your session is in person or via
        telehealth. Eligible clients can access up to 10 subsidised sessions
        per calendar year, with a GP review after the first six. Exact fees
        vary by practice.
      </P>

      <H3>How is GAD different from panic disorder or social anxiety?</H3>
      <P>
        GAD involves ongoing worry across many areas of life, while panic
        disorder centres on sudden, intense panic attacks, and social
        anxiety focuses specifically on fear of social or performance
        situations. These conditions can overlap, and a registered
        practitioner can help clarify what&rsquo;s happening for you.
      </P>

      <H3>Can I access anxiety therapy via telehealth in WA?</H3>
      <P>
        Yes. Telehealth psychology sessions are available across Western
        Australia for people who can&rsquo;t attend in person or prefer the
        comfort of home, using the same evidence-based approaches offered
        in-clinic. Sessions are usually held by secure video call, and the
        same Medicare rebate applies as for an in-person appointment if you
        have a valid Mental Health Care Plan.
      </P>

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
