import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import AttributionCapture from "@/components/AttributionCapture";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Psychologist East Fremantle | Sage Psychological Services",
  description:
    "Compassionate, evidence-based psychology in East Fremantle for adults. Registered psychologist Jacob Jones offers CBT, EMDR and more. Medicare rebates available. Book today.",
  metadataBase: new URL("https://www.sagepsychservices.com.au"),
  openGraph: {
    title: "Psychologist East Fremantle | Sage Psychological Services",
    description:
      "Evidence-based, individualised therapy for adults navigating anxiety, trauma, and life's harder chapters.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${instrumentSerif.variable} ${interTight.variable}`}
    >
      <body>
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
