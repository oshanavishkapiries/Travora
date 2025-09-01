"use client";

import Hero from "@/components/section/home/Hero";
import FeatureCards from "@/components/section/home/FeatureCards";
import Attractions from "@/components/section/home/Attractions";
import Tourplanes from "@/components/section/home/Tourplanes";
import Gallery from "@/components/section/home/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureCards />
      <Attractions />
      <Tourplanes />
      <Gallery />
    </main>
  );
}
