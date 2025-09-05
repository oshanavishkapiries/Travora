// Types for image operations
export interface UploadImageResponse {
    status: number;
    message: string;
    data: {
      message: string;
      successful: Array<{
        success: boolean;
        originalName: string;
        url: string;
        publicId: string;
        size: number;
      }>;
      failed?: Array<{
        success: boolean;
        originalName: string;
        error: string;
      }>;
      totalUploaded: number;
      totalFailed: number;
    };
  }
  
  export interface DeleteImageResponse {
    status: number;
    message: string;
    data: {
      message: string;
      publicId: string;
      result: string;
    };
  }
  
  export interface DeleteImageRequest {
    publicId: string;
  }
  