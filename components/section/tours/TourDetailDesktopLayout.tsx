// ==================== Tour Detail Desktop Layout Start ====================
"use client";

import React from "react";
import { MapPin, ArrowLeft, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TOURS } from "@/mock/tours";
import TourQuickStats from "./TourQuickStats";
import TourHighlights from "./TourHighlights";
import TourItinerary from "./TourItinerary";
import TourBookingCard from "./TourBookingCard";
import TourImageGallery from "./TourImageGallery";

interface TourDetailDesktopLayoutProps {
  tour: (typeof TOURS)[0];
}

export default function TourDetailDesktopLayout({
  tour,
}: TourDetailDesktopLayoutProps) {
  return (
    <div className="hidden lg:block">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Link href="/explore/tours">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Tours
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
          {/* Full Width Image Gallery */}
          <TourImageGallery
            mainImage={tour.imageUrl}
            galleryImages={tour.galleryImages || []}
            mainLocation={tour.location.split(",")[0].trim()}
            className="mb-8"
          />

          {/* Two Column Layout for Content */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Tour Info */}
            <div className="space-y-6">
              {/* Tour Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {tour.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span>{tour.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {tour.description}
                </p>
              </div>

              {/* Quick Stats */}
              <TourQuickStats
                gridClassName="grid grid-cols-3 gap-6 py-6 border-t border-gray-200"
                iconClassName="h-8 w-8 mx-auto mb-2 text-blue-600"
                labelClassName="text-sm text-gray-600"
                valueClassName="text-lg font-semibold"
              />
            </div>

            {/* Right Column - Details & Booking */}
            <div className="space-y-6">
              {/* Highlights */}
              <TourHighlights
                className="bg-gray-50 rounded-lg p-6"
                titleClassName="text-xl font-semibold mb-4"
                listClassName="space-y-3"
                itemClassName="flex items-start gap-3"
                textClassName="text-gray-700"
              />

              {/* Itinerary */}
              <TourItinerary
                className="bg-gray-50 rounded-lg p-6"
                titleClassName="text-xl font-semibold mb-4"
                listClassName="space-y-4"
                itemClassName="flex gap-4"
                dayNumberClassName="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0"
                dayTitleClassName="font-semibold"
                dayDescriptionClassName="text-gray-600"
              />

              {/* Booking Card */}
              <TourBookingCard
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                buttonText="Book Now"
                showCancellationText={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Tour Detail Desktop Layout End ====================
