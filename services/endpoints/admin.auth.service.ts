import axiosClient from "@/services/axios.client";
import { AdminLoginData } from "@/types/admin-auth-api-type";

export const adminLogin = async (loginData: AdminLoginData) => {
  const response = await axiosClient.post("/api/v1/auth/login", loginData);
  return response.data;
};
