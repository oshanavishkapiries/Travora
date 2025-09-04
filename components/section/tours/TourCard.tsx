// ==================== Tour Card Component Start ====================
"use client";

import React from "react";
import { MapPin, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import OptimizedImage from "@/components/common/OptimizedImage";

export interface TourItem {
  id: string;
  title: string;
  description: string;
  location: string;
  rating: number;
  category: "Beaches" | "Culture" | "Cities" | "Mountains" | "Leisure";
  imageUrl: string;
}

interface TourCardProps {
  item: TourItem;
  className?: string;
}

function RatingBadge({ rating }: { rating: number }) {
  return (
    <div className="absolute left-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
      {rating.toFixed(1)}
    </div>
  );
}

export default function TourCard({ item, className = "" }: TourCardProps) {
  return (
    <Link href={`/explore/tours/${item.id}`}>
      <div
        className={`group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md cursor-pointer ${className}`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <OptimizedImage
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            containerClassName="h-full w-full"
          />
          <RatingBadge rating={item.rating} />
          <div className="absolute right-3 top-3 rounded-full bg-white p-2 text-black shadow-sm ring-1 ring-black/5">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-3 p-4">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-600">
            {item.description}
          </p>
          <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{item.location}</span>
            </div>
            <Button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ==================== Tour Card Component End ====================
