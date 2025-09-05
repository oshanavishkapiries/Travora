// ==================== Add Attraction Dialog Component Start ====================
"use client";

import React, { useState, useEffect } from "react";
import { X, Camera, Upload } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelector } from "@/components/ui/multi-selector";
import ContentEditor from "@/components/editor/ContentEditor";
import {
  attractionSchema,
  type AttractionFormData,
} from "@/validations/attractionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CATEGORIES, PLACE_OFFERS } from "@/data/attractionsData";
import {
  useUploadSingleImage,
  useDeleteImage,
} from "@/services/slices/imageSlices";
import {
  useCreateAttraction,
  useUpdateAttraction,
} from "@/services/slices/attractionsSlice";
import type { UploadImageResponse } from "@/types/image-api-type";

interface AddAttractionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editData?: {
    _id: string;
    title: string;
    location: string;
    thumbnail: string;
    images: string[];
    category: string;
    placeOffers: string[];
    details: string;
  } | null;
}

export default function AddAttractionDialog({
  isOpen,
  onClose,
  editData,
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
      thumbnail: "",
      images: Array(4).fill(""),
      category: "Cultural",
      placeOffers: [],
      details: "",
    },
  });

  const watchedValues = watch();

  // Image upload and delete hooks
  const uploadImageMutation = useUploadSingleImage();
  const deleteImageMutation = useDeleteImage();

  // Reset form when editData changes
  useEffect(() => {
    if (editData) {
      const imagesArray = editData.images
        ? [...editData.images, ...Array(4 - editData.images.length).fill("")]
        : Array(4).fill("");
      reset({
        title: editData.title || "",
        location: editData.location || "",
        thumbnail: editData.thumbnail || "",
        images: imagesArray,
        category: editData.category || "Cultural",
        placeOffers: editData.placeOffers || [],
        details: editData.details || "",
      });
    } else {
      reset({
        title: "",
        location: "",
        thumbnail: "",
        images: Array(4).fill(""),
        category: "Cultural",
        placeOffers: [],
        details: "",
      });
    }
  }, [editData, reset]);

  // Force re-render of Select component when category changes
  const [selectKey, setSelectKey] = useState(0);
  useEffect(() => {
    setSelectKey((prev) => prev + 1);
  }, [watchedValues.category]);

  // Attraction creation and update hooks
  const createAttractionMutation = useCreateAttraction();
  const updateAttractionMutation = useUpdateAttraction();

  const isEditMode = !!editData;

  // State to track uploaded image public IDs for deletion
  const [uploadedImageIds, setUploadedImageIds] = useState<{
    thumbnail?: string;
    images: (string | undefined)[];
  }>({
    images: Array(4).fill(undefined),
  });

  // Handle thumbnail upload to Cloudinary
  const handleThumbnailUpload = async (file: File) => {
    uploadImageMutation.mutate(file, {
      onSuccess: (response: UploadImageResponse) => {
        if (response.data.successful.length > 0) {
          const uploadedImage = response.data.successful[0];
          setValue("thumbnail", uploadedImage.url);
          setUploadedImageIds((prev) => ({
            ...prev,
            thumbnail: uploadedImage.publicId,
          }));
        }
      },
    });
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async (index: number, file: File) => {
    uploadImageMutation.mutate(file, {
      onSuccess: (response: UploadImageResponse) => {
        if (response.data.successful.length > 0) {
          const uploadedImage = response.data.successful[0];
          const newImages = [...watchedValues.images];
          newImages[index] = uploadedImage.url;
          setValue("images", newImages);

          setUploadedImageIds((prev) => ({
            ...prev,
            images: prev.images.map((id, i) =>
              i === index ? uploadedImage.publicId : id
            ),
          }));
        }
      },
    });
  };

  // Handle thumbnail deletion from Cloudinary
  const handleThumbnailDelete = () => {
    if (uploadedImageIds.thumbnail) {
      deleteImageMutation.mutate(uploadedImageIds.thumbnail, {
        onSuccess: () => {
          setValue("thumbnail", "");
          setUploadedImageIds((prev) => ({
            ...prev,
            thumbnail: undefined,
          }));
        },
      });
    } else {
      // If no publicId, just clear the form value
      setValue("thumbnail", "");
    }
  };

  // Handle image deletion from Cloudinary
  const handleImageDelete = (index: number) => {
    const publicId = uploadedImageIds.images[index];
    if (publicId) {
      deleteImageMutation.mutate(publicId, {
        onSuccess: () => {
          const newImages = [...watchedValues.images];
          newImages[index] = "";
          setValue("images", newImages);

          setUploadedImageIds((prev) => ({
            ...prev,
            images: prev.images.map((id, i) => (i === index ? undefined : id)),
          }));
        },
      });
    } else {
      // If no publicId, just clear the form value
      const newImages = [...watchedValues.images];
      newImages[index] = "";
      setValue("images", newImages);
    }
  };

  // Cleanup function to delete uploaded images when dialog closes
  const cleanupUploadedImages = () => {
    // Delete thumbnail if exists
    if (uploadedImageIds.thumbnail) {
      deleteImageMutation.mutate(uploadedImageIds.thumbnail);
    }

    // Delete additional images if they exist
    uploadedImageIds.images.forEach((publicId) => {
      if (publicId) {
        deleteImageMutation.mutate(publicId);
      }
    });

    // Reset the uploaded image IDs state
    setUploadedImageIds({
      images: Array(4).fill(undefined),
    });
  };

  // Handle form submission
  const onSubmitForm = (data: AttractionFormData) => {
    // Filter out empty images from the array
    const filteredImages = data.images.filter((image) => image.trim() !== "");

    const attractionData = {
      ...data,
      images: filteredImages,
    };

    if (isEditMode && editData) {
      updateAttractionMutation.mutate(
        { id: editData._id, attractionData },
        {
          onSuccess: () => {
            reset();
            setUploadedImageIds({
              images: Array(4).fill(undefined),
            });
            onClose();
          },
        }
      );
    } else {
      createAttractionMutation.mutate(attractionData, {
        onSuccess: () => {
          reset();
          setUploadedImageIds({
            images: Array(4).fill(undefined),
          });
          onClose();
        },
      });
    }
  };

  // Handle dialog close with cleanup
  const handleClose = () => {
    cleanupUploadedImages();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="flex items-center justify-between p-3 px-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isEditMode ? "Edit Attraction" : "Add Attraction"}
            </h2>
            <p className="text-gray-600 mt-1">
              {isEditMode
                ? "Update attraction details below"
                : "Add Attraction with filling these details"}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit(onSubmitForm)} className="p-6 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Thumbnail Upload */}
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-2 block">
                  Thumbnail Image
                </Label>
                <div className="relative">
                  <div className="aspect-video lg:aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    {watchedValues.thumbnail ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={watchedValues.thumbnail}
                          alt="Thumbnail"
                          fill
                          className="object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={handleThumbnailDelete}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                          disabled={
                            uploadImageMutation.isPending ||
                            deleteImageMutation.isPending
                          }
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        {uploadImageMutation.isPending ? (
                          <>
                            <Upload className="h-8 w-8 text-blue-400 mx-auto mb-2 animate-pulse" />
                            <p className="text-xs text-blue-500">
                              Uploading...
                            </p>
                          </>
                        ) : (
                          <>
                            <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-xs text-gray-500">
                              Upload Thumbnail
                            </p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleThumbnailUpload(file);
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={
                      uploadImageMutation.isPending ||
                      deleteImageMutation.isPending
                    }
                  />
                </div>
              </div>

              {errors.thumbnail && (
                <p className="text-red-500 text-sm">
                  {errors.thumbnail?.message}
                </p>
              )}
            </div>

            {/* Right Column - Form Fields */}
            <div className="space-y-4">
              {/* Additional Images Grid */}
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-2 block">
                  Additional Images (4)
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {watchedValues.images?.map((image: string, index: number) => (
                    <div key={index} className="relative">
                      <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                        {image ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={image}
                              alt={`Image ${index + 1}`}
                              fill
                              className="object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => handleImageDelete(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                              disabled={
                                uploadImageMutation.isPending ||
                                deleteImageMutation.isPending
                              }
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ) : (
                          <div className="text-center">
                            {uploadImageMutation.isPending ? (
                              <>
                                <Upload className="h-8 w-8 text-blue-400 mx-auto mb-2 animate-pulse" />
                                <p className="text-xs text-blue-500">
                                  Uploading...
                                </p>
                              </>
                            ) : (
                              <>
                                <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                <p className="text-xs text-gray-500">
                                  Upload Image
                                </p>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleImageUpload(index, file);
                          }
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        disabled={
                          uploadImageMutation.isPending ||
                          deleteImageMutation.isPending
                        }
                      />
                      {errors.images?.[index] && (
                        <p className="text-red-500 text-sm">
                          {errors.images?.[index]?.message}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
            <Select
              key={selectKey}
              value={watchedValues.category || ""}
              onValueChange={(value: string) => setValue("category", value)}
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <div className="mt-2">
              <MultiSelector
                options={PLACE_OFFERS.map((offer) => ({
                  label: offer,
                  value: offer,
                }))}
                selected={watchedValues.placeOffers || []}
                onChange={(selected) => setValue("placeOffers", selected)}
                placeholder="Select place offers..."
                emptyIndicator={
                  <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                    No results found.
                  </p>
                }
              />
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
              onClick={handleClose}
              className="px-6 py-2"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white"
              disabled={
                createAttractionMutation.isPending ||
                updateAttractionMutation.isPending ||
                uploadImageMutation.isPending ||
                deleteImageMutation.isPending
              }
            >
              {createAttractionMutation.isPending ||
              updateAttractionMutation.isPending
                ? isEditMode
                  ? "Updating..."
                  : "Creating..."
                : isEditMode
                ? "Update Attraction"
                : "Post Attraction"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==================== Add Attraction Dialog Component End ====================
