// ==================== Attraction Features Component Start ====================
"use client";

import React from "react";
import {
  Leaf,
  Camera,
  Train,
  Mountain,
  Coffee,
  MapPin,
  Clock,
  Utensils,
  Clock9,
  Soup,
} from "lucide-react";

interface AttractionFeaturesProps {
  className?: string;
}

export default function AttractionFeatures({
  className = "",
}: AttractionFeaturesProps) {
  const features = [
    {
      id: 1,
      icon: Leaf,
      text: "Tea Plantation",
    },
    {
      id: 2,
      icon: Soup,
      text: "Meals",
    },
    {
      id: 3,
      icon: Train,
      text: "Train Spotting",
    },
    {
      id: 4,
      icon: Mountain,
      text: "Scenic Views",
    },
    {
      id: 5,
      icon: Coffee,
      text: "Local Cafes",
    },
    {
      id: 6,
      icon: MapPin,
      text: "Historic Site",
    },
  ];

  return (
    <div className={className + "p-5 lg:p-10"}>
      <div>
        <p className="lg:text-gray-500 mb-3 lg:mb-6 text-xs lg:text-base">
          Package price
        </p>
        <h2 className="text-2xl lg:text-[32px] text-blue-600 font-bold">
          Rs 35,000/-
        </h2>
        <p className="text-xs lg:text-base">per person</p>
      </div>

      <hr className="my-5" />

      <div className="flex flex-col gap-4">
        <h2 className="text-xs lg:text-2xl">Package Inclusion</h2>
        <div className="text-[10px] lg:text-base flex items-center gap-2 text-gray-600">
          <span>
            <Clock9 className="h-2.5 lg:h-5 w-2.5 lg:w-5 text-blue-600" />
          </span>
          4 Nights - 5 days ( 2 night Galle 2 night Hikkaduwa )
        </div>
        <div className="text-[10px] lg:text-base flex items-center gap-2 text-gray-600">
          <span>
            <Utensils className="h-2.5 lg:h-5 w-2.5 lg:w-5 text-blue-600" />
          </span>
          Daily breakfast included
        </div>
      </div>

      <hr className="my-5" />

      <div className="flex flex-col gap-4">
        <h2 className="tetx-sx lg:text-2xl">Facilities</h2>
        <div className="flex flex-wrap gap-2 lg:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center cursor-pointer py-1 px-2 lg:p-2.5 bg-blue-200 text-blue-600 rounded-[10px] gap-1 lg:gap-2"
            >
              <feature.icon className="h-2.5 lg:h-5 w-2.5 lg:w-5" />
              <span className="text-[10px] lg:text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== Attraction Features Component End ====================
