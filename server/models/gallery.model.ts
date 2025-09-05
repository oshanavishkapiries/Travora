import { Schema, model, models } from "mongoose";

const gallerySchema = new Schema(
  {
    src: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

export const Gallery = models.Gallery || model("Gallery", gallerySchema);
