import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import {
  getAttractions,
  getAttractionById,
  createAttraction,
  updateAttraction,
  deleteAttraction,
} from "@/services/endpoints/attractions.service";
import type {
  CreateAttractionData,
  UpdateAttractionData,
  GetAttractionsParams,
} from "@/types/attraction-api-type";
import { toast } from "sonner";

export const useGetAttractions = (params: GetAttractionsParams) => {
  return useQuery({
    queryKey: ["attractions", params],
    queryFn: () => getAttractions(params),
  });
};

export const useGetAttractionById = (id: string) => {
  return useQuery({
    queryKey: ["attraction", id],
    queryFn: () => getAttractionById(id),
    enabled: !!id,
  });
};

export const useCreateAttraction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAttraction,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["attractions"] });
      toast.success("Attraction created successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to create attraction"
      );
    },
  });
};

export const useUpdateAttraction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      attractionData,
    }: {
      id: string;
      attractionData: UpdateAttractionData;
    }) => updateAttraction(id, attractionData),
    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({ queryKey: ["attractions"] });
      queryClient.invalidateQueries({ queryKey: ["attraction", variables.id] });
      toast.success("Attraction updated successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update attraction"
      );
    },
  });
};

export const useDeleteAttraction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAttraction,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["attractions"] });
      toast.success("Attraction deleted successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to delete attraction"
      );
    },
  });
};
