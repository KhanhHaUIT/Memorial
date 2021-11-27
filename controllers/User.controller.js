const User = require("../models/User.model");
const Memorial = require("../models/Memorial.model");
const argon2 = require("argon2");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      let hashedPassword = req.body.password;
      if (user.password !== req.body.password) {
        hashedPassword = await argon2.hash(req.body.password);
      }
      user = await User.findByIdAndUpdate(
        req.params.id,
        {
          password: hashedPassword,
          role: req.body.role,
        },
        { new: true }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({
        success: true,
        message: "User deleted successfully",
        id: req.params.id,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      let user = await User.findOne({ username: req.body.username });
      if (user) {
        return res
          .status(400)
          .json({ success: true, message: "User already exists" });
      }
      const hashedPassword = await argon2.hash(req.body.password);
      user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  changePassword: async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      let hashedPassword = req.body.password;
      if (user.password !== req.body.password) {
        hashedPassword = await argon2.hash(req.body.password);
      }
      user = await User.findByIdAndUpdate(
        req.params.id,
        {
          password: hashedPassword,
        },
        { new: true }
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getMemorials: async (req, res) => {
    try {
      const memorials = await Memorial.find({
        userId: req.params.id,
      });
      res.status(200).json(memorials);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
