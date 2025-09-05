import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {
  GalleryService,
  GalleryItem,
  CreateGalleryItemData,
  UpdateGalleryItemData,
} from "../endpoints/gallery.service";
import { toast } from "sonner";

export const useGetGalleryItems = () => {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: () => GalleryService.getAllGalleryItems(),
  });
};

export const useGetGalleryItemById = (id: string) => {
  return useQuery({
    queryKey: ["gallery", id],
    queryFn: () => GalleryService.getGalleryItemById(id),
    enabled: !!id,
  });
};

export const useCreateGalleryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateGalleryItemData) =>
      GalleryService.createGalleryItem(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success("Gallery item created successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to create gallery item"
      );
    },
  });
};

export const useUpdateGalleryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateGalleryItemData }) =>
      GalleryService.updateGalleryItem(id, data),
    onSuccess: (response, variables) => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      queryClient.invalidateQueries({ queryKey: ["gallery", variables.id] });
      toast.success("Gallery item updated successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to update gallery item"
      );
    },
  });
};

export const useDeleteGalleryItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => GalleryService.deleteGalleryItem(id),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["gallery"] });
      toast.success("Gallery item deleted successfully");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to delete gallery item"
      );
    },
  });
};
