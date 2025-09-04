import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import { createUser, findByEmail } from "@/server/services/user.service";
import { hash } from "@/server/utils/hashing";
import { db } from "@/server/db";

const Body = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6),
});

export const POST = async (req: Request) => {
  await db; 
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());
  const { email, name, password } = parsed.data;
  if (await findByEmail(email)) return fail("email_taken", 409);
  const user = await createUser({
    email,
    name,
    password: await hash(password),
  });
  return ok({ id: user._id, email: user.email, name: user.name }, "User created successfully", 201);
};
