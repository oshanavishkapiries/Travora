// ==================== Gallery Management Component Start ====================
"use client";

import React, { useState } from "react";
import {
  useGetGalleryItems,
  useCreateGalleryItem,
  useUpdateGalleryItem,
  useDeleteGalleryItem,
} from "@/services/slices/gallerySlice";
import { GalleryItem } from "@/services/endpoints/gallery.service";
import {
  GalleryHeader,
  ErrorMessage,
  GalleryGrid,
  EditGalleryItemDialog,
} from "./gallery";

export default function GalleryManagement() {
  const {
    data: galleryResponse,
    isLoading: loading,
    error,
  } = useGetGalleryItems();
  const createGalleryItemMutation = useCreateGalleryItem();
  const updateGalleryItemMutation = useUpdateGalleryItem();
  const deleteGalleryItemMutation = useDeleteGalleryItem();

  const [searchQuery, setSearchQuery] = useState("");
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const galleryItems = Array.isArray(galleryResponse?.data)
    ? galleryResponse.data
    : [];

  const filteredItems = galleryItems.filter((item: GalleryItem) =>
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpload = async (data: { imageFile: File; location: string }) => {
    try {
      // First upload the image using the existing upload API
      const formData = new FormData();
      formData.append("images", data.imageFile);

      const uploadResponse = await fetch("/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      const uploadResult = await uploadResponse.json();

      // Extract the image URL from the nested response structure
      const imageUrl = uploadResult.data?.successful?.[0]?.url;

      if (!imageUrl) {
        throw new Error("Failed to upload image - no URL returned");
      }

      // Then create gallery item with the uploaded image URL
      await createGalleryItemMutation.mutateAsync({
        src: imageUrl,
        location: data.location,
      });

      // Close dialog and clear error
      setIsUploadDialogOpen(false);
      setUploadError(null);
    } catch (error: any) {
      setUploadError(error.message || "Failed to upload image");
    }
  };

  const handleEditItem = (item: GalleryItem) => {
    setEditingItem(item);
    setIsEditDialogOpen(true);
  };

  const handleUpdateItem = async (id: string, data: { location: string }) => {
    try {
      await updateGalleryItemMutation.mutateAsync({
        id,
        data,
      });

      setIsEditDialogOpen(false);
      setEditingItem(null);
      setUploadError(null);
    } catch (error: any) {
      setUploadError(error.message || "Failed to update item");
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this gallery item?")) {
      try {
        await deleteGalleryItemMutation.mutateAsync(id);
      } catch (error: any) {
        setUploadError(error.message || "Failed to delete item");
      }
    }
  };

  const handleClearError = () => {
    setUploadError(null);
  };

  return (
    <div className="space-y-6">
      <GalleryHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isUploadDialogOpen={isUploadDialogOpen}
        onUploadDialogChange={setIsUploadDialogOpen}
        onUpload={handleUpload}
        isUploading={createGalleryItemMutation.isPending}
      />

      <ErrorMessage
        error={error}
        uploadError={uploadError}
        onClear={handleClearError}
      />

      <GalleryGrid
        items={filteredItems}
        loading={loading}
        searchQuery={searchQuery}
        onEdit={handleEditItem}
        onDelete={handleDeleteItem}
      />

      <EditGalleryItemDialog
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        item={editingItem}
        onUpdate={handleUpdateItem}
        isUpdating={updateGalleryItemMutation.isPending}
      />
    </div>
  );
}

// ==================== Gallery Management Component End ====================
