import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="hidden md:flex items-center justify-between px-5 py-5">
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-sky-100 grid place-items-center font-bold text-sky-600">✈️</div>
        <span className="text-sm font-semibold tracking-wide">Travora</span>
      </div>
      <nav className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a className="hover:text-foreground" href="#attractions">Attractions</a>
        <a className="hover:text-foreground" href="#tours">Tour Plans</a>
        <a className="hover:text-foreground" href="#gallery">Gallery</a>
        <a className="hover:text-foreground" href="#contact">Contact Us</a>
      </nav>
      <Button variant="ghost" size="icon" aria-label="Search">
        <Search className="size-5" />
      </Button>
    </header>
  );
}
