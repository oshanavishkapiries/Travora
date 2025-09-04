// ==================== Tour Highlights Component Start ====================
"use client";

import React from "react";

interface TourHighlightsProps {
  className?: string;
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  dotClassName?: string;
  textClassName?: string;
}

const highlights = [
  "Professional guide with local expertise",
  "All transportation included",
  "Traditional lunch experience",
  "Small group for personalized attention",
];

export default function TourHighlights({
  className = "",
  titleClassName = "text-lg font-semibold mb-3",
  listClassName = "space-y-2",
  itemClassName = "flex items-start gap-2",
  dotClassName = "w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0",
  textClassName = "text-gray-600",
}: TourHighlightsProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>Highlights</h2>
      <ul className={listClassName}>
        {highlights.map((highlight, index) => (
          <li key={index} className={itemClassName}>
            <div className={dotClassName} />
            <span className={textClassName}>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==================== Tour Highlights Component End ====================
