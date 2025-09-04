// ==================== Tour Detail Page Start ====================
"use client";

import React from "react";
import { TOURS } from "@/mock/tours";
import { notFound } from "next/navigation";
import TourDetailMobileLayout from "@/components/section/tours/TourDetailMobileLayout";
import TourDetailDesktopLayout from "@/components/section/tours/TourDetailDesktopLayout";

interface TourDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

function TourDetailPage({ params }: TourDetailPageProps) {
  const unwrappedParams = React.use(params);
  const tour = TOURS.find((t) => t.id === unwrappedParams.id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <TourDetailMobileLayout tour={tour} />
      <TourDetailDesktopLayout tour={tour} />
    </div>
  );
}

export default TourDetailPage;

// ==================== Tour Detail Page End ====================
