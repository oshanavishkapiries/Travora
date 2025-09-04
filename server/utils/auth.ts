import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET!;

export const signToken = (payload: any) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);

export const getAuthHeader = (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  return authHeader.substring(7);
};

export const authenticate = async (req: NextRequest) => {
  const token = getAuthHeader(req);
  if (!token) return null;

  try {
    const decoded = verifyToken(token) as any;
    return decoded;
  } catch {
    return null;
  }
};
