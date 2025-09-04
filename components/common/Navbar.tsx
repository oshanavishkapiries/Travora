import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      {/* ==================== Logo ==================== */}
      <div className="text-2xl font-extrabold uppercase tracking-wide text-white md:text-3xl">
        Travora
      </div>

      {/* Desktop Navigation */}
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
        <a
          href="/admin"
          className="text-white/80 transition-colors hover:text-white bg-white/10 px-3 py-2 rounded-lg"
        >
          Admin
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
  );
};

export default Navbar;

