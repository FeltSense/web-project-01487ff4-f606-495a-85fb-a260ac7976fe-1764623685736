'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Email', href: '#contact', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with CTA */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-violet-600/10 rounded-3xl blur-3xl" />
          <div className="relative bg-slate-900/50 border border-slate-800 rounded-3xl p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-4">
              Ready to unlock your team&apos;s potential?
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Join 2,500+ enterprises using CIP to transform workplace communication into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Start Free Trial
              </a>
              <a
                href="#pricing"
                className="border-2 border-slate-700 text-white hover:bg-slate-800 font-semibold rounded-xl px-8 py-4 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-16 border-b border-slate-800">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-5 lg:col-span-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight inline-block mb-4">
              <span className="text-violet-500">CIP</span>
              <span className="text-slate-400 text-sm font-normal ml-2 hidden sm:inline">Communication Intelligence</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Transform workplace communication into strategic insights. Understand patterns, optimize collaboration, and drive performance.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-violet-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Status Badge */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 flex md:justify-end items-start">
            <div className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-400 px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} CIP - Communication Intelligence Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-300">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}