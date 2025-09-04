import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import { listPosts, createPost } from "@/server/services/post.service";
import { authenticate } from "@/server/utils/auth";
import { NextRequest } from "next/server";
import { db } from "@/server/db";

const CreatePostBody = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export const GET = async (req: NextRequest) => {
  await db; // ensure connected
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");

  const posts = await listPosts(page, pageSize);
  return ok({ posts, page, pageSize });
};

export const POST = async (req: NextRequest) => {
  await db; // ensure connected
  const user = await authenticate(req);
  if (!user) return fail("unauthorized", 401);

  const json = await req.json().catch(() => null);
  const parsed = CreatePostBody.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());

  const { title, body } = parsed.data;
  const post = await createPost({ title, body, author: user.id });

  return ok(
    { id: post._id, title: post.title, body: post.body, author: user.id },
    "Post created successfully",
    201
  );
};
