"use client";

import {
  Linkedin,
  Facebook,
  Instagram,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

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
    <footer className="bg-bg-primary text-white relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Upper CTA Section */}
        <div className="py-20 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <img src="/logo-white.png" alt="Avrixo Logo" className="h-14 w-auto" />
              <p className="text-gray-400 text-base leading-relaxed max-w-md">
                We help businesses build intelligent, scalable AI products — from strategy to production.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-brand-primary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-bg-secondary rounded-xl p-8 border border-white/5">
                <div className="flex flex-col sm:flex-row gap-4">
                   <a href="/contact" className="px-6 py-3 bg-brand-primary text-white rounded-lg font-bold hover:scale-105 transition-transform text-center">
                    Start a Project
                   </a>
                   <a href="/schedule" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
                    Schedule a Call
                   </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8 relative">
                  {section.title}
                  <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-brand-primary"></span>
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-[14px] flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all text-brand-primary" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Avrixo. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">                  Terms of Service

</a>
<a href="#" className="hover:text-white transition-colors"> Cookies

</a>

          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-brand-primary hover:text-brand-primary transition-all">
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};