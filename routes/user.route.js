const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/auth");
const userController = require("../controllers/User.controller");

router.get("/", verifyToken, userController.getUsers);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/:id", userController.changePassword);

module.exports = router;
