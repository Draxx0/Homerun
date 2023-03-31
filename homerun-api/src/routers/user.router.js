import express from "express";
import UserController from "../controllers/user.controller.js";
import TokenMiddleware from "../middlewares/token.middleware.js";
const userRouter = express.Router();

userRouter.get("/users", UserController.getAll);
userRouter.delete("/users/:id", TokenMiddleware, UserController.delete);
userRouter.put("/users/:id", TokenMiddleware, UserController.update);

export default userRouter;
