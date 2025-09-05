// ==================== Attraction Detail Mobile Layout Start ====================
"use client";

import React from "react";
import { MapPin, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ATTRACTIONS } from "@/mock/attractions";
import AttractionImageGallery from "./AttractionImageGallery";
import AttractionFeatures from "./AttractionFeatures";
import AttractionTimeLine from "./AttractionTimeLine";

interface AttractionDetailMobileLayoutProps {
  attraction: (typeof ATTRACTIONS)[0];
}

export default function AttractionDetailMobileLayout({
  attraction,
}: AttractionDetailMobileLayoutProps) {
  return (
    <div className="block lg:hidden">
      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Title and Location */}
        <div className="pt-12 flex flex-col gap-2.5">
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            {attraction.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <span>
              <MapPin className="h-3 w-3" />
            </span>
            <span>{attraction.location}</span>
          </div>
        </div>

        {/* Image Gallery */}
        <AttractionImageGallery
          mainImage={attraction.imageUrl}
          galleryImages={attraction.galleryImages || []}
          mainLocation={attraction.location.split(",")[0].trim()}
        />

        {/* About Place */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xs font-semibold">About Place</h2>
          <p className="text-gray-600 leading-relaxed text-[10px]">
            Embark on a 5-day, 4-night adventure along Sri Lanka’s stunning
            southern coast. This tour takes you through pristine beaches,
            historic forts, vibrant local markets, and lush coastal landscapes.
            From the colonial charm of Galle Fort to the golden sands of
            Unawatuna and the breath- taking Mirissa ...
            {/* {attraction.description} */}
            <span className="text-blue-600 underline cursor-pointer ml-1">
              Read more
            </span>
          </p>
        </div>

        {/* What this place offers */}
        <div className="border border-gray-200 rounded-2xl">
          <AttractionFeatures />
        </div>

        {/* tour place */}
        <div>
          <AttractionTimeLine />
        </div>
      </div>
    </div>
  );
}

// ==================== Attraction Detail Mobile Layout End ====================
