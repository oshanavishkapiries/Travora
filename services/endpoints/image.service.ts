import axiosClient from "@/services/axios.client";
import { DeleteImageResponse, UploadImageResponse } from "@/types/image-api-type";

// Upload images using form-data
export const uploadImages = async (
  files: File[]
): Promise<UploadImageResponse> => {
  const formData = new FormData();

  // Add all files to form data
  files.forEach((file) => {
    formData.append("images", file);
  });

  const response = await axiosClient.post("/api/v1/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

// Delete image by public ID
export const deleteImage = async (
  publicId: string
): Promise<DeleteImageResponse> => {
  const response = await axiosClient.delete("/api/v1/upload/delete", {
    data: { publicId },
  });

  return response.data;
};

// Upload single image (convenience function)
export const uploadSingleImage = async (
  file: File
): Promise<UploadImageResponse> => {
  return uploadImages([file]);
};

// Delete multiple images (convenience function)
export const deleteMultipleImages = async (
  publicIds: string[]
): Promise<DeleteImageResponse[]> => {
  const deletePromises = publicIds.map((publicId) => deleteImage(publicId));
  return Promise.all(deletePromises);
};
