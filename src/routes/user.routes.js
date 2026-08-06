const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// protegida
router.get("/", authMiddleware, userController.getUsers);

router.post("/", userController.createUser);

module.exports = router;