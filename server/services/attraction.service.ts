import { Attraction } from "../models/attraction.model";

export const listAttractions = (page = 1, pageSize = 10) =>
  Attraction.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(pageSize);

export const getAttraction = (id: string) => Attraction.findById(id);

export const createAttraction = (data: any) => new Attraction(data).save();

export const updateAttraction = (id: string, data: any) =>
  Attraction.findByIdAndUpdate(id, data, { new: true });

export const deleteAttraction = (id: string) =>
  Attraction.findByIdAndDelete(id);
