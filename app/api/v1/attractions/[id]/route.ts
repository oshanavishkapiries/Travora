import { ok, fail } from "@/server/utils/http";
import {
  getAttraction,
  updateAttraction,
  deleteAttraction,
} from "@/server/services/attraction.service";
import { requireAdmin } from "@/server/utils/roleAuth";
import { NextRequest } from "next/server";
import { db } from "@/server/db";
import { attractionSchema } from "@/validations/attractionSchema";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await db; // ensure connected
  const { id } = await params;
  const attraction = await getAttraction(id);
  if (!attraction) return fail("attraction_not_found", 404);
  return ok(attraction);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await db; // ensure connected
  const user = await requireAdmin(req);
  if (typeof user === "object" && "error" in user) {
    return user; // Return error response
  }

  const json = await req.json().catch(() => null);
  const parsed = attractionSchema.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());

  const { id } = await params;
  const attraction = await updateAttraction(id, parsed.data);
  if (!attraction) return fail("attraction_not_found", 404);
  return ok(attraction);
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await db; // ensure connected
  const user = await requireAdmin(req);
  if (typeof user === "object" && "error" in user) {
    return user; // Return error response
  }

  const { id } = await params;
  const attraction = await deleteAttraction(id);
  if (!attraction) return fail("attraction_not_found", 404);
  return ok({ message: "Attraction deleted successfully" });
};
