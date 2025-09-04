import { z } from "@/server/utils/z";
import { ok, fail } from "@/server/utils/http";
import {
  getPost,
  updatePost,
  deletePost,
} from "@/server/services/post.service";
import { authenticate } from "@/server/utils/auth";
import { NextRequest } from "next/server";
import { db } from "@/server/db";

const UpdatePostBody = z.object({
  title: z.string().min(1).optional(),
  body: z.string().min(1).optional(),
});

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await db; // ensure connected
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return fail("post_not_found", 404);

  return ok({
    id: post._id,
    title: post.title,
    body: post.body,
    author: post.author,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  });
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await db; // ensure connected
  const user = await authenticate(req);
  if (!user) return fail("unauthorized", 401);

  const { id } = await params;
  const post = await getPost(id);
  if (!post) return fail("post_not_found", 404);

  // Check if user is the author
  if (post.author._id.toString() !== user.id) return fail("forbidden", 403);

  const json = await req.json().catch(() => null);
  const parsed = UpdatePostBody.safeParse(json);
  if (!parsed.success) return fail("invalid_body", 422, parsed.error.flatten());

  const updatedPost = await updatePost(id, parsed.data);
  return ok({
    id: updatedPost._id,
    title: updatedPost.title,
    body: updatedPost.body,
    author: updatedPost.author,
  });
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await db; // ensure connected
  const user = await authenticate(req);
  if (!user) return fail("unauthorized", 401);

  const { id } = await params;
  const post = await getPost(id);
  if (!post) return fail("post_not_found", 404);

  // Check if user is the author
  if (post.author._id.toString() !== user.id) return fail("forbidden", 403);

  await deletePost(id);
  return ok({ message: "Post deleted successfully" });
};
