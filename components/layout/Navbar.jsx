"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavbarDropdown } from "@/components/layout/NavbarDropdown";
import Button from "@/components/ui/Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About us", href: "/about", hasDropdown: true },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Industries", href: "/industries" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary backdrop-blur-lg border-b border-white/10"
            : "bg-bg-primary backdrop-blur-sm"
        }`}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className="max-w-300 mx-auto p-2">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center group shrink-0">
              <div className="relative w-58 h-20 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Avrixo Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  onMouseEnter={() => link.hasDropdown && setShowDropdown(true)}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className="text-white text-lg font-light hover:text-white transition-colors relative group py-2 whitespace-nowrap"
                  >
                    {link.name}
                    {/* Cyan to Lime gradient underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-orange-400 to-orange-800 group-hover:w-full transition-all duration-500 ease-out" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Start a Discussion Button - Right */}
            <div className="hidden lg:flex items-center shrink-0 ">
              <Link href="/contact">
                <Button as="span">Start a Discussion</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-6 space-y-6 border-t border-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-white text-lg font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full px-6 py-3 rounded-md text-base font-semibold text-white bg-cyan-500 hover:bg-cyan-600 transition-colors">
                  Start a Discussion
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Dropdown Component */}
        <NavbarDropdown
          isOpen={showDropdown}
          onClose={() => setShowDropdown(false)}
        />
      </nav>
    </>
  );
};
