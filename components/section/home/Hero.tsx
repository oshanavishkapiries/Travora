// ==================== Hero Component Start ====================
"use client";

import React from "react";
import {
  Search,
  ArrowRight,
  MapPin,
  Calendar,
  ImageIcon,
  Phone,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ==================== Types and Interfaces ====================
interface StatCardProps {
  value: string;
  label: string;
}

interface BottomNavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

// ==================== Stat Card Component ====================
const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="flex flex-col items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
    <span className="text-2xl font-bold text-white md:text-3xl">{value}</span>
    <span className="text-xs text-white/80 md:text-sm">{label}</span>
  </div>
);

// ==================== Bottom Navigation Item Component ====================
const BottomNavItem: React.FC<BottomNavItemProps> = ({ icon, label, href }) => (
  <a
    href={href}
    className="flex flex-col items-center gap-1 text-white/80 transition-colors hover:text-white"
  >
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
      {icon}
    </div>
    <span className="text-xs">{label}</span>
  </a>
);

// ==================== Main Hero Component ====================
export default function Hero() {
  return (
    <section className="relative md:min-h-screen">
      {/* ==================== Background Image ==================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1628193826226-a7c781daa6c1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        {/* ==================== Overlay for Better Text Readability ==================== */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ==================== Header Navigation ==================== */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        {/* ==================== Logo ==================== */}
        <div className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
          Travora
        </div>

        {/* ==================== Desktop Navigation ==================== */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#destinations"
            className="text-white/80 transition-colors hover:text-white"
          >
            Destinations
          </a>
          <a
            href="#tours"
            className="text-white/80 transition-colors hover:text-white"
          >
            Tours
          </a>
          <a
            href="#about"
            className="text-white/80 transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white/80 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* ==================== Desktop CTA Button ==================== */}
        <Button
          variant="outline"
          className="hidden md:flex border-white text-white hover:bg-white hover:text-black"
        >
          Book now
        </Button>

        {/* ==================== Mobile Menu Button ==================== */}
        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* ==================== Hero Content ==================== */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 py-16 text-left md:min-h-[calc(100vh-120px)] md:items-center md:text-center md:px-12 md:py-0">
        {/* ==================== Main Headline ==================== */}
        <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight text-white md:mb-12 md:text-5xl lg:text-6xl">
          <span className="font-normal">Travel Memories</span>
          <br />
          <span className="font-bold">you&apos;ll never forget</span>
        </h1>

        {/* ==================== Search Bar (Desktop Only) ==================== */}
        <div className="mb-8 hidden w-full max-w-2xl md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search destinations, tours, or experiences..."
              className="h-14 rounded-full border-0 bg-white/90 pl-12 pr-4 text-lg placeholder:text-gray-500 focus:bg-white"
            />
          </div>
        </div>

        {/* ==================== Primary CTA Button ==================== */}
        <Button
          size="lg"
          className="mb-12 h-14 rounded-full bg-white px-8 text-lg font-semibold text-black shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl md:mb-16"
        >
          Start Your Journey
          <ArrowRight className="h-5 w-5" />
        </Button>

        {/* ==================== Stats Section (Desktop) ==================== */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-8">
          <StatCard value="130" label="Happy Travellers" />
          <StatCard value="20+" label="Travel Locations" />
          <StatCard value="10" label="Year Experience" />
        </div>

        {/* ==================== Stats Section (Mobile Style) ==================== */}
        <div className="mt-2 flex w-full items-center justify-between gap-2 md:hidden">
          <div className="scale-[0.95]">
            <StatCard value="130" label="Happy Travellers" />
          </div>
          <div className="scale-[0.95]">
            <StatCard value="130" label="Happy Travellers" />
          </div>
          <div className="scale-[0.95]">
            <StatCard value="130" label="Happy Travellers" />
          </div>
        </div>

        {/* ==================== Mobile Static Navigation Panel ==================== */}
        <div className="mt-6 w-full md:hidden">
          <div className="mx-auto flex max-w-[520px] items-center justify-between gap-6 rounded-full border border-white/20 bg-white/15 px-6 py-3 text-white backdrop-blur-xl">
            <BottomNavItem
              icon={<MapPin className="h-4 w-4" />}
              label="Attractions"
              href="#attractions"
            />
            <BottomNavItem
              icon={<Calendar className="h-4 w-4" />}
              label="Tour Plans"
              href="#tours"
            />
            <BottomNavItem
              icon={<ImageIcon className="h-4 w-4" />}
              label="Gallery"
              href="#gallery"
            />
            <BottomNavItem
              icon={<Phone className="h-4 w-4" />}
              label="Contact Us"
              href="#contact"
            />
          </div>
        </div>
      </div>

      {/* Mobile floating panel removed; now rendered statically above */}
    </section>
  );
}
// ==================== Hero Component End ====================
