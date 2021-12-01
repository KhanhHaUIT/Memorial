const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/auth");
const MemorialController = require("../controllers/Memorial.controller");
const CommentController = require("../controllers/Comment.controller");

router.get("/", MemorialController.getMemorials);
router.delete("/", MemorialController.deleteMemorials);
router.post("/", verifyToken, MemorialController.postMemorial);
router.get("/comments", verifyToken, CommentController.getCommentsOfMemorials);
router.get("/:id", MemorialController.getMemorial);
router.delete("/:id", verifyToken, MemorialController.deleteMemorial);
router.put("/:id", verifyToken, MemorialController.updateMemorial);
router.patch("/:id/candles", verifyToken, MemorialController.toggleCandle);

router.get("/:id/comments", CommentController.getComments);
router.post("/:id/comments", verifyToken, CommentController.postComment);
router.put("/:id/comments/:commentId", verifyToken, CommentController.updateComment);
router.delete("/:id/comments/:commentId", verifyToken, CommentController.deleteComment);

module.exports = router;
