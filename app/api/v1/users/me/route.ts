import { ok, fail } from "@/server/utils/http";
import { findById } from "@/server/services/user.service";
import { authenticate } from "@/server/utils/auth";
import { NextRequest } from "next/server";
import { db } from "@/server/db";

export const GET = async (req: NextRequest) => {
  await db; // ensure connected
  const user = await authenticate(req);
  if (!user) return fail("unauthorized", 401);

  const userData = await findById(user.id);
  if (!userData) return fail("user_not_found", 404);

  return ok({ id: userData._id, email: userData.email, name: userData.name });
};
