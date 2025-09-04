import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import { updateUsername, findByUsername } from "@/server/services/user.service";
import { requireAuth } from "@/server/utils/roleAuth";
import { db } from "@/server/db";
import { NextRequest } from "next/server";

const Body = z.object({
  username: z.string().min(3).max(30),
});

export const PUT = async (req: Request) => {
  await db; // ensure connected

  // Check authentication
  const authResult = await requireAuth(req as NextRequest);
  if (typeof authResult === "object" && "error" in authResult) {
    return authResult;
  }

  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());

  const { username } = parsed.data;
  const userId = authResult.id;

  // Check if username already exists
  if (await findByUsername(username)) return fail("username_taken", 409);

  // Update username
  const updatedUser = await updateUsername(userId, username);
  if (!updatedUser) return fail("user_not_found", 404);

  return ok({
    message: "Username updated successfully",
    user: {
      id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      username: updatedUser.username,
      role: updatedUser.role,
    },
  });
};
