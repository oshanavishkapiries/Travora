// ==================== Gallery Header Component Start ====================
"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import UploadImageDialog from "./UploadImageDialog";

interface GalleryHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isUploadDialogOpen: boolean;
  onUploadDialogChange: (open: boolean) => void;
  onUpload: (data: { imageFile: File; location: string }) => Promise<void>;
  isUploading: boolean;
}

export default function GalleryHeader({
  searchQuery,
  onSearchChange,
  isUploadDialogOpen,
  onUploadDialogChange,
  onUpload,
  isUploading,
}: GalleryHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-center lg:justify-between">
        <div>
          <h1 className="hidden lg:block text-3xl font-bold text-gray-900">Gallery</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search gallery items..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-64 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Gallery Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Gallery Items</h2>
        <UploadImageDialog
          isOpen={isUploadDialogOpen}
          onOpenChange={onUploadDialogChange}
          onUpload={onUpload}
          isUploading={isUploading}
        />
      </div>
    </div>
  );
}

// ==================== Gallery Header Component End ====================
