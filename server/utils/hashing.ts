import bcrypt from "bcryptjs";

const SALT_ROUNDS = 12;

export const hash = (password: string) => bcrypt.hash(password, SALT_ROUNDS);
export const compare = (password: string, hash: string) =>
  bcrypt.compare(password, hash);
