import { User } from "../models/user.model";

export const findByEmail = (email: string) => User.findOne({ email });
export const createUser = (data: any) => new User(data).save();
export const findById = (id: string) => User.findById(id);
export const updateUser = (id: string, data: any) =>
  User.findByIdAndUpdate(id, data, { new: true });
export const deleteUser = (id: string) => User.findByIdAndDelete(id);

// New methods for enhanced functionality
export const findByUsername = (username: string) => User.findOne({ username });
export const createUserWithRole = (data: any) => new User(data).save();
export const updatePassword = (id: string, hashedPassword: string) =>
  User.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });
export const updateUsername = (id: string, username: string) =>
  User.findByIdAndUpdate(id, { username }, { new: true });
export const findUsersByRole = (role: string) => User.find({ role });
