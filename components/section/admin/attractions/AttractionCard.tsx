// ==================== Attraction Card Component Start ====================
"use client";

import React from "react";
import { Edit, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/common/OptimizedImage";
import type { Attraction } from "@/types/attraction-api-type";

interface AttractionCardProps {
  attraction: Attraction;
  onEdit: (attraction: Attraction) => void;
  onDelete: (attraction: Attraction) => void;
  isDeleting: boolean;
}

export default function AttractionCard({
  attraction,
  onEdit,
  onDelete,
  isDeleting,
}: AttractionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow p-0 gap-0">
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
            onClick={() => onEdit(attraction)}
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            disabled={isDeleting}
          >
            <Edit className="h-4 w-4 text-gray-600" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(attraction)}
            className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-500"
            disabled={isDeleting}
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
  );
}

// ==================== Attraction Card Component End ====================
