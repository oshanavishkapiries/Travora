// ==================== Attractions Grid Component Start ====================
"use client";

import React from "react";
import type { Attraction } from "@/types/attraction-api-type";
import AttractionCard from "./AttractionCard";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import Pagination from "@/components/common/Pagination";

interface AttractionsGridProps {
  attractions: Attraction[];
  isLoading: boolean;
  isError: boolean;
  error?: Error | null;
  searchQuery: string;
  currentPage: number;
  totalPages: number;
  onEdit: (attraction: Attraction) => void;
  onDelete: (attraction: Attraction) => void;
  onAddAttraction: () => void;
  onPageChange: (page: number) => void;
  onRetry: () => void;
  isDeleting: boolean;
}

export default function AttractionsGrid({
  attractions,
  isLoading,
  isError,
  error,
  searchQuery,
  currentPage,
  totalPages,
  onEdit,
  onDelete,
  onAddAttraction,
  onPageChange,
  onRetry,
  isDeleting,
}: AttractionsGridProps) {
  // Loading State
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  // Error State
  if (isError) {
    return <ErrorState error={error} onRetry={onRetry} />;
  }

  // Empty State
  if (attractions.length === 0) {
    return (
      <EmptyState searchQuery={searchQuery} onAddAttraction={onAddAttraction} />
    );
  }

  // Attractions Grid
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction._id}
            attraction={attraction}
            onEdit={onEdit}
            onDelete={onDelete}
            isDeleting={isDeleting}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}

// ==================== Attractions Grid Component End ====================
