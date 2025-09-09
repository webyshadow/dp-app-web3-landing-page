"use client";

import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-green-900/30">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Deploy<span className="text-green-400">.</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-sm">
            Driving speed & scale with secure multi-chain architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-green-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-green-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 rounded-full bg-green-900/20 hover:bg-green-500/20 text-green-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 rounded-full bg-green-900/20 hover:bg-green-500/20 text-green-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="p-2 rounded-full bg-green-900/20 hover:bg-green-500/20 text-green-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-green-900/30 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Deploy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
