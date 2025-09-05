"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface ItineraryItem {
  day: string;
  title: string;
  description: string;
}

const itinerary: ItineraryItem[] = [
  {
    day: "Day 01",
    title: "Arrival & Galle",
    description:
      "Arrive in Colombo or Galle and check in to your hotel. Explore the iconic Galle Fort and Lighthouse, browse local cafes and shops, and end the day with a seaside dinner.",
  },
  {
    day: "Day 02",
    title: "Unawatuna & Beach",
    description:
      "Enjoy breakfast before heading to Unawatuna Beach. Relax on the golden sands or try snorkeling and paddleboarding, then capture a stunning sunset by the shore.",
  },
  {
    day: "Day 03",
    title: "Mirissa & Whale Watching",
    description:
      "Leave early for Mirissa and join an exciting whale watching tour. Savor a seafood lunch and visit Coconut Tree Hill for breathtaking ocean views.",
  },
  {
    day: "Day 04",
    title: "Departure",
    description:
      "Have breakfast and check out from your hotel. Enjoy an optional city tour or shopping before drop-off at Colombo or Galle.",
  },
];

export default function AttractionTimeLine() {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-xl font-semibold">Itinerary</h2>

      <div className="px-4 md:px-8">
        <div className="relative border-l-3 border-dashed border-blue-300 pl-10">
          {itinerary.map((item, idx) => (
            <div key={idx} className="mb-10 flex items-start gap-6">
              {/* Timeline Dot */}
              <div className="absolute -left-[26px] flex h-12 w-12 items-center justify-center rounded-full border border-blue-600 text-xs font-semibold text-white shadow-md">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex justify-center items-center text-xs">
                  <span className="max-w-8 text-center">{item.day}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
                <p className="text-xl text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          variant="default"
          size="sm"
          className="rounded-2xl shadow-md w-10/12 text-2xl h-[70px] bg-blue-600"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
}
