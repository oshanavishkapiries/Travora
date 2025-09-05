import { Attraction } from "../models/attraction.model";

export const listAttractions = async (
  page = 1,
  pageSize = 10,
  search?: string
) => {
  const query = search ? { title: { $regex: search, $options: "i" } } : {};

  const [attractions, total] = await Promise.all([
    Attraction.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize),
    Attraction.countDocuments(query),
  ]);

  const totalPages = Math.ceil(total / pageSize);

  return {
    attractions,
    pagination: {
      total,
      totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  };
};

export const getAttraction = (id: string) => Attraction.findById(id);

export const createAttraction = (data: any) => new Attraction(data).save();

export const updateAttraction = (id: string, data: any) =>
  Attraction.findByIdAndUpdate(id, data, { new: true });

export const deleteAttraction = (id: string) =>
  Attraction.findByIdAndDelete(id);
