import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import { findByEmail } from "@/server/services/user.service";
import { compare } from "@/server/utils/hashing";
import { signToken } from "@/server/utils/auth";
import { db } from "@/server/db";

const Body = z.object({ email: z.string().email(), password: z.string() });

export const POST = async (req: Request) => {
  await db; // ensure connected
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());
  const { email, password } = parsed.data;

  const user = await findByEmail(email);
  if (!user) return fail("invalid_credentials", 401);

  const isValidPassword = await compare(password, user.password);
  if (!isValidPassword) return fail("invalid_credentials", 401);

  const token = signToken({ id: user._id, email: user.email, role: user.role });
  return ok({
    token,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      username: user.username,
    },
  });
};
