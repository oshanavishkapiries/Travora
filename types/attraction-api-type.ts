export interface Attraction {
  _id: string;
  title: string;
  location: string;
  thumbnail: string;
  images: string[];
  category: string;
  placeOffers: string[];
  details: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAttractionData {
  title: string;
  location: string;
  thumbnail: string;
  images: string[];
  category: string;
  placeOffers: string[];
  details: string;
}

export interface UpdateAttractionData {
  title: string;
  location: string;
  thumbnail: string;
  images: string[];
  category: string;
  placeOffers: string[];
  details: string;
}

export interface GetAttractionsParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export interface AttractionsResponse {
  success: boolean;
  data: {
    attractions: Attraction[];
    page: number;
    pageSize: number;
    pagination: {
      total: number;
      totalPages: number;
      currentPage: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
}

export interface AttractionResponse {
  success: boolean;
  data: Attraction;
}

export interface DeleteAttractionResponse {
  success: boolean;
  data: {
    message: string;
  };
}
