// ==================== Attractions Header Component Start ====================
"use client";

import React from "react";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AttractionsHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onAddAttraction: () => void;
  attractionsCount: number;
  totalAttractions: number;
  isLoading: boolean;
  isError: boolean;
}

export default function AttractionsHeader({
  searchQuery,
  onSearchChange,
  onAddAttraction,
  attractionsCount,
  totalAttractions,
  isLoading,
  isError,
}: AttractionsHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-center lg:justify-between">
        <div>
          <h1 className="hidden lg:block text-3xl font-bold text-gray-900">Overview</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for something"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-64 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Attractions Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Attractions</h2>
          {!isLoading && !isError && (
            <p className="text-sm text-gray-600 mt-1">
              Showing {attractionsCount} of {totalAttractions} attractions
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          )}
        </div>
        <Button
          onClick={onAddAttraction}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Attraction
        </Button>
      </div>
    </div>
  );
}

// ==================== Attractions Header Component End ====================
