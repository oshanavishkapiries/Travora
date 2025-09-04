import { Post } from "../models/post.model";

export const listPosts = (page = 1, pageSize = 10) =>
  Post.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .populate("author");
export const getPost = (id: string) => Post.findById(id).populate("author");
export const createPost = (data: any) => new Post(data).save();
export const updatePost = (id: string, data: any) =>
  Post.findByIdAndUpdate(id, data, { new: true });
export const deletePost = (id: string) => Post.findByIdAndDelete(id);
