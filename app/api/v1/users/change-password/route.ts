import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import { updatePassword, findById } from "@/server/services/user.service";
import { compare, hash } from "@/server/utils/hashing";
import { requireAuth } from "@/server/utils/roleAuth";
import { db } from "@/server/db";
import { NextRequest } from "next/server";

const Body = z.object({
  oldPassword: z.string().min(1),
  newPassword: z.string().min(6),
  email: z.string().email(),
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

  const { oldPassword, newPassword, email } = parsed.data;
  const userId = authResult.id;

  // Verify the user exists and get current data
  const user = await findById(userId);
  if (!user) return fail("user_not_found", 404);

  // Verify email matches the authenticated user
  if (user.email !== email) return fail("email_mismatch", 400);

  // Verify old password
  const isValidOldPassword = await compare(oldPassword, user.password);
  if (!isValidOldPassword) return fail("invalid_old_password", 400);

  // Hash new password and update
  const hashedNewPassword = await hash(newPassword);
  const updatedUser = await updatePassword(userId, hashedNewPassword);

  return ok({
    message: "Password updated successfully",
    user: {
      id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      username: updatedUser.username,
      role: updatedUser.role,
    },
  });
};
