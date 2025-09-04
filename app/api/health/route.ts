import { ok } from "@/server/utils/http";

export const GET = async () => {
  return ok({ status: "healthy", timestamp: new Date().toISOString() });
};
