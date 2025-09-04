import mongoose from "mongoose";
import { config } from "dotenv";

config();

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

if (!global._mongoose) {
  global._mongoose = mongoose.connect(MONGODB_URI);
}

export const db = global._mongoose;
