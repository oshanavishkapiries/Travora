// ==================== Footer Component Start ====================
"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-28 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 md:gap-10 justify-between">
          {/* Brand & Contact */}
          <div className="sm:col-span-7 md:col-span-5">
            <div className="text-2xl font-bold tracking-wide">TRAVORA</div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Your journey starts here –
              <br />
              Explore. Discover. Experience
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +94 11 234 5678
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@travellanka.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> 123 Paradise Lane, Colombo 07,
                Sri Lanka, 00500
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-2 md:col-span-3">
            <h4 className="mb-4 text-sm font-semibold text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-white">
                  Attractions
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-white">
                  Tour Plans
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:col-span-3 md:col-span-2 align-middle">
            <h4 className="mb-4 text-sm font-semibold text-white/80">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="sm:col-span-12 md:col-span-2">
            <div className="flex items-center gap-3 md:justify-end">
              <a
                aria-label="facebook"
                href="#"
                className="rounded-full bg-white p-2 text-black"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                aria-label="instagram"
                href="#"
                className="rounded-full bg-white p-2 text-black"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                aria-label="youtube"
                href="#"
                className="rounded-full bg-white p-2 text-black"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© 2025 company name. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== Footer Component End ====================
