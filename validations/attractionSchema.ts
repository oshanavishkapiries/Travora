// ==================== Attraction Validation Schema Start ====================
import { z } from "zod";

export const attractionSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  location: z
    .string()
    .min(1, "Location is required")
    .max(200, "Location must be less than 200 characters"),
  images: z
    .array(z.string().url("Invalid image URL"))
    .min(1, "At least one image is required")
    .max(4, "Maximum 4 images allowed"),
  category: z.string().min(1, "Category is required"),
  placeOffers: z
    .array(z.string())
    .min(1, "At least one place offer must be selected"),
  details: z
    .string()
    .min(10, "Details must be at least 10 characters")
    .max(5000, "Details must be less than 5000 characters"),
});

export type AttractionFormData = z.infer<typeof attractionSchema>;

// ==================== Attraction Validation Schema End ====================
