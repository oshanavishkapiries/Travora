import { NextRequest } from "next/server";
import { authenticate } from "./auth";
import { findById } from "../services/user.service";
import { fail } from "./http";

export const requireAuth = async (req: NextRequest) => {
  const user = await authenticate(req);
  if (!user) {
    return fail("unauthorized", 401);
  }
  return user;
};

export const requireRole = (allowedRoles: string[]) => {
  return async (req: NextRequest) => {
    const user = await requireAuth(req);
    if (typeof user === "object" && "error" in user) {
      return user; // Return error response
    }

    const userDoc = await findById(user.id);
    if (!userDoc) {
      return fail("user_not_found", 404);
    }

    if (!allowedRoles.includes(userDoc.role)) {
      return fail("forbidden", 403);
    }

    return { ...user, role: userDoc.role };
  };
};

export const requireAdmin = requireRole(["admin"]);
export const requireOwner = requireRole(["owner"]);
export const requireAdminOrOwner = requireRole(["admin", "owner"]);
