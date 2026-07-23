# Sitemap and URL architecture

Keyword-optimised for East Fremantle and greater Perth catchment. Priority services CBT and EMDR. Target presentations trauma and anxiety. 18+ adults only. Built 21 July 2026.

URL rules: lowercase, hyphenated, no trailing slash, no stop words, folder depth two or less, primary keyword front-loaded. These slugs are final.

## 18 pages

### Core pages (approved copy exists)

| # | Page | URL | Primary keyword | Meta title | Priority |
|---|---|---|---|---|---|
| 1 | Home | `/` | psychologist east fremantle | Psychologist East Fremantle \| Sage Psychological | 1 |
| 2 | About Jacob Jones | `/about` | jacob jones psychologist | About Jacob Jones \| Psychologist East Fremantle | 1 |
| 3 | Contact | `/contact` | psychologist fremantle contact | Contact \| Sage Psychological Services Fremantle | 1 |
| 4 | Fees & Rebates | `/fees` | psychologist fees perth | Fees & Medicare Rebates \| Sage Psychological | 1 |
| 5 | Book Now | `/book` | book psychologist fremantle | Book an Appointment \| Sage Psychological Services | 1 |

### Priority service and condition pages (approved copy exists)

| # | Page | URL | Primary keyword | Priority |
|---|---|---|---|---|
| 6 | CBT Therapy | `/cbt-therapy-perth` | cbt therapy perth | 1 |
| 7 | EMDR Therapy | `/emdr-therapy-perth` | emdr therapy perth | 1 |
| 8 | Anxiety Therapy | `/anxiety-therapy-perth` | anxiety psychologist perth | 1 |
| 9 | Trauma Therapy | `/trauma-therapy-perth` | trauma therapist perth | 1 |

### Batch two (copy needs writing)

| # | Page | URL | Primary keyword | Priority |
|---|---|---|---|---|
| 10 | Depression Counselling | `/depression-counselling-perth` | depression psychologist perth | 2 |
| 11 | Telehealth Psychology | `/telehealth-psychologist-perth` | telehealth psychologist | 2 |
| 12 | How Therapy Works | `/how-therapy-works` | what to expect psychologist | 3 |
| 13 | FAQ | `/faq` | psychologist fremantle faq | 3 |
| 14 | Blog hub | `/blog` | psychology blog perth | 2 |

### Legal and utility

| # | Page | URL | Notes | Priority |
|---|---|---|---|---|
| 15 | Privacy Policy | `/privacy-policy` | Required before Google or Meta ads can run. Indexed. | 1 |
| 16 | Terms of Service | `/terms` | Booking-flow terms. Can be noindex. | 3 |
| 17 | Thank you (booking) | `/book/thank-you` | Noindex. Conversion event fires here. | 1 |
| 18 | Thank you (enquiry) | `/contact/thank-you` | Noindex. Enquiry conversion event fires here. | 1 |

## Silo structure

Two topical silos anchor the SEO. Every service page links to its presentation and back. Every page's primary CTA points to `/book`. Secondary CTAs and fee links pre-qualify before the booking.

### Silo 1: CBT, Anxiety, Depression

- `/cbt-therapy-perth` (hub) links bidirectionally with `/anxiety-therapy-perth` and `/depression-counselling-perth`
- `/anxiety-therapy-perth` links back to `/cbt-therapy-perth` as the treatment, and to `/how-therapy-works` to lift first-session conversion

### Silo 2: EMDR, Trauma

- `/emdr-therapy-perth` (hub) links bidirectionally with `/trauma-therapy-perth`
- `/trauma-therapy-perth` links to `/emdr-therapy-perth` as the treatment, and to `/telehealth-psychologist-perth` (trauma clients often prefer home-based sessions)

### Conversion spine (all pages)

- All service and condition pages link to `/book` (primary CTA)
- All service and condition pages link to `/contact` (secondary CTA)
- All pages link to `/fees` in nav and body (fee transparency pre-qualifies)

### Home as distributor

- `/` features the two priority services (CBT, EMDR) prominently
- `/` links to `/about` to build trust and reclaim brand SERP
- `/blog` posts link up to their most relevant service or condition page

## 11 blog posts

Educational and informational-intent, funnelling into the two priority silos. AHPRA-safe: no outcome claims, no testimonials, no case studies from the client's perspective. Each post links up to its target service or condition page in the body.

### CBT and anxiety silo

| # | Title (working) | Slug | Links up to | Target query |
|---|---|---|---|---|
| 1 | What Is CBT and How Does It Help Anxiety? | `/blog/what-is-cbt-anxiety` | `/cbt-therapy-perth` | cbt for anxiety |
| 2 | 5 Signs It Might Be Time to See a Psychologist for Anxiety | `/blog/signs-see-psychologist-anxiety` | `/anxiety-therapy-perth` | early-funnel anxiety awareness |
| 3 | CBT vs Medication for Anxiety: What the Evidence Says | `/blog/cbt-vs-medication-anxiety` | `/cbt-therapy-perth` | comparison intent |
| 4 | How Many Therapy Sessions Do You Actually Need? | `/blog/how-many-therapy-sessions` | `/how-therapy-works` | MHCP 6-session expectations |

### EMDR and trauma silo

| # | Title (working) | Slug | Links up to | Target query |
|---|---|---|---|---|
| 5 | What Is EMDR Therapy and How Does It Work? | `/blog/what-is-emdr-therapy` | `/emdr-therapy-perth` | what is emdr |
| 6 | Signs of Unresolved Trauma in Adults | `/blog/signs-unresolved-trauma-adults` | `/trauma-therapy-perth` | trauma awareness, 18+ |
| 7 | EMDR vs Talk Therapy for Trauma: Which Is Right for You? | `/blog/emdr-vs-talk-therapy-trauma` | `/emdr-therapy-perth` | comparison intent |
| 8 | Is It Trauma or Anxiety? Understanding the Difference | `/blog/trauma-vs-anxiety` | `/trauma-therapy-perth` + `/anxiety-therapy-perth` | bridges both silos |

### Local and trust

| # | Title (working) | Slug | Links up to | Target query |
|---|---|---|---|---|
| 9 | Finding the Right Psychologist in Fremantle: A Guide | `/blog/finding-psychologist-fremantle` | `/` | psychologist fremantle |
| 10 | How Medicare Mental Health Care Plans Work in 2026 | `/blog/medicare-mental-health-care-plan` | `/fees` | rebate and referral process |
| 11 | What to Expect in Your First Psychology Session | `/blog/first-psychology-session` | `/how-therapy-works` | first-session anxiety reducer |

## Keyword evidence (DataForSEO, pulled 21 July 2026)

Fremantle terms are WA-region volume; national terms are AU-wide with local intent as a higher-converting subset. Difficulty (KD) 0-100.

### Local (Fremantle, WA region)

- psychologist fremantle: 390/mo, medium competition, maps to `/`
- psychology fremantle: 390/mo, medium, maps to `/`
- psychologist east fremantle: 20-40/mo, low, maps to `/` (primary)
- counsellor fremantle: 140/mo, medium, supporting

### National services (AU volume)

- cbt therapy / cbt for anxiety: 6,600/mo, KD 50, low competition, maps to `/cbt-therapy-perth`
- emdr therapy: cluster, low competition, maps to `/emdr-therapy-perth`
- schema therapy: 8,100/mo, KD 30, low, mention on service pages
- dialectical behavior therapy: 2,900/mo, KD 58, low, future service page

### National conditions

- anxiety therapy: 2,400/mo, KD 29, maps to `/anxiety-therapy-perth`
- therapy for depression: 2,400/mo, KD 45, maps to `/depression-counselling-perth`
- cbt for depression: 3,600/mo, KD 58, maps to `/depression-counselling-perth`
- trauma informed care: 4,400/mo, KD 35, maps to `/trauma-therapy-perth`
- trauma release: 5,400/mo, KD 12, maps to `/trauma-therapy-perth`
- ptsd treatments therapy: 2,400/mo, KD 58, maps to `/trauma-therapy-perth`

### High-volume head (aspirational, blog territory)

- psychology near me: 33,100/mo, KD 19, high competition, maps to `/` + GBP
- therapy near me: 9,900/mo, KD 9, high, maps to `/` + GBP
- psychiatrist vs psychologist: 2,900/mo, KD 8, low, blog

### Avoid (compliance)

- bulk billed psychologist: 2,900/mo, KD 6, high. **DO NOT TARGET.** AHPRA landmine. Sage bulk bills DVA only.
