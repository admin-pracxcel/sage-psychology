export const SITE_URL = "https://sagepsychservices.com.au";

export const ORG_ID = `${SITE_URL}/#organization`;
export const PLACE_ID = `${SITE_URL}/#place`;
export const PERSON_ID = `${SITE_URL}/#jacob-jones`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": ORG_ID,
  name: "Sage Psychological Services",
  url: SITE_URL,
  telephone: "+61480425776",
  image: `${SITE_URL}/img/sage-psychology-practice.webp`,
  logo: `${SITE_URL}/logo.webp`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7B Silas Street",
    addressLocality: "East Fremantle",
    addressRegion: "WA",
    postalCode: "6158",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Fremantle" },
    { "@type": "City", name: "Perth" },
    { "@type": "AdministrativeArea", name: "Western Australia" },
  ],
  medicalSpecialty: ["Psychiatric", "Psychological"],
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  sameAs: [
    "https://www.psychologytoday.com/au",
  ],
};

export const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Jacob Jones",
  jobTitle: "Registered Psychologist",
  worksFor: { "@id": ORG_ID },
  identifier: "AHPRA PSY0002462461",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Murdoch University",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Bachelor of Arts (Psychology)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Graduate Diploma (Psychology)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "AHPRA Registration PSY0002462461",
    },
  ],
  knowsAbout: [
    "Cognitive Behavioural Therapy",
    "Eye Movement Desensitisation and Reprocessing",
    "Schema Therapy",
    "Dialectical Behaviour Therapy",
    "Acceptance and Commitment Therapy",
    "Psychodynamic Psychotherapy",
    "Anxiety",
    "Trauma",
    "Depression",
  ],
  url: `${SITE_URL}/about/`,
  image: `${SITE_URL}/img/jacob.webp`,
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Sage Psychological Services",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-AU",
};

export const rootGraph = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, personSchema, websiteSchema],
};

export type Crumb = { name: string; url: string };

function withTrailingSlash(path: string): string {
  if (path.startsWith("http")) return path;
  if (path === "/" || path.endsWith("/")) return path;
  return `${path}/`;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => {
      const normalised = withTrailingSlash(c.url);
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: normalised.startsWith("http")
          ? normalised
          : `${SITE_URL}${normalised}`,
      };
    }),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  const absImage = opts.image.startsWith("http")
    ? opts.image
    : `${SITE_URL}${opts.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    image: [absImage],
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.url.startsWith("http")
        ? opts.url
        : `${SITE_URL}${withTrailingSlash(opts.url)}`,
    },
    inLanguage: "en-AU",
  };
}
