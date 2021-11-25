const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/auth");
const MemorialController = require("../controllers/Memorial.controller");

router.get("/", MemorialController.getMemorials);
router.post("/", verifyToken ,MemorialController.postMemorial);
router.delete("/:id", verifyToken, MemorialController.deleteMemorial);
router.put("/:id", verifyToken, MemorialController.updateMemorial);


module.exports = router;
