// ==================== Attraction Detail Page Start ====================
"use client";

import React from "react";
import { ATTRACTIONS } from "@/mock/attractions";
import { notFound } from "next/navigation";
import AttractionDetailMobileLayout from "@/components/section/attractions/AttractionDetailMobileLayout";
import AttractionDetailDesktopLayout from "@/components/section/attractions/AttractionDetailDesktopLayout";

interface AttractionDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

function AttractionDetailPage({ params }: AttractionDetailPageProps) {
  const unwrappedParams = React.use(params);
  const attraction = ATTRACTIONS.find((a) => a.id === unwrappedParams.id);

  if (!attraction) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <AttractionDetailMobileLayout attraction={attraction} />
      <AttractionDetailDesktopLayout attraction={attraction} />
    </div>
  );
}

export default AttractionDetailPage;

// ==================== Attraction Detail Page End ====================
