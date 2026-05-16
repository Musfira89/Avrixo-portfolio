"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { industryRoutes, navGroups, resourceRoutes, serviceRoutes } from "@/lib/site-data";

export const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: navGroups.find((group) => group.id === "about")?.items ?? [],
    },
    {
      title: "Services",
      links: serviceRoutes.slice(0, 6).map((route) => ({
        name: route.eyebrow,
        href: route.href,
      })),
    },
    {
      title: "Industries",
      links: industryRoutes.map((route) => ({
        name: route.eyebrow,
        href: route.href,
      })),
    },
    {
      title: "Resources",
      links: resourceRoutes.map((route) => ({
        name: route.slug === "insights" ? "Insights Hub" : route.eyebrow,
        href: route.href,
      })),
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="relative overflow-hidden bg-bg-primary text-text-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-primary/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid gap-10 border-b border-white/10 py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Image
              src="/logo-white.png"
              alt="Avrixo Logo"
              width={220}
              height={64}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-xl text-sm leading-7 text-text-primary/60">
              Avrixo builds AI-driven products, SaaS platforms, and digital transformation
              systems for companies that need strategy, architecture, and execution in one place.
            </p>
          </div>

          <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-bg-secondary p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Secure by design",
                  body: "Access, data boundaries, and audit expectations shaped early.",
                },
                {
                  icon: BadgeCheck,
                  title: "Partner-ready",
                  body: "Prepared for Upwork, direct B2B, and investor procurement flows.",
                },
                {
                  icon: ArrowUpRight,
                  title: "Outcome led",
                  body: "Roadmaps tied to adoption, performance, and measurable impact.",
                },
              ].map((signal) => (
                <div key={signal.title} className="rounded-2xl border border-white/10 bg-bg-primary p-4">
                  <signal.icon className="h-5 w-5 text-brand-primary" />
                  <h3 className="mt-4 text-sm font-black">{signal.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-text-primary/55">{signal.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-brand-primary">
              Contact
            </h3>
            <div className="mt-7 space-y-4">
              <a
                href="tel:+923312093664"
                className="flex items-center gap-3 text-sm text-text-primary/65 transition-colors hover:text-brand-primary"
              >
                <Phone className="h-4 w-4" />
                +92 331 2093664
              </a>
              <a
                href="mailto:hello@avrixo.com"
                className="flex items-center gap-3 text-sm text-text-primary/65 transition-colors hover:text-brand-primary"
              >
                <Mail className="h-4 w-4" />
                hello@avrixo.com
              </a>
              <div className="flex items-center gap-3 text-sm text-text-primary/65">
                <MapPin className="h-4 w-4" />
                Remote-first, serving global teams
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg-secondary text-text-primary/60 transition-all hover:border-brand-primary hover:text-brand-primary"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-black uppercase tracking-[0.24em] text-text-primary">
                  {section.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-1 text-sm text-text-primary/55 transition-colors hover:text-text-primary"
                      >
                        {link.name}
                        <ArrowUpRight className="h-3 w-3 text-brand-primary opacity-0 transition-all group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-8 text-sm text-text-primary/45 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Avrixo. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="transition-colors hover:text-text-primary">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
