// ==================== Edit Gallery Item Dialog Component Start ====================
"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryItem } from "@/services/endpoints/gallery.service";

interface EditGalleryItemDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  item: GalleryItem | null;
  onUpdate: (id: string, data: { location: string }) => Promise<void>;
  isUpdating: boolean;
}

export default function EditGalleryItemDialog({
  isOpen,
  onOpenChange,
  item,
  onUpdate,
  isUpdating,
}: EditGalleryItemDialogProps) {
  const [location, setLocation] = useState("");

  // Update form when item changes
  useEffect(() => {
    if (item) {
      setLocation(item.location);
    } else {
      setLocation("");
    }
  }, [item]);

  const handleSubmit = async () => {
    if (!item || !location) return;

    try {
      await onUpdate(item._id, { location });
      onOpenChange(false);
    } catch {
      // Error handling is done in parent component
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Gallery Item</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="edit-location">Location</Label>
            <Input
              id="edit-location"
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={handleLocationChange}
              className="mt-1"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isUpdating}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isUpdating || !location}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ==================== Edit Gallery Item Dialog Component End ====================
