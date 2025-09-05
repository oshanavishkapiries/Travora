import { NextRequest } from "next/server";
import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import {
  createUserWithRole,
  findByEmail,
  findByUsername,
} from "@/server/services/user.service";
import { hash } from "@/server/utils/hashing";
import { requireAdmin } from "@/server/utils/roleAuth";
import { db } from "@/server/db";

const Body = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(6),
  role: z.enum(["admin", "user", "owner"]),
  username: z.string().min(3).optional(),
});

export const POST = async (req: NextRequest) => {
  await db; // ensure connected

  // Check admin authentication
  const authResult = await requireAdmin(req);
  if (typeof authResult === "object" && "error" in authResult) {
    return authResult;
  }

  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());

  const { email, name, password, role, username } = parsed.data;

  // Check if email already exists
  if (await findByEmail(email)) return fail("email_taken", 409);

  // Check if username already exists (if provided)
  if (username && (await findByUsername(username)))
    return fail("username_taken", 409);

  // Create user with role
  const hashedPassword = await hash(password);
  const user = await createUserWithRole({
    email,
    name,
    password: hashedPassword,
    role,
    username: username || undefined,
  });

  return ok(
    {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      username: user.username,
    },
    "User created successfully",
    201
  );
};
