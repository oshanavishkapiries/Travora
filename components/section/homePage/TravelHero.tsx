import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight } from "lucide-react";
import Image from "next/image";

import StatsPanel from "./StatsPanel";
import Statistic from "./Statistic";

export type TravelHeroProps = {
  heroImageUrl: string;
  title?: React.ReactNode;
  ctaText?: string;
  onCta?: () => void;
  className?: string;
};

export default function TravelHero({
  heroImageUrl,
  title = <>Travel memories you&apos;ll never forget</>,
  ctaText = "Get started",
  onCta,
  className,
}: TravelHeroProps) {
  return (
    <section className={className ?? ""}>


      {/* Desktop Hero */}
      <div className="hidden md:block px-4 md:px-6">
        <div
          className="relative overflow-hidden rounded-xl aspect-[16/6]"
          style={{
            backgroundImage: `url(${heroImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute left-0 bottom-0 p-8">
            <h1 className="max-w-xl text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow">
              {title}
            </h1>
            <div className="mt-6">
              <Button
                onClick={onCta}
                className="rounded-full bg-amber-400 text-black hover:bg-amber-300 font-semibold px-6 h-12"
              >
                {ctaText}
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop stats */}
        <StatsPanel />
      </div>

      {/* Mobile Hero */}
      <div className="relative md:hidden">
        <div className="relative h-[350px] overflow-hidden">
          <Image
            src={heroImageUrl}
            alt="Tropical paradise with turquoise waters and limestone cliffs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute left-0 bottom-10 flex flex-col justify-center px-6">
            <h1 className="text-3xl font-bold text-white leading-tight mb-6">
              Travel memories you&apos;ll never forget
            </h1>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 -mt-6 relative z-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 bg-white rounded-lg shadow-sm h-[50px]" />
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden p-4 m-4 shadow-lg bg-white rounded-xl">
          <div className="grid grid-cols-3 gap-4">
            <Statistic number="130" label="Happy Travellers" />
            <Statistic number="20" label="Travel Location" />
            <Statistic number="10" label="Year Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
