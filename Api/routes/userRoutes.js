const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const decode = require("../middlewares/authMiddleware");
const validateEmail = () => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
router.post("/register", async (req, res) => {
  try {
    if (!validateEmail) {
      res.status(400).json({ succes: false, error: "invalid format" });
      return;
    }
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      const newUser = await userModel.create(req.body);

      res.status(200).json({ succes: true });
      return;
    }
    res.status(200).json({ succes: false, message: "email is already taken" });
  } catch (err) {
    res.status(400).json({ succes: false, error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body.email);
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(200).json({ succes: false, message: "user dosent found" });
    }
    if (user.password == req.body.password) {
      const token = jwt.sign({ id: user._id }, "SyedSenseBlog", {
        expiresIn: "7d",
      });

      res.status(200).json({
        succes: true,
        message: "Account has been created successfully",
        token: token,
      });
    }
    res.status(200).json({ succes: false, message: "passord is invalid" });
  } catch (err) {}
});
router.get("/", decode, async (req, res) => {
  try {
    const user = await userModel.findById(req.body.id.id);
    if (user) {
      return res.status(200).json({ succes: true, name: user.name });
    }
    return res.status(400).json({ succes: false, message: "User not Found" });
  } catch (error) {
    res.status(400).json({ err: error });
  }
});
module.exports = router;
