const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");
const multer = require("multer");
const fs = require("fs");
const { protect, adminOnly } = require("../middleware/authMiddleware");

/* -------------------- MULTER CONFIG -------------------- */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

/* -------------------- CREATE PRODUCT (ADMIN) -------------------- */
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  async (req, res) => {
    try {
      const { name, description, price } = req.body;

      if (!name || !description || !price || !req.file) {
        return res.status(400).json({ message: "All fields required" });
      }

      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "handicraft-products",
      });

      // Remove local file after upload
      fs.unlinkSync(req.file.path);

      const product = new Product({
        name,
        description,
        price,
        image: result.secure_url,
      });

      await product.save();

      res.status(201).json(product);
    } catch (error) {
      console.error("Product upload error:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

/* -------------------- GET ALL PRODUCTS -------------------- */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
