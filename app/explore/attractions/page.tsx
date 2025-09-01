// ==================== Attractions Explore Page Start ====================
"use client";

import React from "react";
import { ATTRACTIONS } from "@/mock/attractions";
import AttractionsExploreLayout from "@/components/section/attractions/AttractionsExploreLayout";

type Category =
  | "All"
  | "Beaches"
  | "Culture"
  | "Cities"
  | "Mountains"
  | "Leisure";

const ITEMS_PER_PAGE = 9;

export default function AttractionsExplorePage() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("All");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredItems = React.useMemo(() => {
    let items = ATTRACTIONS;

    // Filter by category
    if (activeCategory !== "All") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.location.toLowerCase().includes(query)
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <AttractionsExploreLayout
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      filteredItems={filteredItems}
      currentItems={currentItems}
      totalPages={totalPages}
      startIndex={startIndex}
      endIndex={endIndex}
    />
  );
}

// ==================== Attractions Explore Page End ====================
