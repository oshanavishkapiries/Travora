// ==================== Add Attraction Dialog Component Start ====================
"use client";

import React from "react";
import { X, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import ContentEditor from "@/components/editor/ContentEditor";
import {
  attractionSchema,
  type AttractionFormData,
} from "@/validations/attractionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AddAttractionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AttractionFormData) => void;
}

const CATEGORIES = [
  "Cultural",
  "Historical",
  "Natural",
  "Adventure",
  "Religious",
  "Entertainment",
  "Beach",
  "Mountain",
  "Forest",
  "Urban",
  "Rural",
  "Wildlife",
  "Museum",
  "Theme Park",
  "Shopping",
  "Food & Dining",
];

const PLACE_OFFERS = [
  "Tea Plantation",
  "Train Spotting",
  "Local Cafes",
  "Photography Haven",
  "Scenic Views",
  "Historic Site",
  "Hiking Trails",
  "Water Sports",
  "Bird Watching",
  "Sunset Viewing",
  "Local Markets",
  "Traditional Crafts",
  "Cultural Performances",
  "Adventure Sports",
  "Relaxation Spots",
  "Educational Tours",
  "Food Tasting",
  "Wine Tasting",
  "Spa & Wellness",
  "Camping Sites",
  "Fishing Spots",
  "Rock Climbing",
  "Cave Exploration",
  "Waterfall Views",
  "Mountain Biking",
  "Wildlife Safari",
];

export default function AddAttractionDialog({
  isOpen,
  onClose,
  onSubmit,
}: AddAttractionDialogProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<AttractionFormData>({
    resolver: zodResolver(attractionSchema),
    defaultValues: {
      title: "",
      location: "",
      images: Array(4).fill(""),
      category: "Cultural",
      placeOffers: [],
      details: "",
    },
  });

  const watchedValues = watch();

  // Handle image upload (simulated for now)
  const handleImageUpload = (index: number, imageUrl: string) => {
    const newImages = [...watchedValues.images];
    newImages[index] = imageUrl;
    setValue("images", newImages);
  };

  // Handle place offers toggle
  const togglePlaceOffer = (offer: string) => {
    const currentOffers = watchedValues.placeOffers || [];
    const newOffers = currentOffers.includes(offer)
      ? currentOffers.filter((o) => o !== offer)
      : [...currentOffers, offer];
    setValue("placeOffers", newOffers);
  };

  // Handle form submission
  const onSubmitForm = (data: AttractionFormData) => {
    console.log("Attraction data submitted:", data);
    onSubmit(data);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Add Attraction</h2>
            <p className="text-gray-600 mt-1">
              Add Attraction with filling these details
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit(onSubmitForm)} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Add Images</h3>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-3">
                {watchedValues.images?.map((image, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                      {image ? (
                        <div className="relative w-full h-full">
                          <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => handleImageUpload(index, "")}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-500">Upload Image</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          // Simulate image upload - in real app, upload to server
                          const reader = new FileReader();
                          reader.onload = () => {
                            handleImageUpload(index, reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Upload Buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-dashed border-2 border-gray-300 hover:border-gray-400"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Thumbnail
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-dashed border-2 border-gray-300 hover:border-gray-400"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
              </div>

              {errors.images && (
                <p className="text-red-500 text-sm">{errors.images.message}</p>
              )}
            </div>

            {/* Right Column - Form Fields */}
            <div className="space-y-4">
              {/* Title */}
              <div>
                <Label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-900"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  {...register("title")}
                  placeholder="Enter attraction title"
                  className="mt-1"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <Label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900"
                >
                  Category
                </Label>
                <select
                  id="category"
                  {...register("category")}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <Label
                  htmlFor="location"
                  className="text-sm font-medium text-gray-900"
                >
                  Location
                </Label>
                <Input
                  id="location"
                  {...register("location")}
                  placeholder="Type location"
                  className="mt-1"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              {/* Place Offers */}
              <div>
                <Label className="text-sm font-medium text-gray-900">
                  Place Offers
                </Label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {PLACE_OFFERS.map((offer) => (
                    <div key={offer} className="flex items-center space-x-2">
                      <Switch
                        id={offer}
                        checked={
                          watchedValues.placeOffers?.includes(offer) || false
                        }
                        onCheckedChange={() => togglePlaceOffer(offer)}
                      />
                      <Label htmlFor={offer} className="text-sm text-gray-700">
                        {offer}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details Editor - Full Width */}
          <div className="mt-8">
            <Label className="text-sm font-medium text-gray-900">Details</Label>
            <div className="mt-2">
              <ContentEditor
                value={watchedValues.details || ""}
                onChange={(value) => setValue("details", value)}
                placeholder="Write detailed description of the attraction..."
                className="min-h-[200px]"
              />
            </div>
            {errors.details && (
              <p className="text-red-500 text-sm mt-1">
                {errors.details.message}
              </p>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6 py-2"
            >
              Cancel
            </Button>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="px-6 py-2 text-gray-600 hover:text-red-600 hover:border-red-300"
              >
                Delete Attraction
              </Button>
              <Button
                type="submit"
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white"
              >
                Post Attraction
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==================== Add Attraction Dialog Component End ====================
