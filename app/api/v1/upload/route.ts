import { v2 as cloudinary } from "cloudinary";
import { ok, fail } from "@/server/utils/http";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req: Request) => {
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

    // Parse the form data
    const formData = await req.formData();
    const files = formData.getAll("images") as File[];

    // Check if files are provided
    if (!files || files.length === 0) {
      return fail("no_files_provided", 400, {
        message: "No images provided. Please upload at least one image.",
      });
    }

    // Validate file types
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/webp",
      "image/svg+xml",
    ];
    const invalidFiles = files.filter(
      (file) => !allowedTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      return fail("invalid_file_type", 400, {
        message: `Invalid file type(s). Allowed types: ${allowedTypes.join(
          ", "
        )}`,
        invalidFiles: invalidFiles.map((file) => file.name),
      });
    }

    // Upload files to Cloudinary
    const uploadPromises = files.map(async (file) => {
      try {
        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Cloudinary
        const result = await new Promise<any>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                resource_type: "auto",
                folder: "travora/attractions", // Organize uploads in a folder
                transformation: [{ quality: "auto" }, { fetch_format: "auto" }],
              },
              (error: any, result: any) => {
                if (error) reject(error);
                else resolve(result);
              }
            )
            .end(buffer);
        });

        return {
          success: true,
          originalName: file.name,
          url: (result as any).secure_url,
          publicId: (result as any).public_id,
          size: file.size,
        };
      } catch (error) {
        return {
          success: false,
          originalName: file.name,
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    });

    // Wait for all uploads to complete
    const results = await Promise.all(uploadPromises);

    // Separate successful and failed uploads
    const successfulUploads = results.filter((result) => result.success);
    const failedUploads = results.filter((result) => !result.success);

    // If all uploads failed
    if (successfulUploads.length === 0) {
      return fail("upload_failed", 500, {
        message: "All image uploads failed",
        errors: failedUploads,
      });
    }

    // Return results
    return ok({
      message: `Successfully uploaded ${successfulUploads.length} image(s)`,
      successful: successfulUploads,
      failed: failedUploads.length > 0 ? failedUploads : undefined,
      totalUploaded: successfulUploads.length,
      totalFailed: failedUploads.length,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return fail("server_error", 500, {
      message: "An unexpected error occurred during upload",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Handle unsupported methods
export const GET = () => {
  return fail("method_not_allowed", 405, {
    message: "GET method not allowed. Use POST to upload images.",
  });
};

export const PUT = () => {
  return fail("method_not_allowed", 405, {
    message: "PUT method not allowed. Use POST to upload images.",
  });
};

export const DELETE = () => {
  return fail("method_not_allowed", 405, {
    message: "DELETE method not allowed. Use POST to upload images.",
  });
};
