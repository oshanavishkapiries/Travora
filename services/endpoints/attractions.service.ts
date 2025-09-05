import type {
  CreateAttractionData,
  GetAttractionsParams,
  UpdateAttractionData,
  AttractionsResponse,
  AttractionResponse,
  DeleteAttractionResponse,
} from "@/types/attraction-api-type";
import axiosClient from "@/services/axios.client";

export const getAttractions = async (
  params: GetAttractionsParams
): Promise<AttractionsResponse> => {
  const response = await axiosClient.get("/api/v1/attractions", { params });
  return response.data;
};

export const getAttractionById = async (
  id: string
): Promise<AttractionResponse> => {
  const response = await axiosClient.get(`/api/v1/attractions/${id}`);
  return response.data;
};

export const createAttraction = async (
  attractionData: CreateAttractionData
): Promise<AttractionResponse> => {
  const response = await axiosClient.post(
    "/api/v1/attractions",
    attractionData
  );
  return response.data;
};

export const updateAttraction = async (
  id: string,
  attractionData: UpdateAttractionData
): Promise<AttractionResponse> => {
  const response = await axiosClient.put(
    `/api/v1/attractions/${id}`,
    attractionData
  );
  return response.data;
};

export const deleteAttraction = async (
  id: string
): Promise<DeleteAttractionResponse> => {
  const response = await axiosClient.delete(`/api/v1/attractions/${id}`);
  return response.data;
};
