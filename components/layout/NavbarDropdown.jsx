"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import Button from "@/components/ui/Button";

export const NavbarDropdown = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("about");

  const menuItems = [
    {
      id: "about",
      name: "About Us",
      // Path to your avif file in /public/icons
      iconPath: "/icons/a1.avif",
      href: "/about",
      title: "About Avrixo",
      description:
        "We're a future-focused tech partner working with some of the world's top enterprises. At Avrixo, we design solutions that drive growth and reimagine digital experiences.",
    },
    {
      id: "case-studies",
      name: "Case Studies",
      iconPath: "/icons/a2.avif",
      href: "/case-studies",
      title: "Our Success Stories",
      description:
        "Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence with innovative solutions.",
    },
    {
      id: "contact",
      name: "Contact Us",
      iconPath: "/icons/a3.avif",
      href: "/contact",
      title: "Get in Touch",
      description:
        "Ready to start your project? Contact our team of experts and let's discuss how we can help bring your vision to life.",
    },
    {
      id: "careers",
      name: "Careers",
      // Path to your png file
      iconPath: "/icons/a4.png",
      href: "/careers",
      title: "Join Our Team",
      description:
        "Be part of a dynamic team that's shaping the future of technology. Explore exciting career opportunities at Avrixo.",
    },
  ];

  const activeContent = menuItems.find((item) => item.id === activeItem);

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 p-2 bg-[#3d3d3d] shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="rounded-lg bg-black backdrop-blur-lg p-2">
        <div className="max-w-7xl mx-auto px-4 md:px-20 py-4">
          <div className="flex min-h-[380px] flex-col md:flex-row">
            {/* Left Menu Panel */}
            <div className="w-full md:w-[470px] bg-[#181818] py-4 px-4 rounded-md">
              <div className="space-y-0">
                {menuItems.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <Link
                        href={item.href}
                        onMouseEnter={() => setActiveItem(item.id)}
                        onClick={onClose}
                        className="flex items-center justify-between px-4 py-4 transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-3">
                          {/* Updated Icon wrapper for local Images */}
                          <div className="w-14 h-14 relative flex items-center justify-center overflow-hidden rounded-lg">
                            <Image
                              src={item.iconPath}
                              alt={item.name}
                              width={52} // Matches w-14
                              height={52} // Matches h-14
                              className="object-contain"
                            />
                          </div>

                          {/* Name with hover underline */}
                          <span className="relative text-md font-normal text-gray-300 group">
                            {item.name}
                            {/* The animated underline */}
                            <span
                              className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-orange-800 
                              transition-all duration-500 ease-in-out group-hover:w-full"
                            />
                          </span>
                        </div>
                      </Link>

                      {/* Permanent gray divider */}
                      {index < menuItems.length - 0 && (
                        <div className="h-px mx-4 bg-gray-700" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="flex-1 bg-black py-12 md:py-16 px-8 md:px-20">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {activeContent?.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {activeContent?.description}
                </p>
                <Link
                  href={activeContent?.href || "#"}
                  onClick={onClose}
                  className="inline-block"
                >
                  <Button as="span">Start a Discussion</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
