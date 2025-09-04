// ==================== Tour Itinerary Component Start ====================
"use client";

import React from "react";

interface TourItineraryProps {
  className?: string;
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  dayNumberClassName?: string;
  contentClassName?: string;
  dayTitleClassName?: string;
  dayDescriptionClassName?: string;
}

const itinerary = [
  {
    day: 1,
    title: "Day 1: Arrival & Welcome",
    description: "Hotel check-in and welcome dinner",
    desktopDescription: "Hotel check-in and welcome dinner with local cuisine",
  },
  {
    day: 2,
    title: "Day 2: Main Tour",
    description: "Full day exploring the main attractions",
    desktopDescription:
      "Full day exploring the main attractions with guided commentary",
  },
  {
    day: 3,
    title: "Day 3: Departure",
    description: "Breakfast and transfer to airport",
    desktopDescription: "Breakfast and transfer to airport with farewell",
  },
];

export default function TourItinerary({
  className = "",
  titleClassName = "text-lg font-semibold mb-3",
  listClassName = "space-y-4",
  itemClassName = "flex gap-3",
  dayNumberClassName = "w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0",
  contentClassName = "",
  dayTitleClassName = "font-medium",
  dayDescriptionClassName = "text-sm text-gray-600",
}: TourItineraryProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>Itinerary</h2>
      <div className={listClassName}>
        {itinerary.map((item) => (
          <div key={item.day} className={itemClassName}>
            <div className={dayNumberClassName}>{item.day}</div>
            <div className={contentClassName}>
              <h3 className={dayTitleClassName}>{item.title}</h3>
              <p className={dayDescriptionClassName}>
                {item.day === 1 ? item.desktopDescription : item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== Tour Itinerary Component End ====================
