// ==================== Upload Image Dialog Component Start ====================
"use client";

import React, { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface UploadImageDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onUpload: (data: { imageFile: File; location: string }) => Promise<void>;
  isUploading: boolean;
}

export default function UploadImageDialog({
  isOpen,
  onOpenChange,
  onUpload,
  isUploading,
}: UploadImageDialogProps) {
  const [form, setForm] = useState({
    location: "",
    imageFile: null as File | null,
  });

  const handleSubmit = async () => {
    if (!form.imageFile || !form.location) return;

    try {
      await onUpload({
        imageFile: form.imageFile,
        location: form.location,
      });

      // Reset form on success
      setForm({ location: "", imageFile: null });
    } catch {
      // Error handling is done in parent component
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      imageFile: e.target.files?.[0] || null,
    });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      location: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Upload Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload New Gallery Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="image">Image File</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter location..."
              value={form.location}
              onChange={handleLocationChange}
              className="mt-1"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isUploading || !form.imageFile || !form.location}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ==================== Upload Image Dialog Component End ====================
