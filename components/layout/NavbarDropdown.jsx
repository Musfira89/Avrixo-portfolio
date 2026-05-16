"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { navGroups } from "@/lib/site-data";

export const NavbarDropdown = ({ isOpen, activeGroup = "about", onClose }) => {
  const [activeItem, setActiveItem] = useState("about-overview");

  const group = navGroups.find((item) => item.id === activeGroup) || navGroups[0];
  const menuItems = group.items;
  const activeContent =
    menuItems.find((item) => item.id === activeItem) || menuItems[0];

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 p-2 bg-bg-muted shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="rounded-lg bg-bg-primary backdrop-blur-lg p-2">
        <div className="max-w-7xl mx-auto px-4 md:px-20 py-4">
          <div className="flex min-h-[380px] flex-col md:flex-row">
            {/* Left Menu Panel */}
            <div className="w-full md:w-[470px] bg-bg-secondary py-4 px-4 rounded-md">
              <div className="px-4 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary">
                  {group.eyebrow}
                </p>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  {group.description}
                </p>
              </div>
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
                          <div className="w-14 h-14 relative flex items-center justify-center overflow-hidden rounded-lg">
                            <Image
                              src={item.iconPath}
                              alt={item.name}
                              width={52}
                              height={52}
                              className="object-contain"
                            />
                          </div>

                          <span className="relative text-md font-normal text-gray-300 group">
                            {item.name}
                            <span
                              className="absolute -bottom-1 left-0 h-[2px] w-0 bg-linear-to-r from-brand-primary to-brand-hover 
                              transition-all duration-500 ease-in-out group-hover:w-full"
                            />
                          </span>
                        </div>
                      </Link>

                      {index < menuItems.length - 1 && (
                        <div className="h-px mx-4 bg-gray-700" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="flex-1 bg-bg-primary py-12 md:py-16 px-8 md:px-20">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-primary mb-4">
                  {group.name}
                </p>
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
                  <Button as="span">Explore Route</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
