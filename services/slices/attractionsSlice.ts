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

export const useGetAttractions = (
  params: Omit<GetAttractionsParams, "page" | "pageSize">
) => {
  return useInfiniteQuery({
    queryKey: ["attractions", params],
    queryFn: ({ pageParam = 1 }) =>
      getAttractions({ ...params, page: pageParam, pageSize: 10 }),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages?.length;
      const totalPages = Math.ceil(lastPage?.data?.attractions?.length / 10);
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
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
