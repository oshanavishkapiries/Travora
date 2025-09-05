import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminLogin } from "@/services/endpoints/admin.auth.service";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useAdminLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: adminLogin,
    onSuccess: (response) => {
      console.log(response);
      Cookies.set("authToken", response.data.token, { expires: 7 }); // Expires in 7 days

      queryClient.invalidateQueries({ queryKey: ["adminAuth"] });

      toast.success("Login successful! Welcome back.");

      router.push("/admin");
    },
    onError: (error: any) => {
      const errorMessage =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    },
  });
};

export const useAdminAuth = () => {
  const token = Cookies.get("authToken");
  return {
    isAuthenticated: !!token,
    token,
  };
};

export const useAdminLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => {
      Cookies.remove("authToken");
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminAuth"] });
      toast.success("Logged out successfully");
      router.push("/admin/login");
    },
  });
};
