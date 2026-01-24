"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";

export const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Development", href: "/services/ai-development" },
        { name: "Machine Learning", href: "/services/machine-learning" },
        { name: "Computer Vision", href: "/services/computer-vision" },
        { name: "Big Data Analytics", href: "/services/big-data" },
        { name: "Custom Software", href: "/services/software-development" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "AI Chatbot Development", href: "/solutions/chatbot" },
        { name: "ChatGPT Integration", href: "/solutions/chatgpt" },
        { name: "NLP Solutions", href: "/solutions/nlp" },
        { name: "Predictive Modeling", href: "/solutions/predictive-modeling" },
        { name: "DevOps Services", href: "/solutions/devops" },
        { name: "UI/UX Design", href: "/solutions/ui-ux" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Investors", href: "/investors" },
      ],
    },
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Finance & Fintech", href: "/industries/finance" },
        { name: "E-commerce", href: "/industries/ecommerce" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Logistics", href: "/industries/logistics" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-bg-primary text-text-secondary relative overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary to-bg-primary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Hero CTA Section */}
        <div className="py-24 border-b border-bg-muted/30">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Brand & Message */}
            <div className="space-y-6">
              {/* Logo */}
              <div>
                <img
                  src="/logo.png"
                  alt="Avrixo Logo"
                  className="h-16 w-auto mb-1"
                />

                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                  We help businesses build intelligent, scalable AI products —
                  from strategy to production. Talk to our AI experts and get
                  practical guidance.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-3">
                <img src="/upwork.png" alt="Upwork" className="h-16 w-auto" />
                <div className="h-10 w-px bg-gray-500" />
                <img
                  src="/clutch.svg"
                  alt="Clutch"
                  className="h-5 w-auto opacity-90"
                />
              </div>
            </div>

            {/* Right: Premium CTA Card */}
            <div className="lg:mt-0">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-primary/5 rounded-3xl blur-xl" />

                <div className="relative bg-bg-secondary rounded-2xl p-10 border border-bg-muted/50">
                  <div className="space-y-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-brand-primary" />
                        <span className="text-brand-primary text-xs font-light">
                          AI-First Solutions
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-lg xl:text-2xl font-bold text-text-primary leading-tight mb-1">
                        Let's build something{" "}
                        <span className="text-brand-primary">intelligent</span>
                      </h2>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Choose the best way to connect with our team
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                      <a
                        href="/contact"
                        className="group flex items-center justify-between w-full sm:w-auto px-4 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md font-semibold transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:scale-[1.02]"
                      >
                        <span>Start a Project</span>
                      </a>

                      <a
                        href="/schedule"
                        className="group flex items-center justify-between w-full sm:w-auto px-4 py-3 bg-bg-primary hover:bg-bg-muted/30 text-text-primary rounded-md font-semibold transition-all border border-bg-muted hover:border-brand-primary/50"
                      >
                        <span>Schedule a Call</span>
                      </a>
                    </div>

                    {/* Contact Info Grid */}
                    {/* <div className="grid grid-cols-1 gap-3 pt-6 border-t border-bg-muted/30">
                      <a
                        href="mailto:avrixo@info.com"
                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg-muted/20 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-text-secondary mb-0.5">
                            Email
                          </div>
                          <div className="text-sm text-text-primary group-hover:text-brand-primary transition-colors">
                            avrixo@info.com
                          </div>
                        </div>
                      </a>

                      <a
                        href="tel:+92123456789"
                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-bg-muted/20 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-text-secondary mb-0.5">
                            Phone
                          </div>
                          <div className="text-sm text-text-primary group-hover:text-brand-primary transition-colors">
                            +92 123 456 789
                          </div>
                        </div>
                      </a>

                      <div className="flex items-center gap-3 p-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-brand-primary" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-text-secondary mb-0.5">
                            Location
                          </div>
                          <div className="text-sm text-text-primary">
                            Karachi, Pakistan
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-text-primary font-bold text-sm uppercase tracking-wider mb-8 relative inline-block">
                  {section.title}
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-primary -mb-2" />
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-text-secondary hover:text-text-primary transition-colors text-[15px] inline-flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bg-muted/30 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left: Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
              <div className="flex items-center gap-6">
                <p className="text-text-secondary">
                  © {new Date().getFullYear()} Avrixo. All rights reserved.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="/privacy"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-bg-secondary border border-bg-muted/50 text-text-secondary hover:border-brand-primary hover:text-brand-primary hover:bg-bg-muted/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
