# Site facts

Single source of truth for anything appearing on more than one page. Read from here rather than retyping. If a value ends up different across pages, that is a misleading representation problem on a health site.

## Practice

- Name: Sage Psychological Services
- Address: 7B Silas Street, East Fremantle, WA 6158 (within Silas Street Specialists)
- Phone: 0480 425 776
- Email: TODO. Jacob is creating a new tracked business address and hiding the original. Do not publish an email until confirmed.
- Hours: Flexible. TODO. Get concrete days and times before publishing structured `openingHoursSpecification`.
- Founded: 2023
- Time zone: AWST
- Catchment: Fremantle, Melville, Cockburn, greater Perth. Telehealth across WA.
- Google Business Profile: match name, address, and phone character for character across the site.

## Practitioner

- Name: Jacob Jones
- Approved title: Registered Psychologist. Never "clinical psychologist" or "specialist."
- AHPRA registration: PSY0002462461
- Qualifications: BA (Psychology), GradDip (Psychology)
- Alumni of: Murdoch University (BA 2018, GradDip 2019)
- Modalities: CBT, EMDR, Schema Therapy, DBT, ACT, Solution-Focused Brief Therapy, psychodynamic psychotherapy, ERP

## Fees (effective 1 July 2026)

- Standard consultation: $180
- Medicare rebate under a Mental Health Care Plan: $101.55
- Out-of-pocket gap: $78.45
- APS recommended fee (for comparison): $300
- Medicare sessions per calendar year: 10 (initial 6, then GP review before the remaining 4)
- DVA sessions: up to 12 initially, bulk billed to DVA
- Cancellation window: 48 hours
- Late cancellation charge: 50% of the consultation fee

## Booking

- Provider: Zanda Health (migrating from Power Diary. Confirm live before wiring `/book`.)
- Session length: 50 minutes
- Booking is the primary conversion event. `/book/thank-you` (noindex) is where the conversion pixel fires.

## Enquiry

- Enquiry form conversion event fires on `/contact/thank-you` (noindex).
- Consent checkbox on the form links to `/privacy-policy`.

## Deployment and domain

- Hosting: Hostinger Cloud Startup
- Domain: sagepsychservices.com.au
- Current setup: Wix site, DNS at GoDaddy
- Cutover needs a full redirect map from every indexed Wix URL to the new equivalent, or the map-pack #1 position for "psychologist east fremantle" is at risk.

## Compliance-critical terminology

Approved phrasings already used in the copy:

- "Registered psychologist" for Jacob's title
- "Particular expertise in psychodynamic approaches" for his focus areas
- "Evidence-based" for treatment framing
- "When you are ready" as the invitational register for CTAs
- "Bulk billed to DVA" only inside the DVA subsection of the fees page

Never:

- "Clinical psychologist", "specialist", "expert" (as a claimed status)
- "Bulk billed" outside the DVA subsection
- Any outcome guarantee, cure claim, or percentage-of-clients-improved figure
- Any testimonial, patient review, star rating, or `aggregateRating` in structured data
- "Best", "leading", "top-rated" superlatives about the practice or Jacob
