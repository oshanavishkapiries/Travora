// ==================== Attraction Detail Mobile Layout Start ====================
"use client";

import React from "react";
import { MapPin, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ATTRACTIONS } from "@/mock/attractions";
import AttractionImageGallery from "./AttractionImageGallery";
import AttractionFeatures from "./AttractionFeatures";

interface AttractionDetailMobileLayoutProps {
  attraction: (typeof ATTRACTIONS)[0];
}

export default function AttractionDetailMobileLayout({
  attraction,
}: AttractionDetailMobileLayoutProps) {
  return (
    <div className="block lg:hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-10">
        <Link href="/explore/attractions">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/20 backdrop-blur text-white hover:bg-white/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <Button
          variant="ghost"
          size="sm"
          className="bg-white/20 backdrop-blur text-white hover:bg-white/30"
        >
          <Share2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="bg-white/20 backdrop-blur text-white hover:bg-white/30"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Title and Location */}
        <div className="pt-16">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {attraction.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
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
        <div>
          <h2 className="text-lg font-semibold mb-3">About Place</h2>
          <p className="text-gray-600 leading-relaxed">
            {attraction.description}
            <span className="text-blue-600 underline cursor-pointer ml-1">
              Read more
            </span>
          </p>
        </div>

        {/* What this place offers */}
        <AttractionFeatures />
      </div>
    </div>
  );
}

// ==================== Attraction Detail Mobile Layout End ====================
