// ==================== Navbar Component ====================
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY || window.scrollY < window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 py-6 md:py-[40px] px-5 md:px-14 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-fit md:h-[70px] xl:px-12 md:px-6 md:py-8 md:bg-black/30 rounded-full">
        {/* Logo */}
        <div className="text-white text-xl lg:text-2xl xl:text-3xl font-extrabold uppercase tracking-wide ">
          Travora
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 xl:gap-16 text-sm">
          <a
            href="#attractions"
            className="text-white transition-colors hover:text-white"
          >
            ATTRACTIONS
          </a>
          <a
            href="#tours_plans"
            className="text-white transition-colors hover:text-white"
          >
            TOURS PLANS
          </a>
          <a
            href="#gallery"
            className="text-white transition-colors hover:text-white"
          >
            GALLERY
          </a>
          <a
            href="#contact_us"
            className="text-white transition-colors hover:text-white"
          >
            CONTACT US
          </a>
        </nav>
        {/* Desktop CTA Button */}
        <Button
          variant="outline"
          className="hidden md:flex bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-black hover:border-white rounded-full text-white"
        >
          Book now
        </Button>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};
// ...existing code...

export default Navbar;
