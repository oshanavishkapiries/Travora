// ==================== Gallery Grid Component Start ====================
"use client";

import React from "react";
import { GalleryItem } from "@/services/endpoints/gallery.service";
import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  items: GalleryItem[];
  loading: boolean;
  searchQuery: string;
  onEdit: (item: GalleryItem) => void;
  onDelete: (id: string) => void;
}

export default function GalleryGrid({
  items,
  loading,
  searchQuery,
  onEdit,
  onDelete,
}: GalleryGridProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading gallery items...</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">
          {searchQuery
            ? "No gallery items found matching your search."
            : "No gallery items yet. Upload your first image!"}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item: GalleryItem) => (
        <GalleryCard
          key={item._id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

// ==================== Gallery Grid Component End ====================
