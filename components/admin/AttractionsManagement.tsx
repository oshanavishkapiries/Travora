// ==================== Attractions Management Component Start ====================
"use client";

import React, { useState } from "react";
import { Search, Plus, Edit, Trash2, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ATTRACTIONS } from "@/mock/attractions";
import OptimizedImage from "@/components/common/OptimizedImage";
import AddAttractionDialog from "./AddAttractionDialog";
import { AttractionFormData } from "@/validations/attractionSchema";

interface AttractionCard {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}

export default function AttractionsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [attractions] = useState<AttractionCard[]>(ATTRACTIONS);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredAttractions = attractions.filter(
    (attraction) =>
      attraction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddAttraction = () => {
    setIsAddDialogOpen(true);
  };

  const handleSubmitAttraction = (data: AttractionFormData) => {
    console.log("New attraction data:", data);
    // TODO: Implement API call to save attraction
    // For now, just close the dialog
  };

  const handleEditAttraction = (id: string) => {
    // TODO: Implement edit attraction modal/form
    console.log("Edit attraction:", id);
  };

  const handleDeleteAttraction = (id: string) => {
    // TODO: Implement delete confirmation modal
    console.log("Delete attraction:", id);
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
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Attractions</h2>
          <Button
            onClick={handleAddAttraction}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Attraction
          </Button>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAttractions.map((attraction) => (
            <Card
              key={attraction.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <OptimizedImage
                  src={attraction.imageUrl}
                  alt={attraction.title}
                  className="w-full h-48 object-cover"
                  containerClassName="w-full h-48"
                />
                {/* Action Buttons Overlay */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleEditAttraction(attraction.id)}
                    className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
                  >
                    <Edit className="h-4 w-4 text-gray-600" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteAttraction(attraction.id)}
                    className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-500"
                  >
                    <Trash2 className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
                  {attraction.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {attraction.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4" />
                  <span>{attraction.location}</span>
                </div>
                <Button
                  variant="outline"
                  onClick={() => handleEditAttraction(attraction.id)}
                  className="w-full bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                >
                  Edit Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredAttractions.length === 0 && (
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

      {/* Add Attraction Dialog */}
      <AddAttractionDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        onSubmit={handleSubmitAttraction}
      />
    </div>
  );
}

// ==================== Attractions Management Component End ====================
