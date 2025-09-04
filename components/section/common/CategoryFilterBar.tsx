// ==================== Category Filter Bar Component Start ====================
"use client";

import React from "react";
import { HOME_CATEGORIES } from "@/mock/categories";

type Category =
  | "All"
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

interface CategoryFilterBarProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  className?: string;
}

export default function CategoryFilterBar({
  activeCategory,
  onCategoryChange,
  className = "mb-8 flex flex-wrap items-center justify-start gap-2 md:gap-3",
}: CategoryFilterBarProps) {
  return (
    <div className={className}>
      {HOME_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category as Category)}
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
  );
}

// ==================== Category Filter Bar Component End ====================
