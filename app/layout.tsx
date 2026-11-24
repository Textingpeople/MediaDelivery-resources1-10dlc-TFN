import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WEBSITE_URL } from "@/lib/siteConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: "LifeEase Concierge | Personal Concierge & Virtual Assistance for Employees",
  description: "Employer-provided personal concierge for employees. Send everyday tasks by text or through the portal — appointments, errands, travel planning, home services and more.",
  openGraph: {
    title: "LifeEase Concierge | Personal Concierge & Virtual Assistance for Employees",
    description: "Employer-provided personal concierge for employees. We handle life's everyday tasks so you can focus on what matters.",
    url: WEBSITE_URL,
    siteName: "LifeEase Concierge",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LifeEase Concierge | Personal Concierge & Virtual Assistance for Employees",
    description: "Employer-provided personal concierge for employees.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
