"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Grid2x2 } from "lucide-react";

import { NavbarDropdown } from "@/components/layout/NavbarDropdown";
import { companyContact } from "@/lib/company";
import { navGroups } from "@/lib/site-data";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = navGroups.map((group) => ({
    ...group,
    hasDropdown: group.items.length > 0,
  }));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary backdrop-blur-lg border-b border-white/10"
          : "bg-bg-primary backdrop-blur-sm"
      }`}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-3">
        {/* NAVBAR ROW */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center w-32 sm:w-44 lg:w-56 shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-28 h-9 sm:w-40 sm:h-12 lg:w-52 lg:h-10">
                <Image
                  src="/logo-white.png"
                  alt="Avrixo Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => {
                  if (link.hasDropdown) {
                    setActiveDropdown(link.id);
                    setShowDropdown(true);
                  }
                }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className="text-white text-md font-light hover:text-white relative group py-2 whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-brand-primary to-brand-hover group-hover:w-full transition-all duration-500" />
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center justify-end shrink-0">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-bg-secondary rounded-lg border border-bg-muted/50">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-primary/10 rounded-lg">
                <Phone className="w-5 h-5 text-brand-primary" />
              </div>

              <div className="mr-2">
                <div className="text-xs text-gray-200 font-medium">
                  Any Question
                </div>
                <a
                  href={companyContact.phoneHref}
                  className="text-sm font-semibold text-text-primary hover:text-brand-primary transition-colors"
                >
                  {companyContact.phoneDisplay}
                </a>
              </div>

              <Link href="/contact">
                <button className="w-12 h-12 flex items-center justify-center bg-brand-primary rounded-lg">
                  <Grid2x2 className="w-6 h-6 text-white" />
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-1 mb-3 rounded-2xl bg-bg-secondary border border-bg-muted p-6 space-y-6">
            {navLinks.map((link) => (
              <div key={link.name} className="space-y-3">
                <Link
                  href={link.href}
                  className="block text-gray-200 text-sm font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {link.items.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="rounded-xl border border-white/10 bg-bg-primary px-3 py-2 text-[11px] leading-4 text-gray-400"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="overflow-visible">
              <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary rounded-l-lg border border-bg-muted/50 relative w-max">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-primary/10 rounded-lg">
                  <Phone className="w-4 h-4 text-brand-primary" />
                </div>

                <div>
                  <div className="text-xs text-gray-200 font-medium">
                    Any Question
                  </div>
                  <a
                    href={companyContact.phoneHref}
                    className="text-xs font-semibold text-text-primary hover:text-brand-primary transition-colors"
                  >
                    {companyContact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dropdown */}
      <NavbarDropdown
        isOpen={showDropdown}
        activeGroup={activeDropdown}
        onClose={() => setShowDropdown(false)}
      />
    </nav>
  );
};
