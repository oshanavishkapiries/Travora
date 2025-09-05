import { Gallery } from "../models/gallery.model";

export interface GalleryItem {
  _id: string;
  src: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateGalleryItemData {
  src: string;
  location: string;
}

export interface UpdateGalleryItemData {
  src?: string;
  location?: string;
}

export class GalleryService {
  // Get all gallery items
  static async getAllGalleryItems(): Promise<GalleryItem[]> {
    try {
      const items = await Gallery.find().sort({ createdAt: -1 });
      return items;
    } catch (error) {
      console.error("Error fetching gallery items:", error);
      throw new Error("Failed to fetch gallery items");
    }
  }

  // Get gallery item by ID
  static async getGalleryItemById(id: string): Promise<GalleryItem | null> {
    try {
      const item = await Gallery.findById(id);
      return item;
    } catch (error) {
      console.error("Error fetching gallery item:", error);
      throw new Error("Failed to fetch gallery item");
    }
  }

  // Create new gallery item
  static async createGalleryItem(
    data: CreateGalleryItemData
  ): Promise<GalleryItem> {
    try {
      const newItem = new Gallery(data);
      const savedItem = await newItem.save();
      return savedItem;
    } catch (error) {
      console.error("Error creating gallery item:", error);
      throw new Error("Failed to create gallery item");
    }
  }

  // Update gallery item
  static async updateGalleryItem(
    id: string,
    data: UpdateGalleryItemData
  ): Promise<GalleryItem | null> {
    try {
      const updatedItem = await Gallery.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
      return updatedItem;
    } catch (error) {
      console.error("Error updating gallery item:", error);
      throw new Error("Failed to update gallery item");
    }
  }

  // Delete gallery item
  static async deleteGalleryItem(id: string): Promise<boolean> {
    try {
      const result = await Gallery.findByIdAndDelete(id);
      return !!result;
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      throw new Error("Failed to delete gallery item");
    }
  }
}
