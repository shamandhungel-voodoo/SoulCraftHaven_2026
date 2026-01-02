require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const existing = await User.findOne({ email: "admin@handicraft.com" });
    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = new User({
      name: "Admin",
      email: "admin@handicraft.com",
      password: "123456",
      role: "admin",
    });

    await admin.save();
    console.log("Admin user created successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
