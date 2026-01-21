"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");

 

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
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Whitepapers", href: "/resources/whitepapers" },
        { name: "Success Stories", href: "/resources/success-stories" },
        { name: "Support", href: "/support" },
        { name: "FAQ", href: "/faq" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0b0c0c] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-4 pt-10 pb-8">
        {/* Top Section - Logo & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-8 border-b border-gray-800">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={300}
                height={300}
                className=" w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Transforming businesses through cutting-edge AI solutions and
              innovative technology.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 lg:col-start-9"></div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-gray-800">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-xl mb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Avrixo. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
