import { NextRequest } from "next/server";
import { ok, fail } from "@/server/utils/http";
import { requireAdmin } from "@/server/utils/roleAuth";
import { GalleryService } from "@/server/services/gallery.service";

// GET /api/v1/gallery/[id] - Get gallery item by ID
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;

    if (!id) {
      return fail("validation_error", 400, {
        message: "Gallery item ID is required",
      });
    }

    const item = await GalleryService.getGalleryItemById(id);

    if (!item) {
      return fail("not_found", 404, {
        message: "Gallery item not found",
        id,
      });
    }

    return ok(item, "Gallery item fetched successfully");
  } catch (error) {
    console.error("Error fetching gallery item:", error);
    return fail("server_error", 500, {
      message: "Failed to fetch gallery item",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// PUT /api/v1/gallery/[id] - Update gallery item
export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    // Check admin authentication
    const authResult = await requireAdmin(req);
    if (typeof authResult === "object" && "error" in authResult) {
      return authResult;
    }

    const { id } = await params;

    if (!id) {
      return fail("validation_error", 400, {
        message: "Gallery item ID is required",
      });
    }

    // Parse request body
    const body = await req.json();
    const { src, location } = body;

    // Validate that at least one field is provided
    if (!src && !location) {
      return fail("validation_error", 400, {
        message:
          "At least one field (src or location) must be provided for update",
      });
    }

    // Check if item exists
    const existingItem = await GalleryService.getGalleryItemById(id);
    if (!existingItem) {
      return fail("not_found", 404, {
        message: "Gallery item not found",
        id,
      });
    }

    // Update gallery item
    const updatedItem = await GalleryService.updateGalleryItem(id, {
      src,
      location,
    });

    if (!updatedItem) {
      return fail("update_failed", 500, {
        message: "Failed to update gallery item",
        id,
      });
    }

    return ok(updatedItem, "Gallery item updated successfully");
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return fail("server_error", 500, {
      message: "Failed to update gallery item",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// DELETE /api/v1/gallery/[id] - Delete gallery item
export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    // Check admin authentication
    const authResult = await requireAdmin(req);
    if (typeof authResult === "object" && "error" in authResult) {
      return authResult;
    }

    const { id } = await params;

    if (!id) {
      return fail("validation_error", 400, {
        message: "Gallery item ID is required",
      });
    }

    // Check if item exists
    const existingItem = await GalleryService.getGalleryItemById(id);
    if (!existingItem) {
      return fail("not_found", 404, {
        message: "Gallery item not found",
        id,
      });
    }

    // Delete gallery item
    const deleted = await GalleryService.deleteGalleryItem(id);

    if (!deleted) {
      return fail("delete_failed", 500, {
        message: "Failed to delete gallery item",
        id,
      });
    }

    return ok({ id }, "Gallery item deleted successfully");
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return fail("server_error", 500, {
      message: "Failed to delete gallery item",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Handle unsupported methods
export const POST = () => {
  return fail("method_not_allowed", 405, {
    message:
      "POST method not allowed. Use POST /api/v1/gallery to create new gallery items.",
  });
};
