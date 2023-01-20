const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();
const blogModel = require("../models/blogModel");
const decode = require("../middlewares/authMiddleware");

const fs = require("fs");

router.post("/", upload.single("file"), decode, async (req, res) => {
  try {
    console.log(req.body, req.file, req.body.id.id);
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    console.log(parts);
    const ext = parts[parts.length - 1];
    const image = fs.renameSync(path, path + "." + ext);
    const id = req.body.id.id;
    const { title, summary } = req.body;
    const data = await blogModel.create({
      title: title,
      author: id,
      summary: summary,
      cover: image,
    });
    if (data) {
      return res
        .status(200)
        .json({ succes: true, message: "blog added successfully" });
    }
    res.status(200).json({ succes: false, message: "blog not added" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: ";un" });
  }
});
module.exports = router;
