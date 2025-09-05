// ==================== Attraction Detail Desktop Layout Start ====================
"use client";

import React from "react";
import { MapPin, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ATTRACTIONS } from "@/mock/attractions";
import AttractionImageGallery from "./AttractionImageGallery";
import AttractionFeatures from "./AttractionFeatures";
import AttractionTimeLine from "./AttractionTimeLine";

interface AttractionDetailDesktopLayoutProps {
  attraction: (typeof ATTRACTIONS)[0];
}

export default function AttractionDetailDesktopLayout({
  attraction,
}: AttractionDetailDesktopLayoutProps) {
  return (
    <div className="hidden lg:block lg:py-24 lg:px-20">
      <div>
        <div className="flex flex-col gap-16">
          {/* Title and Location */}
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900">
              {attraction.title}
            </h1>
            <div className="text-base flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              {attraction.location}
            </div>
          </div>

          {/* Full Width Image Gallery */}
          <AttractionImageGallery
            mainImage={attraction.imageUrl}
            galleryImages={attraction.galleryImages || []}
            mainLocation={attraction.location.split(",")[0].trim()}
          />

          {/* Two Column Layout for Content */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - About Place */}
            <div className="col-span-7 flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <h2 className="text-2xl font-semibold">About Place</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Embark on a 5-day, 4-night adventure along Sri Lanka’s
                  stunning southern coast. This tour takes you through pristine
                  beaches, historic forts, vibrant local markets, and lush
                  coastal landscapes. From the colonial charm of Galle Fort to
                  the golden sands of Unawatuna and the breath- taking Mirissa
                  ...
                  {/* {attraction.description} */}
                  <span className="text-blue-600 underline cursor-pointer ml-1">
                    Read more
                  </span>
                </p>
              </div>

              <AttractionTimeLine />
            </div>

            {/* Right Column - Features */}
            <div className="col-span-5 border border-gray-200 rounded-4xl">
              <AttractionFeatures />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Attraction Detail Desktop Layout End ====================
