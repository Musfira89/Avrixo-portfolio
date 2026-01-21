"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, FileText, MessageCircle, Briefcase } from "lucide-react";
import Button from "@/components/ui/Button";

export const NavbarDropdown = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("about");

  const menuItems = [
    {
      id: "about",
      name: "About Us",
      icon: Users,
      href: "/about",
      title: "About Avrixo",
      description:
        "We're a future-focused tech partner working with some of the world's top enterprises. At Avrixo, we design solutions that drive growth and reimagine digital experiences.",
    },
    {
      id: "case-studies",
      name: "Case Studies",
      icon: FileText,
      href: "/case-studies",
      title: "Our Success Stories",
      description:
        "Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence with innovative solutions.",
    },
    {
      id: "contact",
      name: "Contact Us",
      icon: MessageCircle,
      href: "/contact",
      title: "Get in Touch",
      description:
        "Ready to start your project? Contact our team of experts and let's discuss how we can help bring your vision to life.",
    },
    {
      id: "careers",
      name: "Careers",
      icon: Briefcase,
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
      className="absolute top-full left-0 right-0 p-2  bg-[#3d3d3d] shadow-2xl"
      onMouseLeave={onClose}
    >
      {/* Existing black container */}
      <div className="rounded-lg bg-black backdrop-blur-lg p-4">
        <div className="max-w-350 mx-auto px-20 py-4">
          <div className="flex min-h-[400px]">
            {/* Left Menu Panel */}
            <div className="w-[490px] bg-[#111111] py-4 px-5 rounded-md">
              <div className="space-y-0">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.id}>
                      <Link
                        href={item.href}
                        onMouseEnter={() => setActiveItem(item.id)}
                        onClick={onClose}
                        className="flex items-center justify-between px-5 py-4 transition-colors duration-200 group hover"
                      >
                        <div className="flex items-center space-x-4">
                          {/* Icon wrapper */}
                          <div className="w-14 h-14 flex items-center justify-center rounded-md bg-black">
                            <Icon className="w-8 h-8 text-gray-100 " />
                          </div>

                          {/* Name with hover underline */}
                          <span
                            className="
                  relative text-lg font-normal text-gray-300
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[1px] after:w-full
                  after:bg-brand-primary after:scale-x-0
                  after:origin-left after:transition-transform after:duration-200
                  group-hover:after:scale-x-100
                "
                          >
                            {item.name}
                          </span>
                        </div>

                        {/* Arrow */}
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>

                      {/* Permanent gray divider */}
                      {index < menuItems.length - 0 && (
                        <div className="h-px mx-5 bg-gray-700" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content Panel - Pure Black */}
            <div className="flex-1 bg-black py-16 px-20">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {activeContent.title}
                </h3>
                <p className="text-md text-gray-300 leading-relaxed mb-6">
                  {activeContent.description}
                </p>
                <Link
                  href={activeContent.href}
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
