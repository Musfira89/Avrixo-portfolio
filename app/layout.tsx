import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import { siteUrl, companyContact, companySocials } from "@/lib/company";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avrixo | AI & SaaS Product Engineering",
    template: "%s | Avrixo",
  },
  description:
    "Avrixo is one team that designs, builds, and ships production-grade AI products and SaaS platforms end to end — strategy, design, engineering, and cloud. Fixed scope, clear milestones.",
  keywords: [
    "AI product engineering",
    "SaaS development",
    "RAG development",
    "AI automation",
    "data platforms",
    "fixed-scope software development",
  ],
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    siteName: "Avrixo",
    title: "Avrixo | AI & SaaS Product Engineering",
    description:
      "One team that designs, builds, and ships production-grade AI products and SaaS platforms — strategy to deploy.",
    url: `${siteUrl}/`,
    images: [{ url: "/img.jpg", width: 1200, height: 630, alt: "Avrixo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avrixo | AI & SaaS Product Engineering",
    description:
      "One team that designs, builds, and ships production-grade AI products and SaaS platforms — strategy to deploy.",
    images: ["/img.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Avrixo",
  url: siteUrl,
  logo: `${siteUrl}/finalLogo.png`,
  description:
    "AI and SaaS product engineering studio. Strategy, design, engineering, data, and cloud under one roof.",
  email: companyContact.email,
  telephone: companyContact.phoneDisplay,
  sameAs: [companySocials.linkedin, companySocials.facebook, companySocials.instagram].filter(
    Boolean
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <PageTransition />

        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
