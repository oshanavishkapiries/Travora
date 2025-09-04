// ==================== Attraction Detail Desktop Layout Start ====================
"use client";

import React from "react";
import { MapPin, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ATTRACTIONS } from "@/mock/attractions";
import AttractionImageGallery from "./AttractionImageGallery";
import AttractionFeatures from "./AttractionFeatures";

interface AttractionDetailDesktopLayoutProps {
  attraction: (typeof ATTRACTIONS)[0];
}

export default function AttractionDetailDesktopLayout({
  attraction,
}: AttractionDetailDesktopLayoutProps) {
  return (
    <div className="hidden lg:block">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Link href="/explore/attractions">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Attractions
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Title and Location */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {attraction.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span>{attraction.location}</span>
            </div>
          </div>

          {/* Full Width Image Gallery */}
          <AttractionImageGallery
            mainImage={attraction.imageUrl}
            galleryImages={attraction.galleryImages || []}
            mainLocation={attraction.location.split(",")[0].trim()}
            className="mb-8"
          />

          {/* Two Column Layout for Content */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - About Place */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">About Place</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {attraction.description}
                  <span className="text-blue-600 underline cursor-pointer ml-1">
                    Read more
                  </span>
                </p>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <AttractionFeatures />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Attraction Detail Desktop Layout End ====================
