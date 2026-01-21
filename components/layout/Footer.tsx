import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  const services = [
    'AI Development',
    'Machine Learning',
    'Custom Software',
    'DevOps',
    'UI/UX Design',
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Avrixo</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              AI-powered solutions for modern businesses. Transforming ideas into intelligent applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-text-secondary hover:text-brand-blue transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-text-secondary text-sm hover:text-text-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-text-secondary text-sm">
                <Mail size={16} />
                <span>info@avrixo.com</span>
              </li>
              <li className="flex items-center space-x-2 text-text-secondary text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            © 2025 Avrixo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-text-muted hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};