import { NextRequest } from "next/server";
import { ok, fail } from "@/server/utils/http";
import { findUsersByRole } from "@/server/services/user.service";
import { requireAdmin } from "@/server/utils/roleAuth";
import { db } from "@/server/db";

export const GET = async (req: NextRequest) => {
  await db; // ensure connected

  // Check admin authentication
  const authResult = await requireAdmin(req);
  if (typeof authResult === "object" && "error" in authResult) {
    return authResult;
  }

  const url = new URL(req.url);
  const role = url.searchParams.get("role");

  try {
    let users;
    if (role) {
      users = await findUsersByRole(role);
    } else {
      // Import User model for this case
      const { User } = await import("@/server/models/user.model");
      users = await User.find({}).select("-password");
    }

    return ok({
      users: users.map((user) => ({
        id: user._id,
        email: user.email,
        name: user.name,
        username: user.username,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })),
    });
  } catch {
    return fail("internal_error", 500);
  }
};
