// ==================== Attractions Management Component Start ====================
"use client";

import React, { useState } from "react";
import {
  AttractionsHeader,
  AttractionsGrid,
  AddAttractionDialog,
} from "./index";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import {
  useGetAttractions,
  useDeleteAttraction,
} from "@/services/slices/attractionsSlice";
import type {
  Attraction,
  GetAttractionsParams,
} from "@/types/attraction-api-type";

export default function AttractionsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);

  // Fetch attractions with pagination
  const queryParams: GetAttractionsParams = {
    page: currentPage,
    pageSize,
    search: searchQuery.trim() || undefined,
  };

  const { data, isLoading, isError, error } = useGetAttractions(queryParams);

  const attractions = data?.data?.attractions || [];
  const totalPages = data?.data?.pagination?.totalPages || 1;
  const totalAttractions = data?.data?.pagination?.total || 0;

  // Delete mutation
  const deleteAttractionMutation = useDeleteAttraction();

  const handleAddAttraction = () => {
    setSelectedAttraction(null);
    setIsAddDialogOpen(true);
  };

  const handleEditAttraction = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
    setIsAddDialogOpen(true);
  };

  const handleDeleteAttraction = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedAttraction) {
      deleteAttractionMutation.mutate(selectedAttraction._id, {
        onSuccess: () => {
          setIsDeleteDialogOpen(false);
          setSelectedAttraction(null);
        },
      });
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      <AttractionsHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onAddAttraction={handleAddAttraction}
        attractionsCount={attractions.length}
        totalAttractions={totalAttractions}
        isLoading={isLoading}
        isError={isError}
      />

      <AttractionsGrid
        attractions={attractions}
        isLoading={isLoading}
        isError={isError}
        error={error}
        searchQuery={searchQuery}
        currentPage={currentPage}
        totalPages={totalPages}
        onEdit={handleEditAttraction}
        onDelete={handleDeleteAttraction}
        onAddAttraction={handleAddAttraction}
        onPageChange={handlePageChange}
        onRetry={handleRetry}
        isDeleting={deleteAttractionMutation.isPending}
      />

      {/* Add/Edit Attraction Dialog */}
      <AddAttractionDialog
        isOpen={isAddDialogOpen}
        onClose={() => {
          setIsAddDialogOpen(false);
          setSelectedAttraction(null);
        }}
        editData={selectedAttraction}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedAttraction(null);
        }}
        onConfirm={confirmDelete}
        title="Delete Attraction"
        message={`Are you sure you want to delete "${selectedAttraction?.title}"? This action cannot be undone.`}
        isLoading={deleteAttractionMutation.isPending}
      />
    </div>
  );
}

// ==================== Attractions Management Component End ====================
