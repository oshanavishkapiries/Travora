// ==================== Tour Detail Mobile Layout Start ====================
"use client";

import React from "react";
import { MapPin, Star, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TOURS } from "@/mock/tours";
import TourQuickStats from "./TourQuickStats";
import TourHighlights from "./TourHighlights";
import TourItinerary from "./TourItinerary";
import TourBookingCard from "./TourBookingCard";
import TourImageGallery from "./TourImageGallery";

interface TourDetailMobileLayoutProps {
  tour: (typeof TOURS)[0];
}

export default function TourDetailMobileLayout({
  tour,
}: TourDetailMobileLayoutProps) {
  return (
    <div className="block lg:hidden">
      {/* Hero Section with Image Gallery */}
      <div className="relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 z-10">
          <Link href="/explore/tours">
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

        {/* Image Gallery */}
        <TourImageGallery
          mainImage={tour.imageUrl}
          galleryImages={tour.galleryImages || []}
          mainLocation={tour.location.split(",")[0].trim()}
          className="mb-6"
        />

        {/* Tour Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">
              {tour.rating.toFixed(1)}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{tour.title}</h1>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{tour.location}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Quick Info */}
        <TourQuickStats />

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About This Tour</h2>
          <p className="text-gray-600 leading-relaxed">{tour.description}</p>
        </div>

        {/* Highlights */}
        <TourHighlights />

        {/* Itinerary */}
        <TourItinerary />

        {/* Price & Booking */}
        <TourBookingCard />
      </div>
    </div>
  );
}

// ==================== Tour Detail Mobile Layout End ====================
