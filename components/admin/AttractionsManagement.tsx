// ==================== Attractions Management Component Start ====================
"use client";

import React, { useState } from "react";
import { Search, Plus, Edit, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/common/OptimizedImage";
import Pagination from "@/components/common/Pagination";
import AddAttractionDialog from "./AddAttractionDialog";
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

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for something"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 w-64 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Attractions</h2>
            {!isLoading && !isError && (
              <p className="text-sm text-gray-600 mt-1">
                Showing {attractions.length} of {totalAttractions} attractions
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            )}
          </div>
          <Button
            onClick={handleAddAttraction}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Attraction
          </Button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="overflow-hidden p-0">
                <div className="w-full h-48 bg-gray-200 animate-pulse" />
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse mb-3" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Failed to load attractions
            </h3>
            <p className="text-gray-600 mb-4">
              {error?.message ||
                "Something went wrong while loading attractions"}
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </Button>
          </div>
        )}

        {/* Attractions Grid */}
        {!isLoading && !isError && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {attractions.map((attraction) => (
                <Card
                  key={attraction._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow p-0 gap-0"
                >
                  <div className="relative">
                    <OptimizedImage
                      src={attraction.thumbnail}
                      alt={attraction.title}
                      className="w-full h-48 object-cover"
                      containerClassName="w-full"
                    />
                    {/* Action Buttons Overlay */}
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => handleEditAttraction(attraction)}
                        className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                        disabled={deleteAttractionMutation.isPending}
                      >
                        <Edit className="h-4 w-4 text-gray-600" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteAttraction(attraction)}
                        className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-500"
                        disabled={deleteAttractionMutation.isPending}
                      >
                        <Trash2 className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                      {attraction.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{attraction.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}

        {/* Empty State */}
        {!isLoading && !isError && attractions.length === 0 && (
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
                onClick={handleAddAttraction}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Attraction
              </Button>
            )}
          </div>
        )}
      </div>

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
