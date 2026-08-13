export const SITE_URL = "https://sagepsychservices.com.au";

export const PRACTICE_ID = `${SITE_URL}/#practice`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const PLACE_ID = `${SITE_URL}/#place`;
export const PERSON_ID = `${SITE_URL}/#jacob-jones`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const practiceSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Psychologist"],
  "@id": PRACTICE_ID,
  name: "Sage Psychological Services",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.webp`,
  image: `${SITE_URL}/img/jacob.webp`,
  telephone: "+61 8 6801 1041",
  email: "info@sagepsychservices.com.au",
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, EFTPOS, Credit Card, Medicare, DVA",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7B Silas Street",
    addressLocality: "East Fremantle",
    addressRegion: "WA",
    postalCode: "6158",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-32.041916148014515",
    longitude: "115.76397614232923",
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Sage+Psychological+Services+East+Fremantle",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "08:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "08:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "08:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:30", closes: "18:00" },
  ],
  areaServed: [
    { "@type": "City", name: "Fremantle" },
    { "@type": "City", name: "East Fremantle" },
    { "@type": "City", name: "Melville" },
    { "@type": "City", name: "Cockburn" },
    { "@type": "AdministrativeArea", name: "Perth" },
    { "@type": "State", name: "Western Australia" },
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "Cognitive Behaviour Therapy (CBT)" },
    { "@type": "MedicalTherapy", name: "Eye Movement Desensitisation and Reprocessing (EMDR)" },
    { "@type": "MedicalTherapy", name: "Schema Therapy" },
    { "@type": "MedicalTherapy", name: "Dialectical Behaviour Therapy (DBT)" },
    { "@type": "MedicalTherapy", name: "Acceptance and Commitment Therapy (ACT)" },
    { "@type": "MedicalTherapy", name: "Psychodynamic Psychotherapy" },
  ],
  medicalSpecialty: "Psychiatric",
  founder: { "@type": "Person", name: "Jacob Jones" },
  employee: {
    "@type": "Person",
    name: "Jacob Jones",
    jobTitle: "Registered Psychologist",
  },
  sameAs: [
    "https://www.facebook.com/p/Sage-Psychological-Services-100090363314743/",
    "https://www.instagram.com/sage.psychological.services",
    "https://www.psychologytoday.com/au/counselling/jacob-jones-east-fremantle-wa/1068149",
  ],
};

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

export const jacobPersonSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  "@id": `${SITE_URL}/about/#jacob-jones`,
  name: "Jacob Jones",
  jobTitle: "Registered Psychologist",
  url: `${SITE_URL}/about/`,
  worksFor: { "@id": PRACTICE_ID },
  medicalSpecialty: "Psychiatric",
  knowsAbout: [
    "Cognitive Behaviour Therapy",
    "EMDR",
    "Trauma therapy",
    "Anxiety",
    "Depression",
    "Psychodynamic therapy",
    "Schema Therapy",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Murdoch University",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "AHPRA Registration",
    recognizedBy: {
      "@type": "Organization",
      name: "Australian Health Practitioner Regulation Agency (AHPRA)",
    },
    identifier: "PSY0002462461",
  },
  availableService: [
    { "@type": "MedicalTherapy", name: "CBT" },
    { "@type": "MedicalTherapy", name: "EMDR" },
  ],
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

export function medicalWebPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  therapy: string;
}) {
  const url = `${SITE_URL}${withTrailingSlash(opts.path)}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    about: { "@type": "MedicalTherapy", name: opts.therapy },
    mainEntity: {
      "@type": "MedicalTherapy",
      name: opts.therapy,
      provider: { "@id": PRACTICE_ID },
    },
    isPartOf: { "@id": PRACTICE_ID },
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
  const absUrl = opts.url.startsWith("http")
    ? opts.url
    : `${SITE_URL}${withTrailingSlash(opts.url)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absUrl}#article`,
    headline: opts.headline,
    description: opts.description,
    url: absUrl,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/about/#jacob-jones`,
      name: "Jacob Jones",
      jobTitle: "Registered Psychologist",
    },
    publisher: { "@id": PRACTICE_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl,
    },
    image: absImage,
    inLanguage: "en-AU",
  };
}
