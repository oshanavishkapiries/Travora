// ==================== Tour Image Gallery Component Start ====================
"use client";

import React from "react";
import { MapPin } from "lucide-react";
import OptimizedImage from "@/components/common/OptimizedImage";

interface TourImageGalleryProps {
  mainImage: string;
  galleryImages: Array<{
    id: string;
    src: string;
    alt: string;
    location: string;
  }>;
  mainLocation?: string;
  className?: string;
}

export default function TourImageGallery({
  mainImage,
  galleryImages,
  mainLocation,
  className = "",
}: TourImageGalleryProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Mobile Layout - Stacked */}
      <div className="block lg:hidden">
        {/* Main Hero Image */}
        <div className="relative h-80 w-full overflow-hidden rounded-2xl">
          <OptimizedImage
            src={mainImage}
            alt="Main tour image"
            className="h-full w-full object-cover"
            containerClassName="h-full w-full"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Location Badge */}
          {mainLocation && (
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-sm font-medium text-white backdrop-blur">
              <MapPin className="h-4 w-4" />
              <span>{mainLocation}</span>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-32 w-full overflow-hidden rounded-xl"
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                containerClassName="h-full w-full"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Location Badge */}
              <div className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur">
                <MapPin className="h-3 w-3" />
                <span>{image.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Large card on left, medium + 2 small on right */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {/* Large Card - Left Side */}
        <div className="col-span-1 relative h-96 overflow-hidden rounded-2xl">
          <OptimizedImage
            src={mainImage}
            alt="Main tour image"
            className="h-full w-full object-cover"
            containerClassName="h-full w-full"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Location Badge */}
          {mainLocation && (
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-sm font-medium text-white backdrop-blur">
              <MapPin className="h-4 w-4" />
              <span>{mainLocation}</span>
            </div>
          )}
        </div>

        {/* Right Side - Medium + 2 Small Cards */}
        <div className="col-span-2 grid grid-rows-2 gap-4">
          {/* Medium Card - Top Right */}
          <div className="relative h-48 overflow-hidden rounded-2xl">
            <OptimizedImage
              src={galleryImages[0]?.src || mainImage}
              alt={galleryImages[0]?.alt || "Gallery image"}
              className="h-full w-full object-cover"
              containerClassName="h-full w-full"
            />
            <div className="absolute inset-0 bg-black/20" />

            {/* Location Badge */}
            <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur">
              <MapPin className="h-3 w-3" />
              <span>{galleryImages[0]?.location || mainLocation}</span>
            </div>
          </div>

          {/* Two Small Cards - Bottom Right */}
          <div className="grid grid-cols-2 gap-4">
            {/* Small Card 1 */}
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <OptimizedImage
                src={galleryImages[1]?.src || mainImage}
                alt={galleryImages[1]?.alt || "Gallery image"}
                className="h-full w-full object-cover"
                containerClassName="h-full w-full"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Location Badge */}
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur">
                <MapPin className="h-3 w-3" />
                <span>{galleryImages[1]?.location || mainLocation}</span>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative h-48 overflow-hidden rounded-2xl">
              <OptimizedImage
                src={galleryImages[2]?.src || mainImage}
                alt={galleryImages[2]?.alt || "Gallery image"}
                className="h-full w-full object-cover"
                containerClassName="h-full w-full"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Location Badge */}
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur">
                <MapPin className="h-3 w-3" />
                <span>{galleryImages[2]?.location || mainLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== Tour Image Gallery Component End ====================
