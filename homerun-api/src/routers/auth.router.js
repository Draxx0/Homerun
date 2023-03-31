import express from "express";
import AuthController from "../controllers/auth.controller.js";
const authRouter = express.Router();

const endPoint = "/auth";

authRouter.post(`${endPoint}/signin`, AuthController.signin);
authRouter.post(`${endPoint}/signup`, AuthController.signup);

export default authRouter;
