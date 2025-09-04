// ==================== Empty State Component Start ====================
"use client";

import React from "react";
import { MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  searchQuery: string;
  onAddAttraction: () => void;
}

export default function EmptyState({
  searchQuery,
  onAddAttraction,
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No attractions found
      </h3>
      <p className="text-gray-600 mb-4">
        {searchQuery
          ? "Try adjusting your search terms"
          : "Get started by adding your first attraction"}
      </p>
      {!searchQuery && (
        <Button
          onClick={onAddAttraction}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Attraction
        </Button>
      )}
    </div>
  );
}

// ==================== Empty State Component End ====================
