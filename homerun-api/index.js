const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const connect = require("./config/config.mongoose");

const authRouter = require("./src/routers/auth.router");
const userRouter = require("./src/routers/user.router");
const propertyRouter = require("./src/routers/property.router");

connect();

app.use(express.json());
app.use(cors());

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", propertyRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
