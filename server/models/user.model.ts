import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    name: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "user", "owner"],
      default: "user",
      required: true,
    },
    username: { type: String, unique: true, sparse: true },
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
