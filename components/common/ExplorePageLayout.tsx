// ==================== Explore Page Layout Component Start ====================
"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { HOME_CATEGORIES } from "@/mock/categories";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";

type Category =
  | "All"
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

interface ExplorePageLayoutProps {
  title: string;
  description: string;
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  searchPlaceholder?: string;
  children: React.ReactNode;
}

export default function ExplorePageLayout({
  title,
  description,
  activeCategory,
  onCategoryChange,
  currentPage,
  totalPages,
  onPageChange,
  startIndex,
  endIndex,
  totalItems,
  searchQuery,
  onSearchChange,
  searchPlaceholder,
  children,
}: ExplorePageLayoutProps) {
  const handleCategoryChange = (category: Category) => {
    onCategoryChange(category);
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-0 max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-lg text-gray-600">{description}</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-start gap-2 md:gap-3">
          {HOME_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category as Category)}
              className={
                "rounded-full border px-4 py-2 text-sm transition-colors shadow-sm " +
                (activeCategory === category
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50")
              }
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        {onSearchChange && (
          <div className="mb-6">
            <SearchBar
              value={searchQuery || ""}
              onChange={onSearchChange}
              placeholder={searchPlaceholder || "Search..."}
              className="max-w-md"
            />
          </div>
        )}

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
            {totalItems} items
          </p>
        </div>

        {/* Content */}
        {children}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

// ==================== Explore Page Layout Component End ====================
