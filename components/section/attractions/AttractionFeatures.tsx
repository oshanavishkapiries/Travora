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
    <div className={className + "p-10"}>
      <div className="mb-10">
        <p className="text-gray-500 mb-6">Package price</p>
        <h2 className="text-[23px] text-blue-600 font-bold">Rs 35,000/-</h2>
        <p className="text-base">per person</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Package Inclusion</h2>
        <div className="text-base flex items-center gap-2 text-gray-600">
          <span>
            <Clock9 className="h-5 w-5 text-blue-600" />
          </span>
          4 Nights - 5 days ( 2 night Galle 2 night Hikkaduwa )
        </div>
        <div className="text-base flex items-center gap-2 text-gray-600">
          <span>
            <Utensils className="h-5 w-5 text-blue-600" />
          </span>
          Daily breakfast included
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Facilities</h2>
        <div className="flex flex-wrap gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center cursor-pointer p-2.5 bg-blue-200 text-blue-600 rounded-[10px] gap-2"
            >
              <feature.icon className="h-5 w-5 " />
              <span className="text-base">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <h2 className="text-lg font-semibold mb-4">What this place offers ?</h2> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <feature.icon className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">{feature.text}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
}

// ==================== Attraction Features Component End ====================
