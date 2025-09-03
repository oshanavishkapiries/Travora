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
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/section/home/Navbar";

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
  <div className="w-16 md:w-52 flex flex-col items-center rounded-full border border-white/90 bg-white/15 px-3 py-1 md:px-6 md:py-2">
    <span className="text-[8.5px] md:text-2xl font-bold text-white md:text-3xl">{value}</span>
    <span className="text-[4.5px] text-white md:text-sm">{label}</span>
  </div>
);

// ==================== Bottom Navigation Item Component ====================
const BottomNavItem: React.FC<BottomNavItemProps> = ({ icon, label, href }) => (
  <a
    href={href}
    className="flex flex-col gap-0.5 items-center text-white/80 transition-colors hover:text-white"
  >
    <div className="flex h-3 w-3 items-center justify-center bg-transparent">
      {icon}
    </div>
    <span className="text-[6px]">{label}</span>
  </a>
);

// ==================== Main Hero Component ====================
export default function Hero() {
  return (
    <section className="relative md:min-h-screen flex justify-center items-center">
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


      {/* ==================== Hero Content ==================== */}
      <div className="mt-10 relative z-10 flex flex-col items-start justify-center px-6 py-16 text-left md:min-h-[calc(100vh-120px)] md:items-center md:text-center md:px-12 md:py-0 w-full h-fit gap-10">
        {/* ==================== Main Headline ==================== */}
        <h1 className="max-w-4xl text-2xl md:text-6xl font-bold leading-tight text-white">
          Travel Memories
          <br />
          You&apos;ll never forget
        </h1>

        {/* ==================== Search Bar (Desktop Only) ==================== */}
        <div className="hidden w-full md:max-w-xl xl:max-w-2xl md:block">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search destinations, tours, or experiences..."
              className="h-10 rounded-full border-0 bg-white/80 pl-12 pr-4 text-lg placeholder:text-gray-500 focus:bg-white"
            />
          </div>
        </div>

        {/* ==================== Primary CTA Button ==================== */}
        <Button
          // size="lg"
          className="hidden md:flex  h-12 w-40 rounded-full bg-white/80 px-10 text-xl font-normal text-black shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
        >
          Explore
          {/* <ArrowRight className="ml-2 h-5 w-5 font-bold" /> */}
          <MoveRight  />
        </Button>

        {/* ==================== Stats Section (Desktop) ==================== */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-28 md:gap-2 lg:gap-x-24">
          <StatCard value="130" label="Happy Travellers" />
          <StatCard value="20+" label="Travel Locations" />
          <StatCard value="10" label="Year Experience" />
        </div>

        {/* ==================== Stats Section (Mobile Style) ==================== */}
        <div className="flex w-full items-center gap-2 md:hidden">
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
        <div className="w-full md:hidden flex">
          <div className="w-auto mx-auto flex max-w-[520px] items-center justify-between gap-6 rounded-full border border-white/20 bg-white/15 px-6 py-1 text-white ">
            <BottomNavItem
              icon={<MapPin className="h-3 w-3" />}
              label="Attractions"
              href="#attractions"
            />
            <BottomNavItem
              icon={<Calendar className="h-3 w-3" />}
              label="Tour Plans"
              href="#tours"
            />
            <BottomNavItem
              icon={<ImageIcon className="h-3 w-3" />}
              label="Gallery"
              href="#gallery"
            />
            <BottomNavItem
              icon={<Phone className="h-3 w-3" />}
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
