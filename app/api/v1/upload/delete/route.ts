import { v2 as cloudinary } from "cloudinary";
import { ok, fail } from "@/server/utils/http";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const DELETE = async (req: Request) => {
  try {
    // Check if Cloudinary is configured
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return fail("cloudinary_not_configured", 500, {
        message:
          "Cloudinary configuration is missing. Please check your environment variables.",
      });
    }

    // Parse the request body
    const body = await req.json();
    const { publicId } = body;

    // Check if publicId is provided
    if (!publicId) {
      return fail("missing_public_id", 400, {
        message: "Public ID is required to delete an image.",
      });
    }

    // Delete the image from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    if (result.result === "ok") {
      return ok({
        message: "Image deleted successfully",
        publicId,
        result: result.result,
      });
    } else {
      return fail("delete_failed", 500, {
        message: "Failed to delete image from Cloudinary",
        publicId,
        result: result.result,
      });
    }
  } catch (error) {
    console.error("Delete error:", error);
    return fail("server_error", 500, {
      message: "An unexpected error occurred during deletion",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Handle unsupported methods
export const GET = () => {
  return fail("method_not_allowed", 405, {
    message: "GET method not allowed. Use DELETE to remove images.",
  });
};

export const POST = () => {
  return fail("method_not_allowed", 405, {
    message: "POST method not allowed. Use DELETE to remove images.",
  });
};

export const PUT = () => {
  return fail("method_not_allowed", 405, {
    message: "PUT method not allowed. Use DELETE to remove images.",
  });
};
