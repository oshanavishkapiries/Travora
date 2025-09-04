// ==================== Attraction Features Component Start ====================
"use client";

import React from "react";
import { Leaf, Camera, Train, Mountain, Coffee, MapPin } from "lucide-react";

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
      icon: Camera,
      text: "Photography Haven",
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
    <div className={className}>
      <h2 className="text-lg font-semibold mb-4">What this place offers ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <feature.icon className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700 font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== Attraction Features Component End ====================
