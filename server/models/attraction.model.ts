import { Schema, model, models } from "mongoose";

const attractionSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [{ type: String, required: true }],
    category: { type: String, required: true },
    placeOffers: [{ type: String, required: true }],
    details: { type: String, required: true },
  },
  { timestamps: true }
);

export const Attraction =
  models.Attraction || model("Attraction", attractionSchema);
