import { ok, fail } from "@/server/utils/http";
import {
  listAttractions,
  createAttraction,
} from "@/server/services/attraction.service";
import { requireAdmin } from "@/server/utils/roleAuth";
import { NextRequest } from "next/server";
import { db } from "@/server/db";
import { attractionSchema } from "@/validations/attractionSchema";

export const GET = async (req: NextRequest) => {
  await db; // ensure connected
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const search = searchParams.get("search") || undefined;

  const result = await listAttractions(page, pageSize, search);
  return ok(result);
};

export const POST = async (req: NextRequest) => {
  await db; // ensure connected
  const user = await requireAdmin(req);
  if (typeof user === "object" && "error" in user) {
    return user; // Return error response
  }

  const json = await req.json().catch(() => null);
  const parsed = attractionSchema.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());

  const attraction = await createAttraction(parsed.data);
  return ok(attraction, "Attraction created successfully", 201);
};
