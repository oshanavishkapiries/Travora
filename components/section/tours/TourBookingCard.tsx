// ==================== Tour Booking Card Component Start ====================
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface TourBookingCardProps {
  className?: string;
  price?: string;
  availability?: string;
  buttonText?: string;
  cancellationText?: string;
  showCancellationText?: boolean;
}

export default function TourBookingCard({
  className = "bg-gray-50 rounded-lg p-4",
  price = "$299",
  availability = "Next: Tomorrow",
  buttonText = "Book Now",
  cancellationText = "Free cancellation up to 24 hours before tour",
  showCancellationText = false,
}: TourBookingCardProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600">Price per person</p>
          <p className="text-2xl font-bold text-blue-600">{price}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Available</p>
          <p className="text-sm font-medium text-green-600">{availability}</p>
        </div>
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        {buttonText}
      </Button>
      {showCancellationText && (
        <p className="text-xs text-gray-500 text-center mt-2">
          {cancellationText}
        </p>
      )}
    </div>
  );
}

// ==================== Tour Booking Card Component End ====================
