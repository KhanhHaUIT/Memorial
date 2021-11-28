const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/auth");
const userController = require("../controllers/User.controller");
const { AdminRole, UserRole } = require("../middlewares/checkRole");

router.get("/", verifyToken, AdminRole, userController.getUsers);
router.post("/", verifyToken, AdminRole, userController.createUser);
router.put("/:id", verifyToken, AdminRole, userController.updateUser);
router.delete("/:id", verifyToken, AdminRole, userController.deleteUser);
router.patch("/:id", verifyToken, userController.changePassword);
router.get(
  "/:id/memorials",
  verifyToken,
  UserRole,
  userController.getMemorials
);

module.exports = router;
