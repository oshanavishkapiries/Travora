import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  uploadImages,
  uploadSingleImage,
  deleteImage,
  deleteMultipleImages,
} from "@/services/endpoints/image.service";
import { toast } from "sonner";
import {
  DeleteImageResponse,
  UploadImageResponse,
} from "@/types/image-api-type";

// Upload multiple images hook
export const useUploadImages = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadImages,
    onSuccess: (response: UploadImageResponse) => {
      // Invalidate any image-related queries if they exist
      queryClient.invalidateQueries({ queryKey: ["images"] });

      // Show success message
      if (response.data.totalUploaded > 0) {
        toast.success(
          `Successfully uploaded ${response.data.totalUploaded} image(s)`
        );
      }

      // Show warning for failed uploads
      if (response.data.totalFailed > 0) {
        toast.warning(`${response.data.totalFailed} image(s) failed to upload`);
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to upload images";
      toast.error(errorMessage);
    },
  });
};

// Upload single image hook
export const useUploadSingleImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadSingleImage,
    onSuccess: (response: UploadImageResponse) => {
      // Invalidate any image-related queries if they exist
      queryClient.invalidateQueries({ queryKey: ["images"] });

      // Show success message
      if (response.data.totalUploaded > 0) {
        toast.success("Image uploaded successfully");
      }

      // Show warning for failed uploads
      if (response.data.totalFailed > 0) {
        toast.warning("Image failed to upload");
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to upload image";
      toast.error(errorMessage);
    },
  });
};

// Delete single image hook
export const useDeleteImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteImage,
    onSuccess: (response: DeleteImageResponse) => {
      // Invalidate any image-related queries if they exist
      queryClient.invalidateQueries({ queryKey: ["images"] });

      // Show success message
      toast.success("Image deleted successfully");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete image";
      toast.error(errorMessage);
    },
  });
};

// Delete multiple images hook
export const useDeleteMultipleImages = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMultipleImages,
    onSuccess: (responses: DeleteImageResponse[]) => {
      // Invalidate any image-related queries if they exist
      queryClient.invalidateQueries({ queryKey: ["images"] });

      // Show success message
      const successCount = responses.filter((r) => r.status === 200).length;
      toast.success(`Successfully deleted ${successCount} image(s)`);

      // Show warning for failed deletions
      const failedCount = responses.length - successCount;
      if (failedCount > 0) {
        toast.warning(`${failedCount} image(s) failed to delete`);
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete images";
      toast.error(errorMessage);
    },
  });
};

// Utility hook for image operations with progress tracking
export const useImageOperations = () => {
  const uploadImagesMutation = useUploadImages();
  const uploadSingleImageMutation = useUploadSingleImage();
  const deleteImageMutation = useDeleteImage();
  const deleteMultipleImagesMutation = useDeleteMultipleImages();

  return {
    // Upload operations
    uploadImages: uploadImagesMutation.mutate,
    uploadSingleImage: uploadSingleImageMutation.mutate,
    uploadImagesAsync: uploadImagesMutation.mutateAsync,
    uploadSingleImageAsync: uploadSingleImageMutation.mutateAsync,

    // Delete operations
    deleteImage: deleteImageMutation.mutate,
    deleteMultipleImages: deleteMultipleImagesMutation.mutate,
    deleteImageAsync: deleteImageMutation.mutateAsync,
    deleteMultipleImagesAsync: deleteMultipleImagesMutation.mutateAsync,

    // Loading states
    isUploading:
      uploadImagesMutation.isPending || uploadSingleImageMutation.isPending,
    isDeleting:
      deleteImageMutation.isPending || deleteMultipleImagesMutation.isPending,
    isProcessing:
      uploadImagesMutation.isPending ||
      uploadSingleImageMutation.isPending ||
      deleteImageMutation.isPending ||
      deleteMultipleImagesMutation.isPending,

    // Error states
    uploadError: uploadImagesMutation.error || uploadSingleImageMutation.error,
    deleteError:
      deleteImageMutation.error || deleteMultipleImagesMutation.error,

    // Reset functions
    resetUpload: () => {
      uploadImagesMutation.reset();
      uploadSingleImageMutation.reset();
    },
    resetDelete: () => {
      deleteImageMutation.reset();
      deleteMultipleImagesMutation.reset();
    },
    resetAll: () => {
      uploadImagesMutation.reset();
      uploadSingleImageMutation.reset();
      deleteImageMutation.reset();
      deleteMultipleImagesMutation.reset();
    },
  };
};
