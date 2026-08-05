const STORAGE_KEY = "sage_attribution_first_touch";
const EXPIRY_DAYS = 30;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const CLICK_ID_KEYS = ["gclid", "fbclid", "msclkid"] as const;

export type TouchData = {
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  gclid: string | null;
  fbclid: string | null;
  msclkid: string | null;
  referrer: string | null;
  landingPage: string | null;
  capturedAt: string;
};

export type AttributionPayload = {
  leadSource: string;
  attribution: {
    firstTouch: TouchData;
    lastTouch: TouchData;
  };
};

function formatPerthDate(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Perth",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get(
    "minute"
  )}:${get("second")}+08:00`;
}

function readCurrentTouch(): TouchData {
  const params = new URLSearchParams(window.location.search);
  const val = (k: string) => {
    const v = params.get(k);
    return v && v.trim() ? v.trim() : null;
  };
  const referrer =
    document.referrer && !document.referrer.includes(window.location.host)
      ? document.referrer
      : null;

  return {
    utmSource: val("utm_source"),
    utmMedium: val("utm_medium"),
    utmCampaign: val("utm_campaign"),
    utmTerm: val("utm_term"),
    utmContent: val("utm_content"),
    gclid: val("gclid"),
    fbclid: val("fbclid"),
    msclkid: val("msclkid"),
    referrer,
    landingPage: window.location.pathname + window.location.search,
    capturedAt: formatPerthDate(),
  };
}

function hasAnyValue(t: TouchData): boolean {
  return [...UTM_KEYS, ...CLICK_ID_KEYS].some((k) => {
    const camel = k.replace(/_(.)/g, (_, c) => c.toUpperCase()) as keyof TouchData;
    return t[camel] !== null;
  }) || t.referrer !== null;
}

function isExpired(iso: string): boolean {
  const captured = new Date(iso);
  if (isNaN(captured.getTime())) return true;
  const ageDays = (Date.now() - captured.getTime()) / (1000 * 60 * 60 * 24);
  return ageDays > EXPIRY_DAYS;
}

/**
 * Runs on every page load. Captures UTMs and referrer to localStorage on the
 * first visit (or after expiry) — never overwrites an existing first-touch.
 */
export function captureFirstTouch(): void {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const current = readCurrentTouch();
    const currentHasValue = hasAnyValue(current);

    if (raw) {
      const existing = JSON.parse(raw) as TouchData;
      const existingFresh =
        existing.capturedAt && !isExpired(existing.capturedAt);
      const existingHasValue = hasAnyValue(existing);

      // Keep the real first-touch: never overwrite a fresh record that
      // already has attribution values.
      if (existingFresh && existingHasValue) return;

      // Upgrade an empty prior record if the current visit has attribution.
      if (existingFresh && !existingHasValue && currentHasValue) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
        return;
      }

      // Fresh but empty, and current is also empty → leave as is.
      if (existingFresh && !existingHasValue && !currentHasValue) return;
    }

    // No record yet, or the existing one has expired — store current.
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    /* localStorage unavailable — silent */
  }
}

function summariseSource(t: TouchData): string {
  if (t.utmSource) {
    const parts = [t.utmSource, t.utmMedium, t.utmCampaign].filter(Boolean);
    return parts.join(" / ");
  }
  if (t.gclid) return "google / cpc";
  if (t.fbclid) return "facebook / cpc";
  if (t.msclkid) return "bing / cpc";
  if (t.referrer) {
    try {
      const host = new URL(t.referrer).hostname.replace(/^www\./, "");
      return `Referral / ${host}`;
    } catch {
      return "Referral";
    }
  }
  return "Direct";
}

export function readAttribution(): AttributionPayload {
  const lastTouch = readCurrentTouch();
  let firstTouch: TouchData = lastTouch;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw) as TouchData;
      if (stored.capturedAt && !isExpired(stored.capturedAt)) {
        firstTouch = stored;
      }
    }
  } catch {
    /* fall through — use lastTouch as firstTouch */
  }
  return {
    leadSource: summariseSource(firstTouch),
    attribution: { firstTouch, lastTouch },
  };
}
