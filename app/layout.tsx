import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import AttributionCapture from "@/components/AttributionCapture";
import { JsonLd } from "@/components/JsonLd";
import { rootGraph } from "@/lib/schema";

const GTM_ID = "GTM-MB38CTSP";
const CLARITY_ID = "xxhczhamhl";

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
  icons: {
    icon: [
      { url: "/img/sage-favicon.webp", type: "image/webp" },
    ],
    shortcut: "/img/sage-favicon.webp",
    apple: "/img/sage-favicon.webp",
  },
  openGraph: {
    title: "Psychologist East Fremantle | Sage Psychological Services",
    description:
      "Evidence-based, individualised therapy for adults navigating anxiety, trauma, and life's harder chapters.",
    type: "website",
    locale: "en_AU",
    siteName: "Sage Psychological Services",
    images: [
      {
        url: "/img/sage-psychology-practice.webp",
        width: 1200,
        height: 630,
        alt: "Sage Psychological Services practice in East Fremantle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychologist East Fremantle | Sage Psychological Services",
    description:
      "Evidence-based, individualised therapy for adults navigating anxiety, trauma, and life's harder chapters.",
    images: ["/img/sage-psychology-practice.webp"],
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
      <head>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`}
        </Script>
      </head>
      <body>
        <JsonLd data={rootGraph} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
