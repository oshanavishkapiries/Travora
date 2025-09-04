// ==================== Attractions Explore Layout Start ====================
"use client";

import React from "react";
import SearchBar from "@/components/common/SearchBar";
import ExplorePageHeader from "@/components/section/common/ExplorePageHeader";
import CategoryFilterBar from "@/components/section/common/CategoryFilterBar";
import ResultsInfo from "@/components/section/common/ResultsInfo";
import Pagination from "@/components/section/common/Pagination";
import NoResults from "@/components/section/common/NoResults";
import { AttractionItem } from "@/components/section/home/Attractions";
import AttractionCard from "./AttractionCard";


type Category =
  | "All"
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

interface AttractionsExploreLayoutProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  currentPage: number;
  onPageChange: (page: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredItems: AttractionItem[];
  currentItems: AttractionItem[];
  totalPages: number;
  startIndex: number;
  endIndex: number;
}


export default function AttractionsExploreLayout({
  activeCategory,
  onCategoryChange,
  currentPage,
  onPageChange,
  searchQuery,
  onSearchChange,
  filteredItems,
  currentItems,
  totalPages,
  startIndex,
  endIndex,
}: AttractionsExploreLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-0 max-w-6xl mx-auto py-8">
        {/* Header */}
        <ExplorePageHeader
          title="Explore Attractions"
          description="Discover amazing attractions across Sri Lanka"
        />

        {/* Filter Bar */}
        <CategoryFilterBar
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search attractions by name, description, or location..."
            className="max-w-md"
          />
        </div>

        {/* Results Info */}
        <ResultsInfo
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={filteredItems.length}
          itemType="attractions"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <AttractionCard key={item.id} item={item} />
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

        {/* No Results */}
        {currentItems.length === 0 && (
          <NoResults message="No attractions found for this category." />
        )}
      </div>
    </div>
  );
}

// ==================== Attractions Explore Layout End ====================
