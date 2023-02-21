const express = require("express");
const UserController = require("../controllers/user.controller");
const TokenMiddleware = require("../middlewares/token.middleware");
const router = express.Router();

router.get("/users", UserController.getAll);
router.delete("/users/:id", TokenMiddleware, UserController.delete);
router.put("/users/:id", TokenMiddleware, UserController.update);

module.exports = router;
