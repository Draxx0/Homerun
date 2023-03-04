const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthController = {
  signup: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    function getRandomElement(arr) {
      const index = Math.floor(Math.random() * arr.length);
      return arr[index];
    }

    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
        avatar: getRandomElement([
          "https://cdn.discordapp.com/attachments/1081252530975150160/1081666750627717160/bear.png",
          "https://cdn.discordapp.com/attachments/1081252530975150160/1081666750850019369/cat.png",
        ]),
      });
      res.send(user);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).send({ error: "User not found" });
    }

    const pswrdResult = await bcrypt.compare(password, user.password);

    if (!pswrdResult) {
      return res.status(400).send({ error: "Invalid password" });
    }

    const accessToken = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        avatar: user.avatar,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );

    res.send({ accessToken });
  },
};

module.exports = AuthController;
