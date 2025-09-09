import axiosClient from "../axios.client";

export interface GalleryItem {
  _id: string;
  src: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGalleryItemData {
  src: string;
  location: string;
}

export interface UpdateGalleryItemData {
  src?: string;
  location?: string;
}

export interface GalleryApiResponse {
  status: number;
  message: string;
  data: GalleryItem | GalleryItem[];
}

export class GalleryService {
  // Get all gallery items
  static async getAllGalleryItems(): Promise<GalleryApiResponse> {
    try {
      const response = await axiosClient.get("/api/v1/gallery");
      return response.data;
    } catch (error: any) {
      console.error("Error fetching gallery items:", error);
      throw (
        error.response?.data || { message: "Failed to fetch gallery items" }
      );
    }
  }

  // Get gallery item by ID
  static async getGalleryItemById(id: string): Promise<GalleryApiResponse> {
    try {
      const response = await axiosClient.get(`/api/v1/gallery/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching gallery item:", error);
      throw error.response?.data || { message: "Failed to fetch gallery item" };
    }
  }

  // Create new gallery item
  static async createGalleryItem(
    data: CreateGalleryItemData
  ): Promise<GalleryApiResponse> {
    try {
      const response = await axiosClient.post("/api/v1/gallery", data);
      return response.data;
    } catch (error: any) {
      console.error("Error creating gallery item:", error);
      throw (
        error.response?.data || { message: "Failed to create gallery item" }
      );
    }
  }

  // Update gallery item
  static async updateGalleryItem(
    id: string,
    data: UpdateGalleryItemData
  ): Promise<GalleryApiResponse> {
    try {
      const response = await axiosClient.put(`/api/v1/gallery/${id}`, data);
      return response.data;
    } catch (error: any) {
      console.error("Error updating gallery item:", error);
      throw (
        error.response?.data || { message: "Failed to update gallery item" }
      );
    }
  }

  // Delete gallery item
  static async deleteGalleryItem(id: string): Promise<GalleryApiResponse> {
    try {
      const response = await axiosClient.delete(`/api/v1/gallery/${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Error deleting gallery item:", error);
      throw (
        error.response?.data || { message: "Failed to delete gallery item" }
      );
    }
  }
}
