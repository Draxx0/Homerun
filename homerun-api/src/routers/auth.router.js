const express = require("express");
const AuthController = require("../controllers/auth.controller");
const router = express.Router();

const endPoint = "/auth";

router.post(`${endPoint}/signin`, AuthController.signin);
router.post(`${endPoint}/signup`, AuthController.signup);

module.exports = router;
