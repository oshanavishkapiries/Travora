// ==================== Gallery Card Component Start ====================
"use client";

import React from "react";
import { Edit, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/common/OptimizedImage";
import { GalleryItem } from "@/services/endpoints/gallery.service";

interface GalleryCardProps {
  item: GalleryItem;
  onEdit: (item: GalleryItem) => void;
  onDelete: (id: string) => void;
}

export default function GalleryCard({
  item,
  onEdit,
  onDelete,
}: GalleryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow p-0 gap-0">
      <div className="relative group">
        <OptimizedImage
          src={item.src}
          alt={item.location}
          className="w-full h-32 object-cover"
          containerClassName="w-full h-32"
        />
        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 bg-white/90 hover:bg-white"
            onClick={() => onEdit(item)}
          >
            <Edit className="h-4 w-4 text-gray-600" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            className="h-8 w-8 p-0 bg-red-500/90 hover:bg-red-500"
            onClick={() => onDelete(item._id)}
          >
            <Trash2 className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      <CardContent className="p-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <MapPin className="h-3 w-3" />
          <span className="line-clamp-1">{item.location}</span>
        </div>
      </CardContent>
    </Card>
  );
}

// ==================== Gallery Card Component End ====================
