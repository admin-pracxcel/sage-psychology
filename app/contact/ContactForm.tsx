"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { Arrow } from "@/components/Icons";
import { readAttribution } from "@/lib/attribution";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

function formatPerthDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Australia/Perth",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return `${get("month")} ${get("day")}, ${get("year")} at ${get("hour")}:${get(
    "minute"
  )} ${get("dayPeriod")}`;
}

function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }
    window.grecaptcha.ready(() => {
      window
        .grecaptcha!.execute(SITE_KEY, { action: "contact" })
        .then(resolve)
        .catch(reject);
    });
  });
}

export default function ContactForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add("recaptcha-hide-badge");
    return () => document.body.classList.remove("recaptcha-hide-badge");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const attribution = readAttribution();

      const clientTimezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
      const clientLocale =
        (typeof navigator !== "undefined" && navigator.language) || null;

      const payload = {
        firstName: state.firstName.trim(),
        lastName: state.lastName.trim(),
        email: state.email.trim(),
        phone: state.phone.trim(),
        message: state.message.trim(),
        leadSource: attribution.leadSource,
        leadDatePerth: formatPerthDate(),
        clientTimezone,
        clientLocale,
        attribution: attribution.attribution,
        recaptchaToken,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let detail = "";
        try {
          const data = (await res.json()) as { error?: string };
          detail = data.error ?? "";
        } catch {
          /* ignore */
        }
        throw new Error(
          detail ? `${detail} (${res.status})` : `Request failed (${res.status})`
        );
      }
      router.push("/contact-thank-you");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[contact form]", err);
      setSubmitting(false);
      const message =
        err instanceof Error ? err.message : "Unknown error.";
      setError(
        `Something went wrong sending your message: ${message}. Please try again, or call 0480 425 776 if the problem persists.`
      );
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-ink/25 focus:border-evergreen outline-none py-2 text-[1rem] transition-colors";
  const labelClass =
    "text-[0.72rem] tracking-[0.24em] uppercase text-moss";

  return (
    <>
      {SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              id="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={state.firstName}
              onChange={(e) =>
                setState({ ...state, firstName: e.target.value })
              }
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              required
              autoComplete="family-name"
              value={state.lastName}
              onChange={(e) =>
                setState({ ...state, lastName: e.target.value })
              }
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              autoComplete="tel"
              value={state.phone}
              onChange={(e) => setState({ ...state, phone: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className={labelClass}>
            Brief message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            className={
              "w-full bg-transparent border-b border-ink/25 focus:border-evergreen outline-none py-2 text-[1rem] resize-vertical transition-colors"
            }
          />
        </div>

        {error && (
          <p
            role="alert"
            className="text-[0.95rem] leading-snug text-[#8a3a2a] bg-[#f7ede8] border border-[#8a3a2a]/25 rounded-[10px] px-5 py-4"
          >
            {error}
          </p>
        )}

        <div className="pt-1">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending…" : "Send message"} <Arrow />
          </button>
        </div>

        <p className="text-[0.78rem] leading-snug text-moss/80">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-4 hover:text-evergreen"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-hairline underline-offset-4 hover:text-evergreen"
          >
            Terms of Service
          </a>{" "}
          apply. See our{" "}
          <Link
            href="/privacy-policy"
            className="underline decoration-hairline underline-offset-4 hover:text-evergreen"
          >
            privacy policy
          </Link>{" "}
          for how your information is handled.
        </p>
      </form>
    </>
  );
}
