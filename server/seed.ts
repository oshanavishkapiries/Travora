import { db } from "./db";
import { User } from "./models/user.model";
import { hash } from "./utils/hashing";

async function seed() {
  try {
    await db;
    console.log("Connected to database");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    // Create admin user
    const hashedPassword = await hash("Test@1234");
    const adminUser = new User({
      email: "admin@gmail.com",
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
      username: "admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully");
    console.log("Email: admin@gmail.com");
    console.log("Password: Test@1234");
    console.log("Role: admin");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    process.exit(0);
  }
}

seed();
