const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const { AdminRole, UserRole } = require("../middlewares/checkRole");
const UserController = require("../controllers/User.controller");

router.get("/", verifyToken, AdminRole, UserController.getUsers);
router.post("/", verifyToken, AdminRole, UserController.createUser);
router.delete('/', verifyToken, AdminRole, UserController.deleteUsers);
router.put("/:id", verifyToken, AdminRole, UserController.updateUser);
router.delete("/:id", verifyToken, AdminRole, UserController.deleteUser);
router.patch("/:id", verifyToken, UserController.changePassword);
router.get(
  "/:id/memorials",
  verifyToken,
  UserRole,
  UserController.getMemorials
);

router.get(
  "/:id/memorials/:memorialId/comments",
  verifyToken,
  UserRole,
  UserController.getCommentsByMemorial
)

module.exports = router;
