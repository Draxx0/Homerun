import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const UserController = {
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  },
  update: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      const accessToken = jwt.sign(
        {
          _id: user._id,
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 86400,
        }
      );
      res.send({
        accessToken,
      });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

export default UserController;
