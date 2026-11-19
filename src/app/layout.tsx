import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "I Ascend Project — Your UTME admission is not left to chance",
    template: "%s · I Ascend Project",
  },
  description:
    "The I Ascend Project is an educational intervention helping young Nigerians prepare properly for JAMB UTME: subject lessons, computer-based tests, mentorship, high-yield textbooks and admissions guidance.",
  keywords: [
    "JAMB",
    "UTME",
    "I Ascend Project",
    "CBT practice",
    "Nigerian university admission",
    "mentorship",
  ],
  authors: [{ name: "I Ascend Project" }],
  icons: {
    icon: "/favicon.svg",
  },
  themeColor: "#0A1F44",
  openGraph: {
    title: "I Ascend Project — Rescuing the Future; Rebuilding the Future",
    description:
      "Learn every JAMB subject, practise with real computer-based tests, and get the mentorship that turns a dream course into an admission letter.",
    type: "website",
    images: [{ url: "/brand/i-ascend-logo.svg", alt: "Official logo of the I Ascend Project" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
