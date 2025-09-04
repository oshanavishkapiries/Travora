import { NextRequest } from "next/server";
import { ok, fail } from "@/server/utils/http";
import { requireAdmin } from "@/server/utils/roleAuth";
import { GalleryService } from "@/server/services/gallery.service";

// GET /api/v1/gallery - Get all gallery items
export const GET = async () => {
  try {
    const items = await GalleryService.getAllGalleryItems();
    return ok(items, "Gallery items fetched successfully");
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    return fail("server_error", 500, {
      message: "Failed to fetch gallery items",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// POST /api/v1/gallery - Create new gallery item
export const POST = async (req: NextRequest) => {
  try {
    // Check admin authentication
    const authResult = await requireAdmin(req);
    if (typeof authResult === "object" && "error" in authResult) {
      return authResult;
    }

    // Parse request body
    const body = await req.json();
    const { src, location } = body;

    // Validate required fields
    if (!src || !location) {
      return fail("validation_error", 400, {
        message: "Both 'src' and 'location' are required",
        missing: {
          src: !src,
          location: !location,
        },
      });
    }

    // Create gallery item
    const newItem = await GalleryService.createGalleryItem({ src, location });

    return ok(newItem, "Gallery item created successfully");
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return fail("server_error", 500, {
      message: "Failed to create gallery item",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Handle unsupported methods
export const PUT = () => {
  return fail("method_not_allowed", 405, {
    message:
      "PUT method not allowed. Use POST to create gallery items or PUT /api/v1/gallery/[id] to update specific items.",
  });
};

export const DELETE = () => {
  return fail("method_not_allowed", 405, {
    message:
      "DELETE method not allowed. Use DELETE /api/v1/gallery/[id] to delete specific items.",
  });
};
