import express from "express";
import cors from "cors";
import {connect} from "./config/config.mongoose.js";
const app = express();
const port = process.env.PORT || 8000;

import authRouter from "./src/routers/auth.router.js";
import userRouter from "./src/routers/user.router.js";
import propertyRouter from "./src/routers/property.router.js";
import uploadRouter from "./src/routers/upload.router.js";

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", propertyRouter);
app.use("/api", uploadRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
