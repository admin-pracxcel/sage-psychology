"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Arrow } from "@/components/Icons";

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferred: "email" | "phone";
  message: string;
  consent: boolean;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  preferred: "email",
  message: "",
  consent: false,
};

export default function ContactForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!state.consent) return;
    setSubmitting(true);
    // TODO: wire real submission endpoint. For now, route straight to thank-you.
    setTimeout(() => {
      router.push("/contact/thank-you");
    }, 300);
  }

  const inputClass =
    "w-full bg-transparent border-b border-ink/25 focus:border-evergreen outline-none py-3 text-[1rem] transition-colors";
  const labelClass =
    "text-[0.72rem] tracking-[0.24em] uppercase text-moss";

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={state.phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className={labelClass}>Preferred contact method</span>
          <div className="flex gap-6 py-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferred"
                value="email"
                checked={state.preferred === "email"}
                onChange={() => setState({ ...state, preferred: "email" })}
                className="accent-evergreen"
              />
              <span className="text-[1rem]">Email</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferred"
                value="phone"
                checked={state.preferred === "phone"}
                onChange={() => setState({ ...state, preferred: "phone" })}
                className="accent-evergreen"
              />
              <span className="text-[1rem]">Phone</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Brief message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          className={
            "w-full bg-transparent border-b border-ink/25 focus:border-evergreen outline-none py-3 text-[1rem] resize-vertical transition-colors"
          }
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={state.consent}
          onChange={(e) => setState({ ...state, consent: e.target.checked })}
          className="mt-[6px] accent-evergreen shrink-0"
        />
        <span className="text-[0.95rem] leading-snug">
          I have read and agree to the{" "}
          <Link href="/privacy-policy" className="link">
            privacy policy
          </Link>{" "}
          and understand how my information will be handled.
        </span>
      </label>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting || !state.consent}
          className="btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : "Send message"} <Arrow />
        </button>
      </div>
    </form>
  );
}
